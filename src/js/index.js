
/* variables
------------------------------*/

const texto = document.createTextNode("Hola, soy Chávez")
const titulos = document.getElementsByTagName('h1');

//Contenido
const $contenidoDeJornada = document.getElementById("contenido-jornada")
const $contenidoDeSidebar = document.getElementById("barra-jornadas")
const $contenidoWhatsapp = document.getElementById("whatsapp-container")
const $carruselProductosSidebar = document.getElementById("carrusel-productos-sidebar")

//Formularios
const $inputStockInicial = document.getElementById("input-stock-inicial")
const $inputProductosStockInicial = document.getElementsByClassName('input-productos-stock-inicial')


//Botones
const $botoninputStockInicial = document.getElementById("boton-input-stock-inicial")


/* arrays
-----------*/


//Array vector donde contendremos el conjunto de productos de Vladimiro
let catalogo = [

	new Producto("Dona de Pie", "Dona", "public/img/donas-pie-limon.jpg", 900, 400, 0),
	new Producto("Helado de Chocolate", "Helado", "public/img/donas-licor-manjar-frutos-rojos.jpg",600, 200, 0),
	new Producto("Helado de Oreo","helado", "public/img/donas-piramide-apilada.jpg",600, 200, 0),
	new Producto("Mini Dona","Dona","public/img/plato-donas-cereza-plano-superior.jpg", 1500, 400, 0),
	new Producto("Dona de Nutella","Dona","public/img/plato-donas-cereza-plano-superior.jpg", 900, 400, 0),
	new Producto("Dona de Manjar","Dona","public/img/plato-donas-cereza-plano-superior.jpg", 900, 500, 0),
];


/*DECLARACIÓN DE OBJETOS
============================================*/		

function declararWhatsapp() {

	const whatsappPedido = document.createElement("A");
  const prefijo = "https://wa.me/";
  const telefonos = {
    	marcos: "584126641135",
    	daniel: "56946599356",
    	amanda: "56984473359"
  }
  const telefono = telefonos.amanda
  const mensaje = "?text=Tengo%un%20pedido%20de%20donas"
  //Tengo un pedido de donas

	whatsappPedido.innerHTML = "Haz tu pedido";
	whatsappPedido.id = "whatsapp-pedido";
	whatsappPedido.href = `${prefijo}${telefono}`;

	return whatsappPedido
}

function whatsappImagen(argument) {
	const whatsappImagen = new Image
	whatsappImagen.src = "./public/img/WhatsApp_Logo_1.png"
	whatsappImagen.id = "whatsapp-imagen"

	return whatsappImagen
}

$contenidoWhatsapp.appendChild( declararWhatsapp() );
$contenidoWhatsapp.appendChild( whatsappImagen() );

/*DECLARACIÓN DE FUNCIONES
========================================================*/

const ocultar = (elemento) => elemento.classList.toggle("oculto")

/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================*/


//Ciclo for aplicado a una coleccion de objetos
//para los producto del catalogo ...
for (let i = 0; i < catalogo.length ; i++){
	catalogo[i].mostrar($carruselProductosSidebar)
}

day1 = new Jornada;


/* render html
=======================================*/

titulos[0].textContent = titulos[0].textContent.toUpperCase()

