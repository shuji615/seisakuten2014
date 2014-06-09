var main = {
  init: function() {
    console.log("hello");
    this.initProps();
    this.top.init();
    this.gallery.init();
  },
  initProps: function() {
    // デフォルトの要素サイズを取得しておく
  },
};

main.top = {
  init: function() {

  },
};

main.gallery = {
  init: function () {
  },
}

$(function(){
  main.init();
});
