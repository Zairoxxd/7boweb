function toggleConfigPanel() {
    const configPanel = document.getElementById('configPanel');
    configPanel.style.display = (configPanel.style.display === 'flex') ? 'none' : 'flex';
}

function closeConfigPanel() {
    document.getElementById('configPanel').style.display = 'none';
}
