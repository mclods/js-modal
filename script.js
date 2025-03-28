"use strict";

function onShowModalClick() {
  document.querySelector('[data-testid="modal-dialog"]').showModal();
}

function onCloseModalClick() {
  document.querySelector('[data-testid="modal-dialog"]').close();
}

document
  .querySelector('[data-testid="show-modal-btn-1"]')
  .addEventListener("click", onShowModalClick);
document
  .querySelector('[data-testid="show-modal-btn-2"]')
  .addEventListener("click", onShowModalClick);
document
  .querySelector('[data-testid="show-modal-btn-3"]')
  .addEventListener("click", onShowModalClick);
document
  .querySelector('[data-testid="modal-close-btn"]')
  .addEventListener("click", onCloseModalClick);
