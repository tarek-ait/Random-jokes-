document.addEventListener('DOMContentLoaded', function() {
const randomJokeButton = document.getElementById('button')
const jokeText = document.getElementById('joke')
const spanCategory = document.getElementById('joke-category')
const categoryButtons = document.querySelectorAll('.category');

const baseURL = "https://v2.jokeapi.dev/joke/";
let category = null;

categoryButtons.forEach(function(button){
    button.addEventListener('click', function(){
        category = button.textContent
        getJoke(category)
    })
})


randomJokeButton.addEventListener('click',function(){
    getJoke("Any")
})

function getJoke(category){
        let URL = baseURL + `${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
        fetch(URL)
            .then(response => response.json()
            .then(data => {
                console.log(data);
                jokeText.textContent = data.joke;
                spanCategory.textContent = "category : " + data.category;
            })

            .catch(error => {
                jokeText.textContent = "Faild to fetch a joke.Please check your internet connection"
                console.log(error.message)
            })
        )

    }

})