//DOM --> Objetos
//Objeto maximo -> window
//Logo depois vem o document e dentro dele está o html

const href = window.location.href; //Propriedades do Objeto

const h1Selecionado = document.querySelector("h1"); //o html está dentro do document

const h1Classe = h1Selecionado.classList; //Mostra a classe do objetp
const h1Texto = h1Selecionado.innerText; //retorna o texto
const h1Altura = h1Selecionado.offsetHeight; //retorna a altura do elemento

h1Selecionado.addEventListener("click", function () {
  console.log("clicou em ", h1Selecionado.innerText);
});

//exercicios
//retorne o url da pagina atual utilizando o objeto window
const url = window.location.href;

//selecione o primeiro elemento da pg que possua a classe ativo]
const ativo = document.querySelector(".ativo");

//retorna a linguagem do navegador
const lingua = window.navigator.language;

//retorne a largura da janela
const largura = window.innerWidth;
