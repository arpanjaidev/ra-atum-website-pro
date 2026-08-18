var hamburgerBtn = document.getElementById('hamburger-btn');
var mobileNavOverlay = document.getElementById('mobile-nav-overlay');
var closeMobileNavBtn = document.getElementById('close-mobile-nav');

if (hamburgerBtn && mobileNavOverlay && closeMobileNavBtn) {
  hamburgerBtn.addEventListener('click', function () { mobileNavOverlay.classList.add('active'); });
  closeMobileNavBtn.addEventListener('click', function () { mobileNavOverlay.classList.remove('active'); });
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') mobileNavOverlay.classList.remove('active');
  });
  window.addEventListener('click', function (event) {
    if (event.target === mobileNavOverlay) mobileNavOverlay.classList.remove('active');
  });
}

function typeText(text, element, index) {
  if (!element) return;
  var position = index || 0;
  element.textContent = text.slice(0, position);
  if (position <= text.length) {
    window.setTimeout(function () { typeText(text, element, position + 1); }, 22);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  typeText('1,000,000,000 RA • NativeGasAsset • 0 decimals', document.getElementById('supply-typing'));
  window.setTimeout(function () {
    typeText('1,000,000,000 RAK • NativeLedgerAsset • 0 decimals', document.getElementById('startprice-typing'));
  }, 240);
  window.setTimeout(function () {
    typeText('RA ATUM HEKA127 • Chain ID 127', document.getElementById('launchprice-typing'));
  }, 480);

  var details = [
    'RA — native gas coin. Supply: 1,000,000,000. No contract address.',
    'RAK — separate RA KIDS reward asset. Supply: 1,000,000,000. Activation height: 380.',
    'Separation — RA and RAK do not automatically convert into one another.',
    'Evidence — balances and activity become canonical only through validator finality.'
  ];
  details.forEach(function (detail, index) {
    window.setTimeout(function () { typeText(detail, document.getElementById('detail-' + (index + 1))); }, 850 + index * 220);
  });

  var canvas = document.getElementById('tokenomicsChart');
  if (!canvas || typeof Chart === 'undefined') return;
  var chart = new Chart(canvas.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Native RA registry', 'RA KIDS RAK registry'],
      datasets: [{
        data: [0, 0],
        backgroundColor: ['rgba(255,106,213,0.92)', 'rgba(0,180,250,0.98)'],
        borderColor: ['rgba(255,106,213,1)', 'rgba(0,180,250,1)'],
        borderWidth: 2.7
      }]
    },
    options: {
      cutout: '70%',
      plugins: { legend: { display: false }, tooltip: { enabled: true } }
    }
  });

  var frame = 0;
  function animateRegistry() {
    frame += 0.04;
    var value = Math.min(1, frame);
    chart.data.datasets[0].data = [value, value];
    chart.update();
    if (value < 1) window.requestAnimationFrame(animateRegistry);
  }
  window.setTimeout(animateRegistry, 350);
});
