function checkImageInView() {
  var image = document.getElementById('scroll-img');
  var row = document.querySelector('.token-supply-row-img');
  if (!image || !row) return;
  var rect = row.getBoundingClientRect();
  image.classList.toggle('visible', rect.top < window.innerHeight * 0.82 && rect.bottom > 50);
}

window.addEventListener('scroll', checkImageInView, { passive: true });
window.addEventListener('resize', checkImageInView);
window.addEventListener('DOMContentLoaded', checkImageInView);
