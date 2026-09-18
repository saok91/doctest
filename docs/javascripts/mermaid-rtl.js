(function () {
  const CSS = [
    ".nodeLabel,",
    ".nodeLabel p,",
    ".edgeLabel,",
    ".edgeLabel p,",
    ".label,",
    ".labelBkg,",
    "foreignObject,",
    "foreignObject div,",
    "foreignObject span,",
    "foreignObject p {",
    "  unicode-bidi: plaintext;",
    "  text-align: center;",
    "}",
    "text,",
    "tspan {",
    "  unicode-bidi: plaintext;",
    "}"
  ].join("\n");

  const original = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function (init) {
    const root = original.call(this, init);
    const inject = () => {
      const fromMermaid =
        (this.classList && this.classList.contains("mermaid")) ||
        root.querySelector("svg[id^='mermaid'], svg[aria-roledescription]");
      if (!fromMermaid) {
        return;
      }
      root.querySelectorAll(".nodeLabel, .edgeLabel, .label, p").forEach((el) => {
        if (!el.getAttribute("dir")) {
          el.setAttribute("dir", "auto");
        }
      });
      if (!root.querySelector("style[data-mermaid-rtl]")) {
        const style = document.createElement("style");
        style.setAttribute("data-mermaid-rtl", "");
        style.textContent = CSS;
        root.appendChild(style);
      }
    };
    new MutationObserver(inject).observe(root, { childList: true, subtree: true });
    inject();
    return root;
  };
})();
