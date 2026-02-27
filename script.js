const imagens = [
    "./images/akita.jpg", 
    "./images/golden.jpg",
    "./images/husky.png",
    "./images/pastor.jpg"
];

//addEventListener("evento", uma função)
// () => {}
document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
    galeria.innerHTML = ""; //limpa conteúdo anterior

    imagens.forEach((src)=>{
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Foto de um cachorro";
        galeria.appendChild(img);
    })
})

//pesquisa
//para criar listas usamos um array []
const listaRacas = [
    {
        nome: "Labrador",
        caracteristica: "inteligente",
    }, 
    {
        nome: "Pastor Alemão", 
        caracteristica: "protetor",
    },
    {
        nome: "yorkshire",
        caracteristica: "caçador",
    }

];

//capturando o input
document.getElementById("campo-filtro").addEventListener("input", (e) =>{
    //o (e) é o elemento digitado/ o texto digitado no input
    const valor = e.target.value.toLowerCase();
    //capturando a ul do html
    const resultado = document.getElementById("resultado");
    //informando ao html que ele vai iniciar vazio
    resultado.innerHTML = "";
    //filtrando no array
    //o metodo de array filter ele recebe array.filter(()=>{})
    listaRacas.filter((raca) => raca.nome.toLowerCase().includes(valor)).forEach((raca)=>{
        const li = document.createElement("li");
        li.textContent = `${raca.nome} - ${raca.caracteristica}`;
        resultado.appendChild(li);
    });
});