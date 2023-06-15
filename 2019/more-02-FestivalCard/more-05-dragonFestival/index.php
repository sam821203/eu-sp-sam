<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <!--<title>選擇您的賀卡</title>-->
    <title>送您一份祝福</title>
    <meta property="og:title" content="👉 <?php if (isset($_GET['text'])) {echo $_GET['text'];} ?> 👈 送您一份祝福~"></meta>
    <meta property="og:image" content="card-1.jpg">
    <meta property="og:description" content="送您一份祝福">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        /* reset */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        *:before,
        *:after {
            box-sizing: border-box;
        }

        a {
            display: block;
            text-decoration: none;
        }

        ul {
            list-style: none;
        }

        img {
            border: 0;
        }

        main, article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }

        html, body {
            margin: 0;
            padding: 0;
        }

        body {
            font-size: 14px;
            font-family: PingFangTC-regular, Roboto, "LiHei Pro", "Source Han Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "Microsoft JhengHei", sans-serif;
            /*background-color: #3B419D;*/
        }

        table img {
            max-width: 100%;
        }

        input {
            padding: 0;
        }

        /* rwd title */

        .main-card {
            max-width: 1620px;
            /*max-width: 375px;*/
            /*max-height: 1458px;*/
            margin: 0 auto;
            position: relative;
            /*background-image: url('card-bg.jpg');*/
            /*background-size: 1620px 1458px;*/
            background-repeat: no-repeat;
            background-position: top center;
            text-align: center;
        }
        .input-outer {
            /*left: calc(50% - 364px);*/
            max-width: 1620px;
            margin: 0 auto;
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .input-group {
            width: 400px;
            margin: 10px auto;
        }

        .input-group:before,
        .input-group:after {
            content: '';
            display: block;
            clear: both;
        }

        .input-group .input-box {
            width: 95%;
            height: 34px;
            line-height: 34px;
        }

        /*.community__ico {*/
        /*float: right;*/
        /*}*/
        .input-block, .share-block {
            float: left;
        }

        .input-block {
            width: calc(100% - 105px);
            margin-top: 6px;
        }

        .input-block input {
            font-size: 18px;
        }

        .share-block {
            width: 105px;
        }

        .header__ico img {
            height: 45px;
            width: auto;
            padding-left: 5px;
        }

        .bg-line a {
            width: 45px;
            height: 45px;
            background: url('https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106167/line.jpg') no-repeat;
            background-size: 45px, 45px;
            border-radius: 5px;
        }

        .bg-facebook a {
            width: 46px;
            height: 46px;
            background: url('facebook.png') no-repeat;
            background-size: 46px, 46px;
        }

        .community__ico li {
            display: inline-block;
            cursor: pointer;
            line-height: 40px;
            margin-right: 5px;
        }

        .input-group {
            display: none;
        }

        .input-group.input-group-another {
            /*margin-top: 20px;*/
            text-align: center;
            display: block;
        }

        .fgc-refresh {
            width: 200px;
            font-size: 1.4rem;
            margin-top: 20px;
            padding: 10px 20px;
            background: #ffa522;
            color: #fff;
            border: 0;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s linear 0s;
            position: relative;
            text-decoration: none;
            text-transform: capitalize;
            overflow: hidden;
            text-transform: capitalize;
            letter-spacing: 3px;
        }

        .fgc-refresh:before {
            content: "\f0a4";
            font-family: FontAwesome;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: -30px;
            width: 30px;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 0px 4px 4px 0px;
            transition: all 0.2s linear 0s;
            text-align: center;
        }

        .fgc-refresh:hover {

            text-indent: -30px;
        }

        .fgc-refresh:hover:before {
            right: 0;
            text-indent: 0px;
        }

        .input-group.input-group-another.iga--refresh {
            text-align: left;
        }

        .iga--refresh .fgc-refresh {
            width: 140px;
            letter-spacing: 2px;
            font-size: 16px;
            margin-top: -20px;
            padding: 5px 20px;
            background: #d5d1d1;
            color: #605b5b;
        }

        /* 背景色共用 */
        body,
        .input-outer {
            background-color: #547A34;
        }

        /* 裝飾 */
        .fgc__decoration {
            position: absolute;
            top: 3vw;
            right: calc(100vw * 0.3);
            /*transform: translateX(-50%);*/
            z-index: 1;
        }

        .fgc__decoration img:nth-child(1) {
            width: 3vw;
            position: absolute;
            top: 0;
            left: calc(100vw * 0.065);
            /*animation: down 2s infinite alternate;*/
            transform-origin: top center;
        }

        .fgc__decoration img:nth-child(2) {
            position: absolute;
            top: 32px;
            width: 10vw;
            transform-origin: top center;
            animation: wind--swaying-new 2s infinite alternate;
        }

        /* 動畫 */
        @keyframes wind--swaying-new {
            0% {
                transform: rotate(15deg);
            }
            100% {
                transform: translateY(3px) rotate(-20deg);
            }
        }

        @keyframes wind--swaying-m {
            0% {
                transform: translate(2px, -21px) rotate(15deg);
            }
            100% {
                transform: translate(-2px, 20px) rotate(-25deg);
            }
        }

        @keyframes wind--swaying {

            0% {
                transform: translate(2px, -30px) rotate(15deg);
            }
            100% {
                transform: translate(-2px, 30px) rotate(-25deg);
            }
        }

        @keyframes down {

            0% {
                transform: scaleY(0.5);
            }
            100% {
                transform: scaleY(1.5);
            }
        }

        @media screen and (max-width: 895px) {
            .main-card img {
                width: 100%;
            }

            .input-group {
                width: 100%;
            }

            .fgc-refresh {
                margin-left: 3%;
            }

            .input-group .input-box {
                width: 90%;
                margin-left: 4%;
            }

            .input-outer {
                padding-top: 0;
            }
        }

        @media screen and (min-width: 896px) {
            /* 裝飾 */
            .fgc__decoration {
                top: 12px;
                right: calc(50% - 9px);
            }

            .fgc__decoration img:nth-child(1) {
                left: calc(50% + 110px);
                width: 15px;
            }

            .fgc__decoration img:nth-child(2) {
                width: 50px;
                top: 51px;
                left: calc(50% + 75px);
                /*animation: wind--swaying 2s infinite alternate;*/
            }
        }
    </style>
    <style type="text/css">
        /* festive greeting card */
        .fgc-temp-all {
            display: flex;
            flex-wrap: wrap;
        }

        .fgc-choice-temp {
            justify-content: space-around;
            width: calc(100% / 4 - 20px);
            margin: auto 10px;
        }

        /*.fgc-choice-temp:hover {*/
        /*transform: scale(2);*/
        /*}*/
        .fgc-choice-temp input {
            opacity: 0;
        }

        .fgc-choice-temp img {
            width: 100%;
            border: 1px solid #eee;
            box-shadow: 3px 3px 5px rgba(238, 238, 238, 0.4);
            padding: 4px;
        }

        .fgc-choice-temp:hover img {
            opacity: 0.6;
            transition: 0.5s;
        }

        .fgc-choice-temp .fgc-temp__text {
            display: flex;
            justify-content: center;
            color: #fff;
        }

        .input-box {
            height: 40px;
        }

        .fgc-title {
            font-size: 24px;
            margin: 10px auto 10px 10px;
            color: #fff;
        }

        @media screen and (max-width: 768px) {

            .fgc-choice-temp {
                justify-content: space-around;
                width: calc(100% / 2 - 10px);
                margin: auto 5px 10px 5px;
            }
        }

        /* 誘因 */
        .incentive__wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1260px;
            margin: 0 auto;
        }

        .incentive__wrap .open-bigPhoto {
            width: 23%;
            margin: 1%;
        }
        .incentive__wrap .open-bigPhoto img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 768px) {
            .incentive__wrap .open-bigPhoto {
                width: 46%;
                margin: 2%;
            }
        }

        /* 大圖打開 */
        /* open note detail*/
        .open-bigPhoto,
        .overlay-mask {
            cursor: pointer;
        }

        .overlay-mask {
            background: rgba(51, 51, 51, 0.7);
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 99;
        }

        .big--photo {
            display: none;
            position: fixed;
            top: 0;
            width: 80%;
            margin: 3% auto;
            overflow: auto;
            z-index: 100;
            left: 50%;
            transform: translateX(-50%);
        }

        @media screen and (min-width: 600px) and (max-width: 1024px) {
            .big--photo {
                height: 100vh;
            }
        }

        .big--photo img {
            width: 100%;
        }

        .overlay-open {
            display: block;
            transition: 2.5s;
        }

        .overlay-animate {
            transition: 2.5s;
        }

        .max-width-100 {
            max-width: 100%;
        }

        .close-icon-btn {
            position: relative;
            cursor: pointer;
        }

        .close-icon {
            position: fixed;
            top: 10px;
            right: 5px;
            z-index: 1;
            color: #f3ffea;
            background-color: #f3ffea;
            width: 18px;
            height: 1px;
            border: 2px solid #f3ffea;
            border-radius: 110px;
        }

        .close-icon-r {
            transform: rotate(-45deg);
        }

        .close-icon-l {
            transform: rotate(45deg);
        }

        @media screen and (min-width: 769px) {
            .big--photo {
                width: auto;
                margin: 1% auto;
            }

            .big--photo img {
                width: auto;
                height: 96vh;
            }
            .close-icon {
                top: 10px;
                right: 10px;
                width: 18px;
                border: 2px solid #f3ffea;
            }
        }

        /* /.END 大圖打開 */

    </style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139129937-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-139129937-1');
    </script>
</head>
<body>
<script>
    var fbhtml_url = window.location.toString();
</script>
<div class="fgc__decoration">
    <img src="rice-dumpling-line.png" alt="包你包粽">
    <img src="rice-dumpling.png" alt="包你包粽">
</div>
<section class="fgc-temp-all" id="fgcTempAll"></section>
<div class="main-card" id="fgcＭainCard"></div>
<div id="fgcMainInput"></div>

<div class="incentive__wrap" id="incentiveWrap">
    <!-- 1st 誘因 -->
    <div class="open-bigPhoto">
        <img src="incentive-1.jpg" alt="東森嘴好獨享餐">
    </div>
    <div class="big--photo">
        <img src="incentive-1-big.jpg" alt="">
    </div>

    <!-- 2nd 誘因 -->
    <div class="open-bigPhoto">
        <img src="incentive-2.jpg" alt="東森購夏趴">
    </div>
    <div class="big--photo">
        <img src="incentive-2-big.jpg" alt="">
    </div>

    <!-- 3rd 誘因 -->
    <div class="open-bigPhoto">
        <img src="incentive-3.jpg" alt="夏日FUN超值餐">
    </div>
    <div class="big--photo">
        <img src="incentive-3-big.jpg" alt="">
    </div>

    <!-- 4th 誘因 -->
    <div class="open-bigPhoto">
        <img src="incentive-4.jpg" alt="購好餐歡聚餐">
    </div>
    <div class="big--photo">
        <img src="incentive-4-big.jpg" alt="">
    </div>
</div>

</body>
<script src="https://www.etmall.com.tw/Scripts/lib/jquery/jquery-2.2.0.min.js"></script>
<script>
</script>
<script src="main.js"></script>
<script></script>
</html>