document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('chatbox-form');
  var input = document.getElementById('chatbox-input');
  var messages = document.getElementById('chatbox-messages');
  if (!form || !input || !messages) return;

  var answers = [
    { words: ['heka', 'brain', 'advice'], text: 'HEKA127 evaluates evidence and records a reasoned recommendation. Validators and signed membership remain authoritative.' },
    { words: ['validator', 'node', 'operator'], text: 'The admission path is candidate, HEKA127 qualification, approval, then active validator. Missing evidence fails closed.' },
    { words: ['finality', 'finalized', 'consensus'], text: 'Only finalized validator evidence is canonical. A record that cannot be found remains Unknown.' },
    { words: ['rak', 'kids'], text: 'RAK is the separate RA KIDS NativeLedgerAsset: 1,000,000,000 supply, 0 decimals, activation height 380, and no contract address.' },
    { words: ['gas', 'native', 'ra coin'], text: 'RA is the NativeGasAsset: 1,000,000,000 supply, 0 decimals. Current RAK activity uses a fixed 1 RA gas policy.' },
    { words: ['address'], text: 'A RA ATUM address uses ra followed by 40 lowercase hexadecimal characters.' }
  ];

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var question = input.value.trim();
    if (!question) return;
    var userLine = document.createElement('div');
    userLine.innerHTML = '<b>You:</b> ' + escapeHtml(question);
    messages.appendChild(userLine);
    var normalized = question.toLowerCase();
    var match = answers.find(function (entry) {
      return entry.words.some(function (word) { return normalized.indexOf(word) !== -1; });
    });
    var guideLine = document.createElement('div');
    guideLine.innerHTML = '<b>Guide:</b> ' + (match ? match.text : 'Use finalized explorer evidence and the network pages for verified RA ATUM facts. Never share private keys.');
    messages.appendChild(guideLine);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  });
});

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, function (character) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character];
  });
}
