(function () {
  var youtube = document.querySelectorAll(".youtube");

  var _loop = function _loop(i) {
    var namePhoto = youtube[i].dataset.embed.toLowerCase();
    var source = "../img/" + namePhoto + ".jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })()
    );
    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

  for (var i = 0; i < youtube.length; i++) {
    _loop(i);
  }
})();
