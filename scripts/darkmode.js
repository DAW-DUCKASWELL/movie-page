const btnSwitcher = document.querySelector('.nav__switcher');

btnSwitcher.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitcher.classList.toggle('active');
})