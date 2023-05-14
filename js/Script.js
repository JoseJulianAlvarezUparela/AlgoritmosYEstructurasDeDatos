document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toogleMenu');
    const nav = document.querySelector('.Nav');
    const links = nav.querySelectorAll('a');
  
    toggleMenu.addEventListener('click', function() {
      nav.classList.toggle('show-nav');
      
      var body = document.querySelector('body');
      
      if (nav.classList.contains('show-nav')) {
        // Se activó el menú de navegación, deshabilitar scroll
        body.style.overflow = 'hidden';
      } else {
        // Se desactivó el menú de navegación, habilitar scroll
        body.style.overflow = 'auto';
      }
    });
  
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('show-nav');
        var body = document.querySelector('body');
        body.style.overflow = 'auto';
      });
    });
  });
  