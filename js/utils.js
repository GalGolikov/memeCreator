'use strict';

// Global utils variables:
var gElmodal = document.querySelector('.modal');

// ===== Modal functions =====
function renderModal(headline, txt, time) {
    // Add the txt to the modal
    const elModalHeadline = document.querySelector('.modal-headline');
    const elModalTxt = document.querySelector('.modal-txt');
    elModalHeadline.innerHTML = headline;
    elModalTxt.innerHTML = txt;

    // Show modal for x time then hide again
    const elModal = document.querySelector('.modal');
    elModal.hidden = false;
    setInterval(() => {
        elModal.hidden = true;
    }, time);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target === gElmodal) {
        gElmodal.hidden = true;
    }
};

function onCloseModal() {
    gElmodal.hidden = true;
}


// ===== Nav bar functions =====
function onGoToSavedMemes() {
    resetLinesModel();
    renderSavedMemesScreen();
    resetLineSelection();
}

function onGoToGallery() {
    resetLinesModel();
    renderGalleryScreen();
    resetLineSelection();
}

function renderActiveTab(elThisTab = null) {
    // remove prev active tab
    const elPrevActive = document.querySelector('li.active');
    if (elPrevActive) elPrevActive.classList.remove('active');
    // make this tab active if given
    if (elThisTab) elThisTab.classList.add('active');
}
