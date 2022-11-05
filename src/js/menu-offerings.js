(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-offerings-open]'),
    modal: document.querySelector('[data-menu-offerings]'),
  };
  const bodyScroll = document.querySelector('body');

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    bodyScroll.classList.toggle('locked');
  }
})();
