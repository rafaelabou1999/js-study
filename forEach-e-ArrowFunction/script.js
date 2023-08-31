/**
 * imgs.forEach(function(item, index
 * ){
 * })
 */
const imgs = document.querySelectorAll("img");

imgs.forEach(function (img) {
  console.log(img);
});

/**GETELEMENTBYX IS ARRAY-LIKE WHICH MEANS IS NOT AN ARRAY, SO
 * YOU WILL HAVE TO TURN IT INTO AN ARRAY TO USE FOREACH
 */
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (titulo) {
  console.log(titulo);
});

/**ARROW FUNCTION */
const items = document.querySelectorAll("img");
imgs.forEach((item) => {
  console.log(item);
});

/**com uma linha de codigo pode-se fazer sem as chaves*/
imgs.forEach((item) => console.log(item));
//ou (sem parenteses qnd so tem um parametro)
imgs.forEach((item) => console.log(item));

//exercicios
//mostre cada paragrafo do site no console
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => console.log(paragrafo));

//mostre o texto dos paragrafos no console
paragrafos.forEach((paragrafo) => console.log(paragrafo.innerText));

//
imgs.forEach((item, index) => {
  console.log(item, index);
});

//
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
