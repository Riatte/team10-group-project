let slickPrev = document.querySelector('.slick-prev');
let slickNext = document.querySelector('.slick-next');

$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,

    prevArrow: `${slickPrev.outerHTML}`,
    nextArrow: `${slickNext.outerHTML}`,

    /*     
    prevArrow: `<button class="slick-prev" type="button" onclick="this.blur();">
    <svg class="slick-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32">
      <path fill="#FEFEFE"
        d="M0 25.6v-19.2c0-3.535 2.865-6.4 6.4-6.4h25.6c3.535 0 6.4 2.865 6.4 6.4v19.2c0 3.535-2.865 6.4-6.4 6.4h-25.6c-3.535 0-6.4-2.865-6.4-6.4z">
      </path>
      <path
        d="M10.76 16.724l11.146 10.62c0.186 0.177 0.433 0.276 0.69 0.276s0.504-0.099 0.69-0.276l0.012-0.012c0.090-0.086 0.162-0.189 0.212-0.304s0.075-0.238 0.075-0.363-0.025-0.248-0.075-0.363c-0.049-0.115-0.121-0.218-0.212-0.304l-10.496-10 10.496-9.996c0.090-0.086 0.162-0.189 0.212-0.304s0.075-0.238 0.075-0.363-0.025-0.248-0.075-0.363c-0.049-0.115-0.121-0.218-0.212-0.304l-0.012-0.012c-0.186-0.177-0.433-0.276-0.69-0.276s-0.504 0.099-0.69 0.276l-11.146 10.62c-0.098 0.093-0.176 0.206-0.229 0.33s-0.081 0.258-0.081 0.394c0 0.135 0.028 0.269 0.081 0.394s0.131 0.237 0.229 0.33z">
      </path>
    </svg>
</button> `,
    nextArrow: `<button class="slick-next" type="button" onclick="this.blur();">
    <svg class="slick-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32">
      <path fill="#FEFEFE"
        d="M38.4 6.4v19.2c0 3.535-2.865 6.4-6.4 6.4h-25.6c-3.535 0-6.4-2.865-6.4-6.4v-19.2c0-3.535 2.865-6.4 6.4-6.4h25.6c3.535 0 6.4 2.865 6.4 6.4z">
      </path>
      <path
        d="M27.64 15.276l-11.146-10.62c-0.186-0.177-0.433-0.276-0.69-0.276s-0.504 0.099-0.69 0.276l-0.012 0.012c-0.090 0.086-0.162 0.189-0.212 0.304s-0.075 0.238-0.075 0.363 0.025 0.248 0.075 0.363c0.049 0.115 0.121 0.218 0.212 0.304l10.496 10-10.496 9.996c-0.090 0.086-0.162 0.189-0.212 0.304s-0.075 0.238-0.075 0.363 0.025 0.248 0.075 0.363c0.049 0.115 0.121 0.218 0.212 0.304l0.012 0.012c0.186 0.177 0.433 0.276 0.69 0.276s0.504-0.099 0.69-0.276l11.146-10.62c0.098-0.093 0.176-0.206 0.229-0.33s0.081-0.258 0.081-0.394c0-0.135-0.028-0.269-0.081-0.394s-0.131-0.237-0.229-0.33z">
      </path>
    </svg>
</button>`, */

    /*  prevArrow: `<button class="slick-prev" type="button" onclick="this.blur();">
    <svg class="slick-icon">
      <use href="./images/arrow-l.svg"></use>
    </svg>
</button> `,
    nextArrow:
      "<button class='slick-next' type='button' onclick='this.blur();'><svg class='slick-icon'><use href='./images/arrow-r.svg'></use></svg></button>", */
  });
});

slickPrev.remove();
slickNext.remove();
