let menuToogle = document.querySelector('.menuToogle');
menuToogle.onclick = function(){
    menuToogle.classList.toggle('active');
}
const typed = new Typed('.typed', {
    strings : ['Desarrollador web 🌍','Ingeniero en Sistemas Computacionales 👨‍🎓'],
    typeSpeed: 90,
    startDelay: 75,
    backSpeed: 50, 
    loop: true
});

