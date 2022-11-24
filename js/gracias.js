(function(){
    let velocidad = 10,
     mueveCaja = function(pasos){
     let el =document.getElementById("card"),
     izq = el.offsetLeft;
  
     if ((pasos > 0 && izq > 900)|| (pasos <0 && izq <51)){
        clearTimeout(timer);
        timer = setInterval(function(){
            mueveCaja(pasos*-1);
        }, velocidad);
     }

     el.style.left = izq + pasos + "px";
    };

    let timer = setInterval(function (){
        mueveCaja(3);

    }, velocidad);
}());