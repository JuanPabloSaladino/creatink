// HOME

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {

    });
  });

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {

    });
  });

  //Inicializa TODOS los scripts de JavaScript
  document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});

function cambiarCorazon(){
  var corazon =document.getElementById("corazon");
   corazon.innerHTML="favorite";
   
  
}
//personalizar 1
function cambiarHojaRayada(){
  document.getElementById("hoja").style.backgroundImage= "url('../img/hoja-rayada.jpg')";
  
}
function cambiarHojaCuadriculada(){
  document.getElementById("hoja").style.backgroundImage= "url('../img/hoja-cuadriculada.jpg')";
}
function cambiarHojaLisa(){
  document.getElementById("hoja").style.backgroundImage = "url('../img/hoja-lisa.jpg')";
  
}
function cambiarColorBlanco() {
    document.getElementById("botoncito").style.backgroundColor = "white";
}

//personalizar 2
function cambiarTapaCuadrada(){
  document.getElementById("cuaderno").style.backgroundImage="url('../img/tapa2.jpg')";
  document.getElementById("borde").style.borderRadius="3%";
}
function cambiarTapaCirculo(){
  document.getElementById("cuaderno").style.backgroundImage="url('../img/visualizacion-tapa.png')";
  document.getElementById("borde").style.borderRadius="50%";
}
function cambiarColorNegro() {
    document.getElementById("botoncito").style.backgroundColor = "black";
}

function cambiarColorMarron() {
    document.getElementById("botoncito").style.backgroundColor = "#795548";
}

function cambiarColorVioleta() {
    document.getElementById("botoncito").style.backgroundColor = "#9c27b0";
}

function cambiarColorMagenta() {
    document.getElementById("botoncito").style.backgroundColor = "#e91e63";
}

function cambiarColorAzul() {
    document.getElementById("botoncito").style.backgroundColor = "#2196f3";
}

function cambiarColorTurquesa() {
    document.getElementById("botoncito").style.backgroundColor = "#00bcd4";
}

function cambiarColorVerde() {
    document.getElementById("botoncito").style.backgroundColor = "#4caf50";
}

function cambiarColorDorado() {
    document.getElementById("botoncito").style.backgroundColor = "#ffc107";
}

function cambiarColorAmarillo() {
    document.getElementById("botoncito").style.backgroundColor = "#ffeb3b";
}

function cambiarColorNaranja() {
    document.getElementById("botoncito").style.backgroundColor = "#ff9800";
}

function cambiarColorRojo() {
    document.getElementById("botoncito").style.backgroundColor = "#f44336";
}

var instance = M.Tabs.init(el, {
    
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        
    });
  });