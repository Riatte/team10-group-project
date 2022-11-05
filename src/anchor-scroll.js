let headerPosition = document.querySelector('header');

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  if (getComputedStyle(headerPosition).position == 'fixed') {
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 72,
      },
      1000
    );
  } else {
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      1000
    );
  }
});
