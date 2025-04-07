const configIcon = document.getElementById('config-icon');
const configPanel = document.getElementById('config-panel');
const closePanel = document.getElementById('close-panel');

configIcon.onclick = () => configPanel.classList.add('open');
closePanel.onclick = () => configPanel.classList.remove('open');

// Cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('toggle-theme');
themeToggle.onclick = () => {
  document.body.classList.toggle('light');
  themeToggle.innerHTML = document.body.classList.contains('light')
    ? '<i class="bi bi-moon"></i>'
    : '<i class="bi bi-brightness-high"></i>';
};
