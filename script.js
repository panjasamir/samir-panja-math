document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenuBtn.innerHTML = navList.classList.contains('active') ? '✕' : '☰';
        });

        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
            current = 'contact';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
