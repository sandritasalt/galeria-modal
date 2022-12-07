const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
var imgActual = 0;

/*let rutasImg = []; un array para dejar guardadas las rutas*/ 


//abrir modal y de la miniatura que se le ha hecho click coger su mismo href

enlaces.forEach(function(enlace, indice){
	/*rutasImg.push(enlace.getAttribute("href")); or rutasImg.push(enlace.href)*/ 
	enlace.addEventListener("click", function(evento){
		evento.preventDefault();
		imgActual = indice;
		imgModal.setAttribute("src",enlace.getAttribute("href"));
		//imgModal.src = rutasImg[imgActual];
		modal.classList.toggle("visible");

	})
})

//cerrar modal

modal.addEventListener("click",function(){
	modal.classList.remove("visible"); //"this" es un argumento para hacer el evento al mismo elemento que esta escuchando y solo seria con function() y no con funcion flecha
})

//navegacion modal y cambiar el src por imagen 


flechas.forEach(function(flecha, indice){
	flecha.addEventListener("click", function(evento){
		evento.stopPropagation();	
		if (indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;

		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
	
	});		
})


