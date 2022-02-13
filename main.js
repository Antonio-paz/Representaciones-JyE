document.querySelector('.btn').addEventListener('click', ()=>{
   document.querySelector('.menu').classList.toggle('show')
})

ScrollReveal().reveal('.titulo', { delay: 200});
ScrollReveal().reveal('.titulo-main', { delay: 500});
ScrollReveal().reveal('.tarjeta-servicio', { delay: 700});
ScrollReveal().reveal('.content-text', { delay: 700});
ScrollReveal().reveal('.content-contacto', { delay: 700});