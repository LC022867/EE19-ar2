//Start värde
let count = 0;

//Väljer värden och knapparna
const values = document.querySelector("#values");
//Väljer alla buttons där de har .btn
const btns = document.querySelectorAll(".btn");

//För var ände buttons
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        //Om värden style innehåller decrease så akriverar den här exempel.
        if (style.contains('decrease')) {
            //minus en gång
            count--;
        } else if (style.contains('increase')) {
            //Plusar en gång
            count++;
        } else {
            count = 0;
        }

        //Lägger till färger om till exempel det höjer sig så blir värden grön
        if (count > 0) {
            values.style.color = 'green';
        }
        if (count < 0) {
            values.style.color = 'red';
        }
        if (count === 0) {
            values.style.color = "#222"
        }
        //Lägger till i skärmen inom värden så man kan se den 
        values.textContent = count;
    })
});