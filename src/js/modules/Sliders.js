const Sliders = (function () {
  const headerSliderWrap = $(".js-slider-header-wrap");

  //hits slider
  const productsSliderWrap = $(".js-slider-products-wrap");
  const productsSlider = $(".js-slider-products");

  const reviewsSliderWrap = $(".js-slider-reviews-wrap");
  return {
    initReviewsSlider: function () {
      reviewsSliderWrap.each(function (index) {
        var _this = $(this);
        _this.addClass("swiper-slider-review-" + index);
        var dragSize = _this.data("drag-size") ? _this.data("drag-size") : 50;
        var swiper = new Swiper(".swiper-slider-review-" + index, {
          direction: "horizontal",
          slidesPerView: 1,
          autoHeight: true,
          scrollbar: {
            el: ".js-slider-reviews-scrollbar",
            draggable: true,
            dragSize: dragSize,
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      });
    },
    initHeaderSlider: function () {
      headerSliderWrap.each(function (index) {
        var _this = $(this);
        _this.addClass("swiper-slider-header-" + index);
        var dragSize = _this.data("drag-size") ? _this.data("drag-size") : 50;
        var swiper = new Swiper(".swiper-slider-header-" + index, {
          direction: "horizontal",
          slidesPerView: 1,
          autoplay: true,
          effect: "fade",
          scrollbar: {
            el: ".js-slider-header-scrollbar",
            draggable: true,
            dragSize: dragSize,
          },
        });
      });
    },
    initProductSlider: function () {
      $(".js-slider-product-for").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".js-slider-product-nav",
      });
      $(".js-slider-product-nav").not(".slick-initialized").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".js-slider-product-for",
        dots: false,
        arrows: false,
        focusOnSelect: true,
      });
    },
    initProductsSlider: function () {
      productsSliderWrap.each(function (index) {
        var _this = $(this);
        _this.addClass("swiper-slider-" + index);
        var dragSize = _this.data("drag-size") ? _this.data("drag-size") : 50;
        var swiperProducts = new Swiper(".swiper-slider-" + index, {
          direction: "horizontal",
          slidesPerView: 1,
          scrollbar: {
            el: ".js-slider-products-scrollbar",
            draggable: true,
            dragSize: dragSize,
          },
          breakpoints: {
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      });
    },
    destroyProductsSlider: function () {
      swiperProducts.destroy();
    },
    init: function () {
      Sliders.initHeaderSlider();
      Sliders.initReviewsSlider();
    },
  };
})();

export default Sliders;
