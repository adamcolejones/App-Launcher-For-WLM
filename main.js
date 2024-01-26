// ********************************************************
// * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// ********************************************************
// + This file is the starting point for json file access
// + main.js >> preload.js >> app.js >> next reference...
// ********************************************************


// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain} = require('electron');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
let mainWindow;
// const Store = require('store.js');

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 1. Backend Communication
      nodeIntegration: true,
      // webSecurity: false, // Disable web security to allow cross-origin requests
      // contextIsolation: true,
      // enableRemoteModule: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile('main.html')  // 2. Backend Communication
  ipcMain.on('run-cmd-file', (event, filePath) => {
    // Use child_process to execute the CMD file
    exec(filePath, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing CMD file: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`CMD file execution error: ${stderr}`);
        return;
      }
      console.log(`CMD file executed successfully: ${stdout}`);
    });
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Add the following IPC handler to save data to "data.json"

// 5. Backend Communication
//
//
//
ipcMain.on("saveName", (sender, newData) => {
    try {
        // Read the existing data from the file, or initialize an empty array if the file doesn't exist
        let existingData = fs.existsSync("data.json")
            ? fs.readFileSync("data.json", "utf8")
            : '{"games":[],"media":[],"movies":[],"names":[],"shows":[],"songs":[]}';
        // Parse the existing JSON data into a JavaScript object
        let jsonData = JSON.parse(existingData);
        // Get the "names" array from the jsonData
        let namesArray = jsonData.Names;
        // Add the new data to the "names" array
        namesArray.push(newData);
        // Sort the "names" array alphabetically by "firstName"
        namesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
        // Convert the modified jsonData back to JSON string
        let updatedData = JSON.stringify(jsonData, null, 2);
        // Write the updated JSON string back to the file
        fs.writeFileSync("data.json", updatedData);
        console.log("Data Saved");
    } catch (error) {
        console.error("Error while saving data:", error.message);
    }
});

// SAVE MEDIA
//
//
//
ipcMain.on("saveMedia", (sender, newData, imagePath) => {
  try {
      // Read the existing data from the file, or initialize an empty array if the file doesn't exist
      let existingData = fs.existsSync("data.json")
          ? fs.readFileSync("data.json", "utf8") : '';
      let jsonData = JSON.parse(existingData);  // Parse the existing JSON data into a JavaScript object
      let mediaArray = jsonData.Media; // Get the "names" array from the jsonData
      mediaArray.push(newData); // Add the new data to the "names" array
      mediaArray.sort((a, b) => a.Name.localeCompare(b.Name));  // Sort the "names" array alphabetically by "firstName"
      let updatedData = JSON.stringify(jsonData, null, 2);  // Convert the modified jsonData back to JSON string
      fs.writeFileSync("data.json", updatedData);  // Write the updated JSON string back to the file
      if (imagePath) {
        const newPath = path.join(__dirname, 'assets', 'media', `${newData.id}.png`);
        fs.copyFileSync(imagePath, newPath);
      }
  
      console.log(`${newData.id} Data Saved`);
  } catch (error) {console.error("Error while saving data:", error.message);}
});

// UPDATE MEDIA
//
//
//
ipcMain.on("updateMedia", (sender, newData, imagePath) => {
  console.log(newData, imagePath);
  try {
    let existingData = fs.existsSync("data.json") ? fs.readFileSync("data.json", "utf8") : '';
    let jsonData = JSON.parse(existingData);
    let mediaArray = jsonData.Media;

    // Find the index of the item with the matching id
    const indexToUpdate = mediaArray.findIndex(item => item.id === newData.id);

    if (indexToUpdate !== -1) {
      // If an item with the matching id is found, update it
      mediaArray[indexToUpdate] = { ...mediaArray[indexToUpdate], ...newData };
    } else {
      // If no matching id is found, simply add the new data to the array
      mediaArray.push(newData);
    }

    mediaArray.sort((a, b) => a.Name.localeCompare(b.Name));
    let updatedData = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync("data.json", updatedData);

    if (imagePath !== "null") {
      const newPath = path.join(__dirname, 'assets', 'media', `${newData.id}.png`);
      fs.copyFileSync(imagePath, newPath);
    } else {
      // If imagePath is null or "null", retain the existing Image value
      // newData.Image = mediaArray[indexToUpdate].Image;
    }

    console.log(`${newData.id} Data Saved`);
  } catch (error) {
    console.error("Error while saving data:", error.message);
  }
});

ipcMain.on('reload-window', () => {
  mainWindow.reload();
});

// DELETE MEDIA
//
//
//
ipcMain.on("deleteMedia", (sender, idToDelete) => {
  try {
    let existingData = fs.existsSync("data.json") ? fs.readFileSync("data.json", "utf8") : '';
    let jsonData = JSON.parse(existingData);
    let mediaArray = jsonData.Media;

    // Find the index of the item with the matching id
    const indexToDelete = mediaArray.findIndex(item => item.id === idToDelete);

    if (indexToDelete !== -1) {
      // If an item with the matching id is found, remove it from the array
      mediaArray.splice(indexToDelete, 1);

      // Update the JSON file
      let updatedData = JSON.stringify(jsonData, null, 2);
      fs.writeFileSync("data.json", updatedData);

      console.log(`${idToDelete} Data Deleted`);
    } else {
      console.log(`Item with id ${idToDelete} not found.`);
    }
  } catch (error) {
    console.error("Error while deleting data:", error.message);
  }
});