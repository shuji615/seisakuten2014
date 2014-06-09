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
};

main.top = {
  init: function() {

  },
};

main.nav = {
  init: function () {

  },
};

main.gallery = {
  init: function () {
  },
};

$(function(){
  main.init();
});
