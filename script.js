"use strict";

function onShowModalClick() {
  modal.showModal();
}

const modal = document.querySelector('[data-testid="modal-dialog"]');

document
  .querySelector('[data-testid="show-modal-btn-1"]')
  .addEventListener("click", onShowModalClick);
document
  .querySelector('[data-testid="show-modal-btn-2"]')
  .addEventListener("click", onShowModalClick);
document
  .querySelector('[data-testid="show-modal-btn-3"]')
  .addEventListener("click", onShowModalClick);
