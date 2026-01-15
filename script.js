/* =========================================
   BGMコントロール用 JavaScript
========================================= */

// HTMLからBGM(audio)を取得
const bgm = document.getElementById("bgm");

// BGMボタンを取得
const btn = document.getElementById("bgmToggle");

// BGMが再生中かどうかの状態
let playing = false;

/*
  ボタンがクリックされたときの処理
  ※スマホやChromeでは「ユーザー操作」がないと
    音楽は再生できないため、ボタン操作が必要
*/
btn.addEventListener("click", () => {

  // 再生していない場合
  if (!playing) {
    bgm.volume = 0.4;   // 音量（0.0～1.0）
    bgm.play();        // BGM再生
    btn.textContent = "⏸ BGM"; // ボタン表示変更
  }
  // 再生中の場合
  else {
    bgm.pause();       // BGM停止
    btn.textContent = "♪ BGM";
  }

  // 再生状態を反転
  playing = !playing;
});
