//Setup and start animation! 

  var typed = new Typed('#element', {
    strings: ['I am a web developer', 'I am a Frontend developer'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay: 1000,
    loop:true
  });

    
    const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.links ul');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  




