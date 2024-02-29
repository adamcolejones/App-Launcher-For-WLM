
function settingsMenu() {
    const editCategoryMenu = document.getElementById('editCategoryMenu');
    if (editCategoryMenu.style.display === 'block') {
        editCategoryMenu.style.display = 'none';
    } else {
        editCategoryMenu.style.display = 'block';
    }
}

export { settingsMenu };