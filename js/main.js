particlesJS(
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
)





const sccionesPagina = new fullpage('#fullpage',{
  /* opciones basicas */
  autoScrolling: true, // Se activa el scroll.
  fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
  fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
  easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
  scrollingSpeed: 900, // Velocidad del scroll. Valores: en milisegundos.
  css3: true, // Si usara CSS3 o javascript.
  easingcss3: 'ease-out', // Curva de velocidad del efecto.
  loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.

  // ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
  navigation: false, // Muesta la barra de navegación.
  menu: '#menu', // Menu de navegación.
  anchors: ['inicio', 'perfil','contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
  navigationTooltips: ['Inicio', 'Perfil', 'Contacto'], // Tooltips que mostrara por cada boton.
  showActiveTooltip: false, // Mostrar tooltip activa.

  // ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
  sectionsColor : [ '#1d1d20', '##000', '#1d1d20'], // Color de fondo de cada seccion.
  verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.

  // ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
  controlArrows: true, // Flechas del slide
  slidesNavigation: false, // Indicadores del slide los puntitos
  afterLoad: function(origin, destination,){
    if(destination.anchor == 'redes'){
      document.querySelector('.footer h2').style.opacity = 1;
    }
  }

});


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

