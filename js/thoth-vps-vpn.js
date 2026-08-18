// Fade in the About section
    window.addEventListener('DOMContentLoaded', ()=>{
      setTimeout(()=>{
        document.querySelector('.about-section').classList.add('visible');
      }, 1300);
    });

    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileNavBtn = document.getElementById('close-mobile-nav');

    function openMobileNav() {
      mobileNavOverlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    function closeMobileNav() {
      mobileNavOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
    hamburgerBtn.addEventListener('click', openMobileNav);
    closeMobileNavBtn.addEventListener('click', closeMobileNav);

    // Also close when any mobile link is clicked
    document.querySelectorAll('.mobile-nav a').forEach(link=>{
      link.addEventListener('click', closeMobileNav);
    });
