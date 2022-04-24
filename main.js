//Variables
const input = document.getElementById("input-text")
const output = document.getElementById("output-text")
const form = document.getElementById("sarcasto-form")
const copy = document.getElementById("copy-button")

//Functions

const sarcastoTransform = function(e){
    e.preventDefault();
    let def = input.value.toLowerCase().split("");
    
    for(let i = 0; i < def.length; i++){
        if(i % 2 === 1){
            def[i] = def[i].toUpperCase();
        }
    }

    output.innerHTML = def.join("");
    input.value = "";
}

const copyToClipboard = function(){
    navigator.clipboard.writeText(output.innerHTML);
}

//

form.addEventListener("submit", sarcastoTransform);
copy.addEventListener("click", copyToClipboard);