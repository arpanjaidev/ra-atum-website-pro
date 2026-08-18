const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const closeMobileNavBtn = document.getElementById('close-mobile-nav');

function closeMobileNav() {
  if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
}

if (hamburgerBtn && mobileNavOverlay && closeMobileNavBtn) {
  hamburgerBtn.onclick = () => mobileNavOverlay.classList.add('active');
  closeMobileNavBtn.onclick = closeMobileNav;
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileNav();
  });
  window.addEventListener('click', event => {
    if (event.target === mobileNavOverlay) closeMobileNav();
  });
}

let lastScroll = window.scrollY;
function handleZigzagAnimation() {
  const images = document.querySelectorAll('.zigzag-img');
  if (window.scrollY > lastScroll) {
    images.forEach((image, index) => {
      setTimeout(() => image.classList.add('visible'), index * 350);
    });
  } else {
    images.forEach((image, index) => {
      setTimeout(() => image.classList.remove('visible'), index * 120);
    });
  }
  lastScroll = window.scrollY;
}

window.addEventListener('scroll', handleZigzagAnimation, { passive: true });
window.addEventListener('DOMContentLoaded', handleZigzagAnimation);

const evidenceText = `RA ATUM is built around evidence, controlled change and developer authority.

The working testnet records real blocks and finalized transactions across validator infrastructure. HEKA127 observes network evidence, detects anomalies, diagnoses likely causes and prepares proposals for review.

HEKA127 Brain advises; blockchain decides. Unknown evidence remains Unknown, private keys remain protected and production mutation requires explicit approval.`;

const aboutText = `RA ATUM is a Made in India original Layer-1 blockchain built with a C++ core, its own consensus architecture and the HEKA127 Operating Brain.

RA is the network's native gas coin. RAK is a separate on-chain RA KIDS reward asset for games and shopping activity. The two assets have different roles and direct conversion is disabled.

RA KIDS brings real users and real activity into the testnet, while Node Operators, validators, the Explorer and controlled infrastructure build the path toward a secure mainnet.`;

function typeText(text, element, index = 0) {
  if (!element || index > text.length) return;
  element.innerHTML = text.slice(0, index).replace(/\n/g, '<br>');
  setTimeout(() => typeText(text, element, index + 1), 13 + Math.random() * 33);
}

document.addEventListener('DOMContentLoaded', () => {
  typeText(evidenceText, document.getElementById('audits-typing'));
  typeText(aboutText, document.getElementById('about-typing'));
});

function updateEvidenceImages() {
  for (let index = 1; index <= 3; index += 1) {
    const image = document.getElementById(`audits-img-${index}`);
    if (!image) continue;
    const rect = image.getBoundingClientRect();
    image.classList.toggle('visible', rect.top < window.innerHeight && rect.bottom > 0);
  }
}

window.addEventListener('scroll', updateEvidenceImages, { passive: true });
window.addEventListener('resize', updateEvidenceImages);
window.addEventListener('DOMContentLoaded', updateEvidenceImages);

const footerLine = 'RA ATUM — Architecture First. Intelligence Always.';
const footerTypingElement = document.getElementById('footer-typing-shine');
let footerIndex = 0;
let footerForward = true;
let cursorVisible = true;

function typeFooterLine() {
  if (!footerTypingElement) return;
  const cursor = `<span class="footer-typing-cursor">${cursorVisible ? '|' : '&nbsp;'}</span>`;
  footerTypingElement.innerHTML = footerLine.substring(0, footerIndex) + cursor;
  if (footerForward) {
    if (footerIndex <= footerLine.length) {
      footerIndex += 1;
      setTimeout(typeFooterLine, 180);
    } else {
      footerForward = false;
      setTimeout(typeFooterLine, 2400);
    }
  } else if (footerIndex >= 0) {
    footerIndex -= 1;
    setTimeout(typeFooterLine, 60);
  } else {
    footerForward = true;
    setTimeout(typeFooterLine, 2200);
  }
}

setInterval(() => {
  cursorVisible = !cursorVisible;
}, 550);
typeFooterLine();

const raroboVideo = document.getElementById('raroboVideo');
const raroboMute = document.getElementById('raroboMute');
if (raroboVideo && raroboMute) {
  const ensureVideoPlays = () => {
    const playRequest = raroboVideo.play();
    if (playRequest && playRequest.catch) playRequest.catch(() => {});
  };
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) ensureVideoPlays();
  });
  raroboMute.addEventListener('click', () => {
    raroboVideo.muted = !raroboVideo.muted;
    raroboMute.textContent = raroboVideo.muted ? '🔇' : '🔊';
    raroboMute.setAttribute('aria-label', raroboVideo.muted ? 'Unmute video' : 'Mute video');
    raroboMute.title = raroboVideo.muted ? 'Unmute' : 'Mute';
    ensureVideoPlays();
  });
  ensureVideoPlays();
}

/* Header TPS performance animation: 0 → 80,000 in exactly one second, then blink. */
(() => {
  const counter = document.getElementById("tps-counter");
  const panel = document.getElementById("header-tps");
  if (!counter || !panel) return;

  const peak = 80000;
  const durationMs = 1000;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    counter.textContent = peak.toLocaleString("en-US");
    return;
  }

  const runCycle = () => {
    const startedAt = performance.now();
    panel.classList.remove("tps-hit");
    counter.textContent = "0";

    const draw = (now) => {
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const value = Math.floor(peak * progress);
      counter.textContent = value.toLocaleString("en-US");

      if (progress < 1) {
        requestAnimationFrame(draw);
        return;
      }

      counter.textContent = peak.toLocaleString("en-US");
      panel.classList.add("tps-hit");
      window.setTimeout(() => {
        panel.classList.remove("tps-hit");
        window.setTimeout(runCycle, 220);
      }, 760);
    };

    requestAnimationFrame(draw);
  };

  runCycle();
})();

