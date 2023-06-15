import { makeLink } from 'utils/js/detect.js'

export var initPromoSpecial = [
  changeLink(),
];

function changeLink() {
  var promoChangeLink = document.querySelector( '#promoSpecialItem2 a' );
  var webLink = 'https://www.etmall.com.tw/member/taskActivity';
  var appLink = 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86';
  promoChangeLink.href = makeLink(960, appLink, webLink);
}
