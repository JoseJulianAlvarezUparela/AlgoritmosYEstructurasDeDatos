document.addEventListener('DOMContentLoaded', function() {
  const submenuLinks = document.querySelectorAll('.submenu');
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

  // Ocultar todos los submenu-content al cargar la página
  const submenuContents = document.querySelectorAll('.submenu-content');
  submenuContents.forEach(function(content) {
    content.style.display = 'none';
  });

  submenuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Ocultar todos los submenús
      const submenuContents = document.querySelectorAll('.submenu-content');
      submenuContents.forEach(function(content) {
        content.style.display = 'none';
      });

      // Mostrar submenú activo
      const submenuContent = this.nextElementSibling;
      submenuContent.style.display = 'block';

      // Remover clase 'active' de los enlaces principales
      submenuLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // Agregar clase 'active' al enlace principal activo
      this.classList.add('active');

      // Ocultar el menú de navegación y desactivar el submenú al hacer clic en un submenu-content
      submenuContent.addEventListener('click', function() {
        nav.classList.remove('show-nav');
        this.style.display = 'none';
        submenuLinks.forEach(function(link) {
          link.classList.remove('active');
        });
      });
    });
  });
});


