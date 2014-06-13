var ImgRotation = function(argTarget) {
    var isRotate = true;
    var T$ = function(id) { return document.getElementById(id); }
    var ua = navigator.userAgent,
        isIE = /msie/i.test(ua) && !window.Opera;
    var i = 0, sinDeg = 0, cosDeg = 0, timer = null ;
    var speed;
    var target = T$(argTarget);
    var start = function(argSpeed) {
        speed = argSpeed;
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
        };

        timer = setInterval(function() {
           if (isRotate){
              i += speed;
              run(i);
            }
        }, 10);
    };
    var stop = function () {
      clearInterval(timer);
      timer = null;
    };
    var getSpeed = function () {return speed};
    var setSpeed = function (_speed) {speed = _speed;}
    return {
      start: start,
      stop: stop,
      getSpeed: getSpeed,
      setSpeed: setSpeed,
    };
};

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
    $(window).scroll(function(e){
      var top = $(document).scrollTop();
      main.top.scroll(top);
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
    var self = this;
    this.defaultRotationSpeed = 0.1
    var timer;
    var maxSpeed = 20;
    $('#top-img').mouseover(function(){
      clearInterval(timer);
      timer = setInterval(function () {
        var speed = self.rotation.getSpeed();
        if (maxSpeed < speed) {
          clearInterval(timer);
          timer = null;
          return;
        }
        self.rotation.setSpeed(speed + 0.01);
      } , 0.1);
    });
    $('#top-img').mouseout(function(){
      clearInterval(timer);
      timer = setInterval(function () {
        var speed = self.rotation.getSpeed();
        if (self.defaultRotationSpeed > speed) {
          self.rotation.setSpeed(self.defaultRotationSpeed);
          clearInterval(timer);
          timer = null;
          return;
        }
        self.rotation.setSpeed(speed - 0.05);
      } , 0.1);
    });
    this.rotation = ImgRotation('top-img-rotate');
    this.rotation.start(this.defaultRotationSpeed);
    this.offsetBottom = $('#nav').offset().top;
  },
  scroll: function(top) {
    if (top < this.offsetBottom) {
      if (!this.isAnimating) {
        this.rotation.start(this.defaultRotationSpeed);
        this.isAnimating = true;
        console.log('start');
      }
    } else {
      if (this.isAnimating) {
        this.rotation.stop();
        this.isAnimating = false;
        console.log('stop');
      }
    }

  }
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
    $(".fancybox").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      afterClose: function() {
        $(".fancybox").show();
      }
    });
  },
};

$(function(){
  main.init();
});
