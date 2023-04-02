const buttonadd = document.getElementById("buttonadd");
const buttonsubtract = document.getElementById("buttonsubtract");
const displayValue = document.getElementById("displayValue");
const buttonreset = document.getElementById("buttonreset");


buttonadd.addEventListener("click" , () => {
         const value = Number(displayValue.innerText ) ;
            if( value >= 0) {

                displayValue.innerText= value + 1;
                
            }
            else{
                alert("10+ values are not allowed");
            }
         
});

buttonsubtract.addEventListener( "click" ,() => {
    const value = Number( displayValue.innerText);

    if( value>=0){

        displayValue.innerText = value-1;
    }

    else{
        alert("OMG")
    }
})


buttonreset.addEventListener( "click" , () => {
  
    displayValue.innerText = 0;
});



