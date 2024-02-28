import { updateTestMediaPicturesSizes } from './updateTestMediaPicturesSizes.js';

function updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap) {
    const scrollableContent = document.querySelector('.scrollableContent');
    updateTestMediaPicturesSizes(width, height, border, borderRadius);
    // console.log('------------------------------');
    // console.log('Function: Update Media Styling');
    testMediaElements.forEach(testMedia => {
        // console.log('Function: Update Media Styling For Each Test Media Item');
        // functionCount += 1;
        // Set initial styling
        // Prevent user from setting odd numbered values for borders and padding, this will keep content evenly spaced when calculating positioning.  User can fix this by using bigger even numbers
        // This actually wouldn't help when we have to divide the values, 10 would become 5, 6 - 3, etc.
        // If ratioed media width exceeds box width, allow the new width to be set to preserve original dimensions: if the user wants to display media this way
        let setHeight = 200; // Fixed height for displayed media
        // If width = auto, then skip the ratioed width and set it to auto
        if (width === 'auto') {
            testMedia.style.width = `auto`;
            // testMediaPictures.style.width = `auto`;
            // testMedia.style.height = `${setHeight}px`;
        }
        else {
            let ratio = width / height; // why does resetting the ratio effect the content?
            let ratioedWidth = setHeight * ratio;
            testMedia.style.width = `${ratioedWidth}px`;
            // testMediaPictures.style.width = `${ratioedWidth}px`;
        }
        testMedia.style.height = `${setHeight}px`;
        // testMedia.style.width = `${ratioedWidth}px`;
        // testMedia.style.height = `${setHeight}px`;
        testMedia.style.border = `${border}px solid ${borderColor}`;
        testMedia.style['border-radius'] = `${borderRadius}px`;
        testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
        // Create separate styling depending on whether or not the media is hovered over by the mouse, Apply hoverable styling when mouse enters
        // I should allow any dimensions to be applied to the custom tab, while using a fixed height.
        // for new hovered border, include a "same size as gap" option
        testMedia.addEventListener('mouseenter', function() {
        // on mouse enter, play a sound effect.  This would be where to put it.
        // You could make a function that times the sound effects to have different pitches based on how many are hovered in a breif moment.  Musical selection menus.
        // POSSIBLE IDEA, I could create a copy of the media and position it in the middle to enlarge it without affecting the flex box order and layout: Enlarge selected media
        let floatingBorderElement = testMedia.parentNode.querySelector('.testMediaCopy');
        // Check to see if border already exists, do not clone more than one item
        // floating border should hug the media, not the border of the media.  There is an issue that the clone is cancelling the hover effect when placed ontop of original media
        if (!floatingBorderElement) {
            testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
            const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item
            let scrollDistanceLeft = scrollableContent.scrollLeft;
            let scrollDistanceTop = scrollableContent.scrollTop;
            const sideMenuWidth = 200; // Width of the side menu
            floatingBorderElement = testMedia.cloneNode(true);
            floatingBorderElement.classList.add('testMediaCopy');
            floatingBorderElement.style.position = 'absolute';
            floatingBorderElement.style.zIndex = '4';
            floatingBorderElement.style['background-color'] = 'transparent';
            floatingBorderElement.style.border = `${floatingBorder}px solid ${floatingBorderColor}`;
            floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
            floatingBorderPadding = (border) + (floatingBorderGap) + 'px';
            let floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceTop) - 50}px`;
            let floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`;
            floatingBorderElement.style.padding = floatingBorderPadding;
            floatingBorderElement.style.top = floatingBorderTopAdjustment;
            floatingBorderElement.style.left = floatingBorderLeftAdjustment;
            testMedia.parentNode.appendChild(floatingBorderElement);
        }
        });
        //-----------------------------------------------------------------------------------------
        // These listeners are placed after the media conatiners and copy backgrounds have been identified.
        // Revert back to default non-hoverable styling when mouse leaves
        testMedia.addEventListener('mouseleave', function() {
        testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
        const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
        copies.forEach(copy => {
            copy.parentNode.removeChild(copy);
        });
        });
    });
}

export { updateMediaStyling };

// everything within this for each loop is repeated per item
// need to move alot of these functions outside of this loop to prevent refiring 74 times over
