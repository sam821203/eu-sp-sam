// 要秀出館別欄位設定成true，不要秀出則設定成false
var showDepartment = true;

var optionDepartment = [
  // 標題，可自行調整標題內容，注意每次都要檢查這邊是否有多的選項，雖然有做好沒有活動的畫面，但是這邊不該出現沒活動的狀況
  // 沒該館活動就該撤掉選項
  {
    'optionValue': '請下拉選擇館別活動',
  },
  // 以下為選項內容，optionValue為要作為比對的文字，相同文字的會被篩選出來，每個選項optionValue必須不同
  {
    'optionValue': '3C館',
  },
  {
    'optionValue': '家電館',
  },
  {
    'optionValue': '美妝館',
  },
  {
    'optionValue': '保健館',
  },
  {
    'optionValue': '日用館',
  },

];
var departmentData = [
  // 標題，可自行調整標題內容，"data-"開頭的兩樣對應到上面兩個選項的optionValue
  {
    'department': '館別',
    'date': '活動期間',
    'info': '活動內容',
  },
  // 以下為表格內容，info欄位平板手機超過17個中文會掉下去第二行、大網超過22個中文會掉下去第二行，建議以小網為主17個字為限
  {
    'dataDepartment': '3C館',
    'department': '3C館',
    'date': '10.01-10.31',
    'info': '有夠爽通通下殺老闆跳樓！不買可惜～不買可惜～',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '美妝館',
    'department': '美妝館',
    'date': '12.28-12.28',
    'info': '通通下殺老闆跳樓有夠爽！不買可惜～',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '3C館',
    'department': '3C館',
    'date': '10.01-10.31',
    'info': '通通下殺老闆跳樓！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '美妝館',
    'department': '美妝館',
    'date': '10.01-10.31',
    'info': '通通下殺老闆跳樓有夠爽！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '3C館',
    'department': '3C館',
    'date': '10.01-10.31',
    'info': '有夠爽通通下殺老闆跳樓！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '美妝館',
    'department': '美妝館',
    'date': '10.01-10.31',
    'info': '通通下殺老闆跳樓有夠爽！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '3C館',
    'department': '3C館',
    'date': '10.01-10.31',
    'info': '有夠爽通通下殺老闆跳樓！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '美妝館',
    'department': '美妝館',
    'date': '10.01-10.31',
    'info': '通通下殺老闆跳樓有夠爽！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '3C館',
    'department': '3C館',
    'date': '10.01-10.31',
    'info': '有夠爽通通下殺老闆跳樓！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
  {
    'dataDepartment': '美妝館',
    'department': '美妝館',
    'date': '10.01-10.31',
    'info': '通通下殺老闆跳樓有夠爽！',
    'link': 'http://etu.tw/VA2Ubx#esun',
    'appLink': 'etmall://open?pgid=44&url=https%3A%2F%2Fetu.tw%2FZBWjbA%23esun&t=%E7%8E%89%E5%B1%B1%E9%8A%80%E8%A1%8C',
  },
];