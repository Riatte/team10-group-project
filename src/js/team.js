(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-team-open]"),
    closeModalBtn: document.querySelector("[data-team-close]"),
    modal: document.querySelector("[data-team]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();