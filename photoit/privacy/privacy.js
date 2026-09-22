(() => {
  const buttons = [...document.querySelectorAll("[data-lang-button]")];
  const panels = [...document.querySelectorAll("[data-lang-panel]")];

  const isSupportedLanguage = (lang) => lang === "ja" || lang === "en";

  const syncLanguageToUrl = (lang) => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (_) {
      // If the browser restricts history updates for a local file,
      // language switching still works normally.
    }
  };

  const setLanguage = (lang, { syncUrl = false } = {}) => {
    const resolvedLang = isSupportedLanguage(lang) ? lang : "ja";

    document.documentElement.lang = resolvedLang;

    buttons.forEach((button) => {
      const active = button.dataset.langButton === resolvedLang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.langPanel !== resolvedLang;
    });

    document.title = resolvedLang === "ja"
      ? "PhotoIt プライバシーポリシー｜あんぜんLAB株式会社"
      : "PhotoIt Privacy Policy | Anzen LAB Co., Ltd.";

    if (syncUrl) {
      syncLanguageToUrl(resolvedLang);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langButton, { syncUrl: true });
    });
  });

  const requestedLang = new URLSearchParams(window.location.search).get("lang");
  const initialLang = isSupportedLanguage(requestedLang) ? requestedLang : "ja";

  setLanguage(initialLang);
})();
