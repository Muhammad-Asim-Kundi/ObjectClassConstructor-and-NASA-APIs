//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  const url = `https://api.nasa.gov/planetary/apod?api_key=Qt7DHVezgUkkUjeIdUJSEpUqgbTStKBzH8En5Eyg`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('video').src = data.url
        document.querySelector('h2').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

