(() => {
  const orderInput = document.querySelector(".order__input");
  const sendBtn = document.querySelector(".order__btn-send");

  orderInput.addEventListener("input", (event) => {
    if (event.target.value.length === 0)
      return sendBtn.classList.remove("validForm");

    sendBtn.classList.add("validForm");
  });
})();