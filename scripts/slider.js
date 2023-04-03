`use strict`
//para traer los elementos del document.
const container = document.querySelector('.slider-top__container')
const points = document.querySelectorAll('.slider-top__point')

// Al hacer click en un punto.
    //Saber la posición de ese punto.
    //Aplicar el translateX(-20%). En el translate vamos de 20 en 20 siendo 0 el primero.
    //Quitar clase '.active' a todos los puntos.
    //Añadir clase '.active' a el punto seleccionado.

points.forEach( (eachPoint, i) =>{
    points[i].addEventListener('click', ()=> {
        let index = i;
        let calc = index * -20
        container.style.transform = `translateX(${calc}%)`

        points.forEach((eachPoint, i)=>{
            points[i].classList.remove('active')
        })
        points[i].classList.add('active')
    })
} )
