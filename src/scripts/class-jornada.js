
/* Apuntes para crear una calculadona magnifica
2. Puedo crear un objeto jornada que

	0.1 Tenga un dia especifico [HECHO]
	0.2 un Id [PAUSA]
		 ¿Como creo una serie de numero irrepetibles?
		Esta secuencia se debe aumentar cada vez que se crea un nuevo objeto jornada
		Esta secuencia debe ser parte de un array


	2.1 [HECHO] Reciba la cantidad de productos que lleva para el dia de venta

	2.2  [HECHO] Calcule las ventas maximas, las utilidades que implica esa cantidad de productos en la jornada

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
class Jornada {

	constructor() {

		//atributos y metodos inicializados

		this.fecha = new Date; //Arroja la fecha de hoy
		this.stockInicial = this.obtenerStockInicial(); //Cantidad de productos que lleva esta jornada
		this.stockFinal = this.obtenerStockFinal();			
	}



	/*METODOS DE OBTENCION DE DATOS
	======================*/

		obtenerStockInicial() {

				/*DECLARACION DE CLASES
				===========================*/

					class ProductoStockInicial  {

						constructor(index) {

								const create = ($element, node = document) => node.createElement($element) 

								this.imagen = create("IMG")
								this.imagen = catalogo[index].imagen

								this.nombre = create("P")
								this.nombre.innerHTML = catalogo[index].nombre

								this.categoria = create("P")
								this.categoria.innerHTML = `Categoria: ${catalogo[index].categoria}`

								this.precio = create("P"),
								this.precio.innerHTML =  `$${catalogo[index].precio}`

								this.inputStock = create("INPUT")
								let {type, value, className} = this.inputStock
									type = "number"
									value = 0 //por defecto el valor es cero
									className = "input-productos-stock-inicial"

								//================
								this.contenedorDiv = create("DIV")
								this.contenedorDiv.className = "producto-stock-inicial"; 


									const append = ($element, $recursiveElement) => {

										//If there is not another element end and return true
										if (!$recursiveElement) {
											return true
										}

										return (
											this.contenedorDiv.appendChild($element) ,

											append($recursiveElement)
										)
									} 
									
									append(this.imagen)
									append(this.nombre)
									append(this.categoria)
									append(this.precio)
									append(this.inputStock)
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

					let key = "input-stock-inicial" //Prefijo de llave para consultar el input de stock inicial


					//Titulo y boton enviar son parte del objeto formulario
					const {titulo, productos, botonEnviar} = formulario;

					//Anexando atributos a los elementos del DOM
					titulo.innerHTML = "¿Qué llevarás (Y venderás) hoy?"

					botonEnviar.innerHTML = "Enviar lo que llevaré hoy"
					botonEnviar.id = "boton-enviar-input-stock-inicial" 
					botonEnviar.type = "button"

					/*Bindings*/

					botonStockInicialClicado = botonStockInicialClicado.bind(this)

					botonEnviar.addEventListener("click", botonStockInicialClicado )


				/*DECLARACION DE ARRAYS
				===========================*/

					let stockInicial = []


				/*DECLARACION DE FUNCIONES
				============================*/

					function transferirCatalogoA(elemento) {

						let {productos} = elemento;

						/*Ciclo para pasar todos los objetos del catalogo de productos a la coleccion de productos del objeto for*/
						for (let i = 0; i < catalogo.length; i++ ) {

							productos.push( new ProductoStockInicial(i) )
						}
					}

					//Ciclo para ejecucion de render
					function renderFormulario() {

						for (let atributo in formulario) {

							//Si el valor del atributo del formulario es productos....
							if (atributo === "productos" ) {

								//Por cada producto en la coleccion de productos (ARRAY)
								for (let producto of formulario.productos ) {
							
										//Me lo vas a renderear en pantalla
										$inputStockInicial.appendChild(producto.contenedorDiv)

									}
								}
							 
							//Si no son productos iterables muestra directamente el atributo en el formulario
							else {
							render(formulario, atributo)
							}
						}
					}
							
					// Guardando en una variable los datos del input del formulario de manera persistente en la memoria local
					function guardarInputStockInicial() {

							
							for (let i = 0; i < $inputProductosStockInicial.length; i++) {
							

								//Sintaxis para GUARDAR data en localStorage:
								localStorage.setItem(`${key}{${i}}`, $inputProductosStockInicial[i].value);
								// "input-stock-inicial{0}" "5"
							}

							function guardarInputEnArray() {
								

								for (let i = 0; i < $inputProductosStockInicial.length; i++) {

								stockInicial.push( parseInt( consultar(i) ) )
								}


								return stockInicial
							}

							/*ESTO NECESITA IR EN SU PROPIA FUNCION*/
							//Una vez presionan el boton se oculta la interfaz del formulario del boton inicial
							ocultar($inputStockInicial)

							guardarInputEnArray()

							console.log(stockInicial);
					}

					transferirStockInicialACatalogo = transferirStockInicialACatalogo.bind(this)

					function transferirStockInicialACatalogo() {
					
					for(let i = 0; i < catalogo.length; i++) {
							catalogo[i].stock = this.stockInicial[i]
						}
					}

					function botonStockInicialClicado() {

						guardarInputStockInicial();
						transferirStockInicialACatalogo();
						this.mostrarReporteInicial();
						
					}



					//ARROW FUNCTIONS
				
					const consultar = (index) => {
						
						let itemFormulario = localStorage.getItem(`${key}{${index}}`)
						return itemFormulario; 	
					}

					// funcion para render HTML 
					const render = (contenedor, elemento) => {

						return $inputStockInicial.appendChild( contenedor[elemento] ) 
					}


				/*EJECUCION DE FUNCIONES
				=========================*/

					transferirCatalogoA(formulario) 
						
					//Render
					renderFormulario()

						for (let i = 0; i < catalogo.length; i++) {
							consultar(i)
						}


					return stockInicial	
		}

		obtenerStockFinal() {
					//calcular stock final del dia en funcion de la cantidad de productos que le quedo

					//stockInicial - stockVendido
		}

	/*METODOS DE RENDER
	=========================================*/

		mostrarReporteInicial() {

				/*DECLARACIÓN DE VARIABLES
				===========================*/

					templateReporteInicial = templateReporteInicial.bind(this)
					const {stockInicial} = this;

					// ! Esto lo puedo colocar en una funcion pero tengo problemas tecnicos 
					let valorInicial = 0

					const  reducerStockInicialTotal = (acum, stockInicial) => acum + stockInicial
					
					const unidadesStockInicialTotal = stockInicial.reduce(reducerStockInicialTotal,valorInicial)
					

					let gananciasInicialTotal = [];
					let ventasInicialTotal = [];




				/*DECLARACIÓN DE FUNCIONES
				===========================*/


					function templateProductoReporte(index) {

							class ProductoReporteInicial  {

								constructor(index) {

										this.imagen = document.createElement("IMG")
										this.imagen = catalogo[index].imagen

										this.nombre = document.createElement("P")
										this.nombre.innerHTML = catalogo[index].nombre

										this.ventas = document.createElement("P"),
										this.ventas.innerHTML =  `Puedes vender $${this.calcularVentas(index)} `

										this.ganancias = document.createElement("P")
										this.ganancias.innerHTML = `Puedes ganar $${this.calcularGanancias(index)} chamo`

										this.stock = document.createElement("P")
										this.stock.innerHTML =  `Llevas ${catalogo[index].stock} `

										//================
										this.contenedorDiv = document.createElement("DIV")
										this.contenedorDiv.className = "producto-reporte-inicial"; 


											this.contenedorDiv.appendChild(this.imagen)
											this.contenedorDiv.appendChild(this.nombre)
											this.contenedorDiv.appendChild(this.stock)
											this.contenedorDiv.appendChild(this.ventas)
											this.contenedorDiv.appendChild(this.ganancias)
											
								}
	

								calcularVentas(index) {

									let ventas = catalogo[index].precio * catalogo[index].stock;
									ventasInicialTotal.push(ventas)

									return 	ventas
								} 	

								calcularGanancias(index) {	
							
									let ganancias = catalogo[index].ganancia * catalogo[index].stock;
									gananciasInicialTotal.push(ganancias)

									return ganancias;
								}			
							}

							const productoReporte = new ProductoReporteInicial(index);

							return productoReporte.contenedorDiv;
					}
					
					//Creando la plantilla del string inicial que mostraremos en pantalla
					function templateReporteInicial(){
						return(
							`
							<div id="reporte-inicial">
								<div id="resumen-reporte-inicial">

										<h1> En resumen hoy llevas </h1>

										<div id="reporte-stock-inicial-total">
										${unidadesStockInicialTotal} productos
										</div>
								</div>	

								<div id="reporte-inicial-desglosado-productos">

										<h1>¿Que es esto especificamente? <h1>
											<div id="contenido-reporte-inicial-desglosado-productos">
											</div>

								</div>	

								<div id="reporte-inicial-insights">

									<h1>¿Cuanto dinero tendrás si vendes todo?<h1>
									<div> es decir ${unidadesStockInicialTotal} unidades</div>

											<div id="monto-ventas-inicial-total">
											
											</div>	

									<h1>Y lo importante ¿Cual sera tu ganancia? </h1>

											<div id="monto-ganancias-inicial-total">
											
											</div>	

									<p>Dicho todo esto, te dejo y nos vemos en la noche para ver que te quedó</p>	


										<input
										 type="submit" 
										 id="boton-calcular-stock-final" 
										 value="Calcular stock final"
										
										/>
									 

								</div>

							</div>
							`
						)
					}

					// Convirtiendo templateReporteInicial en HTMl
					function createHTMLTemplate(HTMLString) {
						
						const $html = document.implementation.createHTMLDocument();
						//creando un documento html

						$html.body.innerHTML = HTMLString;

						return $html.body.children[0];
						//Donde el hijo O es el elemento que creamos con videoItemTemplate()
					}

					// pasando al DOM el html del templateReporteInicial 
					const render = ($nodeWhereRender, $elementRendered) => {

						return $nodeWhereRender.append($elementRendered)
					} 
	

				/*EJECUCION DE FUNCIONES
				===========================*/

					const $reporteInicial = createHTMLTemplate( templateReporteInicial() )
					render($contenidoDeJornada, $reporteInicial )
					const $contenidoReporteInicialDesglosado = document.getElementById("contenido-reporte-inicial-desglosado-productos")


					const $montoVentasInicialTotal = document.getElementById("monto-ventas-inicial-total")
					const $montoGananciasInicialTotal = document.getElementById("monto-ganancias-inicial-total") 
				
					for (let i = 0; i < catalogo.length; i++) {
						
						render($contenidoReporteInicialDesglosado, templateProductoReporte(i) )
					}


					const  reducerVentasInicialTotal = (acum, ventasInicialTotal) => acum + ventasInicialTotal
					const  reducerGananciasInicialTotal = (acum, gananciasInicialTotal) => acum + gananciasInicialTotal

					const montoVentasInicialTotal = ventasInicialTotal.reduce(reducerVentasInicialTotal,valorInicial)
					const $dataMontoVentasInicialTotal = document.createTextNode(`$${montoVentasInicialTotal}`)

					const montoGananciasInicialTotal = gananciasInicialTotal.reduce(reducerGananciasInicialTotal,valorInicial)
					const $dataMontoGananciasInicialTotal = document.createTextNode(`$${montoGananciasInicialTotal}`)

					render($montoVentasInicialTotal,$dataMontoVentasInicialTotal )
					render($montoGananciasInicialTotal,$dataMontoGananciasInicialTotal)


					//Funcion orientada a evento HTML
						/*Bindings*/

					const botonCalcularStockFinal = document.getElementById("boton-calcular-stock-final")

					botonCalcularStockFinal.addEventListener("click", manejarBotonCalcularStockFinalClicado )

					function manejarBotonCalcularStockFinalClicado() {
						alert("Oh Yea")
					}

		}		
}



/*
Reflexiones, ideas, observaciones mientrras programo:


Closure es la funcion padre dentro de la que esta otra funcion

Este codigo siento que tiene potencial de abstraerse, sintetizarse más

Y a la vez hacerse más escalable a traves de funciones y objetos

Aun no tengo claro como, aùn, pero viene

Lista de comos
-
-
-

Considero que deberia mostrar en pantalla solo los productos donde stock es mayor a 0, eso lo puedo hacer filtrando la colección

¿Qué resultados quiero de la sesión de hoy?
 - [] Quiero mostrar en pantalla la ganancia que representa cada producto para Vladimiro en funcion del stock que llevo
 - []
 - []


*/