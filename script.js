let namn = document.querySelector(".namn");
let pris =document.querySelector(".pris");
let bild = document.querySelector(".articleImg");

const array=[];

function Travis_1_kundvagn(){
    let produkt = {
        namn: "Travis 1 mocha",
        pris: "2000",
        bild: "img/cactus-jack-low1s.webp"
        }
        

    console.log("namn: "+produkt.namn+", pris: "+produkt.pris+", bild: "+produkt.bild);
    let produkt_fält=[];
    let produkt_fält_Json=window.localStorage.getItem("produkt_fält");
    if (produkt_fält_Json) {
        produkt_fält = JSON.parse(produkt_fält_Json);
    }
    produkt_fält.push(produkt);
    console.log("produkt fält: "+produkt_fält);
    produkt_fält_Json=JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält", produkt_fält_Json);
    
    
}
