let casualNumber = 0;

const generateBtn = document.getElementById("generate");

let userNumber;

let numberBox = document.getElementById("number-box");

let clock;
generateBtn.addEventListener("click", function(){

    for(i = 1; i <= 5; i = i + 1){
        const number = document.createElement("h1");
        console.log(number);
        casualNumber = Math.floor(Math.random() * 500);
        console.log(casualNumber);
        number.append(casualNumber);
        console.log(casualNumber);
        numberBox.append(number);
    }

    let time = 0
    clock = setInterval(() => {
        time++;
        document.querySelector("p").innerHTML = time;

        if(time == 10){
            clearInterval(clock);
            numberBox.innerHTML = "";

            for(let i = 0; i < 5; i = i + 1){
                userNumber = parseInt(prompt("Inserisci un nmero"));
                console.log(userNumber);
            }

            if(userNumber == casualNumber){
                document.querySelector("p").innerHTML = "Hai Indovinato!"
            }else{
                document.querySelector("p").innerHTML = "Non hai Indovinato!"
            }
        }
    }, 1000);
})



