
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
			this.botonStock.className = "input-producto-formulario"

			//================
			this.contenedorDiv = document.createElement("DIV")
			this.contenedorDiv.className = "productoFormulario"; 

			this.contenedorDiv.appendChild(this.imagen)
			this.contenedorDiv.appendChild(this.nombre)
			this.contenedorDiv.appendChild(this.categoria)
			this.contenedorDiv.appendChild(this.botonStock)
	}		
			

}		


			

const formulario = {

	titulo : document.createElement("H2"),

	/*Input de Producto
	=======================*/
	productos: [

	/*empujare los productos de los cuales solicitare stock aca*/
	
	],

	botonEnviar: document.createElement("button")		
	
}


/*Ciclo para pasar todos los objetos del catalogo de productos a la coleccion de productos del objeto for*/
for (let i = 0; i < catalogo.length; i++ ) {

	let productos = formulario.productos;
	productos.push( new productoFormulario(i) )

}



formulario.titulo.innerHTML = "¿Qué llevarás (Y venderás) hoy?"
formulario.botonEnviar.innerHTML = "Enviar lo que llevaré hoy"


/*GENERANDO EL OUPUT
=====================================================*/

/* FUNCION PARA RENDER EN HTML 
===============================*/
const render = (contenedor, elemento) => inputStockInicial.appendChild( contenedor[elemento] )



/*CICLO PARA EJECUCION DE RENDER
================================*/
	for (let atributo in formulario) {

		//Si el valor del atributo del formulario es productos....
		if (atributo === "productos" ) {

			//Por cada producto en la coleccion de productos (ARRAY)
			for (let producto of formulario.productos ) {

				console.log(producto.contenedorDiv)

					//Me lo vas a renderear en pantalla
					inputStockInicial.appendChild(producto.contenedorDiv)

				}
			}
		 

		//Si no esto otro:
		else {
		render(formulario, atributo)
		}
	}

const inputProductoFormulario = document.getElementByClassName('input-producto-formulario')

	function guardarDataStockInicial() {



/*
R ¿Que resultado quiero?
Quiero guardar en una variable los datos del input del formulario de manera persistente
Quiero que esos se guarden cuando presionan el boton


PM

input.value
document onclick

local storage
add event listener

*/

		window.localStorage
		
//Syntax for SAVING data to localStorage:
localStorage.setItem("key", "value");

//Syntax for READING data from localStorage:
var lastname = localStorage.getItem("key");

//Syntax for REMOVING data from localStorage:
localStorage.removeItem("key");
	}
}


	/*METODOS DE CALCULO DE STOCK
	=========================================*/

	calcularStockInicial() {

		this.crearFormularioStockInicial()

		//calcular stock inicial del dia en funcion de la cantidad de productos que quiere llevar
		//Desglosar en stock total y stock especifico
/*
		return Array(productosLlevados)
		stock = longitud array + 1, porque los array empiezan en 0

		quiero llevar:
		- nutella 5
		- pie 3
		- limon 4
		
		sumar con un reduce?
		*/
	}

	calcularStockFinal() {
			//calcular stock final del dia en funcion de la cantidad de productos que le quedo

			//stockInicial - stockVendido
	}

	//metodos
}
