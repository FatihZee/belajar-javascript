function applyTransitionAndRedirect(url) {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    window.location.href = url;
  }, 1000); // Menunggu animasi selesai (1 detik)
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.onclick = function () {
      var url = this.getAttribute("data-href");
      applyTransitionAndRedirect(url);
      return false; // Mencegah aksi default
    };
  });
});
