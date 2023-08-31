const img = document.querySelector("img");

img.addEventListener("click", () => {
  console.log("clicou");
});

//É boa pratica separar o codigo:
function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback); //SEM PARENTESES

//event
//TARGET
//O target é exatamente o elemento que eu cliquei. O currentTarget é o elemento que está ouvindo o evento.
//this ---> referencia ao elemento - igual ao currentTarget
const animaisLista = document.querySelector(".animaisLista");

function callbackLista(e) {
  console.log(e.target); //pega exatamento o item que vc clicou
}

animaisLista.addEventListener("click", callbackLista);

function handleLink(e) {
  e.preventDefault();
}
const link = document.querySelector("a[href^='http']");
link.addEventListener("click", handleLink);

const h1 = document.querySelector("h1");
function handleEvent(e) {
  console.log(e.type, e);
}
h1.addEventListener("mouseenter", handleEvent);

window.addEventListener("scroll", handleEvent);
