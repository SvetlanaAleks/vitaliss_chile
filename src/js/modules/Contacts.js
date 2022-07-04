const Contacts = (function () {
  "use strict";
  const form = $(".js-order-form");
  return {
    submitForm: function () {
      form.on("submit", function (e) {
        e.preventDefault();
        $.ajax({
          url: "../php/send.php",
          type: "POST",
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function (msg) {
            form.trigger("reset"); // очистка формы
            $(".js-content-form").hide();
            $(".js-success-form").show();
          },
        });
      });
    },
    init: function () {
      Contacts.submitForm();
    },
  };
})();

export default Contacts;
