import { createDateArray } from 'utils/js/build-time.js'

// TODO: 設定SP起始時間與走期，供給各個隨時間的component用
var startDate = '2021/11/29';
var startDate2 = '2021/11/29';
var startTime = startDate + ' 00:00';
var startTime2 = startDate2 + ' 00:00';
// 設定sp總共持續幾天
var startDurations = 13;
var startDurations2 = 15;

export default {
  // 單日切換
  oneDay: createDateArray( startTime, startDurations ),
  oneDay2: createDateArray( startTime2, startDurations2 ),
  // 雙日切換
  // twoDays: createDateArray ( startTime, startDurations, 2 ),
}