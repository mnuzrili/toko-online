/*===== MENU SHOW =====*/ 
const showMenu = (toogledId, navId) => {
    const toggle = document.getElementById(toogledId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
    let a = ''

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 250
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
            a = 'ok'
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
            a = 'no'
        }
    })

    console.log(a)
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

// SLIDER RANGE
$(function () {
    /*=======================
                UI Slider Range JS
    =========================*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [10000, 1000000],
        slide: function (event, ui) {
            $("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val("" + $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
});