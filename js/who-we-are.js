var ROLES = [
  { title: 'Founder', name: 'Arpan Jaidev', focus: 'Architecture & Network Direction', stack: 'C++ · Consensus · HEKA127', loc: 'Made in India', skills: [96, 90, 92], tags: ['Architecture', 'Layer-1', 'HEKA127', 'Roadmap'], svgId: 'svg-ceo' },
  { title: 'Layer-1 Core', name: 'RA ATUM', focus: 'Ledger, Assets & Validation', stack: 'C++ · Native Assets · Finality', loc: 'HEKA127 Network', skills: [96, 88, 94], tags: ['Native RA', 'RAK', 'Chain ID 127', 'Addresses'], svgId: 'svg-tech' },
  { title: 'Operating Brain', name: 'HEKA127', focus: 'Reasoned Advice & Evidence', stack: 'Policy · Reasons · Records', loc: 'No Key Custody', skills: [92, 84, 96], tags: ['Explainable', 'Fail-Closed', 'Evidence', 'Advice'], svgId: 'svg-dev' },
  { title: 'Validator Network', name: 'Five-Validator Testnet', focus: 'Membership & Finality', stack: 'Candidates · Approval · Consensus', loc: 'Controlled Testnet', skills: [90, 94, 96], tags: ['Signed Members', 'Finality', 'Explorer', 'Node Operators'], svgId: 'svg-ops' },
  { title: 'RA KIDS', name: 'RAK Activity', focus: 'Games, Shopping & Learning', stack: 'NativeLedgerAsset · 0 Decimals', loc: 'Activation Height 380', skills: [88, 86, 92], tags: ['RA KIDS', 'RAK', '1 RA Gas', 'Finalized Activity'], svgId: 'svg-comms' }
];

function setBar(element, percentage) {
  if (element) element.style.width = Math.max(0, Math.min(100, percentage)) + '%';
}

function setText(id, value) {
  var element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setPhoto() {
  var image = document.getElementById('p-photo');
  if (image) image.src = 'RA-ATUM-LOGO.png';
}

function selectRole(index) {
  var role = ROLES[index];
  if (!role) return;
  setText('p-role', role.title);
  setText('p-name', role.name);
  setText('p-focus', role.focus);
  setText('p-stack', role.stack);
  setText('p-loc', role.loc);

  role.skills.forEach(function (skill, skillIndex) {
    setBar(document.getElementById('s' + (skillIndex + 1)), skill);
    setText('s' + (skillIndex + 1) + 'v', skill + '%');
  });

  var chips = document.getElementById('p-tags');
  if (chips) {
    chips.innerHTML = '';
    role.tags.forEach(function (tag) {
      var chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = tag;
      chips.appendChild(chip);
    });
  }

  var character = document.getElementById('char');
  var template = document.getElementById(role.svgId);
  if (character && template) character.innerHTML = template.outerHTML;
  setPhoto();

  document.querySelectorAll('.role-btn').forEach(function (button, buttonIndex) {
    button.classList.toggle('active', buttonIndex === index);
  });
}

document.addEventListener('DOMContentLoaded', function () { selectRole(0); });
