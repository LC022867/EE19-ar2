const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//En box med alla siffror och bokstäver
//Sammlar i en box kan man säga av olika siffror och bokstäver
//(0 = 0), (1 = 1), (10 = A), (11 = B) = Binära tal system

//Skapar en "variabel" där det gör det änklare för oss att koda. Exempel, btn är nu button.
//getElementById används för att specifiera denna id som du vill använda inom html, sen kan du använda den i javascript
const btn = document.getElementById('btn');
//qs väljer ut classerna inom html för att använda inom javascript
//color = span --> #f1f5f8 där du kan ändra på texten
const color = document.querySelector(".color");

//När man trycker på button så aktiveras den
btn.addEventListener("click", function () {
    //Lägger till # för att lägga till 6 styckna hex tal med # i början
    //Anledningen varför vi inte väljer const är på grund av att man kan inte ändra på det. Med andra ord ett helt fast variabel
    let hexColor = '#'

    //Skapar en variabel som är i där den repeterar 6 gånger
    //i++ --> i + 1
    for (var i = 0; i < 6; i++) {
        //+= --> exempel: += 10 --> i = i + 10
        //man lägger till 6 styckna hex tal för det ska synas i skärmen
        //Om man skulle lägga till "hexColor = hex[0]" skulle det bara vara -->#0<--
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor; //Visas i skärmen --> Background color: [getRadnomNumber]
    document.body.style.backgroundColor = hexColor; //Vill ändra backfärgen genom att skapa en variabel "hexColor" till backgroundColor inom css
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length) //hex.length är själva boxen som är [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]. Där de ger ett random tal
}