// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// Preload script to expose "saveData" function to the renderer process
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

// Expose ipcRenderer to the renderer process via contextBridge
// contextBridge.exposeInMainWorld("electron", {
//     ipcRenderer: ipcRenderer,
// });

// Expose the "saveData" function to the renderer process
let saveData = (firstName, middleName, lastName) => {
    let data = { firstName, middleName, lastName };
    console.log(data);
    console.log('preload.js.before');
    ipcRenderer.send("saveData", data);
    console.log('preload.js.after');
};

let bridge = {
    saveData,
};

// window.Bridge = bridge;
contextBridge.exposeInMainWorld("Bridge", bridge);


