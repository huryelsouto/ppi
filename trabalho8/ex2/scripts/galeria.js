const imagens = document.querySelectorAll("img");

imagens.forEach(function(imagem){
    imagem.addEventListener("mouseenter", () => imagem.classList.add("imagem-destacada"));
    imagem.addEventListener("mouseleave", () => imagem.classList.remove("imagem-destacada"));
});