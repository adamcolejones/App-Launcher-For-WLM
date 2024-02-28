function wrapChange(wrap) {
    let testMediaContainer = document.getElementById('testMediaContainer');
    if (wrapCheckbox.checked) {
      wrap = 'wrap';
      testMediaContainer.style['flex-wrap'] = `${wrap}`;
      testMediaContainer.style.width = `auto`;
    } else {
      wrap = 'nowrap';
      testMediaContainer.style['flex-wrap'] = wrap;
      testMediaContainer.style.width = `max-content`;
    } // document.getElementById("wrapValue").textContent = `Wrap: ${wrap}`;
    return wrap;
  }

  export { wrapChange };