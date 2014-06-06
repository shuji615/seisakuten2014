$(function() {
  function drawMapIfNeeded() {
    var $map = $('#map');
    if (!$map.length) return;

    var map;

    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(35.71221997541644, 139.76195364418027),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };
    map = new google.maps.Map($map[0], mapOptions);

    var exhibition = new google.maps.Marker({
      position: new google.maps.LatLng(35.714235, 139.7619),
      title: "Exhibition",
      map: map
    });

    var strokeOpacity = 0.7;
    var strokeWeight = 5;
    var markerSize = 30;

    var marunouchiCoords = [
      new google.maps.LatLng(35.7067071174301, 139.7599781972408),
      new google.maps.LatLng(35.706761567274505, 139.76003720583913),
      new google.maps.LatLng(35.706780080213214, 139.7605374378204),
      new google.maps.LatLng(35.70721567752822, 139.7604998868942),
      new google.maps.LatLng(35.707272305004345, 139.76077883663174),
      new google.maps.LatLng(35.70765998433745, 139.76068764152524),
      new google.maps.LatLng(35.70853987874921, 139.7605535310745),
      new google.maps.LatLng(35.70963755519076, 139.76038186969754),
      new google.maps.LatLng(35.71199837949249, 139.75976496162411),
      new google.maps.LatLng(35.71287604818697, 139.7595450204849),
      new google.maps.LatLng(35.71305898535764, 139.75974886837002),
      new google.maps.LatLng(35.71345099216647, 139.7597059530258),
      new google.maps.LatLng(35.71394753135634, 139.76189463558194),
      new google.maps.LatLng(35.714235, 139.7619)
    ];
    var marunouchiPoly = new google.maps.Polyline({
      path: marunouchiCoords,
      strokeColor: "#ff0000",
      strokeOpacity: strokeOpacity,
      strokeWeight: strokeWeight
    });
    marunouchiPoly.setMap(map);
    var marunouchiIcon =
      new google.maps.MarkerImage("images/icons/lineLogo_marunouchi_01.png",
        null, null,
        new google.maps.Point(markerSize / 2, markerSize / 2),
        new google.maps.Size(markerSize, markerSize));
    var marunouchi = new google.maps.Marker({
      position: marunouchiCoords[0],
      icon: marunouchiIcon,
      map: map
    });

    var nanbokuCoords = [
      new google.maps.LatLng(35.716690419071085, 139.75858747186658),
      new google.maps.LatLng(35.71666428640611, 139.75849091234204),
      new google.maps.LatLng(35.71531408705653, 139.75887715044018),
      new google.maps.LatLng(35.71287604818697, 139.7595450204849),
      new google.maps.LatLng(35.71305898535764, 139.75974886837002),
      new google.maps.LatLng(35.71345099216647, 139.7597059530258),
      new google.maps.LatLng(35.71394753135634, 139.76189463558194),
      new google.maps.LatLng(35.714235, 139.7619)
    ];
    var nanbokuPoly = new google.maps.Polyline({
      path: nanbokuCoords,
      strokeColor: "#237973",
      strokeOpacity: strokeOpacity,
      strokeWeight: strokeWeight
    });
    nanbokuPoly.setMap(map);
    var nanbokuIcon =
      new google.maps.MarkerImage("images/icons/lineLogo_nanboku_01.png",
        null, null,
        new google.maps.Point(markerSize / 2, markerSize / 2),
        new google.maps.Size(markerSize, markerSize));
    var nanboku = new google.maps.Marker({
      position: nanbokuCoords[0],
      icon: nanbokuIcon,
      map: map
    });

    var chiyodaCoords = [
      new google.maps.LatLng(35.717979619901826, 139.7648960274696),
      new google.maps.LatLng(35.71801446287806, 139.764965764904),
      new google.maps.LatLng(35.71780104940951, 139.76513206186291),
      new google.maps.LatLng(35.717618123124375, 139.76482629003522),
      new google.maps.LatLng(35.71729582340981, 139.76441859426495),
      new google.maps.LatLng(35.716581532909984, 139.76335643949506),
      new google.maps.LatLng(35.71602838891704, 139.7624123019218),
      new google.maps.LatLng(35.71580190365439, 139.76274489583966),
      new google.maps.LatLng(35.715370708778856, 139.76235865774152),
      new google.maps.LatLng(35.71500048909485, 139.76296483697888),
      new google.maps.LatLng(35.71486546737034, 139.7628950995445),
      new google.maps.LatLng(35.714164221831496, 139.76306139650342),
      new google.maps.LatLng(35.71394753135634, 139.76189463558194),
      new google.maps.LatLng(35.714235, 139.7619)
    ];
    var chiyodaPoly = new google.maps.Polyline({
      path: chiyodaCoords,
      strokeColor: "#0b8c4d",
      strokeOpacity: strokeOpacity,
      strokeWeight: strokeWeight
    });
    chiyodaPoly.setMap(map);
    var chiyodaIcon =
      new google.maps.MarkerImage("images/icons/lineLogo_chiyoda_01.png",
        null, null,
        new google.maps.Point(markerSize / 2, markerSize / 2),
        new google.maps.Size(markerSize, markerSize));
    var nezu = new google.maps.Marker({
      position: chiyodaCoords[0],
      icon: chiyodaIcon,
      map: map
    });
  }


  var displayed = [];
  var available = [];
  var $links = $('#rotators a');
  var numlinks = $links.length;
  var delay = 1500;
  var intervalMin = 5 * 1000;
  var intervalSpan = 10 * 1000;
  // function displayRandom(pos) {
  //   if (!available.length) {
  //     setTimeout(function() { displayRandom(pos); }, delay);
  //     return;
  //   }
  //   var $link = $($links[pos]);
  //   var $img = $link.find('img');
  //   var oldworkno = $img.attr('data-id');
  //   var r = Math.floor(Math.random() * available.length);
  //   displayed.unshift.apply(displayed, available.splice(r, 1));
  //   var workno = displayed[0];
  //   var work = data[workno];
  //   $link.attr('href', '#');
  //   var $newimg = $('<img data-id="' + workno + '" style="position:absolute;zIndex:10000;opacity:0" src="works/thumbs/' + work[1] + '"/>');
  //   $img.css({
  //       position: 'relative',
  //       zIndex: 10001
  //   });
  //   $newimg.insertBefore($img).css('top', $img[0].offsetTop);
  //   $img.fadeTo(delay, 0);
  //   $newimg.fadeTo(delay, 1, function() {
  //     $img.remove();
  //     $newimg.css({
  //       'position': 'relative',
  //       'top': 0
  //     });
  //     $link.attr('href', 'works/' + work[0] + '.html');
  //     var interval = Math.random() * intervalSpan + intervalMin;
  //     setTimeout(function() { displayRandom(pos); }, interval);
  //     for (i = 0; displayed[i] != oldworkno; i++);
  //     available.push.apply(available, displayed.splice(i, 1));
  //   });
  // }
  function displayRandom(pos) {
    if (!available.length) {
      setTimeout(function() { displayRandom(pos); }, delay);
      return;
    }
    var $link = $($links[pos]);
    var $img = $link.find('img');
    var oldworkno = $img.attr('data-id');
    var r = Math.floor(Math.random() * available.length);
    displayed.unshift.apply(displayed, available.splice(r, 1));
    var workno = displayed[0];
    var work = data[workno];
    $link.attr('href', '#');
    var $newimg = $('<img data-id="' + workno + '" style="position:absolute;zIndex:10000;opacity:0" src="works/thumbs/' + work[1] + '"/>');
    $img.css({
        position: 'relative',
        zIndex: 10001
    });
    $newimg.insertBefore($img).css('top', $img[0].offsetTop);
    $img.fadeTo(delay, 0);
    $newimg.fadeTo(delay, 1, function() {
      $img.remove();
      $newimg.css({
        'position': 'relative',
        'top': 0
      });
      $link.attr('href', 'works/' + work[0] + '.html');
      var interval = Math.random() * intervalSpan + intervalMin;
      setTimeout(function() { displayRandom(pos); }, interval);
      for (i = 0; displayed[i] != oldworkno; i++);
      available.push.apply(available, displayed.splice(i, 1));
    });
  }
  function startRotatorsIfNeeded() {
    var i;
    for (i = 0; i < data.length; i++) {
      available.push(i);
      var dummyimg = $('<img src="works/thumbs/' + data[i][1] + '"/>');
    }
    if (!numlinks) return;
    for (i = 0; i < numlinks; i++) {
      displayRandom(i);
    }
  }

  drawMapIfNeeded();
  //startRotatorsIfNeeded();
});
