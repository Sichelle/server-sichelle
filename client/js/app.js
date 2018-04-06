fetch('http://localhost:3247/alumnis')
	.then(response => response.json())
	.then(alumnis => {

	const alumnisElement = document.getElementById('alumnis')
		alumniElements.innerHTML = JSON.stringify(alumnis)

		console.log(alumniElements)
		
	})