document.getElementById("yy").textContent = new Date().getFullYear();

// Menu mobile simples
const hamb = document.getElementById("hamb");
const mobile = document.getElementById("mobile");
hamb.addEventListener("click", () => {
  const visible = mobile.style.display === "block";
  mobile.style.display = visible ? "none" : "block";
});

// Botões de carrinho (demo)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nome = btn.getAttribute("data-produto");
    alert(`${nome} adicionado ao carrinho!`);
  });
});
