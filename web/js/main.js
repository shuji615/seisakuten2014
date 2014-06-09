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

main.sections = [
  '#top',
  '#nav',
  '#intro',
  '#gallery',
  '#staff',
  '#footer',
];

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
    var top = 0;
    var found = false;
    for (var i = 0, l = main.sections.length; i < l; i++) {
      var _section = main.sections[i];
      if (_section == section) {
        found = true;
        break;
      }
      top += $(_section).height();
      if (_section == "#nav") top -= $(_section).height();
    }
    if (!found) {
      return;
    }
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
  },
};

$(function(){
  main.init();
});
