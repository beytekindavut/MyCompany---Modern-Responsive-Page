
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');

        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
        
      });
      
    });