document.querySelector('.menu_btn').addEventListener('click', () =>{
    document.querySelector('.menu_ul').classList.toggle("show");
});

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.intro', {delay: 200});
ScrollReveal().reveal('.tipos', {delay: 200});
ScrollReveal().reveal('.comprar', {delay: 200});
