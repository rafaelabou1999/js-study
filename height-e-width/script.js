//clientHeight -> height + padding
//offsetHeight -> height + padding + border
//scrollHeight -> height total, mesmo dentro de scroll
//para clientWidth é a mesma coisa

const listaAnimais = document.querySelector(".animais-lista");
const height = listaAnimais.scrollHeight;

//offsetTop -> distancia do elemento e o topo
const animaisTopo = listaAnimais.offsetTop;

//getBoundingClientRect()
//  metodo que retorna um objeto com valores de width, height,
//  distancia do elemento e mais

const rect = listaAnimais.getBoundingClientRect();
console.log(rect.height);

if (rect.top < 0) {
  console.log("passou do elemento");
}
//window
console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.scrollY
);

//matchMedia() --> a mediaquery do js
const small = window.matchMedia("(max-width:600px");
if (small.matches) {
  console.log("usuario mobile");
} else {
  console.log("usuario desktop");
}

//exercicios
//verifique a distancia da primeira img
//em relação ao topo da pg
const primeiraImg = document.querySelector("img");
console.log(primeiraImg.offsetTop);

//retorne a soma da largura de tds as imgs

window.onload = function () {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
};
//verifique se os links da pg possuem
//o minimo recomendado para telas utilizadas
//com o dedo(48px/48px de acordo com o google)
const links = documet.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, "possui acessibilidade");
  }
});

//se o browser for menor q 720px adc a classe menu-mobile ao menu
const tela = widow.matchMedia("(max-width:720px)");
const menu3 = document.querySelector(".menu");
if (tela) {
  menu3.classList.add("menu-mobile");
}
