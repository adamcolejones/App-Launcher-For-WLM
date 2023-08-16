const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupContainer = document.getElementById('popupContainer');

openPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    document.body.style.overflow = "hidden"; // Disable scrolling
});

document.addEventListener('DOMContentLoaded', () => {
    const closePopupButton = document.getElementById('closePopupButton');
  
    if (closePopupButton) {
      closePopupButton.addEventListener('click', () => {
        // Your click event handling code here
        popupContainer.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
      });
    }
  });