//                               getElementById
//retorna elementos do DOM

const animais = document.getElementById("animais");

//           getElementByClassName e getElementByTagName
//retornam uma lista de elementos do DOM e é ao vivo
const gridSection = document.getElementByClassName("grid-section");
console.log(gridSection[0]); //retorna o primeiro elemento da lista
console.log(gridSection.length);

//                querySelector
//Retorna o primeiro elemento de acordo com o q vocae pediu
const animais2 = document.querySelector(".animais");
const primeiroUl = document.querySelector("ul");
const navItem = primeiroUl.querySelector("li");

const linkInterno = document.querySelectorAll("[href^=#]");
console.log(linkInterno);

//querySelectorAll
//retorna uma nodeList e é estático

/**ARRAY-LIKE
 *
 * HTML COLLECTION VS. NODELIST
 * HTML Collection: n tem forEach
 * NodeList: forEach
 */

const gridSectionHtml = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

gridSectionNode.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHtml); //transforma em um array //comm isso será possivel usar forEach no html collection
arrayGrid.forEach(function (item) {
  console.log(item);
});

//exercicios
//retorne todas as imagens do site
const imgs = document.querySelectorAll("img");

//retorne no console apenas as imagens que começarem com a palavra imagem
const imagem = document.querySelectorAll("img[src^='img/imagem']");

//selecione tds os links internos (onde o href começa com #0)
const link = document.querySelectorAll("[href^='#']");

//selecione o primeiro h2 de .animais-descricao
const ani = document.querySelector(".animais-descricao h2");

//selecione o ultimo p do site
const ps = document.querySelectorAll("p");
console.log(ps[ps.length - 1]);
