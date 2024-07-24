// incono usuario

const enlaceUsuario = document.getElementById('enlace-usuario');
const formularioRegistro = document.getElementById('formulario-registro');

enlaceUsuario.addEventListener('click', function(event) {
    event.preventDefault();
    formularioRegistro.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!formularioRegistro.contains(event.target) && !enlaceUsuario.contains(event.target)) {
        formularioRegistro.style.display = 'none';
    }
});

const iniciarSesionButton = document.getElementById('iniciar-sesion');
iniciarSesionButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Aquí puedes implementar la lógica para el inicio de sesión
    // Por ejemplo, mostrar un mensaje de éxito o error
    alert("Inicio de sesión exitoso");
});


// incono busqueda

const enlacebusqueda = document.getElementById('enlace-busqueda');
const formulariobusqueda = document.getElementById('formulario-busqueda');

enlacebusqueda.addEventListener('click', function(event) {
    event.preventDefault();
    formulariobusqueda.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!formulariobusqueda.contains(event.target) && !enlacebusqueda.contains(event.target)) {
        formulariobusqueda.style.display = 'none';
    }
});

// carrito de compras

const enlaceCompras = document.getElementById('enlace-compras');
        const formularioCompras = document.getElementById('formulario-compras');

        enlaceCompras.addEventListener('click', function(event) {
            event.preventDefault();
            formularioCompras.style.display = 'block';
        });

        document.addEventListener('click', function(event) {
            if (!formularioCompras.contains(event.target) && !enlaceCompras.contains(event.target)) {
                formularioCompras.style.display = 'none';
            }
        });

        function allowDrop(event) {
            event.preventDefault();
          }
          
          function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
          }
          
          function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            var draggedElement = document.getElementById(data);
            
            // Aquí puedes agregar la lógica para añadir el producto al carrito
            var carrito = document.getElementById("carrito");
            carrito.appendChild(draggedElement.cloneNode(true));
          }
          
// incono idioma
const enlaceidioma = document.getElementById('enlace-idioma');
const formularioidioma = document.getElementById('formulario-idioma');

enlaceidioma.addEventListener('click', function(event) {
    event.preventDefault();
    formularioidioma.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!formularioidioma.contains(event.target) && !enlaceidioma.contains(event.target)) {
        formularioidioma.style.display = 'none';
    }
});
