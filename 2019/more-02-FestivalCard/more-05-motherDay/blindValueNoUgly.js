/**
 * Created by jing on 2019/5/3.
 */

var text = document.getElementById('myText1');
var url = location.href;

// 雙向綁定 input 內容
function Binding(b) {
    _this = this;
    this.elementBindings = [];
    this.value = b.object[b.property];
    this.valueGetter = function () {
        return _this.value;
    }
    this.valueSetter = function (val) {
        _this.value = val;
        for (var i = 0; i < _this.elementBindings.length; i++) {
            var binding = _this.elementBindings[i];
            binding.element[binding.attribute] = val;
        }
    }
    this.addBinding = function (element, attribute, event) {
        var binding = {
            element: element,
            attribute: attribute
        }
        if (event) {
            element.addEventListener(event, function (event) {
                _this.valueSetter(element[attribute]);
            })
            binding.event = event
        }
        this.elementBindings.push(binding);
        element[attribute] = _this.value;
        return _this;
    }

    Object.defineProperty(b.object, b.property, {
        get: this.valueGetter,
        set: this.valueSetter
    });

    b.object[b.property] = this.value;
}

var obj = {a: ''};
var myInputElement1 = document.getElementById("myText1");
var myDOMElement = document.getElementById("myDomElement");

new Binding({
    object: obj,
    property: "a"
})
    .addBinding(myInputElement1, "value", "keyup")
    // .document.getElementById('testautofocus').addEventListener('input', function(e){ })
    .addBinding(myDOMElement, "innerHTML")
obj.a = '';

var inputName = '';
var isFirst = true;
text.addEventListener("input", function (e) {
    encodeInput();
    inputName = this.value;
    var myDOMElement = document.getElementById("myDomElement");
    var inputNameValue = document.createTextNode(inputName);
    if(isFirst){
        isFirst = false;
    }
    myDOMElement.innerHTML = '';

    myDOMElement.appendChild(inputNameValue);
});


// 傳值
function encodeInput() {
    url = location.href;
    if (url.indexOf('?text=') != -1) {
        url = url.split('?text=')[0];
    }
    if (url.indexOf('?openExternalBrowser=1') != -1) {
        url = url.split('?openExternalBrowser=1')[0];
    }

    var inputValue = text.value;
    var encodeValue = encodeURI(inputValue);

    // 將現行網址列轉換成編譯後結果(用於分享可直接抓網址)
    var state = {'userWords': inputValue};
    var finalUrl = encodeURI(url.split('?text=')[0] + '?openExternalBrowser=1&text=' + inputValue);
    var fbUrl = url.split('?text=')[0] + encodeURIComponent('?openExternalBrowser=1&text=' + inputValue);
    shareSocialChange(fbUrl);
    window.history.replaceState(state, '', finalUrl);
}

function shareSocialChange(inputUrl) {
    fbhtml_url = inputUrl || window.location.toString();
}
// text.addEventListener('input', function () {
//     encodeInput();
// });

// 接值

window.addEventListener('load', function () {
    var outputInUrl = new URL(location.href);
    var param = outputInUrl.searchParams.get('text');

    myDOMElement.innerHTML = param;
});