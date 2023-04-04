const btnSwitcher = document.querySelector('.nav__switcher');

//evento que cambie la clase a la que establecimos como darkmode.

btnSwitcher.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitcher.classList.toggle('active');

    if(document.body.classList.contains('dark')){ //Si boyd posee dark como clase
        localStorage.setItem('dark-mode','true') //que me lo guarde en el local storage.
    } else{
        localStorage.setItem('dark-mode','false')//si no está que lo guarde como false.
    }
})

//comprobación para activar el darkmode.
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark'); //en caso de que sea true me añades dark al body
    btnSwitcher.classList.add('active'); //lo mismo para el botón, para que guarde el estado.
} else {
    document.body.classList.remove('dark'); //si no quita esa clase.
    btnSwitcher.classList.remove('active');
}