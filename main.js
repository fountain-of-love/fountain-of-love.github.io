// main.js (plain JS binder + loader, no dependencies)
const SUPPORTED_LANGS = ["en", "nl", "fr", "de"];

function getParams() {
  const url = new URL(window.location.href);
  const langParam = (url.searchParams.get("lang") || "en").toLowerCase();
  const lang = SUPPORTED_LANGS.includes(langParam) ? langParam : "en";
  return {
    lang,
    variant: url.searchParams.get("variant") || "fol",
    slug: url.searchParams.get("slug") || "stance-landing"
  };
}

async function loadPage({ slug, lang, variant }) {
  const scriptPath = `./content/${slug}/${lang}/${variant}.data.js`;
  const fallbackScriptPath = `./content/${slug}/en/${variant}.data.js`;

  // Reset previous payload to avoid stale data when reloading with other params.
  delete window.__PAGE_DATA;

  try {
    await loadScript(scriptPath);
  } catch (err) {
    if (lang !== "en") {
      await loadScript(fallbackScriptPath);
    } else {
      throw err;
    }
  }

  if (!window.__PAGE_DATA) {
    throw new Error(`No page payload found in ${scriptPath}`);
  }
  return window.__PAGE_DATA;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

function isObject(x) {
  return typeof x === "object" && x !== null && !Array.isArray(x);
}

function getByPath(root, path, ctx) {
  // ctx: item context for repeaters
  if (!path) return undefined;
  if (path === ".") return ctx;

  // Relative paths within a repeater item: "title", "href", etc.
  // Absolute paths: "sections.stance.title", "header.nav", ...
  const isAbsolute =
    path.startsWith("meta.") ||
    path.startsWith("header.") ||
    path.startsWith("sections.") ||
    path.startsWith("footer.") ||
    path === "year";

  let cur = isAbsolute ? root : (ctx ?? root);

  const parts = path.split(".");
  for (const part of parts) {
    if (!part) continue;
    if (cur == null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function setText(el, val) {
  if (val === undefined || val === null) return;
  el.textContent = String(val);
}

function setAttr(el, attr, val) {
  if (val === undefined || val === null) return;
  el.setAttribute(attr, String(val));
}

function clearContainerExceptTemplate(container) {
  const children = Array.from(container.childNodes);
  for (const child of children) {
    if (child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() === "template") continue;
    container.removeChild(child);
  }
}

function applyMeta(page) {
  if (page?.meta?.title) document.title = page.meta.title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc && page?.meta?.description) desc.setAttribute("content", page.meta.description);

  const lang = page?.meta?.locale || document.documentElement.lang;
  if (lang) document.documentElement.lang = lang;
}

function normalizeData(page) {
  // Add computed props and some convenience flags for the accordion item template.
  const data = {
    ...page,
    year: new Date().getFullYear()
  };

  // Accordion helper flags: item.isText / item.isList
  const acc = data?.sections?.scale?.accordion;
  if (Array.isArray(acc)) {
    data.sections.scale.accordion = acc.map(item => {
      const bodyType = item.bodyType || "text";
      return {
        ...item,
        isText: bodyType !== "list",
        isList: bodyType === "list"
      };
    });
  }

  // Offer linkLabel fallback
  const offerItems = data?.sections?.offer?.items;
  if (Array.isArray(offerItems)) {
    data.sections.offer.items = offerItems.map(it => ({
      linkLabel: it.linkLabel || "Learn more",
      ...it
    }));
  }

  const personalNote = data?.sections?.ground?.personalNote;
  if (isObject(personalNote)) {
    data.sections.ground.personalNote = {
      buttonLabel: personalNote.buttonLabel || "A personal note",
      title: personalNote.title || "A Personal Note",
      paragraphs: Array.isArray(personalNote.paragraphs) ? personalNote.paragraphs : [],
      ...personalNote
    };
  }

  return data;
}

function initLanguageSwitcher({ slug, variant, lang }) {
  const links = document.querySelectorAll(".lang-switcher__link[data-lang]");
  links.forEach(link => {
    const targetLang = (link.getAttribute("data-lang") || "").toLowerCase();
    if (!SUPPORTED_LANGS.includes(targetLang)) return;

    const targetUrl = new URL(window.location.href);
    targetUrl.searchParams.set("slug", slug);
    targetUrl.searchParams.set("variant", variant);
    targetUrl.searchParams.set("lang", targetLang);
    link.setAttribute("href", `${targetUrl.pathname}${targetUrl.search}`);

    const isActive = targetLang === lang;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function initPersonalNoteModal(data) {
  if (!data?.sections?.ground?.personalNote) return;

  const modal = document.querySelector("[data-personal-note-modal]");
  const openButton = document.querySelector('[data-action="open-personal-note"]');
  const closeButton = document.querySelector(".personal-note-modal__close");
  const overlay = document.querySelector(".personal-note-modal__overlay");
  if (!modal || !openButton || !closeButton || !overlay) return;

  // Ensure a consistent initial state on every hydration.
  modal.hidden = true;
  document.body.classList.remove("modal-open");

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const openModal = () => {
    modal.hidden = false;
    document.body.classList.add("modal-open");
  };

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

function hydrate(rootNode, data, ctx = null) {
  // 1) data-if
  rootNode.querySelectorAll("[data-if]").forEach(el => {
    const path = el.getAttribute("data-if");
    const val = getByPath(data, path, ctx);
    // If val is an object, treat as truthy; if empty object, still truthy.
    if (!val) el.hidden = true;
    else el.hidden = false;
  });

  // 2) data-text (safe plain text)
  rootNode.querySelectorAll("[data-text]").forEach(el => {
    const path = el.getAttribute("data-text");
    const val = getByPath(data, path, ctx);
    setText(el, val);
  });

  // 3) data-html (trusted HTML, only for your own content)
  rootNode.querySelectorAll("[data-html]").forEach(el => {
    const path = el.getAttribute("data-html");
    const val = getByPath(data, path, ctx);
    el.innerHTML = (val ?? "");
  });


  // 4) data-attr-* (href/src/aria-label/etc.)
  rootNode.querySelectorAll("*").forEach(el => {
    for (const name of el.getAttributeNames()) {
      if (!name.startsWith("data-attr-")) continue;
      const attr = name.slice("data-attr-".length);
      const path = el.getAttribute(name);
      const val = getByPath(data, path, ctx);
      setAttr(el, attr, val);
    }
  });

  // 5) data-each (repeaters)
  rootNode.querySelectorAll("[data-each]").forEach(container => {
    const path = container.getAttribute("data-each");
    const arr = getByPath(data, path, ctx);

    const tpl = container.querySelector("template");
    if (!tpl) return;

    clearContainerExceptTemplate(container);

    if (!Array.isArray(arr) || arr.length === 0) {
      container.hidden = true;
      return;
    }
    container.hidden = false;

    for (const item of arr) {
      const fragment = tpl.content.cloneNode(true);
      const hydratedFragment = hydrateFragment(fragment, data, item);
      container.appendChild(hydratedFragment);
    }
  });
}

function hydrateFragment(fragment, data, itemCtx) {
  // Wrap fragment to query it with selector APIs
  const wrapper = document.createElement("div");
  wrapper.appendChild(fragment);

  hydrate(wrapper, data, itemCtx);

  // Unwrap children back into a DocumentFragment-like set
  const out = document.createDocumentFragment();
  while (wrapper.firstChild) out.appendChild(wrapper.firstChild);
  return out;
}

async function init() {
  const params = getParams();
  initLanguageSwitcher(params);
  const page = await loadPage(params);

  const data = normalizeData(page);

  applyMeta(data);
  hydrate(document, data);
  initPersonalNoteModal(data);

  // Optional: if a section is entirely empty, hide it (safety net).
  // This keeps the page tidy even if content files omit a section object.
  document.querySelectorAll("main section[data-if]").forEach(sec => {
    if (sec.hidden) return;
    // If all text nodes are empty and there are no visible children, hide.
    const hasVisibleContent = Array.from(sec.querySelectorAll("*"))
      .some(el => !el.hidden && (el.textContent || "").trim().length > 0);
    if (!hasVisibleContent) sec.hidden = true;
  });
}

init().catch(err => {
  console.error(err);
  // Minimal user-facing error
  const main = document.getElementById("main");
  if (main) {
    main.innerHTML = `
      <section class="section">
        <div class="container">
          <h1>Content failed to load</h1>
          <p>Check your <code>?slug=</code>, <code>?lang=</code>, and <code>?variant=</code> parameters, and ensure the content module exists.</p>
        </div>
      </section>
    `;
  }
});
