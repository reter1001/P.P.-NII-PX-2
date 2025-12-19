
function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navItems = document.querySelectorAll('.header__nav-bar li');
    
    if (!hamburgerBtn || !navMenu) return;
    
    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100 + 100);
            });
        } else {
            document.body.style.overflow = ''; 
            navItems.forEach(item => {
                item.classList.remove('show');
            });
        }
    }
    
    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        navItems.forEach(item => {
            item.classList.remove('show');
        });
    }
    
    hamburgerBtn.addEventListener('click', toggleMenu);
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', closeMenu);
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

document.addEventListener('DOMContentLoaded', initHamburgerMenu);