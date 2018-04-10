import { createNewAlumni } from './components/alumni.js'

fetch('http://localhost:3247/alumnis')
  .then(response => response.json())
  .then(alumnis => {

    const alumnisElement = document.getElementById('alumnis')

    const alumniElements = alumnis.map(createNewAlumni).join('')
    console.log(alumniElements)

    alumnisElement.innerHTML = alumniElements
  })