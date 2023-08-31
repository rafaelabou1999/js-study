const h1 = document.querySelector("h1");
const lista = document.querySelector(".lista");
h1.innerHTML;

console.log(lista.innerHTML); //vem o html completo com as tags
console.log(lista.innerText); //so vem o texto sem tags

h1.innerHTML = "<p>Novo titulo</p>";

//transversing - como navegar pelo dom
const lista2 = document.querySelector(".lista");
console.log(lista2);
console.log(lista2.parentElement);
console.log(lista2.parentElement.parentElement);
console.log(lista2.nextElementSibling); //elemento mais proximo com mesmo nivel
console.log(lista2.previousElementSibling); //elemento anterior com mesmo nivel

console.log(lista2.children); //todos os li
console.log(lista2.children[lista.children.length - 1]); //pega o ultimo filho da lista

//nodes vs. element
console.log(lista2.childNodes); //pega tudo até espaços e comentários
console.log(lista2.firstChild); //retorna o primeiro filho node

//-----------------------------------
const lista3 = document.querySelector(".lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

lista3.appendChild(titulo); //leva o titulo pra posicao do ultimo filho de lista3
