// *************************************************************************************************************************************************
// ipcMain.on("saveMedia", (sender, newData, imagePath) => {
//   try {
//       // Read the existing data from the file, or initialize an empty array if the file doesn't exist
//       let existingData = fs.existsSync("data.json")
//           ? fs.readFileSync("data.json", "utf8") : '';
//       let jsonData = JSON.parse(existingData);  // Parse the existing JSON data into a JavaScript object
//       let mediaArray = jsonData.Media; // Get the "names" array from the jsonData
//       mediaArray.push(newData); // Add the new data to the "names" array
//       mediaArray.sort((a, b) => a.Name.localeCompare(b.Name));  // Sort the "names" array alphabetically by "firstName"
//       let updatedData = JSON.stringify(jsonData, null, 2);  // Convert the modified jsonData back to JSON string
//       fs.writeFileSync("data.json", updatedData);  // Write the updated JSON string back to the file
//       if (imagePath) {
//         const newPath = path.join(__dirname, 'assets', 'media', `${newData.id}.png`);
//         fs.copyFileSync(imagePath, newPath);
//       }
  
//       console.log(`${newData.id} Data Saved`);
//   } catch (error) {console.error("Error while saving data:", error.message);}
// });


// *************************************************************************************************************************************************
// ipcMain.on("updateMedia", (sender, newData, imagePath) => {
//   console.log(newData, imagePath);
//   try {
//     // existing data variable assignments
//     let existingData = fs.existsSync("data.json") ? fs.readFileSync("data.json", "utf8") : '';
//     let jsonData = JSON.parse(existingData);
//     let mediaArray = jsonData.Media;

//     // Find the index of the item with the matching id
//     const indexToUpdate = mediaArray.findIndex(item => item.id === newData.id);

//     if (indexToUpdate !== -1) {
//       // If an item with the matching id is found, update it
//       mediaArray[indexToUpdate] = { ...mediaArray[indexToUpdate], ...newData };
//     } else {
//       // If no matching id is found, simply add the new data to the array
//       mediaArray.push(newData);
//     }

//     mediaArray.sort((a, b) => a.Name.localeCompare(b.Name));
//     let updatedData = JSON.stringify(jsonData, null, 2);
//     fs.writeFileSync("data.json", updatedData);

//     if (imagePath !== "null") {
//       const newPath = path.join(__dirname, 'assets', 'media', `${newData.id}.png`);
//       fs.copyFileSync(imagePath, newPath);
//     } else {
//       // If imagePath is null or "null", retain the existing Image value
//       // newData.Image = mediaArray[indexToUpdate].Image;
//     }

//     console.log(`${newData.id} Data Saved`);
//   } catch (error) {
//     console.error("Error while saving data:", error.message);
//   }
// });

// *************************************************************************************************************************************************
