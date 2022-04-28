console.log("page loaded...");

/*Para cambiar nombre haciendo click en un boton */
var num = document.querySelector("#nombre");

function cambionombre(){
    num.innerText = "Vania bel";
}

/*Para eliminar el contacto cuando se hace click en un icono y tmb para disminuir requests y aumentar connections*/

var resultado = document.querySelector("#bad")
var resultado2 = document.querySelector("#quin")

function elimg() {
    var i = document.querySelector("#uno");
    i.remove();
    resultado.innerText--;
    resultado2.innerText++;
}

function elimg2(){
    var ii = document.querySelector("#dos");
    ii.remove();
    resultado.innerText--;
    resultado2.innerText++;
}



