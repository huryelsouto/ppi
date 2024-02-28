window.onload = function () {
    botoes = document.querySelectorAll("nav button");

    for (let botao of botoes) {
        botao.onclick = () => openTab(botao.dataset.tabname);
    }
    openTab("login");
}

function openTab(tabName) {
    const lastTabActive = document.querySelector(".tabActive");
    if (lastTabActive !== null) {
        lastTabActive.classList.remove("tabActive")
    };

    const lastButtonActive = document.querySelector(".buttonActive");
    if (lastButtonActive !== null) {
        lastButtonActive.classList.remove("buttonActive");
    }

    const query1 = ".tabs > section[data-tabname='" + tabName + "']";
    const query2 = "nav button[data-tabname='" + tabName + "']";

    document.querySelector(query1).classList.add("tabActive");
    document.querySelector(query2).classList.add("buttonActive");
}