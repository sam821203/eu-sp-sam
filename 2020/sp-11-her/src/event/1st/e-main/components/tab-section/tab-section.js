// export var initBuildTab = buildTab();

//- 動態產出檔案
import {makeLink} from 'utils/js/detect.js'
export var initdailyGoods = tabSectionGoods(sheetno);

function tabSectionGoods(sheetno) {
    // 防呆，如果要改回json 需解開
    // if (typeof tabGoodsData === 'undefined') return false;
    var getTabGoodsData = document.getElementById('contentBlock');
    // 填輪播迴圈
    var str = '';
    // google 表單資料 對應名稱不可以大寫
    var sheetid = '1Gjvpm9s7KWWx-YPCu7t119YlxRg3jLPBk_cPNxPTLSw',
        sheetno = sheetno || 1,
        dataurl = 'https://spreadsheets.google.com/feeds/list/' + sheetid + '/' + sheetno + '/public/values?alt=json-in-script&callback=?';
    // console.log(sheetno)
    $.getJSON(dataurl,
        function (json) {
            var e = json.feed.entry,
                n = e.length;
            $(e).each(function () {
                // $('.results').append('<div class="data"><h2>' + this.gsx$title.$t + '</h2><p>' + this.gsx$desc.$t + '</p><span class="dtag">' + this.gsx$tag.$t + '</span></div>');
                var content;
                content = '<div class="content__item">';
                content += '<img src="' + this.gsx$image.$t + '" alt="' + this.gsx$title.$t + '">';
                content += '<p class="good__title-sub">' + this.gsx$desc.$t + '</p>';
                content += '<p class="good__title">' + this.gsx$title.$t + '</p>';
                content += '<p class="good__original__price">原價$' + Number(this.gsx$original.$t).toLocaleString() + '</p>';
                content += '<p class="good__price">';
                content += '<span class="price__init">特價$</span>';
                content += '<span class="price">' + Number(this.gsx$price.$t).toLocaleString() + '</span></p>';

                content += '</div>';
                str += content;

                getTabGoodsData.innerHTML = str;
            });
        }
    );
    // 帶本機端資料
    // console.log(tabGoodsData.length);
    // for (var i = 0; i < tabGoodsData.length; i++) {
    //     var content;
    //     content = '<div class="content__item">';
    //     content += '<img src="' + tabGoodsData[i].productImg + '" alt="' + tabGoodsData[i].name + '">';
    //     content += '<p class="good__title-sub">' + tabGoodsData[i].subTitle + '</p>';
    //     content += '<p class="good__title">' + tabGoodsData[i].name + '</p>';
    //     content += '<p class="good__original__price">原價$' + Number(tabGoodsData[i].originalPirce).toLocaleString() + '</p>';
    //     content += '<p class="good__price">';
    //     content += '<span class="price__init">特價$</span>';
    //     content += '<span class="price">' + Number(tabGoodsData[i].price).toLocaleString() + '</span></p>';
    //
    //     content += '</div>';
    //     str += content;
    // }
    // console.log(str);
    // getTabGoodsData.innerHTML = str;
}


// https://www.youtube.com/watch?v=-gOydrfoLHs
// https://g0v.hackpad.tw/5Ofw64qSz7P
// https://www.knowledgefree.idv.tw/2019/10/blog-post_27.html
// https://ouoholly.github.io/post/google-spreadsheet-data-to-json-javascript-html/#%E6%96%B9%E6%B3%95%E4%BA%8C-Code