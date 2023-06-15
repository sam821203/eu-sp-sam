import { createDateArray } from "utils/js/build-time.js";

// TODO: 設定SP起始時間與走期，供給各個隨時間的component用
var startDate = "2023/03/22";
var startTime = startDate + " 10:00";
var startTime2 = startDate + " 09:00";
// 設定sp總共持續幾天
var startDurations = 20;

export default {
  // 單日切換，半夜十二點
  oneDay: createDateArray(startTime, startDurations),
  // 單日切換，早上九點
  oneDayNine: createDateArray(startTime2, startDurations),
  // 雙日切換
  // twoDays: createDateArray ( startTime, startDurations, 2 ),
};
