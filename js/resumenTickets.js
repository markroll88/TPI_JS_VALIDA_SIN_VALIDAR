
function ShowSelected()
{
var cod = document.getElementById("categoriaSelect,value");
alert(cod);
var combo = document.getElementById("categoriaSelect");
var selected = combo.options[combo.selectedIndex].text;
alert(selected);
}