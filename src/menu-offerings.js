(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-offerings-open]"),
    closeModalBtn: document.querySelector("[data-menu-offerings-close]"),
    modal: document.querySelector("[data-menu-offerings]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();