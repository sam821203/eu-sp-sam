<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta name="viewport" content="width=device-width">
    <meta charset="UTF-8">
    <title>祝您母親節快樂</title>
    <meta property="og:title" content="👉 <?php if (isset($_GET['text'])) {echo $_GET['text'];} ?> 👈祝您母親節快樂">
    <meta property="og:image" content="happyMotherDay.jpg">
    <meta property="og:description" content="送您一份祝福">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>

    <link rel="stylesheet" href="mother-day.css">

    <!--[if IE 9]>
    <style>
        .bn-w4m2 .banner__item {
            width: 25% \ ;
        }

        @media screen and (max-width: 1024px) {
            .bn-w4m2 .banner__item {
                width: 50% \ ;
            }
        }
    </style>
    <![endif]-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139129937-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-139129937-1');
    </script>
</head>
<body class="sp__page">
<div id="spWrap" class="sp__wallper sp__wrap">
    <main class="sp__main">
        <div class="sp--1260">
            <header class="sp__visual">
                <a href="https://www.etmall.com.tw" class="logo"><img src="logo.png" alt="東森購物"></a>
                <div class="sp__main">
                    <h1 class="main-title">
                        <img src="title-mothersday.png" alt="母親節快樂">
                    </h1>

                    <div class="sub-wrap">
                        <img src="subtitle.png" alt="" class="sub-title">
                        <canvas id="c"></canvas>
                        <div id="overlay" style=""></div>
                    </div>
                    <img class="mascot" src="Edog.png" alt="" style="">
                </div>
            </header>
        </div>
    </main>
</div>

<div class="domMain">
    <div class="domMain-content">
        <div type="text" id="myDomElement" class="domMain-name"></div>
        <div class="domMain-normal"><span>敬上</span></div>
    </div>
</div>

<div class="input-outer">
    <div class="input-group">
        <div class="input-block">
            <input id="myText1" maxlength="9" class="input-box" type="text" placeholder="輸入您的大名傳送祝福">
        </div>

        <div class="share-block">
            <ul class="community__ico">
                <li class="bg-line">
                    <a href="javascript: void(window.open('https://lineit.line.me/share/ui?url=' .concat(encodeURIComponent(location.href)) ));"
                       title="分享給 LINE 好友">
                    </a>
                </li>
                <li class="bg-facebook">
                    <a href="javascript:void(0);"
                       onclick="window.open('http://www.facebook.com/sharer/sharer.php?u='+fbhtml_url); return false;"
                       title="分享給 Facebook 好友"></a>
                </li>
            </ul>
        </div>
    </div>
</div>


<!--[if IE 9]>
<script src="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106742/flexibility.js"></script>
<script>flexibility(document.documentElement);</script>
<![endif]-->
<script src="https://www.etmall.com.tw/Scripts/lib/jquery/jquery-2.2.0.min.js"></script>

<!--<script id="loadJS" src="load-indicator.js"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
<script src="motherCanvas.js"></script>
<script src="blindValue.js"></script>
<script>


</script>
</body>
</html>