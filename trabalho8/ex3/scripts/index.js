const campoInteresse = document.querySelector("#campo-interesse");

campoInteresse.addEventListener("keyup", function (event) {
    if(event.key === "Enter"){
        const listaInteresse = document.querySelector("#lista-interesse");

        const novoLi = document.createElement("li");
        const novaDiv = document.createElement("div");
        const novoSpan = document.createElement("span");
        const novoButton = document.createElement("button");

        novaDiv.classList.add("conteudo-botao");
        novaDiv.textContent = campoInteresse.value;
        novoSpan.textContent = "❌";
        novoButton.classList.add("botao-cancelar");

        novoButton.appendChild(novoSpan);
        novaDiv.appendChild(novoButton);
        novoLi.appendChild(novaDiv);

        listaInteresse.appendChild(novoLi);

        novoButton.addEventListener("click", () => listaInteresse.removeChild(novoLi));

        campoInteresse.value = "";

    }
    

})