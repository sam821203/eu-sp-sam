import { detectAndroidVersion } from 'utils/js/detect.js'

// 如果回傳string就只取版本號第一位與參數比較再傳出去布林，其他型別就不處理(undefined)
function isAndroidEarlierThen(version) {
  if (!detectAndroidVersion) return false;

  if (typeof(detectAndroidVersion()) === 'string') {
    return parseInt(detectAndroidVersion(), 10) < version;
  }
}

function makeAndroidAlert(version) {
  // 檢測是否小於Android指定版本，不是就不執行
  if (!isAndroidEarlierThen(version)) return false;

  var alertText = "請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。";

  alert(alertText);
}

export var notSupportAndroid5 = makeAndroidAlert(5);
