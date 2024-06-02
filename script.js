// ScrollToTop Section 
const scrollToTop = document.querySelector(".scroll-top-style");

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100 ) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none"
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// toggleBar 

const mobileNav = document.querySelector(".menu-icon");
const navHeader = document.querySelector(".header-section");

const toggleNavbar = () =>{
    navHeader.classList.toggle("active-class")
}

mobileNav.addEventListener('click', () => toggleNavbar());