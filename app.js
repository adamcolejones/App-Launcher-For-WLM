// app.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    const submitButton = document.getElementById('submitButton');
  
    // Attach a submit event listener to the form
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        // Get the values entered by the user
        const firstName = document.getElementById('firstName').value;
        const middleName = document.getElementById('middleName').value;
        const lastName = document.getElementById('lastName').value;
  
        // Do something with the collected data
        console.log("First Name:", firstName);
        console.log("Middle Name:", middleName);
        console.log("Last Name:", lastName);

        window.Bridge.saveData(firstName, middleName, lastName);

        // Use Electron's preload script to save the data
        // try {
        //     const response = await window.electron.saveData({ firstName, middleName, lastName });
        //     if (response && response.success) { // Check if the response and success property exist
        //       console.log('Data saved successfully!');
        //     } else {
        //       console.error('Failed to save data.');
        //     }
        //   } catch (error) {
        //     console.error('Error saving data:', error);
        //   }
  
      // For the sake of this example, we'll just reset the form.
      form.reset();
    });
});

// New resize code
