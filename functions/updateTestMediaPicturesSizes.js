function updateTestMediaPicturesSizes(width, height, border, borderRadius) {
    // console.log('Function: updateTestMediaPicturesSizes');
    let testMediaPictures = document.querySelectorAll('.testMediaItemPicture');
    testMediaPictures.forEach(testMediaPicture => {
    // Assuming there's a one-to-one correspondence between testMedia and testMediaPictures
      let setHeight = 200; // Fixed height
      if (width === 'auto') {
        // testMedia.style.width = `auto`;
        testMediaPicture.style.width = `auto`;
        testMediaPicture.style.height = `${setHeight}px`;
      }
      else {
        // doesn't this else condition get overwritten afterwards?
        let ratio = width / height; // why does resetting the ratio effect the content?
        let ratioedWidth = setHeight * ratio;
        testMediaPicture.style.width = `${ratioedWidth}px`;
        // testMediaPictures.style.width = `${ratioedWidth}px`;
      }
      testMediaPicture.style.height = `${setHeight}px`;
      let ratio = width / height; // why does resetting the ratio effect the content?
      let ratioedWidth = setHeight * ratio;
      testMediaPicture.style.width = `${ratioedWidth}px`;
      testMediaPicture.style.height = `${setHeight}px`;
      // testMediaPicture.style.width = width;
      // testMediaPicture.style.height = height;
      let testBorderRadius = borderRadius - border - 1;
      if (testBorderRadius < 0) {
        testBorderRadius = 0;
      }
      testMediaPicture.style['border-radius'] = testBorderRadius + `px`;
  });
}

export { updateTestMediaPicturesSizes };