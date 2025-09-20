"use strict";

const modal = document.querySelector('[data-testid="modal-dialog"]');

function onShowModalClick() {
  modal.showModal();
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
