import { productsInfo } from "../data/products_info";

const Order = (function () {
  "use strict";
  const productResidue = $(".js-product-residue");

  const inputChatbotHistory = $(`input[name="chatbot_history"]`);
  function updValueChatbotHistory() {
    inputChatbotHistory.val(JSON.stringify(data));
  }

  let data = [];
  let count = 1;

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return {
    submitForm: function () {
      $("#order-form").submit(function (e) {
        // e.preventDefault();

        $(`input[name='count']`).val(count);
        $(`input[name='location']`).val("https://vitaliss-chile.vercel.app/");

        const dataForm = $(this).find("input.js-data").serializeArray();
        var [...object] = dataForm.map(function (item) {
          return {
            answer: item.value,
            question: item.name,
          };
        });
        data.push(...object);

        updValueChatbotHistory();
      });
    },
    createOrderForm: function () {
      const productName = getParameterByName("id");
      const countryCode = $(`input[name='country_code']`);
      countryCode.val("CL");
      if (productName) {
        $(".js-product-name").html(productName);
        $(".js-product-photo").attr("src", `img/${productName}.png`);

        const productInfo = productsInfo[`${productName}`];
        $(`input[name='campaign_id']`).val(productInfo.campaign_id);
        $(`input[name='landing_id']`).val(productInfo.landing_id);
        $(`input[name='redirect_url']`).val(`subscribe.html?id=${productName}`);
        $(`input[name='product']`).val(`${productName}`);
        $(`input[name='niche']`).val(productInfo.niche);
      }
    },
    choiceCountProduct: function () {
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
    createSuccessPage: function () {
      const paramProduct = getParameterByName("id");
      $(".js-success-product-name").html(paramProduct);
      $(".js-success-product-photo").attr("src", `img/${paramProduct}.png`);
    },
    showResiudePack: function () {
      let max = 60;
      let min = 12;
      setInterval(() => {
        let difference = randomInteger(1, 6);
        max = max - difference;
        if (max <= min) {
          return;
        }
        productResidue.html(max);
      }, 12000);
    },
    init: function () {
      Order.createOrderForm();
      Order.choiceCountProduct();
      Order.createSuccessPage();
      Order.showResiudePack();
      Order.submitForm();
    },
  };
})();

export default Order;
