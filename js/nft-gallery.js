// Hamburger menu logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileNavBtn = document.getElementById('close-mobile-nav');
    hamburgerBtn.onclick = () => { mobileNavOverlay.classList.add('active'); }
    closeMobileNavBtn.onclick = () => { mobileNavOverlay.classList.remove('active'); }
    function closeMobileNav() { mobileNavOverlay.classList.remove('active'); }

    // Zigzag support images scroll-in effect
    function supportInView() {
      const isMobile = window.innerWidth < 650;
      const rows = document.querySelectorAll('.support-img-row');
      rows.forEach((row, i) => {
        const rect = row.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.87 && rect.bottom > 0;
        if (inView) {
          row.classList.add('visible');
        } else {
          row.classList.remove('visible');
        }
      });
    }
    window.addEventListener('scroll', supportInView);
    window.addEventListener('resize', supportInView);
    window.addEventListener('DOMContentLoaded', supportInView);

    // On mobile, always fade/slide up
    function updateSupportRowsForMobile() {
      const isMobile = window.innerWidth < 650;
      const rows = document.querySelectorAll('.support-img-row');
      rows.forEach(row => {
        if (isMobile) {
          row.classList.remove('left','right');
        }
      });
      supportInView();
    }
    window.addEventListener('resize', updateSupportRowsForMobile);
    window.addEventListener('DOMContentLoaded', updateSupportRowsForMobile);

    // FAQ & Issues popup modals
    function openModal(type) {
      document.getElementById('faq-modal').classList.remove('active');
      document.getElementById('issues-modal').classList.remove('active');
      if(type === 'faq') {
        document.getElementById('faq-modal').classList.add('active');
      } else if(type === 'issues') {
        document.getElementById('issues-modal').classList.add('active');
      }
    }
    function closeModal(e) {
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
        document.getElementById('faq-modal').classList.remove('active');
        document.getElementById('issues-modal').classList.remove('active');
      }
    }
