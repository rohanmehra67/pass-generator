//dom selection
const passLength = document.getElementById("passLength");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const button = document.querySelector("button");
const textbox= document.getElementById("textbox");
const passValue= document.getElementById("passValue");
const alertText= document.getElementById("alertText");

//slider
passLength.oninput= function(){
    passValue.textContent= passLength.value;
}

let passwordLength;
let includeLower;
let includeUpper;
let includeNumbers;
let includeSymbols;

function passwordGenerator(passwordLength,includeLower, includeUpper ,includeNumbers,includeSymbols){
    const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase= "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";
    const numbers= "0123456789";

    let allowedChars = "";
    let password= "";
    allowedChars += includeLower ? lowerCase : "";
    allowedChars += includeUpper ? upperCase : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeNumbers ? numbers : "";
    
    if(allowedChars.length === 0){
        alertText.textContent= `"select atleast one character set!!"`;
        setTimeout(() => {
           alertText.textContent=""; 
        }, 3000);
        return "your password";
    }
    for(let i=0;i<passwordLength;i++){
        let randomIndex= Math.floor(Math.random() * allowedChars.length );
        password += allowedChars[randomIndex];
    }
    return password;
}

//calling


button.onclick= function(){
    includeLower = lowerCase.checked;
    includeUpper = upperCase.checked;
    includeSymbols = symbols.checked;
    includeNumbers= numbers.checked;
    passwordLength= Number(passLength.value);
    const password = passwordGenerator(passwordLength,includeLower, includeUpper ,includeNumbers,includeSymbols);
    textbox.textContent= password;
}

