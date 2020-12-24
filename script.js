var robot = require('robotjs');
var fs = require("fs");
var screen = robot.getScreenSize();
setTimeout(handleOpenBoard, 100);
function handleOpenBoard() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    robot.typeString("OpenBoard");
    robot.keyTap("enter");
    setTimeout(writeHi, 100);
}
function writeHi() {
    robot.moveMouseSmooth(400, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(400, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(400, 350);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 350);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(600, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 250);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 450);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(1418, 22);
    robot.mouseClick();
    setTimeout(openTel, 1000);
}
function openTel() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    robot.typeString("Telegram");
    robot.keyTap("enter");
    robot.moveMouseSmooth(1056, 177);
    robot.mouseClick();
    robot.typeString("Anubhav Dua");
    robot.keyTap("enter");
    robot.typeString("Hello");
    // robot.keyTap("enter");
    setTimeout(openchrome, 100);
}
function openchrome() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    robot.typeString("Chrome");
    robot.keyTap("enter");
    robot.moveMouseSmooth(290, 54);
    robot.typeString("mait")
    robot.keyTap("enter");
    
    // setTimeout(openTabs(), 1000);
}
// function openTabs() {
//     var rdata = fs.readFileSync("./chrome.json");
//     var tabs = JSON.parse(rdata);
//     for (var i = 0; i < tabs.length; i++) {
//         for (var j = 0; j < tabs[i].length; j++) {
//             robot.typeString(tabs[i][j]);
//             robot.keyTap("enter");
//             if (j < tabs[i].length - 1) {
//                 robot.keyToggle("control", "down");
//                 robot.keyTap("t");
//                 robot.keyToggle("control", "up");
//             }
//             else if (i < tabs.length - 1) {
//                 robot.keyToggle("control", "down");
//                 robot.keyTap("n");
//                 robot.keyToggle("control", "up");
//             }


//         }
//     }
// }