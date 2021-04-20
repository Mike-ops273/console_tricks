console.log("These exercises are part of Eloquent Javascript by Marijn Haverbeke"); 


//buttons
let triangle= document.getElementById("triangle_id");;
let fizzBuzz= document.getElementById("fizz_buzz_id");

//functions 
let star="*";
function drawTriangle() {
    for(let i=0; i<10; i++) {
        console.log(star);
        star+="*";
    }
} 

function drawFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0 && i % 3 !== 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//event listeners 
triangle.addEventListener("click", drawTriangle); 
fizzBuzz.addEventListener("click", drawFizzBuzz); 