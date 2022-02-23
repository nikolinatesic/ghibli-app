const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png';

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)



const getData = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  console.log(response);
    const data = await response.json();
    
if (response.status >= 200 && response.status < 400) {
  data.forEach(movie => {
    const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title
      const h2 = document.createElement('h2')
      h2.textContent = movie.director

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(h2)
  })
} else {
    const errorMessage = document.createElement('error')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)

}
}

getData();