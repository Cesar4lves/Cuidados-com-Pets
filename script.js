const imagens = [
    "./images/akita.jpg", 
    "./images/golden.jpg",
    "./images/husky.png"
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