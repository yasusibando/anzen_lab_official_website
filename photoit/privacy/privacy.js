(() => {
  const buttons = [...document.querySelectorAll("[data-lang-button]")];
  const panels = [...document.querySelectorAll("[data-lang-panel]")];

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;

    buttons.forEach((button) => {
      const active = button.dataset.langButton === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.langPanel !== lang;
    });

    document.title = lang === "ja"
      ? "PhotoIt プライバシーポリシー｜あんぜんLAB株式会社"
      : "PhotoIt Privacy Policy | Anzen LAB Co., Ltd.";
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });

  const browserLanguage = (navigator.language || "").toLowerCase();
  setLanguage(browserLanguage.startsWith("ja") ? "ja" : "en");
})();
