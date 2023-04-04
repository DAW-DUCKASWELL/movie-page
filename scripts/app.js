`use strict`
//paginación
let page = 1;
const btnPrevious = document.querySelector('.popular-movies__btnChangePage-previous')
const btnNext = document.querySelector('.popular-movies__btnChangePage-next')

btnNext.addEventListener('click', ()=>{
    if(page < 1000){
        page = page + 1;
        loadMovies()
    }
})

btnPrevious.addEventListener('click', ()=>{
    if(page > 1){
        page = page - 1;
        loadMovies()
    }
})

//MOSTRAR PELICULAS POPULARES
//esperamos que la respuesta llegue para continuar.
//*funciones async usamos try/catch
//códigos de tmdb: 200, 401, 404.
const loadMovies = async () => {
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=45b49c30d379e8a24e7a536d9c44d2d9&language=es-VE&page=${page}`)
        if(response.status === 200){ //métemos if para verificar que encontramos la pelicula.
            const data = await response.json(); //-> método asincrono.
            let movies = ''; //acá estaran todas las peliculas.
            data.results.forEach(movie => {
                let release_date = movie.release_date 
                let year = release_date.split('-')//-> para que solo nos muestre el año.
                movies = movies + `<div class="popular-movies__div data">
                <a href="#" class="popular-movies__link-poster"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Aquí está el poster de una de las peliculas mejor valoradas." class="popular-movies__img"></a> 
                <h3 class="popular-movies__title"><a href="" class="popular-movies__link">${movie.title}</a></h3>
                <p class="popular-movies__year">${year[0]}</p>
                </div>`
            });
            document.querySelector('.popular-movies').innerHTML = movies; //Código dentor del html

        }else if(response.status === 401){
            console.log('No tienes acceso a la base de datos. Llave incorrecta.')
        }else if(response.status ===404){
            console.log('Lo siento, la película que buscas no existe.')
        }else{
            console.log('Unknow error!')
        }
        
         
    }catch(error){
        console.log(error);
    }
    //catch muestra error de código NO EN LA PETICIÓN EN SI.
}

//TOP 5 RATED
const topRated = async () =>{
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=45b49c30d379e8a24e7a536d9c44d2d9&language=es-VE`);
        if(response.status === 200){
            const data = await response.json()
            let results = data.results.slice(0,5)
            let movies = '';
            results.forEach(movie =>{
                let release_date = movie.release_date 
                let year = release_date.split('-')
                movies +=
                `
                <div class="slider-top__top">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="Fondo relacionado a la pelicula." class="slider-top__backdrop">
                    <a href="" class="slider-top__linkImg"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Aquí está el poster de una de las peliculas mejor valoradas." class="slider-top__img"></a>
                    <div class="slider-top__div data">
                        <h3 class="slider-top__title"><a href="#" class="slider-top__link">${movie.title}</a></h3>
                        <p class="slider-top__year">${year[0]}</p>
                        <br>
                        <span class="slider-top__rate">${movie.vote_average}</span>
                        <p class="slider-top__summary"><span class="slider-top__summaryTitle">Vista general</span>${movie.overview}.</p>
                    </div>
                </div>
                `
            })
            document.querySelector('.slider-top__container').innerHTML = movies;
        }else if(response.status === 401){
            console.log('No tienes acceso a la base de datos. Llave incorrecta.')
        }else if(response.status ===404){
            console.log('Lo siento, la película que buscas no existe.')
        }else{
            console.log('Unknow error!')
        }
    

    }catch(error){
        console.log(error)
    }
}

topRated()
loadMovies();