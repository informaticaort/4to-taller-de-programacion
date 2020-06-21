const bnvTit = document.querySelector("#bienvenido");
const name = localStorage.getItem("name");

if (name){
    bnvTit.innerText = `¡Bienvenido, ${name}!`
}