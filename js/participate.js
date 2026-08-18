// Set image stack height to match participate-content section
    function alignImageStackHeight() {
      var content = document.getElementById('participate-section');
      var stack = document.getElementById('image-stack-aligner');
      if (content && stack) {
        stack.style.height = content.offsetHeight + "px";
      }
    }

    // Also re-align after all images load
    function imagesLoaded(callback) {
      var images = document.querySelectorAll('.gallery-img-vertical');
      var loaded = 0;
      if (images.length === 0) return callback();
      images.forEach(function(img) {
        if (img.complete) loaded++;
        else img.addEventListener('load', function() {
          loaded++;
          if (loaded === images.length) callback();
        });
      });
      if (loaded === images.length) callback();
    }

    function alignAll() {
      alignImageStackHeight();
      animateVerticalImgs();
    }

    window.addEventListener('resize', alignAll);
    window.addEventListener('DOMContentLoaded', function() {
      imagesLoaded(alignAll);
      alignAll();
    });

    // Animate images in/out when scrolling
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight - 30 && rect.bottom > 0
      );
    }
    function animateVerticalImgs() {
      for (let i = 1; i <= 4; ++i) {
        let img = document.getElementById('vimg' + i);
        if (!img) continue;
        if (isInViewport(img)) {
          img.classList.add('visible');
        } else {
          img.classList.remove('visible');
        }
      }
    }
    window.addEventListener('scroll', animateVerticalImgs, {passive:true});
