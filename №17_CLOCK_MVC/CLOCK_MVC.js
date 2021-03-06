import {
    ManModel
} from './Clock.js';
import {
    ManViewWebPageCanvas
} from './ClockViewCanvas.js';
import {
    ManViewWebPageSVG
} from './ClockViewSVG.js';
import {
    ManControllerButtons
} from './ClockControllerButtons.js';

let man1 = new ManModel();
let view1 = new ManViewWebPageSVG('clock1', 'Лондон(GMT)', 0);
let containerElem1 = document.getElementById('clock1');
man1.start(view1);
view1.start(man1, containerElem1);
man1.updateView();
let controller1 = new ManControllerButtons(man1);
controller1.start(containerElem1);

let man2 = new ManModel();
let view2 = new ManViewWebPageSVG('clock2', 'Токио (GMT+9)', 9);
let containerElem2 = document.getElementById('clock2');
man2.start(view2);
view2.start(man2, containerElem2);
man2.updateView();
let controller2 = new ManControllerButtons(man2);
controller2.start(containerElem2);

let man3 = new ManModel();
let view3 = new ManViewWebPageCanvas('clock3', 'Берлин(GMT+1)', 1);
let containerElem3 = document.getElementById('clock3');
man3.start(view3);
view3.start(man3, containerElem3);
man3.updateView();
let controller3 = new ManControllerButtons(man3);
controller3.start(containerElem3);

let man4 = new ManModel();
let view4 = new ManViewWebPageCanvas('clock4', 'Владивосток(GMT+10)', 10);
let containerElem4 = document.getElementById('clock4');
man4.start(view4);
view4.start(man4, containerElem4);
man4.updateView();
let controller4 = new ManControllerButtons(man4);
controller4.start(containerElem4);