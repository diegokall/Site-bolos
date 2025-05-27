
let carrinho = [];
const datasOcupadas = ["2025-06-05", "2025-06-12", "2025-06-18"];
let dataSelecionada = "";

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function addToCart(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('listaCarrinho');
  lista.innerHTML = "";
  carrinho.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}

function encomendar() {
  let mensagem = "Olá! Gostaria de encomendar os seguintes bolos:%0A";
  carrinho.forEach(produto => {
    mensagem += `- ${produto}%0A`;
  });
  if (dataSelecionada) {
    mensagem += `%0AData da encomenda: ${dataSelecionada}`;
  } else {
    mensagem += `%0A(Nenhuma data selecionada)`;
  }
  window.open(`https://wa.me/5591982639501?text=${mensagem}`, "_blank");
}

function expandImage(img) {
  document.getElementById("imgFull").src = img.src;
  document.getElementById("imagemExpandida").style.display = "flex";
}

function fecharImagem() {
  document.getElementById("imagemExpandida").style.display = "none";
}

document.getElementById('dataEscolhida').addEventListener('input', function () {
  const data = this.value;
  if (datasOcupadas.includes(data)) {
    alert("Essa data já está ocupada. Por favor, escolha outra.");
    this.value = "";
    dataSelecionada = "";
  } else {
    dataSelecionada = data;
  }
});

document.getElementById('encomendarBtn').addEventListener('click', encomendar);
