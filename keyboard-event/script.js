//e.key --> verifica qual tecla foi clicada
function handleKeyboard(e) {
  if (e.key === "a") {
    document.body.classList.toggle("azul");
  } else if (e.key === "v") {
    document.body.classList.toggle("vermelho");
  }
}

window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");
function handleImg(e) {
  console.log(e.target.getAttribute("src"));
}
imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});

//exercicios
//1
const links = document.querySelectorAll("a[href^='#']");

function handleLink1(e) {
  links.forEach((link) => {
    const itemClicado = e.target;
    console.log(itemClicado.classList.add("ativo"));

    if (link != itemClicado) {
      link.classList.remove("ativo");
    }
  });
}
links.addEventListener("click", handleLink1);

//2
const elementos = document.querySelectorAll("body *");
function handelEl(e) {
  console.log(e.target);
}
elementos.forEach((el) => {
  el.addEventListener("click", handleEl);
});

//4
const bodyy = document.querySelector("body *");
function handleWindow(e) {
  if (e.key === "t") {
    bodyy.style.fontSize = "100px";
  }
}

bo;
window.addEventListener("keydown", handleWindow);
