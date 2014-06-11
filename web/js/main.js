var ImgRotate = function() {
    var T$ = function(id) { return document.getElementById(id); }
    var ua = navigator.userAgent,
        isIE = /msie/i.test(ua) && !window.Opera;
    var i = 0, sinDeg = 0, cosDeg = 0, timer = null ;
    var rotate = function(target, degree) {
        target = T$(target);
        var orginW = target.clientWidth, orginH = target.clientHeight;
            clearInterval(timer);
        function run(angle) {
            if (isIE) { // IE
                cosDeg = Math.cos(angle * Math.PI / 180);
                sinDeg = Math.sin(angle * Math.PI / 180);
                with(target.filters.item(0)) {
                    M11 = M22 = cosDeg; M12 = -(M21 = sinDeg); 
                }
                target.style.top = (orginH - target.offsetHeight) / 2 + 'px';
                target.style.left = (orginW - target.offsetWidth) / 2 + 'px';
            } else if (target.style.MozTransform !== undefined) {  // Mozilla
                target.style.MozTransform = 'rotate(' + angle + 'deg)';
            } else if (target.style.OTransform !== undefined) {   // Opera
                target.style.OTransform = 'rotate(' + angle + 'deg)';
            } else if (target.style.webkitTransform !== undefined) { // Chrome Safari
                target.style.webkitTransform = 'rotate(' + angle + 'deg)';
            } else {
                target.style.transform = "rotate(" + angle + "deg)";
            }
        }
        
        timer = setInterval(function() {
            i += 1;
            run(i);
            //if (i > degree - 1) {
            //     i = 0;
            //    clearInterval(timer);
            //} 
        }, 10); 
    }
    return {rotate: rotate}
}();
$(document).ready(function() {
    ImgRotate.rotate('top-img', 360);
});

var main = {
  init: function() {
    this.initProps();
    this.scroll.init();
    this.top.init();
    this.nav.init();
    this.gallery.init();
  },
  initProps: function() {
    // デフォルトの要素サイズを取得しておく
  },
};

main.scroll = {
  init: function() {
    // var WIDTH = $(window).width();
    // var HEIGHT = $(window).height();
    $(window).scroll(function(e){
      var top = $(document).scrollTop();
      if (top > $('#top').height()) {
        $('#nav').addClass('stick-to-top');
        $('#nav-alt').removeClass('hidden');
      } else {
        $('#nav').removeClass('stick-to-top');
        $('#nav-alt').addClass('hidden');
      }
    });
  },
  to: function (section) {
    var top = $(section).offset().top;
    if (section != '#top') top -= 80;
    $('html, body').animate({ scrollTop: top}, 'fast');
  },
};

main.top = {
  init: function() {

  },
};

main.nav = {
  init: function () {
    $('#top-link').click(function(e){
      e.preventDefault();
      main.scroll.to("#top")
    });
    $('#intro-link').click(function(e){
      e.preventDefault();
      main.scroll.to("#intro")
    });
    $('#gallery-link').click(function(e){
      e.preventDefault();
      main.scroll.to("#gallery")
    });
    $('#staff-link').click(function(e){
      e.preventDefault();
      main.scroll.to("#staff")
    });
  },
};

main.gallery = {
  init: function () {
    $(document).ready(function() {
      $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
      });
    });
  },
};

$(function(){
  main.init();
});
