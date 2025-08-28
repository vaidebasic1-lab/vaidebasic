// Exemplo: ao clicar em qualquer produto, aparece no console
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        console.log("Produto clicado:", card.querySelector("h3").textContent);
    });
});
// Filtro de produtos
const busca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

busca.addEventListener("keyup", () => {
    const termo = busca.value.toLowerCase();
    cards.forEach(card => {
        const nome = card.querySelector("h3").textContent.toLowerCase();
        if (nome.includes(termo)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
