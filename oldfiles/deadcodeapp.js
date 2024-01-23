

      // Add a click event listener to grid item picture tags to switch content
      // const gridItemPictures = document.querySelectorAll('.griditempicture');
      // gridItemPictures.forEach(gridItemPicture => {
      //     gridItemPicture.addEventListener('click', () => {
      //         // Remove the 'selected' class from all grid item pictures
      //         // gridItemPictures.forEach(itemPicture => {
      //         //     itemPicture.classList.remove('selected');
      //         // });

      //         // Add the 'selected' class to the clicked grid item picture
      //         // gridItemPicture.classList.add('selected');
      //         // const selectedTag = gridItemPicture.getAttribute('data-tag'); // Assuming you have a data attribute 'data-tag'
      //         // displayContentForTag(selectedTag);
      //         // Scroll to the top of the scrollable-content div
      //         const scrollableContentDiv = document.querySelector('.scrollableContent');
      //         if (scrollableContentDiv) {
      //             scrollableContentDiv.scrollTop = 0;
      //         }
      //     });
      // });

      // Display Media Based on the associated tags
      // for (const tag of sortedTags) {
      //   dataDisplayDiv.innerHTML += `<div class="gridtype">${tag}</div>`;
      //   dataDisplayDiv.innerHTML += createGrid(tagSections[tag]);
      // }

      // Display Data based on Key Value (Media, Name, not by the associated Tags)
      // for (const key in data) {
      //   if (Array.isArray(data[key])) {
      //     dataDisplayDiv.innerHTML += `<div class="gridtype">${key}</div>`;
      //     dataDisplayDiv.innerHTML += createGrid(data[key]);
      //   }
      // }

      // Function to calculate the highest ID from media data
    // function calculateHighestId(data) {
    //   const existingIds = data.map((item) => item.id || 0);
    //   return existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // }