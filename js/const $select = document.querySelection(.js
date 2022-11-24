const $select = document.querySelection("#miSelect");
const opcionCombiado =() => {
    console.log("cambio");

};
$select.addventListener("change", opcionCambiado);

const agregar = () => {
    const option = document.createElement ("option");
    const valor = new Date(.getTime());
    option.value = valor;
    option.text = valor;
    $select.appendChild(option);
};

/* mostrar la opcion elegida*/
const mostar = ()=> {
    const indice = $select.selectedIndex;
    if (indice === -0) return;
    const opcionSeleccionada = $select.options[indice],
    alert('Texto: ${optionsSeleccionada.text}. Valor: ${opcionSeleccionada.value}');


};
const limpiar = () => {
    for (let i = $select.options.lenght; i >=0; i--){
        $select.remove(i);
    }
}



document.addEventListener("DOMContentLoaded", ( => {
    document.querySelector("#btnAgregar").addEventListener("click", agregar);
    document.querySelector("#btn")
}))