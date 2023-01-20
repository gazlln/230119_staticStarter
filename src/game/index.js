//gafer dazzling
import "../shared/bubble.js";
import interact from "interactjs";

const chipPositions = {
  angryOne: {
    x: 0,
    y: 0,
  },
  happyOne: {
    x: 0,
    y: 0,
  },
  happyTwo: {
    x: 0,
    y: 0,
  },
  happyThree: {
    x: 0,
    y: 0,
  },
};

const chipListeners = {
  start(event) {
    console.log(event.type, event.target);
  },
  move(event) {
    const chipName = event.target.getAttribute("data-chipname");
    chipPositions[chipName].x += event.dx;
    chipPositions[chipName].y += event.dy;

    event.target.style.transform = `translate(${chipPositions[chipName].x}px,${chipPositions[chipName].y}px`;
  },
};

interact(".draggable").draggable({
  listeners: chipListeners,
});
