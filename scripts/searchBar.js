const searchBtn = document.querySelector('.nav__button')
const searchBar = document.querySelector('.search-bar')
const input = document.querySelector('.search-bar__input')
const boxSearch = document.querySelector('.search-bar__boxSearch')

//Al hacer click en la barra de busqueda se mostraran recomendaciones

input.addEventListener('click', ()=>{
    boxSearch.classList.add('active')
})

//Al hacer click en searchBTN se mostrar searchbar se mostrará la barra de busqueda

searchBtn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active')
    boxSearch.classList.remove('active')
})

