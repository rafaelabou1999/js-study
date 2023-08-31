//classList
//So pode ser usado com um item unico. Caso seja uma lista, terá que usar o forEach

const menu = document.querySelector(".menu");
console.log(menu.classList);

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("ativo");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
}

//attributes
const animais = document.querySelector(".animais");
console.log(animais.attributes[0]); //class="tesxte"
console.log(animais.attributes[1]); //id="test"
console.log(animais.attributes["data-texto"]);

//getAttributes
const img = document.querySelector("img");
const srcImg = img.getAttribute("src");

img.setAttribute("alt", "É uma raposa");

const possuiAlt = img.hasAttribute("alt"); //a img tem tal atributo?
console.log(possuiAlt); //true / false

//exercicios
//adc a classe ativo a todos os itens do menu
const menu1 = document.querySelectorAll(".menu");

menu1.forEach((item) => {
  item.classList.add("ativo");
});

//remova a classe ativo de tds os itens do menu e mantenha apenas no primeiro
const menu12 = document.querySelectorAll(".menu");
menu12.forEach((item, index) => {
  if (index < menu12.length) {
    item.classList.remove("ativo");
  }
});

//modifique o href do link interno no menu
menu12.setAttribute("href", "ola");
