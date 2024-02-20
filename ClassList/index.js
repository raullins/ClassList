// ClassList = Propriedade de elemento em Javascript usada para interagir com listas de classes de elementos (classes CSS)
//             Permite que você faça classes reusáveis para vários elementos ao longo da sua web page

// add()
// remove()
// toggle(Remove se tiver presente, Add se não tiver presente)
// replace(classeAntiga, novaClasse)
// contains()

const meuH1 = document.getElementById("meuH1");
const meuBtn = document.getElementById("meuBtn");

meuH1.classList.add("acionado");
meuBtn.classList.add("acionado");
//meuBtn.classList.remove("acionado");

meuBtn.addEventListener("mouseover", event => {
    //event.target.classList.add("hover");
    event.target.classList.toggle("hover");
});

meuBtn.addEventListener("mouseout", event => {
    //event.target.classList.add("hover");
    event.target.classList.toggle("hover");
});

meuBtn.addEventListener("click", event => {

    if(event.target.classList.contains("desligado")){
        event.target.classList.replace("desligado", "acionado");
    }else{
        event.target.classList.replace("acionado", "desligado");
    }
});

meuH1.addEventListener("click", event => {

    if(event.target.classList.contains("desligado")){
        event.target.classList.replace("desligado", "acionado");
    }else{
        event.target.classList.replace("acionado", "desligado");
    }
});