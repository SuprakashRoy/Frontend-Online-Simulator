document.addEventListener("DOMContentLoaded", function() {
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const outputFrame = document.getElementById("output-frame");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const welcomePopup = document.getElementById("welcome-popup");
    const closePopupButton = document.getElementById("close-popup");

    function updateOutput() {
        const html = htmlCode.value;
        const css = `<style>${cssCode.value}</style>`;
        const iframeContent = `${css}${html}`;

        const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(iframeContent);
        iframeDoc.close();
    }

    function toggleTheme() {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            themeToggle.textContent = "🌙";
        } else {
            body.classList.add("dark");
            themeToggle.textContent = "☀️";
        }
    }

    function closePopup() {
        welcomePopup.style.display = "none";
    }

    htmlCode.addEventListener("input", updateOutput);
    cssCode.addEventListener("input", updateOutput);
    themeToggle.addEventListener("click", toggleTheme);
    closePopupButton.addEventListener("click", closePopup);

    updateOutput();  // To load the initial content
});
