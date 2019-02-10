
/*
2. Puedo crear un objeto jornada que

	0.1 Tenga un dia especifico [HECHO]
	0.2 un Id [PAUSA]
		¿Como creo una serie de numero irrepetibles?
		Esta secuencia se debe aumentar cada vez que se crea un nuevo objeto jornada
		Esta secuencia debe ser parte de un array


	2.1 [HECHO] Reciba la cantidad de productos que lleva para el dia de venta

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


formularioStockInicial() {


/*DECLARACION DE CLASES
===========================*/

class productoFormulario {

	constructor(index) {

			this.imagen = document.createElement("IMG")
			this.imagen = catalogo[index].imagen

			this.nombre = document.createElement("P")
			this.nombre.innerHTML = catalogo[index].nombre

			this.categoria = document.createElement("P")
			this.categoria.innerHTML = `Categoria: ${catalogo[index].categoria}`

			this.precio = document.createElement("P"),
			this.precio.innerHTML =  `$${catalogo[index].precio}`

			this.inputStock = document.createElement("INPUT")
			this.inputStock.type = "number"
			this.inputStock.value = 0 //por defecto el valor es cero
			this.inputStock.className = "input-producto-formulario"

			//================
			this.contenedorDiv = document.createElement("DIV")
			this.contenedorDiv.className = "productoFormulario"; 

				this.contenedorDiv.appendChild(this.imagen)
				this.contenedorDiv.appendChild(this.nombre)
				this.contenedorDiv.appendChild(this.categoria)
				this.contenedorDiv.appendChild(this.precio)
				this.contenedorDiv.appendChild(this.inputStock)
	}					

}		


/*DECLARACION DE OBJETOS
===========================*/

const formulario = {

	titulo : document.createElement("H2"),
	
	/*Input de Producto
	=======================*/
	productos: [

	/*empujare los productos de los cuales solicitare stock aca*/
	
	],

	botonEnviar: document.createElement("button")		
	
}


/*DECLARACION DE VARIABLES
===========================*/

//Titulo y boton enviar son parte del objeto formulario
const {titulo, productos, botonEnviar} = formulario;

//Anexando atributos a los elementos del DOM
titulo.innerHTML = "¿Qué llevarás (Y venderás) hoy?"

botonEnviar.innerHTML = "Enviar lo que llevaré hoy"
botonEnviar.id = "boton-enviar-input-stock-inicial" 
botonEnviar.onclick = guardarInputStockInicial;
botonEnviar.type = "button"




/*DECLARACION DE ARRAYS
===========================*/

var stockInicial = []


/*DECLARACION DE FUNCIONES
============================*/

function transferirCatalogoA(elemento) {

let productos = elemento.productos;
	/*Ciclo para pasar todos los objetos del catalogo de productos a la coleccion de productos del objeto for*/
	for (let i = 0; i < catalogo.length; i++ ) {

		productos.push( new productoFormulario(i) )

	}
}

//Ciclo para ejecucion de render
function renderFormulario()
{
	for (let atributo in formulario) {

		//Si el valor del atributo del formulario es productos....
		if (atributo === "productos" ) {

			//Por cada producto en la coleccion de productos (ARRAY)
			for (let producto of formulario.productos ) {
		
					//Me lo vas a renderear en pantalla
					inputStockInicial.appendChild(producto.contenedorDiv)

				}
			}
		 
		//Si no son productos iterables muestra directamente el atributo en el formulario
		else {
		render(formulario, atributo)
		}
	}
}
	
	//Variables

	let key = "input-stock-inicial" //Prefijo de llave para consultar el input de stock inicial

	// Guardando en una variable los datos del input del formulario de manera persistente en la memoria local
	function guardarInputStockInicial() {

		for (let i = 0; i < inputProductoFormulario.length; i++) {
		
		//Sintaxis para GUARDAR data en localStorage:
		localStorage.setItem(`${key}{${i}}`, inputProductoFormulario[i].value);
		// "input-stock-inicial{0}" "5"
		}

		let guardarInputEnArray = () => {
			//Variable
			

			for (let i = 0; i < formulario.productos.length; i++) {
			stockInicial.push( parseInt( consultar(i) ) )
			}

			return stockInicial
		}

		/*ESTO NECESITA IR EN SU PROPIA FUNCION*/
		//Una vez presionan el boton se oculta la interfaz del formulario del boton inicial
		ocultar(inputStockInicial)

		guardarInputEnArray()

		console.log(stockInicial);


	}




/*ARROW FUNCTIONS
=========*/


const consultar = (index) => {
	
	let itemFormulario = localStorage.getItem(`${key}{${index}}`)
	return itemFormulario; 	

}



// funcion para render HTML 
const render = (contenedor, elemento) => inputStockInicial.appendChild( contenedor[elemento] )


/*EJECUCION DE FUNCIONES
=========================*/

transferirCatalogoA(formulario)
//Render
renderFormulario()


for (let i = 0; i < catalogo.length; i++) {
	consultar(i)
}


}

	

	/*METODOS DE CALCULO DE STOCK
	=========================================*/

	calcularStockInicial() {

		this.formularioStockInicial()

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

	mostrarReporteInicial() {

		function templateReporteInicial(){
			return(
				`
				<div>
					<div id="resumen-reporte-inicial">

							<h1> En resumen hoy llevas </h1>

							<div id="reporte-stock-inicial-total">
							${unidadesStockInicialTotal}
							</div>
					</div>	

					<div id="reporte-inicial-desglosado-productos">

							<h1>¿Que es esto especificamente <h1>
							${templateProductoReporte(catalogo)}

					</div>	

					<div id="reporte-inicial-insights">

						<h1>¿Cuanto dinero puedes ganar si vendes todo?<h1>
						
						<span> es decir ${unidadesStockInicialTotal} unidades<span>

								<div>
								${ventasStockInicialTotalVendido}
								</div>	

						<h1>Y lo importante ¿Cual sera tu ganancia? </h1>

								<div>
								${gananciasStockInicialTotalVendido}
								</div>	

						Dicho todo esto, te dejo y nos vemos en la noche para ver que te quedó	


							<input type="submit" id="boton-calcular-stock-final">
						    Calcular stock final
							</input>

					</div>

				</div>
				`
			)
		}

		/* INTERFAZ GRAFICA
		===================================================================================

		=======div===============div===============div===============div===============div========

									<h1> En resumen hoy llevas </h1>

										=======div=========
										<h2>stock total<h2>
										=======div=========

		<h1>¿Que es esto especificamente <h1>
			
		=======div===============div===============div===============div========	

		=======div========	
		1. Producto 1
		-Llevas 5
		-Puedes vender $$$
		-Puedes ganarle $$
		=======div========

		=======div========
		2. Producto 2
		-Llevas 5
		-Puedes vender $$$
		-Puedes ganarle $$
		=======div========

		=======div========
		3. Producto 3
		-Llevas 5
		-Puedes vender $$$
		-Puedes ganarle $$
		=======div========

		=======div========
		4. Donas
		-Llevas 5
		-Puedes vender $$$
		-Puedes ganarle $$
		=======div========

		=======div===============div===============div===============div========

					<h1>¿Cuanto dinero puedes ganar si vendes todo?<h1>
							 <span> es decir X unidades<span>

								========div========
								cantidad de dinero
								=======div=======	

					<h1>Y lo importante ¿Cual sera tu ganancia? </h1>

								=======div========
								monto de la ganancia
								=======div========

		Dicho todo esto, te dejo y nos vemos en la noche para ver que te quedó	


							======BOTON=======
						    Calcular stock final
							=======BOTON=======

		=======div===============div===============div===============div===============div========

		=================================================================================
		*/

			//stock total
			// stock por producto
			// ventas maximas
			// utilidades maximas 
	}

	calcularStockFinal() {
			//calcular stock final del dia en funcion de la cantidad de productos que le quedo

			//stockInicial - stockVendido
	}

	//metodos
}