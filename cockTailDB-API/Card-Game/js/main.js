fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h1').innerText= drinks[2]
  })
  .catch(err => {
      console.log(`error ${err}`)
  })
   
  
// document.querySelector('button').addEventListener('click', drawTwo)