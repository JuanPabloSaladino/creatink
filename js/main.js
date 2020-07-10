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

var instance = M.Tabs.init(el, {
    
});



  