let casualNumber = 0;

const generateBtn = document.getElementById("generate");
console.log(generateBtn);

generateBtn.addEventListener("click", function(){
    for(i = 1; i <= 5; i = i + 1){
        casualNumber = Math.floor(Math.random() * 500);
        console.log(casualNumber);
    }
})

