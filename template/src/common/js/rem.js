/* eslint-disable */
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      //var clientWidth = docEl.clientWidth;
      var rem = docEl.clientWidth / 10;
      if (!rem) return;
      //docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      docEl.style.fontSize = (rem < 55 ? rem : 55) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
