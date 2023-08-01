// Distribute Application
// https://www.electronjs.org/docs/latest/tutorial/quick-start
// https://www.youtube.com/watch?v=5ofY0UHHtLY&ab_channel=coderJeet

// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
// const Store = require('store.js');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 1. Backend Communication
      // nodeIntegration: false,
      // contextIsolation: true,
      // enableRemoteModule: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile('main.html')  // 2. Backend Communication
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

ipcMain.on("saveMedia", (sender, newData) => {
  try {
      // Read the existing data from the file, or initialize an empty array if the file doesn't exist
      let existingData = fs.existsSync("data.json")
          ? fs.readFileSync("data.json", "utf8")
          : '{"games":[],"movies":[],"names":[],"shows":[],"songs":[]}';
      // Parse the existing JSON data into a JavaScript object
      let jsonData = JSON.parse(existingData);
      // Get the "names" array from the jsonData
      let mediaArray = jsonData.Media;
      // Add the new data to the "names" array
      mediaArray.push(newData);
      // Sort the "names" array alphabetically by "firstName"
      mediaArray.sort((a, b) => a.Name.localeCompare(b.Name));
      // Convert the modified jsonData back to JSON string
      let updatedData = JSON.stringify(jsonData, null, 2);
      // Write the updated JSON string back to the file
      fs.writeFileSync("data.json", updatedData);
      console.log("Data Saved");
  } catch (error) {
      console.error("Error while saving data:", error.message);
  }
});
