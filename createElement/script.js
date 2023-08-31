const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo titulo";
novoH1.classList.add("titulo");
mapa.appendChild(novoH1); //adc dps do ultimo filho do mapa ????

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");
faq.appendChild("h1"); //movido para o ultimo filho do faq

const cloneH1 = h1.cloneNode(true);

//exercicios
//duplique o menu e adc ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);

copy.appendChild(menu);

//selecione o primeiro dt do dl de faq
const faq1 = document.querySelectorAll(".faq");
const primeiro = faq.querySelector("dt");

console.log(primeiro);

primeiro.nextElementSibling;

//substitua o conteudo html de .faq pelo de .animais
const faqq = document.querySelector(".faq");
const animaiss = document.querySelector(".animais");

faqq.innerHTML = animaiss.innerHTML;
