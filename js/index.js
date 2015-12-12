'use strict';

// boxerプラグインを有効にする
$('.boxer').boxer();

// 3日のプレゼントアイコンクリック時の処理
$('#present_03').on('click', function (e) {
  // クリックイベントの伝播を防ぐ
  e.stopPropagation();

  var audio = $('#present_03_audio')[0];

  // 一時停止していた時は再生し、そうでなければ一時停止する
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

