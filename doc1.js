console.log("hola mundo")

const form = document.querySelector("#formulario")
// CREACION DEL EVENTO
form.addEventListener("submit", validarForm)


// MIS FUNCIONES
function validarForm(e){
    e.preventDefault()
    const texto = (document.querySelector("#search").value).toLowerCase()
    fetch("https://pokeapi.co/api/v2/pokemon/"+texto)
    .then(response => response.json())
    .then(data => {
    // console.log(data)
    document.querySelector("#imagenPokemon").src ="./pokemon/"+data.id+".png"
    document.querySelector("#imagenTipo").src ="./icons/"+data.types[0].type.name+".svg"
    // FUNCION COLOR
    function colorFondo(tipoPokemon){
        if(tipoPokemon === "grass"){
            return "planta"
        }
        else if(tipoPokemon === "bug"){
            return "bicho"
        }
        else if(tipoPokemon === "dark"){
            return "siniestro"
        }
        else if(tipoPokemon === "dragon"){
            return "dragon"
        }
        else if(tipoPokemon === "electric"){
            return "electrico"
        }
        else if(tipoPokemon === "fairy"){
            return "hada"
        }
        else if(tipoPokemon === "fighting"){
            return "lucha"
        }
        else if(tipoPokemon === "fire"){
            return "fuego"
        }
        else if(tipoPokemon === "flying"){
            return "volador"
        }
        else if(tipoPokemon === "ghost"){
            return "fantasma"
        }
        else if(tipoPokemon === "ground"){
            return "tierra"
        }
        else if(tipoPokemon === "ice"){
            return "hielo"
        }
        else if(tipoPokemon === "normal"){
            return "normal"
        }
        else if(tipoPokemon === "poison"){
            return "veneno"
        }
        else if(tipoPokemon === "psychic"){
            return "psiquico"
        }
        else if(tipoPokemon === "rock"){
            return "roca"
        }
        else if(tipoPokemon === "steel"){
            return "acero"
        }
        else if(tipoPokemon === "water"){
            return "agua"
        }
        else {
            return "desconocido"
        }
    }
    // FUNCION LLENADO DE BARRAS
    function llenadoBarras(estadistica){
        if((data.stats.filter((stat) => stat.stat.name === estadistica)[0].base_stat) > 100){
            return 100
        }
        else{
            return data.stats.filter((stat) => stat.stat.name === estadistica)[0].base_stat
        }
    }
    // CAMBIO AUTOMATICO DE COLOR
    var app = document.getElementById("cuerpo");
    let appClasname = app.className;
    if(appClasname !== ""){
        app.classList.remove(appClasname)
    }
    app.classList.add(colorFondo(data.types[0].type.name));
    // TIPO AUTOMATICO
    document.querySelector("#nombreTipo").innerHTML = "<h5 class='nombreTipo'>"+(data.types[0].type.name).toUpperCase()+"</h5>"
    // NOMBRE AUTOMATICO
    document.querySelector("#nombrePokemon").innerHTML = "<h5 class='nombrePokemon'>"+(data.name).toUpperCase()+"</h5>"
    // LLENADO AUTOMATICO DE BARRAS
    document.querySelector("#datoHp").innerHTML = "<h5 class='barras' style=' color: white; background-color: white; width: "+llenadoBarras("hp")+"%;' >‎ </h5>"
    document.querySelector("#datoAttack").innerHTML = "<h5 class='barras' style=' color: white; background-color: white; width: "+llenadoBarras("attack")+"%;' >‎ </h5>"
    document.querySelector("#datoDefense").innerHTML = "<h5 class='barras' style=' color: white; background-color: white; width: "+llenadoBarras("defense")+"%;' >‎ </h5>"
    document.querySelector("#datoSpAttack").innerHTML = "<h5 class='barras' style=' color: white; background-color: white; width: "+llenadoBarras("special-attack")+"%;' >‎</h5>"
    document.querySelector("#datoSpDefense").innerHTML = "<h5 class='barras' style=' color: white; background-color: white; width: "+llenadoBarras("special-defense")+"%;' >‎ </h5>"
    document.querySelector("#datoSpeed").innerHTML = "<h5 class='barras' style=' color: white; background-color: white; width: "+llenadoBarras("speed")+"%;' >‎</h5>"
    // NUMEROS AUTOMATICOS
    document.querySelector("#numeroHp").innerHTML = "<h5 class='barras' style=' color: white;' >"+data.stats.filter((stat) => stat.stat.name === "hp")[0].base_stat+" </h5>"
    document.querySelector("#numeroAttack").innerHTML = "<h5 class='barras' style=' color: white;' >"+data.stats.filter((stat) => stat.stat.name === "attack")[0].base_stat+" </h5>"
    document.querySelector("#numeroDefense").innerHTML = "<h5 class='barras' style=' color: white;' >"+data.stats.filter((stat) => stat.stat.name === "defense")[0].base_stat+" </h5>"
    document.querySelector("#numeroSpAttack").innerHTML = "<h5 class='barras' style=' color: white;' >"+data.stats.filter((stat) => stat.stat.name === "special-attack")[0].base_stat+" </h5>"
    document.querySelector("#numeroSpDefense").innerHTML = "<h5 class='barras' style=' color: white;' >"+data.stats.filter((stat) => stat.stat.name === "special-defense")[0].base_stat+" </h5>"
    document.querySelector("#numeroSpeed").innerHTML = "<h5 class='barras' style=' color: white;' >"+data.stats.filter((stat) => stat.stat.name === "speed")[0].base_stat+" </h5>"
    // CARACTERISTICAS AUTOMATICAS
    console.log(data)
    document.querySelector("#caractPokemon1").innerHTML = "<h5 class='caractPokemon' style='margin: 0;'>" + (data.height / 10) + "M</h5>";
    document.querySelector("#caractPokemon2").innerHTML = "<h5 class='caractPokemon' style='margin: 0;'>"+ data.weight +"Kg</h5>"
    document.querySelector("#caractPokemon3").innerHTML = "<h5 class='caractPokemon' style='margin: 0;'>"+ data.abilities[0].ability.name+"</h5>"
    // AÑADIR NUMERO
    function añadirNumero(numero){
        if(numero<10){
            return "#00"+numero
        }
        else if(numero<100){
            return "#0"+numero
        }
        else{
            return "#"+numero
        }
    }
    document.querySelector("#numeroPokemon").innerHTML = "<h5 class='numeroPokemon' style='font-size: 210px; height: 211px;'>"+añadirNumero(data.id)+"</h5>"


    })
}






