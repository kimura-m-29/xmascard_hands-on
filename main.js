'use strict';

// electronモジュール読み込み
var electron = require('electron');
// アプリケーション管理モジュール読み込み
var app = electron.app;
// ウィンドウ生成モジュール読み込み
var BrowserWindow = electron.BrowserWindow;

// クラッシュレポートをelectronのサーバに送る
electron.crashReporter.start();

// JavaScriptのガベージコレクション対象にならないよう
// グローバルにメインウインドウ用変数を宣言する
var mainWindow;

// すべてのウインドウが閉じた時に発生するイベント
app.on('window-all-closed', function () {
  // Mac以外はアプリケーションを終了させる
  //
  // →Macでは、ユーザがCmd + Qで終了させるまで
  // ウインドウを閉じてもアプリケーションを終了させない、という挙動が一般的であるため
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// electronが初期処理を終え、ウインドウを生成する準備ができた時に発生するイベント
app.on('ready', function () {
  // メインウインドウを生成する
  mainWindow = new BrowserWindow({
    // ウインドウの横幅
    width: 1200,
    // ウインドウの縦幅
    height: 750,
    // ウインドウのリサイズ可不可（true:可、false：不可）
    resizable: false,
    // ウインドウのタイトルバー表示非表示（true:表示、false：非表示）
    frame: false
  });

  // メインウインドウにindex.htmlを読みこませる
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  if (process.env.NODE_ENV === 'development') {
    // 開発者ツールを開く
    mainWindow.webContents.openDevTools();
  }

  // メインウインドウを閉じた時の処理
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
