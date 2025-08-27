// 1 - Função Declarativa
function saudacao() {
    console.log("Olá, Maria!");
}
saudacao();

// 2 - Função com Parâmetro
function nomee(nome) {
    console.log("Olá, " + nome);
}
nomee("Alice");

// 3 - Função Anônima
let anonima = function() {
    console.log("Como posso ajudar?");
}
anonima();

// 4 - Arrow Function
const multiplicar = (a, b) => {
    return a * b;
}
console.log(multiplicar(4, 5));

// Manipulação do DOM

// 1 - Trocando Textos
function trocarTexto() {
    let p = document.getElementById("mensagem");
    p.innerText = "Texto alterado com JS!";
}

// 2 - Personalizando a Página (fundo azul)
function mudarCorFundo() {
    document.body.style.backgroundColor = "#5F9EA0";
}

// 3 - Adicionando Elementos
function adicionarItem() {
    let novoItem = document.createElement("li");
    novoItem.innerText = "Novo item";
    document.getElementById("lista").appendChild(novoItem);
}

// 4 - Removendo Parágrafo
function removerParagrafo() {
    let p = document.getElementById("paragrafoRemover");
    p.remove();
}

// 5 - Personalização (cores e tamanhos)
function personalizar() {
    let p = document.getElementById("mensagem");
    let titulo = document.getElementById("titulo");
    p.style.color = "blue";
    p.style.fontSize = "20px";
    titulo.style.color = "green";
    titulo.style.fontSize = "35px";
}

// Eventos do DOM
       
// 1 - Digitação em tempo real
function mostrarDigitacao() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerText = "Você digitou: " + nome;
}

// 2 - Mouseover no botão
let botaoMouse = document.getElementById("botaoMouse");
botaoMouse.addEventListener("mouseover", function() {
botaoMouse.innerText = "oiii";
});

// 3 - Esconder elemento com dblclick
let botaoEsconder = document.getElementById("botaoEsconder");
botaoEsconder.addEventListener("dblclick", function() {
document.getElementById("textoFonte").style.display = "none";
});

// 4 - Alterar fonte com tamanho aleatório
let botaoFonte = document.getElementById("botaoFonte");
botaoFonte.addEventListener("click", function() {
let tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
document.getElementById("textoFonte").style.fontSize = tamanho + "px";
});