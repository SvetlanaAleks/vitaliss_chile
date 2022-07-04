const Contacts = (function () {
  "use strict";
  const form = $("#order-form");
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
            console.log(msg);
            console.log($(".msg"));
            form.trigger("reset"); // очистка формы
            // $(".msg").addClass("show");
            // setTimeout(function () {
            //   $(".msg").removeClass("show");
            // }, 3000);
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
