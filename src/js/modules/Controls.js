const Controls = (function () {
  "use strict";
  const btnAccordeon = $(".js-btn-accordeon");
  const contentAccordeon = $(".js-info-accordeon");

  const tabs = $(".js-tab");
  const spanProductsAll = $(".js-product-all");
  const spanProductsShow = $(".js-product-show");
  const productsList = $(".js-list-prod");
  const countCatalog = $(".js-catalog-count");
  const product = $(".js-product");
  const btnCatalog = $(".js-btn-catalog");

  const reviews = $(".js-review");
  const spanReviewsAll = $(".js-reviews-all");
  const spanReviewsShow = $(".js-reviews-show");
  const btnReviews = $(".js-btn-reviews");

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  function setGetParam(key, value) {
    if (history.pushState) {
      var params = new URLSearchParams(window.location.search);
      params.set(key, value);
      var newUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?" +
        params.toString();
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  }
  function showListProduct(idActiveBlock) {
    const activeList = $(`.js-list-prod[data-target="${idActiveBlock}"]`);
    productsList.removeClass("active");
    activeList.addClass("active");
  }
  return {
    openFaqContent: function () {
      btnAccordeon.on("click", function (e) {
        e.preventDefault();
        const _this = $(this);

        const parent = _this.parents(".js-accordeon");
        if (!_this.hasClass("active")) {
          parent.find(contentAccordeon).slideUp(700);
          parent.find(btnAccordeon).removeClass("active");
        }
        _this.toggleClass("active");
        _this.next(contentAccordeon).slideToggle();
      });
    },
    highlightingActiveTab: function () {
      var paramdId = getParameterByName("id");
      if (paramdId) {
        const target = $(`#${paramdId}`);
        tabs.removeClass("active");
        target.addClass("active");
        showListProduct(paramdId);
      }
    },
    showListProducts: function () {
      tabs.click(function (e) {
        e.preventDefault();
        const _this = $(this);

        const category = _this.attr("id");
        localStorage.setItem("category", category);

        setGetParam("id", category);
        Controls.highlightingActiveTab();

        const idActiveBlock = _this.prop("id");
        tabs.removeClass("active");
        _this.addClass("active");
        showListProduct(idActiveBlock);
        Controls.calculateProducts();
      });
    },
    showCatalog: function () {
      btnCatalog.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const parent = _this.parent(productsList);
        const hideCatalog = parent.find(".js-catalog-hide");
        hideCatalog.addClass("show");
        Controls.calculateProducts();
        _this.hide();
      });
    },
    calculateProducts: function () {
      //???????????????? ??????????
      const parent = countCatalog.parent(".js-list-prod.active");
      //???????????????????? ???????? ??????????????
      const countProductsAll = parent.find(product).length;
      //???????????????????? ?????????????????? ??????????????
      const countProductsShow = parent
        .find(".js-catalog-show")
        .find(product).length;

      const hideCatalog = parent.find(".js-catalog-hide");
      if (hideCatalog.hasClass("show")) {
        parent.find(spanProductsShow).html(countProductsAll);
        parent.find(btnCatalog).hide();
      } else {
        parent.find(spanProductsShow).html(countProductsShow);
        parent.find(spanProductsAll).html(countProductsAll);
      }
    },
    calculateReviews: function () {
      //?????????? ???????????????????? ??????????????
      // spanReviewsShow.html(reviews.length);

      //???????????????? ??????????????
      // const countReviewsShow = $(".js-reviews-show-list").find(reviews).length;
      if ($(".js-reviews-show-list").hasClass("show")) {
        spanReviewsShow.html(reviews.length);
        btnCatalog.hide();
      } else {
        // spanReviewsShow.html(countReviewsShow);
        spanReviewsAll.html(reviews.length);
      }
    },
    showReviews: function () {
      btnReviews.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        $(".js-reviews-show-list").addClass("show");
        Controls.calculateReviews();
        _this.hide();
      });
    },
    init: function () {
      Controls.openFaqContent();
      Controls.highlightingActiveTab();
      Controls.showListProducts();
      Controls.showCatalog();
      Controls.calculateProducts();
      Controls.calculateReviews();
      Controls.showReviews();
    },
  };
})();

export default Controls;
