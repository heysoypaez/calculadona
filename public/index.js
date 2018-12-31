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



Estructura funcional

1. Puedo crear un objeto producto que almacene
	1.1 el nombre de cada producto
	1.2 la imagen de cada producto
	1.3 la frase cool de cada producto

	1.4 el precio de cada producto
	1.5 la ganancia de cada producto

	1.6 el stock de cada producto actual

	1.7 la categoria tipo del producto: dona, helado, tortas, otros
	1.8 tipo de produccion: comprado o realizado por vladimiro o un mix

	1.9 ingredientes
		1.9.1 costos

Y crear una coleccion ordenada de los productos de vladimiro

2. Puedo crear un objeto jornada que

	0.1 Tenga un dia especifico, un Id


	2.1 Reciba la cantidad de productos que lleva para el dia de venta
	2.2 Calcule las ventas maximas, las utilidades que implica esa cantidad de productos en la jornada

	2.3 Calcule la diferencia entre lo que llevo y lo que tiene cuando volvio de la jornada
		1.3.1 calcule la diferencia desglosada por cada producto especifico (me quedaron 3 donas, 1 helado de pie)

	2.4 Calcule el dinero que tiene encima
		2.4.1 Calcule las utilidades
		2.4.2 Si el dinero que tiene es igual al dinero que conto todo esta bien.
		2.4.3 Si no, hay problemas y tiene que ver en que gastó dinero o quien le debe dinero.

	2.5 Una vez eso se resuelve,
	 si le queda poca mercancia o insuficiente (¿Que es poca mercancia?)(¿O insuficiente?) va a 
	 	Comprar mas donas y mando link para hacerlo sea ws o una web con lo necesario del pedido
	 	o
	 	Hace más repostería el mismo.

	2.6 Ademas Vladimiro analiza si las ventas del dia estuvieron buenas,
		 si vendió todo obviamente estan buenas, 
		 si le quedaron menos de 10 estuvieron buenas, 
		 si le quedaron mas de 25 estuvieron malas




*/


/*PROTOCOLO DE VERIFICACIÓN DE FUNCIONAMIENTO
==================================*/
console.log("Inicializando archivo")


/*DECLARACIÓN DE VARIABLES
==================================*/

const texto = document.createTextNode("Hola, soy Chávez")
const titulos = document.getElementsByTagName('h1');
const contenidoDeJornada = document.getElementById("contenido-jornada")
const contenidoDeSidebar = document.getElementById("barra-jornadas")





/*DECLARACIÓN DE CLASES
========================*/

/*
1. Puedo crear un objeto producto que almacene
	1.1 el nombre de cada producto
	1.2 la imagen de cada producto
	1.3 la frase cool de cada producto

	1.4 el precio de cada producto
	1.5 la ganancia de cada producto

	1.6 el stock de cada producto actual

	1.7 la categoria tipo del producto: dona, helado, tortas, otros
	1.8 tipo de produccion: comprado o realizado por vladimiro o un mix

	1.9 ingredientes
		1.9.1 costos

Y crear una coleccion ordenada de los productos de vladimiro

*/


//Creando la clase producto
class Producto {
	constructor(nombre,categoria,imagenLink, frase, precio, ganancia, stock){
		this.nombre = nombre
		this.frase = frase

		this.categoria = categoria

		this.imagen = new Image
		this.imagen.className = "imagenProducto"
		this.imagen.src = imagenLink
		

		this.precio = precio
		this.ganacia = ganancia
		this.stock = stock

	}

	generoDePalabra(palabra) {

		//Variables
		
		

		const ultimaLetra = palabra.length - 1
		const peultimaLetra = palabra.length - 2

		const masculino = palabra.charAt(ultimaLetra) === "o" || palabra.charAt(peultimaLetra) === "o"

		return masculino
	}

//funcion que muestra las caracteristicas claves del producto
	mostrar(lugar) {

		let texto 
		let categoria = this.categoria
		
		//logica
		if( this.generoDePalabra(this.categoria) ) {
			texto = `Esta ${categoria} es el ${this.nombre} ` 
		}

		else{
			texto = `Esta ${categoria} es la ${this.nombre} `	
		}
	

		//Reasignamos el contenido con nuevos textos

		//OUTPUT , retorno
		lugar.innerHTML += `<li> ${texto} </li>`
		//Esta imagen queda justo debajo del texto
		lugar.appendChild(this.imagen)

	}

}

//image(url:"../src/images/donas-cafe-plano-inclinado.jpg")

//Array vector donde contendremos el conjunto de productos de Vladimiro
let catalogo = [

	new Producto("Dona de Pie", "Dona", "../src/images/donas-pie-limon.jpg"),
	new Producto("Helado de Chocolate", "Helado", "../src/images/donas-licor-manjar-frutos-rojos.jpg"),
	new Producto("Helado de Oreo","helado", "../src/images/donas-piramide-apilada.jpg"),
	new Producto("Mini Dona","Dona","../src/images/plato-donas-cereza-plano-superior.jpg", "Si comes una quieres dos", 1500, 400, 5),
	new Producto("Galleta Oreo", "Galleta", "../src/images/donas-licor-manjar-frutos-rojos.jpg")

];

//Ciclo for aplicado a una coleccion de objetos
//para los producto del catalogo ...
for (let i = 0; i < catalogo.length ; i++){
	catalogo[i].mostrar(contenidoDeSidebar)

}


strJornada = contenidoDeJornada.innerHTML
strJornada.charAt(0)

/*DECLARACIÓN DE OBJETOS
============================*/		



/*DECLARACIÓN DE FUNCIONES
========================================================*/


/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/


/*RENDER HTML
=======================================*/

//document.body.appendChild(texto)
titulos[0].textContent = titulos[0].textContent.toUpperCase()

/*
===============================================================================
IDEAS CLAVES

*/
