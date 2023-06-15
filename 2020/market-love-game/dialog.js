const charPikaChu =
  {
    id: 001,
    name: "皮卡丘",
    pic: "pikachu.png",
  };
const charCute = 
  {
    id: 002,
    name: "伊布",
    pic: "cute.png",
  };
const charQuery = [charPikaChu, charCute]

// name: id或自取
// status： 0不秀、1秀黑影、2秀暗、秀亮(正在說話)
// name: charQuery[0].name是第一個角色的名字、charQuery[1].name是第二個角色的名字、也可以用自己打字
// 一整個{}就是一個對話，複製即可新增
const dialogWord = [
  {
    char1: {char: charQuery[0],status: 1}, 
    char2: {char: charQuery[1],status: 1},
    name: "？？？",
    dialog: "皮卡皮卡！"
  },
  {
    char1: { char: charQuery[0], status: 1},
    char2: { char: charQuery[1], status: 1},
    name: "？？？",
    dialog: "伊布！"
  },
  {
    char1: { char: charQuery[0], status: 2},
    char2: { char: charQuery[1], status: 3},
    name: charQuery[1].name,
    dialog: "伊布！伊布！伊布！"
  },
  {
    char1: { char: charQuery[0], status: 3 },
    char2: { char: charQuery[1], status: 2 },
    name: charQuery[0].name,
    dialog: "皮卡皮卡！皮卡皮卡！皮卡皮卡！皮卡皮卡！皮卡皮卡！皮卡皮卡！皮卡皮卡！"
  },
  {
    char1: { char: charQuery[0], status: 3 },
    char2: { char: charQuery[1], status: 3 },
    name: "皮卡丘、伊布",
    dialog: "皮卡皮卡！皮卡皮卡！皮卡皮卡！皮卡皮卡！皮卡皮卡！伊布！伊布！伊布！伊布！伊布！伊布！"
  },
];