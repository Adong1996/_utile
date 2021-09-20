window.cancelAnimFrame = (function () {
  return window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      function (id) {
          window.clearTimeout(id);
      };
})();