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
	Crear subcolecciones filtrando el array por categorias (ver array.filter() )


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

//Contenido
const contenidoDeJornada = document.getElementById("contenido-jornada")
const contenidoDeSidebar = document.getElementById("barra-jornadas")

//Formularios
const inputStockInicial = document.getElementById("input-stock-inicial")

//Botones
const botonInputStockInicial = document.getElementById("boton-input-stock-inicial")

function ocultar() {
	inputStockInicial.classList.toggle("oculto")
}


/*DECLARACIÓN DE CLASES
========================*/


//Creando la clase Producto
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

	generoDePalabraMasculino(palabra) {

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
		if( this.generoDePalabraMasculino(this.categoria) ) {
			texto = `${this.nombre} | ${categoria}` 
		}

		else{
			texto = `${this.nombre} | ${categoria} `	
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

/*
2. Puedo crear un objeto jornada que

	0.1 Tenga un dia especifico [HECHO]
	0.2 un Id [PAUSA]
		¿Como creo una serie de numero irrepetibles?
		Esta secuencia se debe aumentar cada vez que se crea un nuevo objeto jornada
		Esta secuencia debe ser parte de un array


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

3. Una clase formulario?
*/
class Jornada {

	constructor( ) {

		//atributos y metodos inicializados

		this.fecha = new Date; //Arroja la fecha de hoy
		this.stockInicial = this.calcularStockInicial(); //Cantidad de productos que lleva esta jornada
		this.stockFinal = this.calcularStockFinal();
		
	}


	/*Formularios
	======================*/


crearFormularioStockInicial() {

//Nuestro elemento formulario esta en esta variable
inputStockInicial;
			/*Formulario
		////////////////////

						<h2>¿Qué llevarás (Y venderás) hoy?</h2>
						<label for = "nombreUsuario">¿Cómo te llamas? </label>
						<br />
						<input type="text" name="nombre" id="nombreUsuario" />

						<br />

						<label for = "apellidoUsuario">¿Tu apellido? </label>
						<br />
						<input type="text" name="apellido" id="apellidoUsuario" />

						<br />

						<label for = "edadUsuario">¿Y la edad? Por favor </label>
						<br />
						<input type="number" name="edad" id="edadUsuario" />

						<br />
						<input type="button" name="" value="Envia!" id="boton-input-stock-inicial" onClick="ocultar()" />

		     <h2>¿Que quieres llevar?</h2>

		Producto X    Producto X    Producto X
		 [imagen]      [imagen]      [imagen]
		[cantidad]    [cantidad]    [cantidad]

		Producto X    Producto X    Producto X
		 [imagen]      [imagen]      [imagen]
		[cantidad]    [cantidad]    [cantidad]

		Producto X    Producto X    Producto X
		 [imagen]      [imagen]      [imagen]
		[cantidad]    [cantidad]    [cantidad]

						//////
						ENVIAR
						//////

		//////////////////////////////

		return Array(productosLlevados)
		stock = longitud array + 1, porque los array empiezan en 0

		quiero llevar

		nutella 5
		pie 3
		limon 4
		
		sumar con un reduce?
		*/


class productoFormulario {

	constructor(index) {

			this.imagen = document.createElement("IMG")
			this.imagen = catalogo[index].imagen

			this.nombre = document.createElement("P")
			this.nombre.innerHTML = catalogo[index].nombre

			this.categoria = document.createElement("P")
			this.categoria.innerHTML = `Categoria: ${catalogo[index].categoria}`

			this.botonStock = document.createElement("INPUT")
			this.botonStock.type = "number"

	}		
}
		

const formulario = {

	titulo : document.createElement("H2"),

	/*Input de Producto
	=======================*/
	productos: [

	/*empujare los productos de los cuales solicitare stock aca*/
	new productoFormulario(0),
	


	]
	
	
	
}

/*
entonces lo que haras sera empujar dentro de la coleccion de productos un objeto producto
con su imagen, su nombre, su categoria, su boton para introducir la data

*/

formulario.titulo.innerHTML = "¿Qué llevarás (Y venderás) hoy?"



/*Quiero hacer un commit mostrando todo la coleccion de productos para colocar el input*/



/*Quiero crear un ciclo de los productos en catalogo

 que me agregue atributos en el objeto formulario
con el nombre, la categoria, el input de los productos para pedir

*/



/*GENERANDO EL OUPUT
======================*/

//Funcion para renderear en el html
const render = (contenedor, elemento) => inputStockInicial.appendChild( contenedor[elemento] )

//Ciclo para ejecutar el render
	for (let atributo in formulario) {

		//Si el valor del atributo del formulario es productos....
		if (atributo === "productos" ) {

				//Por cada producto en la coleccion de productos del formulario (ES ARRAY)
				for (let producto of formulario.productos ) {

					//Por cada caracteristica de cada producto (ES OBJETO)
					for(let caracteristica in producto) {

						//Me lo vas a renderear en pantalla
						render(producto, caracteristica )
					}

					
				}
				
		} 

		//Si no esto otro
		else {

			render(formulario, atributo)
		}

	}
	

}


	/*METODOS DE CALCULO DE STOCK
	=========================================*/

	calcularStockInicial() {

		this.crearFormularioStockInicial()

		//calcular stock inicial del dia en funcion de la cantidad de productos que quiere llevar
		//Desglosar en stock total y stock especifico

		/*Formulario
		////////////////////

		     <h2>¿Que quieres llevar?</h2>

		Producto X    Producto X    Producto X
		 [imagen]      [imagen]      [imagen]
		[cantidad]    [cantidad]    [cantidad]

		Producto X    Producto X    Producto X
		 [imagen]      [imagen]      [imagen]
		[cantidad]    [cantidad]    [cantidad]

		Producto X    Producto X    Producto X
		 [imagen]      [imagen]      [imagen]
		[cantidad]    [cantidad]    [cantidad]

						//////
						ENVIAR
						//////

		//////////////////////////////

		return Array(productosLlevados)
		stock = longitud array + 1, porque los array empiezan en 0

		quiero llevar

		nutella 5
		pie 3
		limon 4
		
		sumar con un reduce?
		*/
	}

	calcularStockFinal() {
			//calcular stock final del dia en funcion de la cantidad de productos que le quedo

			//stockInicial - stockVendido
	}

	//////////////////////////////////////////////

	//metodos
}


/*DECLARACIÓN DE OBJETOS
============================================*/		


/*MANIPULANDO EL OBJETO FORMULARIO
============================*/
/*
let inputStockInicialProducto = ""
inputStockInicial.appendChild(inputStockInicialProducto)
*/

/*DECLARACIÓN DE FUNCIONES
========================================================*/

/*EJECUCIÓN DE FUNCIONES Y PROMESAS
========================================0*/


//Ciclo for aplicado a una coleccion de objetos
//para los producto del catalogo ...
for (let i = 0; i < catalogo.length ; i++){
	catalogo[i].mostrar(contenidoDeSidebar)

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
*/
