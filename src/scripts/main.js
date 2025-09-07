console.log('main script loaded');


// frame-degrade-purple-blue-1 image-info-content invert-mobile



// ayudame a hacer el siguiente proceso

// buscar todos los elementos que tengan las clases .image-info-content.invert-mobile

// si la tiene entonces clona el elemento.image - content que tiene ReadableStreamDefaultController, buscalo tomalo y clonalo

// despues lo vas a pegar despues del elemento .content-title que también existe dentro del .image-info-content.invert-mobile , y le vas a agregar la clase hide-desktop

// Nota: Pueden haber más de un .image-info-content.invert-mobile por pagina asi que tendria que ser un ciclo repetitivo que opere cada uno

// Implementación: clonar .image-content dentro de cada .image-info-content.invert-mobile
// y pegar el clon después de .content-title con clase adicional .hide-desktop.
// Evita duplicados si el script corre más de una vez.
document.addEventListener('DOMContentLoaded', () => {
	try {
		const containers = document.querySelectorAll('.image-info-content.invert-mobile');
		if (!containers.length) return;

		containers.forEach((container) => {
			// Buscar elementos objetivo dentro del contenedor
			const imageContent = container.querySelector('.image-content');
			const contentTitle = container.querySelector('.content-title');

			if (!imageContent || !contentTitle) return; // Falla silenciosa si falta algo

			// Evitar clonar múltiple veces: buscar un clon previo marcado
			const alreadyCloned = container.querySelector('.image-content.hide-desktop.cloned-from-image-content');
			if (alreadyCloned) return;

			// Clonar profundamente el bloque de imagen
			const clone = imageContent.cloneNode(true);
			clone.classList.add('hide-desktop', 'cloned-from-image-content');

			// Insertar el clon justo después del título dentro del mismo contenedor
			contentTitle.insertAdjacentElement('afterend', clone);
		});
	} catch (err) {
		// Log no invasivo para depuración, sin romper la página
		console.warn('invert-mobile clone routine failed:', err);
	}
});