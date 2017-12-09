/*
 * This file contains a simple hack to access the node filesystem module
 * and the electron module due to some issues using webpack.
 * 
 * We append them to global scope using the window element to get access to them
 * from everywhere.
 * 
 * Please try to keep everything clean! Do not add anything if there are other
 * (may be a bit more slow/work-intensive) solutions!
 */

window.fs = require('fs');
window.node_electron = require('electron');
window.node_temp = require('temp');
window.node_os = require('os');
window.archiver = require('archiver');
