var z = new Date().getTime();
var e = function () {
  var e =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
      navigator.userAgent
    );
  if (e) return true;
  else return false;
};
var r = document.getElementById("check");
if (e()) {
  var t = document.createElement("script");
  var a = document.createElement("script");
  t.id = "dataScript";
  t.src = "data-card.js?" + z;
  a.id = "controller";
  a.src = "controller.js";
  document.body.insertBefore(t, r.nextSibling);
  var n = document.getElementById("dataScript");
  document.body.insertBefore(a, n.nextSibling);
} else {
  document.body.removeChild(r);
}
