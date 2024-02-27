const header=document.querySelector('header')
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",window.scrollY>100)
})
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')   
}

const readButtons = document.querySelectorAll('.read');

readButtons.forEach(button => {
button.addEventListener('click', function() {
    
    const fullContent = this.previousElementSibling; 
    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        fullContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});
});

const navLinks = document.querySelectorAll('.navlist a');


navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default anchor behavior
        event.preventDefault();

        // Remove 'active' class from all navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked navigation link
        this.classList.add('active');

        // Smooth scroll to the corresponding section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight navigation link based on scroll position
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Remove 'active' class from all navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Determine which section is in view and highlight the corresponding navigation link
    document.querySelectorAll('section').forEach(section => {
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.getElementById(`${sectionId}-link`);
        if (correspondingLink) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

