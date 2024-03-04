let namn = document.querySelector(".namn");
let pris =document.querySelector(".pris");
let bild = document.querySelector(".articleImg");

function Off_white_kundvagn(){
    let produkt = {
        namn: "Off_white",
        pris: "2000",
        bild: "img/Off-white1s.webp"
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
    visa_kundvagn(produkt_fält);
}


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
    visa_kundvagn(produkt_fält);
}

function Travis_1_high_kundvagn(){
    let produkt = {
        namn: "Travis 1 mocha high",
        pris: "2000",
        bild: "img/Cactus-jack1s.webp"
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
    visa_kundvagn(produkt_fält);
}

function Off_white_retro_kundvagn(){
    let produkt = {
        namn: "Off-white retro high",
        pris: "2000",
        bild: "img/Dior1s-bred.webp"
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
    visa_kundvagn(produkt_fält);
}

function Dior_1_kundvagn(){
    let produkt = {
        namn: "Dior 1 high",
        pris: "2000",
        bild: "img/Dior1s.webp"
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
    visa_kundvagn(produkt_fält);
}
