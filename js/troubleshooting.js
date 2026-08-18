// Accordion logic
    document.querySelectorAll('.accordion-header').forEach((header, idx) => {
      header.addEventListener('click', function() {
        // Only one open at a time (except first section)
        document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
      });
    });
    // Keep the first open on load
    document.querySelector('.accordion-header').classList.add('active');
    document.querySelector('.accordion-content').classList.add('active');
