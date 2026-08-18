// Image fade-in on scroll (right side images)
    function showKidsActivityImagesOnScroll() {
      var imgs = [document.getElementById('kids-activity-img1'), document.getElementById('kids-activity-img2')];
      imgs.forEach(function(img) {
        if (!img) return;
        var rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.bottom > 40) {
          img.classList.add('visible');
        } else {
          img.classList.remove('visible');
        }
      });
    }
    window.addEventListener('scroll', showKidsActivityImagesOnScroll, { passive: true });
    window.addEventListener('DOMContentLoaded', showKidsActivityImagesOnScroll);
