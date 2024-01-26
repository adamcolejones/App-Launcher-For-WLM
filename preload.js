// ********************************************************
// * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// ********************************************************
// + See if the media Bridge cam absorb the updateBridge.  
// + The other two bridges are combined, maybe I could combine all of them into one?
// ********************************************************

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// Preload script to expose "saveData" function to the renderer process

// const { shell } = require('electron');
// const { exec } = require('child_process');


// document.addEventListener('DOMContentLoaded', () => {
//     const openButton = document.getElementById('openButton');
//     const filePath = 'C:\\Users\\adamc\\Documents\\Games\\Nintendo\\GameBoyAdvance\\Other\\CMD Files\\Pokemon Fire Red.cmd';

//     openButton.addEventListener('click', () => {
//         shell.openItem(filePath);
//     });
// });

const { contextBridge, ipcMain, ipcRenderer, shell} = require("electron");

contextBridge.exposeInMainWorld('electron', {
  shell: shell,
});

// Expose the "saveData" function to the renderer process
let saveName = (firstName, middleName, lastName) => {
    let data = { firstName, middleName, lastName };
    console.log(data);
    ipcRenderer.send("saveName", data);
};

let nameBridge = {
    saveName,
};

// window.Bridge = bridge;
contextBridge.exposeInMainWorld("nameBridge", nameBridge);

let saveMedia = (newId, Name, RunCommand, Tags, imagePath) => {
  const customFieldsContainer = document.getElementById('customFieldsContainer');
  const labelInputs = customFieldsContainer.querySelectorAll('input[type="text"][placeholder*="Label"]');
  const valueInputs = customFieldsContainer.querySelectorAll('input[type="text"][placeholder*="Value"]');
  let imageStatus;
  if (imagePath != null) {
    imageStatus = true;
  } else {
    imageStatus = false;
  }

  // Collect the custom field values into an object
  const customData = {};
  for (let i = 0; i < labelInputs.length; i++) {
    const label = labelInputs[i].value.trim();
    const value = valueInputs[i].value.trim();
    if (label && value) {
      customData[label] = value;
    }
  }

  

  const tagsInput = document.getElementById('Tags');
  const tagsArray = tagsInput.value.split(',').map(tag => tag.trim());

  let data = {
    "id": newId,
    "Name": Name,
    "Image": imageStatus,
    "RunCommand": RunCommand, // Don't have a space between Run & command, causes problems when updating values with json
    "Tags": tagsArray,
    ...customData // Include the custom fields in the data object
  };

  // data = JSON.stringify(data); // Convert data to a JSON string


  console.log(data, imagePath);
  ipcRenderer.send("saveMedia", data, imagePath);
  ipcRenderer.send('reload-window');
  // window.location.reload();
};


let mediaBridge = {
  saveMedia,
};

// window.Bridge = bridge;
contextBridge.exposeInMainWorld("mediaBridge", mediaBridge);

// function called to update existing media from data.json
let updateMedia = (id, Name, RunCommand, Tags, imagePath) => {
  let newData = {
    "id": id,
    "Name": Name,
    "Tags": Tags
  };
  // ADD NEW DATA TO newData IF THEY ARE NOT NULL
  // IN OTHER WORDS WE DONT WANT TO REPLACE OLD DATA IF THERE IS NOTHING NEW
  if (imagePath != null) {
    newData.Image = true;
  }
  if (RunCommand != null) {
    // console.log('if Triggered: ', RunCommand);
    newData.RunCommand = RunCommand;
  }
  // const tagsInput = document.getElementById('Tags');
  // const tagsArray = Tags.value.split(',').map(tag => tag.trim());
  
  console.log('New Data: ', newData);
  ipcRenderer.send("updateMedia", newData, imagePath);
  ipcRenderer.send('reload-window');
};

let deleteMedia = (idToDelete) => {
  ipcRenderer.send("deleteMedia", idToDelete);
  ipcRenderer.send('reload-window');
};

let updateBridge = {
  updateMedia,
  deleteMedia,
};

contextBridge.exposeInMainWorld("updateBridge", updateBridge);
