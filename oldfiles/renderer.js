// renderer.js

// document.addEventListener('DOMContentLoaded', () => {
//   const openCmdBtn = document.getElementById('openCmdBtn');
  
//   openCmdBtn.addEventListener('click', () => {
//     const { shell } = window.electron;
//     const filePath = 'C:\\Users\\adamc\\Documents\\Games\\Nintendo\\GameBoyAdvance\\Other\\CMD Files\\Pokemon Fire Red.cmd'; // Replace with your command file path
//     shell.openPath(filePath).then(() => {
//       console.log('File opened successfully');
//     }).catch((error) => {
//       console.error('Error opening file:', error.message);
//       alert('Cannot open file: Access denied or an error occurred');
//     });
//   });
// });
  // console.log('Renderer.js is executing');
  // const openCmdBtn = document.getElementById('openCmdBtn');
  // // console.log('Renderer.js loaded');
  // openCmdBtn.addEventListener('click', () => {
  //   console.log('Open CMD button clicked');
  //   const { shell } = window.electron;
  //   const contentDisplayDiv = document.getElementById('contentDisplay');
  //   const filePath = contentDisplayDiv.dataset.cmdFilePath; // Retrieve file path from data attribute

  //   if (filePath) {
  //     console.log('File path found:', filePath);
  //     shell.openPath(filePath).then(() => {
  //       console.log('File opened successfully');
  //     }).catch((error) => {
  //       console.error('Error opening file:', error.message);
  //       alert('Cannot open file: Access denied or an error occurred');
  //     });
  //   } else {
  //     console.error('File path not found');
  //   }
  // });

  function handleOpenCmdButtonClick(filePath) {
    console.log('Open CMD button clicked');
  
    if (filePath) {
      console.log('File path found:', filePath);
      const { shell } = window.electron;
      shell.openPath(filePath)
        .then(() => {
          console.log('File opened successfully');
        })
        .catch((error) => {
          console.error('Error opening file:', error.message);
          alert('Cannot open file: Access denied or an error occurred');
        });
    } else {
      console.error('File path not found');
    }
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Renderer.js is executing');
  
    const openCmdBtn = document.getElementById('openCmdBtn');
    const contentDisplayDiv = document.getElementById('contentDisplay');
    const filePath = contentDisplayDiv.dataset.cmdFilePath;
  
    openCmdBtn.addEventListener('click', () => {
      handleOpenCmdButtonClick(filePath);
    });
  });
  
  // Attach click event listener with the filePath parameter
  // openCmdBtn.addEventListener('click', () => handleOpenCmdButtonClick(filePath));
  
