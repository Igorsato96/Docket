$(function () {
  $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:'<span class="prev"><img src="assets/img/caret-left-solid.svg" alt=""></span>',
      nextArrow: '<span class="next"><img src="assets/img/caret-right-solid.svg" alt=""></span>',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});