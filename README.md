# xmascard_hands-on
JavaScript基礎勉強会のハンズオン用プロジェクト
## boxerプラグインを使った、モーダル表示方法
### カスタムコンテンツを表示する
```html
<div class="panel">
    <div class="front">
        <img src="image/snowball-deer.png">
    </div>
    <div class="back bg-blue">
        <span class="date">01</span>
        <span class="xmasPresent">
            <a href="#hidden" class="boxer">
                <img src="image/xmas_present.png">
            </a>
            <div id="hidden" style="display: none;">
                <div class="content" style="text-align: center;">
                    <img src="image/xmas_ornament.png" width="100" height="131">
                    <p>Merry Christmas !</p>
                </div>
            </div>
        </span>
    </div>
</div>
```
`<span class="xmasPresent">`の下にあるaタグのhref属性値`#hidden`と、その下の`id="hidden"`に同じ値をセットするのがポイントです。

### 写真を表示する
```html
<div class="panel">
    <div class="front">
        <img src="image/xmas-tree-2.png">
    </div>
    <div class="back bg-blue">
        <span class="date">06</span>
        <span class="xmasPresent">
            <a href="image/picjumbo.com_IMG_4324.jpg" class="boxer" title="クリスマスツリー">
                <img src="image/xmas_present.png">
            </a>
        </span>
    </div>
</div>
```
`<span class="xmasPresent">`の下にあるaタグのhref属性値に表示したい画像ファイルを指定してください。  
title属性にテキストをセットすると、キャプションに表示されます。

### Youtube動画を表示する
```html
<div class="panel">
    <div class="front">
        <img src="image/snowflake-1.png">
    </div>
    <div class="back bg-gray">
        <span class="date">10</span>
        <span class="xmasPresent">
            <a href="http://www.youtube.com/embed/JfgOjtq440o" class="boxer" title="back number クリスマスソング">
                <img src="image/xmas_present.png">
            </a>
        </span>
    </div>
</div>
```
`<span class="xmasPresent">`の下にあるaタグのhref属性値に表示したいYoutube動画を指定してください。  
（Youtubeページの共有＞埋め込みコード　からURLが分かるかと思います）  
title属性にテキストをセットすると、キャプションに表示されます。

### Webページを表示する
```html
<div class="panel">
    <div class="front">
        <img src="image/santa.png">
    </div>
    <div class="back bg-pink">
        <span class="date">24</span>
         <span class="xmasPresent">
             <a href="http://www.timeout.jp/tokyo/ja/shopping/christmasmarket" class="boxer">
                 <img src="image/xmas_present.png">
             </a>
        </span>
    </div>
</div>
```
`<span class="xmasPresent">`の下にあるaタグのhref属性値に表示したいWebページのURLを指定してください。  

#### 参照
[Boxer · Formstone](http://classic.formstone.it/components/boxer)

## クリスマスカードに使用しているプラグイン
### ページめくり
[BookBlock](https://github.com/codrops/BookBlock)
### アイコンめくり
[jQuery Flip](https://github.com/nnattawat/flip)
### モーダル表示
[Boxer](https://github.com/FormstoneClassic/Boxer)

