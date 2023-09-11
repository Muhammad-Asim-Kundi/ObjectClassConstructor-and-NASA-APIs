document.querySelector('button').addEventListener('click', find)

function find(){
  let drink = document.querySelector('input').value
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h3').innerText= data.drinks[0].strDrink
    document.querySelector('img').src= data.drinks[0].strDrinkThumb

  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}
  
// document.querySelector('button').addEventListener('click', drawTwo)