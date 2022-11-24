
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
/*const totalPago = document.querySelector("#totalPago");*/
const btnBorrar = document.querySelector("#btnBorrar");
//const btnSubmit = document.querySelector("#btnSubmit");

const TICKET = 200; //1//
let descuento = 0;
let arrayDatosIngresados = [];
let total = 0;
let precioD = 0;
let precioUnitario = 0;



btnBorrar.addEventListener("click", borrar);
cantidad.addEventListener("input", mostrarTotal);
//btnSubmit.addEventListener("click", validarFormulario);

// 2 secundaria Accion Borrar//
function borrar() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    cantidad.value = "";
    totalPago.textContent = "";
}

console.log(cantidad);
//guardo datos en un array para utilzar en Factura//
/*arrayDatosIngresados.push(nombre.value);
arrayDatosIngresados.push(apellido.value);
arrayDatosIngresados.push(email.value);
arrayDatosIngresados.push(cantidad.value);*/

// Accion aplico porcentual Descuento segun categoria//
function calcularDescuento() {
    switch (categoria.value) {
        case "0":
            return 0;
        case "1":
            return 0.8;
        case "2":
            return 0.5;
        case "3":
            return 0.15;
        default:
            return false;
    }

}

// calculo el monto de descuento segun categoria//
function calculaDto() {
    precioD = (TICKET * calcularDescuento());
    return precioD;
}
console.log(precioD);

// calculo el precio unitario del ticket con descuento aplicado segun categoria//
function calculaPrecioUnitario (){
     precioUnitario = (TICKET - calculaDto());
     return precioUnitario;
}

console.log(precioUnitario);

//calculo el pago total, cantidad de tickets por el monto segun categoria y descuento de corresponder//
function calcula() {
    total = (Number(cantidad.value) * calculaPrecioUnitario());
    return total; 
}
function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updatecalcula();
  }

console.log(praseInt (cantidad));
console.log(total);

// muestro el total a pagar obtenido anteriormente//
function mostrarTotal() {
    totalPago.textContent = calcula();
}

mostrarTotal();
totalPago.innerHTML = `${total.toFixed(2)}`;
console.log(arrayDatosIngresados);



function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
  }
  
  function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
  }