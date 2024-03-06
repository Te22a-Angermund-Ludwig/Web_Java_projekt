let namn = document.querySelector(".namn");
let pris =document.querySelector(".pris");
let bildSrc = document.querySelector(".articleImg");

function Off_white_kundvagn(){
    let produkt = {
        namn: "Off_white",
        pris: "2000",
        bildSrc: "img/Off-white1s.webp"
        }
        

    console.log("namn: "+produkt.namn+", pris: "+produkt.pris+", bildSrc: "+produkt.bildSrc);
    let produkt_fält=[];
    let produkt_fält_Json=window.localStorage.getItem("produkt_fält");
    if (produkt_fält_Json) {
        produkt_fält = JSON.parse(produkt_fält_Json);
    }
    produkt_fält.push(produkt);
    console.log("produkt fält: "+produkt_fält);
    produkt_fält_Json=JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält", produkt_fält_Json);
    visa_produkter(produkt_fält);
}


function Travis_1_kundvagn(){
    let produkt = {
        namn: "Travis 1 mocha",
        pris: "2000",
        bildSrc: "img/cactus-jack-low1s.webp"
        }
        

    console.log("namn: "+produkt.namn+", pris: "+produkt.pris+", bildSrc: "+produkt.bildSrc);
    let produkt_fält=[];
    let produkt_fält_Json=window.localStorage.getItem("produkt_fält");
    if (produkt_fält_Json) {
        produkt_fält = JSON.parse(produkt_fält_Json);
    }
    produkt_fält.push(produkt);
    console.log("produkt fält: "+produkt_fält);
    produkt_fält_Json=JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält", produkt_fält_Json);
    visa_produkter(produkt_fält);
}

function Travis_1_high_kundvagn(){
    let produkt = {
        namn: "Travis 1 mocha high",
        pris: "2000",
        bildSrc: "img/Cactus-jack1s.webp"
        }
        

    console.log("namn: "+produkt.namn+", pris: "+produkt.pris+", bildSrc: "+produkt.bildSrc);
    let produkt_fält=[];
    let produkt_fält_Json=window.localStorage.getItem("produkt_fält");
    if (produkt_fält_Json) {
        produkt_fält = JSON.parse(produkt_fält_Json);
    }
    produkt_fält.push(produkt);
    console.log("produkt fält: "+produkt_fält);
    produkt_fält_Json=JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält", produkt_fält_Json);
    visa_produkter(produkt_fält);
}

function Off_white_retro_kundvagn(){
    let produkt = {
        namn: "Off-white retro high",
        pris: "2000",
        bildSrc: "img/Dior1s-bred.webp"
        }
        

    console.log("namn: "+produkt.namn+", pris: "+produkt.pris+", bildSrc: "+produkt.bildSrc);
    let produkt_fält=[];
    let produkt_fält_Json=window.localStorage.getItem("produkt_fält");
    if (produkt_fält_Json) {
        produkt_fält = JSON.parse(produkt_fält_Json);
    }
    produkt_fält.push(produkt);
    console.log("produkt fält: "+produkt_fält);
    produkt_fält_Json=JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält", produkt_fält_Json);
    visa_produkter(produkt_fält);
}

function Dior_1_kundvagn(){
    let produkt = {
        namn: "Dior 1 high",
        pris: "2000",
        bildSrc: "img/Dior1s.webp"
        }
        

    console.log("namn: "+produkt.namn+", pris: "+produkt.pris+", bildSrc: "+produkt.bildSrc);
    let produkt_fält=[];
    let produkt_fält_Json=window.localStorage.getItem("produkt_fält");
    if (produkt_fält_Json) {
        produkt_fält = JSON.parse(produkt_fält_Json);
    }
    produkt_fält.push(produkt);
    console.log("produkt fält: "+produkt_fält);
    produkt_fält_Json=JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält", produkt_fält_Json);
    visa_produkter(produkt_fält);
}

function rensa(){
    let produkt_div = document.querySelector(".varukorg");
    produkt_div.innerHTML="";
    localStorage.clear();
}


function visa_produkter(produkt){
    if (!produkt){
        console.log("visa_produkter TOM")
        return;
    }
    let produkt_div = document.querySelector(".varukorg")
    produkt_div.innerHTML="";
    for (let i = 0; i < produkt.length; i++) {
        let article = document.createElement("article");
        let p = document.createElement("p");
        p.innerHTML=produkt[i].namn+" "+produkt[i].pris+" kr";
        article.append(p);
        produkt_div.append(article);
    }
}