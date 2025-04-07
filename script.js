document.getElementById('config-icon').addEventListener('click', function() {
    document.getElementById('config-panel').classList.toggle('active');
});

document.getElementById('close-panel').addEventListener('click', function() {
    document.getElementById('config-panel').classList.remove('active');
});
