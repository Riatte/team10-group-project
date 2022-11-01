(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-hero-open]"),
    closeModalBtn: document.querySelector("[data-menu-hero-close]"),
    modal: document.querySelector("[data-menu-hero]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();