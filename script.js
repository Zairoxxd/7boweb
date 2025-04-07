document.getElementById('config-icon').addEventListener('click', function() {
    document.getElementById('config-panel').classList.add('open');
});

document.getElementById('close-panel').addEventListener('click', function() {
    document.getElementById('config-panel').classList.remove('open');
});
