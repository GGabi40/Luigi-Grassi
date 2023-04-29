/* Carousel */
window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
});


/* Modal */
const categoriasMenu = {
  Ejecutivo: [
    { plato: "Fettuccini ai Brocoli", precio: "6.50"},
    { plato: "Spaghetti ai frutti di mare", precio: "5.50"},
    { plato: "Corde neri Gamberi pomodoro", precio: "8.50"},
    { plato: "Risotto alla milanese", precio: "5.00"},
    { plato: "Arancini", precio: "3.70"},
    { plato: "Ossobuco a la Milanesa", precio: "4.00"},
    { plato: "Berenjenas a la Parmesana", precio: "5.00"},
    { plato: "Pollo Alla Cacciatora", precio: "7.50"},
    { plato: "Carpaccio", precio: "6.50"},
    { plato: "Sopa minestrone", precio: "4.25"}
  ],
  Panes: [
    { plato: "Ciabatta", precio: "2.25"},
    { plato: "Focaccioa", precio: "2.00"},
    { plato: "Schiacciata", precio: "3.00"},
    { plato: "Pandoro", precio: "3.25"},
    { plato: "Panettone", precio: "2.50"},
    { plato: "Farinata", precio: "2.00"},
    { plato: "Pane Toscano", precio: "3.00"}
  ],
  Pastas: [
    { plato: 'Espaguetis', precio: "1.45"},
    { plato: 'Tallarines', precio: "1.70"},
    { plato: 'Vermicelli', precio: "2.50"},
    { plato: 'Fettuccine', precio: "3.20"},
    { plato: 'Ziti', precio: "2.70"},
    { plato: "Capelli D'Angelo", precio: "5.00"},
    { plato: "Fettucce", precio: "3.70"},
    { plato: "Tagliatelle", precio: "2.00"},
    { plato: "Macarrones", precio: "2.40"},
    { plato: "Rigatoni", precio: "3.00"},
    { plato: "Fusilli", precio: "4.20"}
  ],
  Pizzas: [
    { plato: 'Pizza de Muzzarela', precio: "10.00" },
    { plato: 'Pizza Fritta', precio: "10.50" },
    { plato: 'Pizza bianca', precio: "10.80" },
    { plato: 'Pizza Napoletana', precio: "11.00" },
    { plato: 'Pinsa', precio: "12.00" },
    { plato: 'Pizza alla romana', precio: "12.80" },
    { plato: 'Sfincione', precio: "13.10" },
    { plato: 'Pizza Gourmet', precio: "14.00" },
    { plato: 'Pizza al trancio', precio: "17.00" }
  ],
  Vegetariano: [
    { plato: 'Polenta with Mushrooms', precio: "6.00"},
    { plato: 'Gnocchi alla sorrentina', precio: "6.50"},
    { plato: 'Caprese', precio: "7.00"},
    { plato: 'Pasta with pesto sauce', precio: "8.00"},
    { plato: 'Parmigiana di melanzane', precio: "8.00"},
    { plato: 'Caponata', precio: "9.00"},
    { plato: 'Variedad de Pizza', precio: "10.00"}
  ],
  Bebidas: [
    { plato: 'Limonata', precio: '1.50'},
    { plato: 'Liquore', precio: '2.00'},
    { plato: 'Birra', precio: '2.50'},
    { plato: 'Champagne', precio: '4.50'},
    { plato: 'Vino Bianco', precio: '3.60'},
    { plato: 'Vino Rosso', precio: '3.50'},
    { plato: 'Whisky', precio: '8.50'},
    { plato: 'Espresso', precio: '1.00'},
    { plato: 'Latte macchiato', precio: '1.50'},
    { plato: "L'infuso di erbe", precio: '1.00'},
    { plato: "Latte", precio: '0.80'}
  ]
};

const btnAbrirModal = document.querySelector('#botonModal');
const btnCerrarModal = document.querySelector('#cerrarModal');
const modal = document.querySelector('#modal');
const tituloCategoria = document.querySelector('#titulo-categoria');
const contenidoModal = document.querySelector('#contenido-modal');

const categorias = document.querySelectorAll('.nuestro-menu');

categorias.forEach((categoria) => {
  categoria.addEventListener('click', (evento) => {
    const categoriaSeleccionada = evento.target.closest('.nuestro-menu').dataset.categoria;
    const platosCategoria = categoriasMenu[categoriaSeleccionada];
    
    tituloCategoria.textContent = categoriaSeleccionada;
    contenidoModal.innerHTML = platosCategoria.map((plato) => `<p class="plato">${plato.plato}</p><p class="precio">${plato.precio}</p>`).join('');

    modal.showModal();
  });
});

btnCerrarModal.addEventListener('click', () => {
  modal.close();
});


/* Input */
const inputs = document.querySelectorAll('input');
const liquid = document.querySelector('.liquid');
const fieldset = document.querySelector('.campo-form');
const formulario = document.querySelector('.form');

const agarraInputs = () => {
  const porcentaje = calculoPorcentaje();
  setearAlturaLiquido(porcentaje);
  cambioColorText(porcentaje);
}

const calculoPorcentaje = () => {
  const llenarInputs = Array.from(inputs).filter(input => input.value !== '');
  const porcentaje = llenarInputs.length / inputs.length * 100;

  return porcentaje;
}

const setearAlturaLiquido = (porcentaje) => {
  liquid.style.height = `${porcentaje}%`;
}

inputs.forEach(input => {
  input.addEventListener('input', agarraInputs);
});

const cambioColorText = (porcentaje) => {
  if (porcentaje >= 90) {
    fieldset.style.color = `white`;
  } else {
    fieldset.style.color = `black`;
  }
}

/* Form */
const btn = document.querySelector('.enviar');
const nome = document.querySelector('#name');
const surname = document.querySelector('#surname');
const mail = document.querySelector('#contacto');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const valido = telValido();

  if (valido && nome.value !== '' && surname.value !== '' && mail.value !== '') {
    alert('Enviado.');
  } else {
    alert('Revise sus datos.');
  }

});

function telValido() {
  const tel = document.querySelector('#tel');
  const valorTel = Number(tel.value);

  if (tel.value.length >= 8) {
    valid = true;
    console.log(valorTel);

    return valid;
  } else {
    valid = false;
    
    return valid;
  }
}