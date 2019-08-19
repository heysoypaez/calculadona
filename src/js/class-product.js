
//Creando la clase Producto
class Producto {
	constructor(nombre,categoria,imagenLink, precio, ganancia, stock){
		
		this.nombre = nombre
		this.categoria = categoria

		this.imagen = new Image
		this.imagen.className = "imagenProducto"
		this.imagen.src = imagenLink

		this.precio = precio
		this.ganancia = ganancia
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
		let precio = `$${this.precio}`
		
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

