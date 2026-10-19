document.querySelectorAll('main a[href^="http"]').forEach(function (a) {
  if (a.origin !== location.origin) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
});

document.getElementById('theme').addEventListener('click', function () {
  var r = document.documentElement;
  var dark = r.dataset.theme
    ? r.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  r.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', r.dataset.theme); } catch (e) {}
});
