const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//Representerar vilka färger kommer att ha
//Sammlar i en box kan man säga av olika färger
//Green = 0, red = 1, rgba(133,122,200) = 2 och så vidare...

const btn = document.getElementById('btn'); //konekterar button som har ett id "btn"
const color = document.querySelector(".color"); //konekterar "span" som har ett class ".color"

//När man trycker på button så kommer de koderna att aktiveras
btn.addEventListener("click", function () {
    //slump tal nummer mellan 0 - 3 
    const randomNumber = getRandomNumber(); //Gör variablen 
    console.log(randomNumber);//Skriver i loggen

    //spcifierar att backgroundcolor ska ändras beroende på vilken färg "radomNumber" väljer. Om man väljer 2 så kommer den till "rgba(133, 122, 200)"
    document.body.style.backgroundColor = colors[randomNumber];

    //Man kommer att kunna se texterna inom hemsidan som står Rgba(133,122,200)
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    //color.length gör så att den kommer mellan 0 - 3
    //Math.floor hjälper att avrunda den närmaste heltal
    //Math.random gör ett slumptal
    return Math.floor(Math.random() * colors.length);
}

