function generateNumber(){
    let number = Math.random() * 10000;
    let num = Math.floor(number);
    let numString = num+"";
    let numLength = numString.length;
    if(numLength === 4){
        return num;
    }
    else{
        generateNumber();
    }
}

document.getElementById("generate-pin").addEventListener("click", ()=>{
    const generateCode = generateNumber();
    let form_pin = document.getElementById("generate-pin-form");
    form_pin.value = generateCode;
    // document.getElementById("generate-pin").setAttribute("disabled","");
});

document.getElementById("calc-btn").addEventListener("click", function(event) {
    let getNumber = event.target.innerText;
    let getNumberString = getNumber + "";
    let inputnumber = document.getElementById("typed-number");
    let getinputNumber = inputnumber.value;
    let finalInputNumber = getinputNumber + getNumberString;
    inputnumber.value = finalInputNumber;
   
});

document.getElementById("match-button").addEventListener("click",()=>{
    let getkeyboardPin = document.getElementById("typed-number");
    let getkeyboardPinString = getkeyboardPin.value;
    let getPin = parseInt(getkeyboardPinString);
    let getGenaratedPin = document.getElementById("generate-pin-form");
    let getGenaratedPinString = getGenaratedPin.value;
    let getGpin = parseInt(getGenaratedPinString);

    if(getGpin ===  getPin){
        console.log("Pin match");
        document.getElementById("warning").style.display = "none";
        document.getElementById("no-warning").style.display = "block";
    }
    else if(getGpin != getPin){
        console.log("pin no match");
        document.getElementById("no-warning").style.display = "none";
        document.getElementById("warning").style.display = "block";
    }
});