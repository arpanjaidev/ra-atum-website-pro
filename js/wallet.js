document.addEventListener('DOMContentLoaded', function () {
  var box = document.querySelector('.box');
  if (!box) return;
  box.animate(
    [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 650, easing: 'ease-out', fill: 'both' }
  );
});
