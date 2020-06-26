// HOME

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

window.addEventListener("load", () => {
  setTimeout(carga, 1500);

  function carga() {
    document.getElementById("preloader").className = 'hide';
    document.getElementById("contenido").className = " ";


  }
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    
  });
});
