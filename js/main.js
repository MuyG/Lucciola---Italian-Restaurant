// Collapsed nav for smaller screens
const collapsedNav = {
    displayed: false,
    collapsed: true,
    clicked(){
        if(collapsedNav.collapsed == true) {
            document.querySelector('#collapsed-nav').style.right = `${viewport.collapsedNavRight}px`
            document.querySelector('nav').style.transform = `translateX(${viewport.navTranslateX}px)`;
            collapsedNav.collapsed = false
        }

        else {
            document.querySelector('#collapsed-nav').style.right = '-400px'
            document.querySelector('nav').style.transform= "translateX(0)";
            collapsedNav.collapsed = true
        }
    }
}

// Check viewport size to see how far to translate the side bar and move the nav icon
const viewport = {
    collapsedNavRight: 0,
    navTranslateX: -200,
    size: window.matchMedia("(max-width: 600px)"),

    checkSize(){
        if(viewport.size.matches){
            viewport.collapsedNavRight = -100
            viewport.navTranslateX = -120
        }
    }
}

viewport.checkSize()

document.getElementById('collapsed-nav-icon').addEventListener('click', _ => collapsedNav.clicked())

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('header').style.height = "75px";
    document.querySelector('header').style.backgroundColor = "rgba(255,255,255,0.7)";
    document.querySelector('header').style.backdropFilter = "blur(5px)";
    document.querySelector('nav').style.transform= "translateX(0)";
    document.querySelector('.logo img').style.width = "50px";
    document.querySelector('#collapsed-nav').style.right = '-400px'
    collapsedNav.collapsed = true
  } else {
    document.querySelector('header').style.height = "150px";
    document.querySelector('header').style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector('header').style.backdropFilter = "blur(0)";
    document.querySelector('nav').style.transform= "translateX(0)";
    document.querySelector('.logo img').style.width = "110px";
    document.querySelector('#collapsed-nav').style.right = '-400px'
    collapsedNav.collapsed = true
  }
}