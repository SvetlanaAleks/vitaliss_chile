const Order = (function () {
  "use strict";
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  return {
    showOrderProduct: function () {
      var paramdId = getParameterByName("id");
      if (paramdId) {
        $(".js-product-name").html(paramdId);
        $(".js-product-photo").attr("src", `img/${paramdId}.png`);
      }
    },
    choiceCountProduct: function () {
      let count = 1;
      $(".js-counter-arrow-inc").click(function (e) {
        e.preventDefault();
        count += 1;
        if (count > 20) {
          count = 20;
        }
        $(".js-counter-number").html(count);
      });
      $(".js-counter-arrow-dec").click(function (e) {
        e.preventDefault();
        count -= 1;
        if (count <= 1) {
          count = 1;
        }
        $(".js-counter-number").html(count);
      });
    },
    init: function () {
      Order.showOrderProduct();
      Order.choiceCountProduct();
    },
  };
})();

export default Order;
