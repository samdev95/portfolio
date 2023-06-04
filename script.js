// header toggle

let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-window-close-o')
})

// typing effect

let typed = new Typed('.auto-input',{
    // strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer!', 'Youtuber!'],
    strings: ['Software Engineer!', 'Front-End Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// Active Link State On Scroll
// Get All Links
let navLinks = document.querySelectorAll('nav ui li a')
// Get All Sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});
