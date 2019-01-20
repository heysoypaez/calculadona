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
	Crear subcolecciones filtrando el array por categorias (ver array.filter() )
*/

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
