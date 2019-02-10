/*
Autor: Daniel Páez
URL Autor:  heysoypaez.com
Tema de la app: 
Descripción: 
URL código: github.com/heysoypaez
*/

/*

NOTICIAS
=> 400 pesos se gana a cada helado
=> Whatsapp con un logo chico y la api sirve para enviar un mensaje


Estructura funcional

1. objeto producto
2. objeto jornada

*/


/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
console.log("Inicializando archivo")


/*DECLARACIÓN DE VARIABLES
==================================*/

const texto = document.createTextNode("Hola, soy Chávez")
const titulos = document.getElementsByTagName('h1');

//Contenido
const contenidoDeJornada = document.getElementById("contenido-jornada")
const contenidoDeSidebar = document.getElementById("barra-jornadas")
const contenidoWhatsapp = document.getElementById("whatsapp-container")
const carruselProductosSidebar = document.getElementById("carrusel-productos-sidebar")




//Formularios
const inputStockInicial = document.getElementById("input-stock-inicial")
const inputProductoFormulario = document.getElementsByClassName('input-producto-formulario')



//Botones
const botonInputStockInicial = document.getElementById("boton-input-stock-inicial")



/*DECLARACIÓN DE CLASES
========================*/

// "scripts/class-producto.js"
// "scripts/class-jornada.js"



/*DECLARACIÓN DE ARRAYS
========================*/


//Array vector donde contendremos el conjunto de productos de Vladimiro
let catalogo = [

	new Producto("Dona de Pie", "Dona", "src/images/donas-pie-limon.jpg", 700, 900, 5),
	new Producto("Helado de Chocolate", "Helado", "src/images/donas-licor-manjar-frutos-rojos.jpg",700, 700, 5),
	new Producto("Helado de Oreo","helado", "src/images/donas-piramide-apilada.jpg",700, 600, 5),
	new Producto("Mini Dona","Dona","src/images/plato-donas-cereza-plano-superior.jpg", "Si comes una quieres dos", 1500, 400, 5),
	new Producto("Dona de Nutella","Dona","src/images/plato-donas-cereza-plano-superior.jpg", "Si comes una quieres dos", 900, 400, 5),
	new Producto("Dona de Manjar","Dona","src/images/plato-donas-cereza-plano-superior.jpg", "Si comes una quieres dos", 900, 400, 5),

];


/*DECLARACIÓN DE OBJETOS
============================================*/		

function declararWhatsapp() {

	const whatsappPedido = document.createElement("A")
    const prefijo = "https://wa.me/"

    const telefonos = {
    	marcos: "584126641135",
    	daniel: "56946599356",
    	amanda: "56984473359"
    }
    
    const telefono = telefonos.amanda
    const mensaje = "?text=Tengo%un%20pedido%20de%20donas"
    //Tengo un pedido de donas

whatsappPedido.innerHTML = "Haz tu pedido",
whatsappPedido.id = "whatsapp-pedido",



whatsappPedido.innerHTML = "Haz tu pedido"
whatsappPedido.id = "whatsapp-pedido"
whatsappPedido.href = `${prefijo}${telefono}`

return whatsappPedido

}

function whatsappImagen(argument) {
	const whatsappImagen = new Image
	whatsappImagen.src = "file:///C:/Users/Daniel/Documents/logos/WhatsApp_Logo_2/WhatsApp_Logo_2.png"
	whatsappImagen.id = "whatsapp-imagen"

	return whatsappImagen
}



contenidoWhatsapp.appendChild( declararWhatsapp() )

contenidoWhatsapp.appendChild( whatsappImagen() )




/*DECLARACIÓN DE FUNCIONES
========================================================*/


const ocultar = (elemento) => elemento.classList.toggle("oculto")



/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================*/


//Ciclo for aplicado a una coleccion de objetos
//para los producto del catalogo ...
for (let i = 0; i < catalogo.length ; i++){
	catalogo[i].mostrar(carruselProductosSidebar)

}


diaDePrueba = new Jornada;

console.log(diaDePrueba)


/*RENDER HTML
=======================================*/

//document.body.appendChild(texto)
titulos[0].textContent = titulos[0].textContent.toUpperCase()

/*
===============================================================================
IDEAS CLAVES
FEATURES =>

ENVIAR POR WHASTAPP SU PEDIDO A PROVEEDOR CON LA API PARA ENVIAR MENSAJE
EN FUNCION DE LO QUE LE HACE FALTA

Migrar a ajax
*/
