import ReactDOM from "react-dom";
import crel from "crel";
import _ from "lodash";

function makeRandomID(size = 8) {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < size; i++) {
    text += possible.charAt(Math.floor(Math.random() * (i > 0 ? possible.length : possible.length - 10)));
  }
  return text;
}

function makeDraggable(dragEl, triggerEl) {
  dragEl = document.querySelector(dragEl);
  triggerEl = document.querySelector(triggerEl);

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (triggerEl) {
    /* if present, the header is where you move the DIV from:*/
    triggerEl.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    dragEl.style.top = (dragEl.offsetTop - pos2) + "px";
    dragEl.style.left = (dragEl.offsetLeft - pos1) + "px";
    dragEl.style.right = 'initial';
    dragEl.style.bottom = 'initial';
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function initReactModalEl() {
  let el = document.querySelector('.react-modal');
  if (!el) {
    el = crel("div", {class: 'react-modal'});
    window.document.body.appendChild(el);
  }
  unmountReactModal();
  return el;
}

function unmountReactModal() {
  !_.isNull(window.document.querySelector('.react-modal')) ? ReactDOM.unmountComponentAtNode(window.document.querySelector('.react-modal')) : null;
}

export const BaseUtils = {
  makeRandomID,
  makeDraggable,
  initReactModalEl,
  unmountReactModal,
};

window.BaseUtils = BaseUtils;