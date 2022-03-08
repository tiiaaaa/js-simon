let casualNumber = 0;

const generateBtn = document.getElementById("generate");
// console.log(generateBtn);

let clock;
generateBtn.addEventListener("click", function(){
    let time = 0
    clock = setInterval(() => {
        time++;
        console.log(time);

        if(time == 30){
            clearInterval(clock);
            
            let userNumber = parseInt(prompt("Inserisci un nmero"))
        }
    }, 1000);

    for(i = 1; i <= 5; i = i + 1){
        const number = document.createElement("h1");
        console.log(number);
        casualNumber = Math.floor(Math.random() * 500);
        console.log(casualNumber);
        number.append(casualNumber);
        console.log(casualNumber);
        document.getElementById("number-box").append(number)
    }
})



