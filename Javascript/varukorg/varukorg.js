//Väljer elementensom som vi behöver
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".summa");
const knappPlus = document.querySelector(".plus");
const knappMinus = document.querySelector(".minus");

//Globala variabel
var antal = rutaAntal.value;
console.log("antal", antal);
var pris = rutaPris.textContent; //textcontent fungerar på samma sätt för Value fast för andra strings
console.log("pris", pris);

//räkna ut summa
var summa = antal * pris;
console.log("summa", summa);

//Svriv ut summan
rutaSumma.textContent = summa;

//Lyssna på ändring i input-rutan
rutaAntal.addEventListener("input", function () {
    //Läs av nya antalet
    antal = rutaAntal.value;

    //Räkna ut nya summan
    summa = antal * pris;

    //Skriv ut nya summan
    rutaSumma.textContent = summa + " Kr";
});
//uppdaterar när jag ändrar på antal x

//Lyssna på click på knappen plus
knappPlus.addEventListener("click", function () {
    //Max 69 :)
    if (antal < 69) {
        console.log("Summa", summa);
        antal++;
        rutaAntal.value = antal

        //räkna ut summan och skriv ut den
        summa = antal * pris;
        rutaSumma.textContent = summa + " Kr";
    }
});

// Lyssna på click på knappen minus
knappMinus.addEventListener("click", function () {
    if (antal > 0) {

        console.log("Summa ", summa);
        antal--;
        rutaAntal.value = antal;

        //räkna ut summan och skriv ut den
        summa = antal * pris;
        rutaSumma.textContent = summa + " Kr";
    }
});



