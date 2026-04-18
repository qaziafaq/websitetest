const loadScriptOnce = (src) => {
    if (document.querySelector(`script[data-src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.src = src;
    document.body.appendChild(script);
};

fetch("../Navbar/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("Navbar").innerHTML = data;
        loadScriptOnce("../Navbar/navbar.js");
    });

fetch("../Hero/hero.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("hero").innerHTML = data;
        loadScriptOnce("../Hero/hero.js");
    });

fetch("../Footer/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
        loadScriptOnce("../Footer/footer.js");
    });
