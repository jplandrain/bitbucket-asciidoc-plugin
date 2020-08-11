(function () {
  /**
   * Loads MathJax from the official CDN
   */
  var script=document.createElement('script');
  script.type = "text/javascript";
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_HTMLorMML";
  document.getElementsByTagName("head")[0].appendChild(script);

})();