//Hitta element  vi behöver
const namnRuta = document.querySelector("input");
const meny = document.querySelector("select");
const knappen = document.querySelector("button");
const lista = document.querySelector("ul");

// Vad händer när man klickar på knappen?
knappen.addEventListener("click", function () {
    console.log("Du har klickat på knappen!");

    //Läs av textrutan och lagra i en variabel
    let namn = namnRuta.value;
    console.log(namn);

    //Läs in valet i meny
    let amd = meny.value;
    console.log(amd);

    //Skriv i ul-listan
    if (amd == "Amd5") {
        lista.innerHTML = "<li>" +
            "<img src=\"https://inetimg3.se/img/86x86/5301793_1.jpg\">"
            + "AMD Ryzen 5 3600 3.6 GHz 35MB" +
            "Antal kärnor: 6 st | Antal trådar: 12 st | TDP: 65 W"
            + "<li>";
    }
    if (amd == "Amd7") {
        lista.innerHTML = "<li>" +
            "<img src=\"https://inetimg3.se/img/86x86/5301791_0.jpg\">"
            + "AMD Ryzen 7 3700X 3.6 GHz 36MB" +
            "Antal kärnor: 8 st | Antal trådar: 16 st | TDP: 65 W 24 st"
            + "<li>";
    }
    if (amd == "Amd9") {
        lista.innerHTML = "<li>" +
            "<img src\"https://inetimg3.se/img/86x86/5301791_0.jpg\">"
            + "AMD Ryzen 9 5900X 3.7 GHz 70MB" +
            "Antal kärnor: 12 st | Antal trådar: 24 st | TDP: 105 W Slutsåld"
            + "<li>";
    }
});