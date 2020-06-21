var comida = document.getElementById("comidas");
var parques = document.getElementById("parqueDisney");

comida.addEventListener("change",
    function(){
        var comidaElegida = this.options[comida.selectedIndex];
        if (comidaElegida.text == "Quiero agregar mi opcion"){
            document.getElementById("comidaOculto").style.display = "block";
        }
        else{
            document.getElementById("comidaOculto").style.display = "none";
        }
});

parques.addEventListener("change",
    function(){
        var opcion = this.options[parques.selectedIndex];
        if (opcion.text == "Nunca fui"){
            document.getElementById("parquesOculto").style.display = "block";
        }
        else{
            document.getElementById("parquesOculto").style.display = "none";
        }
});


