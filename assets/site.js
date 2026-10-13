// Comportements communs aux pages de la suite Vibe.
// Bouton « Copier » de l'encart contact : chaque page peut contenir un .mail-box.
(function () {
  document.querySelectorAll('.mail-box').forEach(function (box) {
    var btn = box.querySelector('button');
    var txt = box.querySelector('[data-copy]') || box.querySelector('span');
    if (!btn || !txt) return;
    btn.addEventListener('click', function () {
      var value = txt.textContent.trim();
      function fallback() {
        try {
          var r = document.createRange();
          r.selectNodeContents(txt);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(r);
        } catch (e) { /* ignore */ }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          btn.textContent = 'Copié';
          setTimeout(function () { btn.textContent = 'Copier'; }, 1600);
        }).catch(fallback);
      } else {
        fallback();
      }
    });
  });

  // Met en évidence le lien produit de la page courante dans le bandeau « suite Vibe ».
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav.products a').forEach(function (a) {
    var target = (a.getAttribute('href') || '').toLowerCase();
    if (target === here) a.classList.add('on');
  });
})();
