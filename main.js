// ********************************************************
// * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// ********************************************************
// + This file is the starting point for json file access
// + main.js >> preload.js >> app.js >> next reference...
// + When I update this file, I have to restart the application entirely for the changes to apply
// ********************************************************


//###################################################################################################################################################################                                                                                                    
// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain} = require('electron');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
let mainWindow;
// const Store = require('store.js');


//###################################################################################################################################################################                                                                                                    
//
//
//
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
//###################################################################################################################################################################                                                                                                    
//
//
//
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

//###################################################################################################################################################################                                                                                                    
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

//###################################################################################################################################################################                                                                                                    
// SAVE MEDIA
//
//
//
ipcMain.on("saveMedia", (sender, newData, imagePath) => {
  try {
    // existing data variable assignments
    let existingData = fs.existsSync("data.json")
      ? fs.readFileSync("data.json", "utf8")
      : '';
    let jsonData = JSON.parse(existingData);
    let mediaArray = jsonData.Media;

    // Check if any tags from newData already exist, if not, add them to the Tags array
    // TAGS ARE CATEGORIES
    

    newData.Tags.forEach((newTag) => {
      if (!jsonData.Tags.some((existingTag) => existingTag.Name === newTag)) {
        let highestId = jsonData.Tags.reduce((max, tag) => Math.max(max, tag.id), 0);
        highestId += 1;
        jsonData.Tags.push({ "id": highestId, "Name": newTag });
      }
    });

    mediaArray.push(newData);
    mediaArray.sort((a, b) => a.Name.localeCompare(b.Name));

    let updatedData = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync("data.json", updatedData);

    if (imagePath) {
      const newPath = path.join(__dirname, 'assets', 'media', `${newData.id}.png`);
      fs.copyFileSync(imagePath, newPath);
    }

    console.log(`${newData.id} Data Saved`);
  } catch (error) {
    console.error("Error while saving data:", error.message);
  }
});



//###################################################################################################################################################################                                                                                                    
// UPDATE MEDIA
// If user has custom settings for an empty tag, those settings should not be lost.
// Need separate button for deleting Tag Key entries.
//
ipcMain.on("updateMedia", (sender, newData, imagePath) => {
  try {
    // existing data variable assignments
    let existingData = fs.existsSync("data.json") ? fs.readFileSync("data.json", "utf8") : '';
    let jsonData = JSON.parse(existingData);
    let mediaArray = jsonData.Media;

    // Find the index of the item with the matching id
    const indexToUpdate = mediaArray.findIndex(item => item.id === newData.id);

    if (indexToUpdate !== -1) {
      // If an item with the matching id is found, update it
      const existingTags = mediaArray[indexToUpdate].Tags;

      // Check for removed tags
      // const removedTags = existingTags.filter(tag => !newData.Tags.includes(tag));
      // removedTags.forEach(removedTag => {
      //   const isTagUsed = mediaArray.some(entry => entry.id !== newData.id && entry.Tags.includes(removedTag));
      //   if (!isTagUsed) {
      //     // Remove the tag entry from Tags key if not used by any other media entry
      //     jsonData.Tags = jsonData.Tags.filter(tagEntry => tagEntry.Name !== removedTag);
      //   }
      // });

      // Check for added tags
      const addedTags = newData.Tags.filter(tag => !existingTags.includes(tag));
      addedTags.forEach(addedTag => {
        const isTagUsed = mediaArray.some(entry => entry.id !== newData.id && entry.Tags.includes(addedTag));
        if (!isTagUsed) {
          // Add a new tag entry if the tag is not used by any other media entry
          jsonData.Tags.push({ "Name": addedTag });
        }
      });

      // Update the Tags array for the specific media entry
      mediaArray[indexToUpdate].Tags = newData.Tags;
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

    console.log(`${newData.id} Data Updated`);
  } catch (error) {
    console.error("Error while updating data:", error.message);
  }
});


//###################################################################################################################################################################                                                                                                    
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


//###################################################################################################################################################################                                                                                                    

ipcMain.on("updateTag", (_, newData) => {
  console.log("ipcMain: Updated " + newData.Name + " Category");
  try {
      let data = fs.existsSync("data.json") ? fs.readFileSync("data.json", "utf8") : '{}';
      let jsonData = JSON.parse(data);
      let tagIndex = jsonData.Tags.findIndex(tag => tag.Name === newData.Name); // Find the index of the tag to update
      if (tagIndex !== -1) { // Update the tag properties if the tag exists
        jsonData.Tags[tagIndex].BackgroundVisual = newData.BackgroundVisual;

        jsonData.Tags[tagIndex].Gap = newData.Gap;
        jsonData.Tags[tagIndex].GapCheck = newData.GapCheck;

        jsonData.Tags[tagIndex].Wrap = newData.Wrap;
        if (newData.Width !== 'auto') { jsonData.Tags[tagIndex].Width = newData.Width; }
        jsonData.Tags[tagIndex].Height = newData.Height;
        jsonData.Tags[tagIndex].OriginalDimensions = newData.OriginalDimensions;

        jsonData.Tags[tagIndex].Border = newData.Border;
        jsonData.Tags[tagIndex].BorderCheck = newData.BorderCheck;

        jsonData.Tags[tagIndex].BorderColor = newData.BorderColor;
        jsonData.Tags[tagIndex].BorderColorCheck = newData.BorderColorCheck;

        jsonData.Tags[tagIndex].BorderRadius = newData.BorderRadius;
        jsonData.Tags[tagIndex].BorderRadiusCheck = newData.BorderRadiusCheck;

        jsonData.Tags[tagIndex].FloatingBorder = newData.FloatingBorder;

        jsonData.Tags[tagIndex].FloatingBorderColor = newData.FloatingBorderColor;

        jsonData.Tags[tagIndex].FloatingBorderRadius = newData.FloatingBorderRadius;

        jsonData.Tags[tagIndex].FloatingBorderGap = newData.FloatingBorderGap;

        jsonData.Tags[tagIndex].BackgroundColor = newData.BackgroundColor;
        jsonData.Tags[tagIndex].BackgroundColorCheck = newData.BackgroundColorCheck; 
      } else {
          console.log(`Tag not found: ${newData.Name}`);
      }
      let updatedData = JSON.stringify(jsonData, null, 2);
      fs.writeFileSync("data.json", updatedData);

      // console.log(`Tag ${newData.Name} updated`);
  } catch (error) {
      console.error("Error while updating tag data:", error.message);
  }
});


//###################################################################################################################################################################                                                                                                    
// RELOAD WINDOW
//
//
ipcMain.on('reload-window', () => {
  mainWindow.reload();
});