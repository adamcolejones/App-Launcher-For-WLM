window.addEventListener('resize', categoryStyleSimulator);
        
        function categoryStyleSimulator() {
          // console.log("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
          simulatedCategoryWidth = window.innerWidth * 0.4 + 'px';
          simulatedCategoryHeight = window.innerHeight * 0.4 + 'px';
          simulatedCategorySelector = 200 * 0.4 + 'px';
          let simulatedCategoryDiv = document.getElementById('simulatedCategory');
          simulatedCategoryDiv.style.width = simulatedCategoryWidth;
          simulatedCategoryDiv.style.height = simulatedCategoryHeight;
          testMediaContainer.style.width = (window.innerWidth * 0.4) - (200 * 0.4) + 'px';
          testMediaContainer.style.height = (window.innerHeight * 0.4) + 'px';
          testMediaContainer.style['align-content'] = 'flex-start';

          
          // Create the gray rectangle
          let grayRectangle = document.createElement('div');
          grayRectangle.style.width = simulatedCategorySelector; // Set width to match simulatedCategorySelector
          grayRectangle.style.height = simulatedCategoryHeight; // Match the height of the simulatedCategory
          grayRectangle.style.backgroundColor = '#DFDFDF'; // Set the rectangle color to gray
          grayRectangle.style.position = 'absolute'; // Position it absolutely within the simulatedCategory
          grayRectangle.style.left = '0'; // Align it to the leftmost side
          grayRectangle.style.top = '0';

          // Append the gray rectangle to the simulatedCategory
          simulatedCategoryDiv.appendChild(grayRectangle);
        }
        //-----------------------------------------------------------------------------------------
        

        <div id="simulatedCategory">

        </div>