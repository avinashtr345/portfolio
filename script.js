
const span = document.querySelector('h3 span')

const wordsList = ['Developer.', 'Coder.', ]
const wordsList2 = ['Student.', 'Developer.', 'Coder.', ]

function autoType(wordsList, element, time) {
  let wordIndex = 0
  let characterIndex = 0
  let skipUpdate = 0
  let reverseType = false

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--
      return
    }

    if (!reverseType) {
      skipUpdate = 2
      element.innerText = element.innerText + wordsList[wordIndex][characterIndex]
      characterIndex++
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1)
      characterIndex--
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 6
      reverseType = true
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false
      wordIndex++
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0
    }
  }, 100)
}

autoType(wordsList2, span)




let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclicl=()=>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')

}


let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
  let top = window.scrollY;
  let offset=sec.offsetTop-150;
  let height=sec.offsetHeight;
  let id = sec.getAttribute('id')

  if(top>=offset && top <offset+height)
  {
     navLinks.forEach(links=>{
      links.classList.remove('active');
      document.querySelector('header nav a[href*= '+ id + ']').classList.add('active');
     });
  };
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};
        
ScrollReveal({
  
  
  
  distance:'80px',
  duration:2000,
  delay:200

});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});



   
