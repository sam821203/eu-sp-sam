import { createDateArray } from 'utils/js/build-time.js'

// TODO: 設定SP起始時間與走期，供給各個隨時間的component用
var startDate = '2021/7/20';
var startTime = startDate + ' 10:00';
var startTime2 = startDate + ' 09:00';
// 注意總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
var startDurations = 10;

export default {
  // 單日切換
  oneDay: createDateArray( startTime, startDurations ),
  // 單日切換，早上九點
  oneDayNine: createDateArray ( startTime2, startDurations ),
  // 雙日切換
  twoDays: createDateArray ( startTime, startDurations, 2 ),
}