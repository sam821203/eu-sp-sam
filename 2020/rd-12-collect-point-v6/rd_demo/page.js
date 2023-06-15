var data = {
    startTime: '',
    endTime: '',
    orderStartTime: '',
    orderEndTime: '',
    notificationTime: '10/30(五) 18:00',
    gifts: [
        {
            Id: 1,
            Name: '9999 枚東森幣',
            UsePoint: 8,
            Amount: 0,
            Image: 'item-exchange-1.png',
            Detail: 'aaaa'
        },
        {
            Id: 2,
            Name: 'LINE POINT 150點',
            UsePoint: 88,
            Amount: 0,
            Image: 'item-exchange-2.png',
            Detail: 'aaaa'
        },
        {
            Id: 3,
            Name: '大字能16個英文字',
            UsePoint: 38,
            Amount: 0,
            Image: 'item-exchange-3.png',
            Detail: 'aaaa'
        },
        {
            Id: 4,
            Name: '小字20個英文超過切掉',
            UsePoint: 48,
            Amount: 0,
            Image: 'item-exchange-4.png',
            Detail: 'aaaa'
        },
        {
            Id: 5,
            Name: '9999 枚東森幣',
            UsePoint: 52,
            Amount: 0,
            Image: 'item-exchange-5.png',
            Detail: 'aaaa'
        },
        {
            Id: 6,
            Name: 'LINE POINT 150點',
            UsePoint: 63,
            Amount: 0,
            Image: 'item-exchange-6.png',
            Detail: 'aaaa'
        },
        {
            Id: 7,
            Name: '大字能16個英文字',
            UsePoint: 72,
            Amount: 0,
            Image: 'item-exchange-7.png',
            Detail: 'aaaa'
        }
        // {
        //   GoodID: 8,
        //   Name: '小字20個英文超過切掉',
        //   UsePoint: 81,
        //   Amount: 0,
        //   Image: 'item-exchange-8.png',
        //   Detail: 'aaaa'
        // },
    ],
    jajagos: [
        {
            Id: 2776984,
            Name: '11個中文超過的話就切掉了喔喔喔喔',
            UsePoint: '99點+9999',
            Amount: 999,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776985,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣<',
            UsePoint: '99點+9999',
            Amount: 999,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776986,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 999,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776987,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 80,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776988,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 100,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776989,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 63,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776990,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 15,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776991,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 45,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        }
        // {
        //   GoodID: 8,
        //   Name: '小字20個英文超過切掉',
        //   UsePoint: 81,
        //   Amount: 0,
        //   Image: 'item-exchange-8.png',
        //   Detail: 'aaaa'
        // },
    ]
}

// 換好禮
data.gifts.forEach(function (gift, idx) {
    const { Id } = gift
    Object.keys(gift).forEach(function (name) {
        var dom = document.querySelector(`[data-src='Gift_${name}_${idx + 1}']`)
        if (dom) {
            if (dom.closest('.cta__box')) {
                dom.closest('.cta__box').dataset['type'] = 'Gift'
                dom.closest('.cta__box').dataset['Id'] = Id
            }

            if (dom.tagName == 'IMG') {
                dom.src = gift[name]
                dom.dataset.index = Id
            } else {
                dom.innerText = gift[name]
            }
        }
    })
})

// 購好物
data.jajagos.forEach(function (jajago, idx) {
    const { Id } = jajago
    Object.keys(jajago).forEach(function (name) {
        var dom = document.querySelector(`[data-src='Jajago_${name}_${idx + 1}']`)
        if (!dom) return
        if (dom.closest('.cta__box')) {
            dom.closest('.cta__box').dataset['type'] = 'Jajago'
            dom.closest('.cta__box').dataset['Id'] = Id
        }
        switch (dom.tagName) {
            case 'IMG':
                dom.src = jajago[name]
                dom.dataset.index = Id
                break

            case 'A':
                if (name !== 'Id') {
                    dom.href = jajago[name]
                    dom.target = '_blank'
                }
                break

            default:
                dom.innerText = jajago[name]
        }
    })
})

document.querySelectorAll(`[data-src='NotificationTime']`).forEach(ele => (ele.innerText = data.notificationTime))

/* Setup Listener */

// 詳情顯示彈窗
document.querySelectorAll('.item__info').forEach(el => {
    el.addEventListener('click', function (el) {
        const parnetNode = el.target.closest('.cta__box')
        const type = parnetNode.dataset['type']
        const Id = parnetNode.dataset['Id']
        const selectedData = data.gifts.find(gift => gift.Id == Id)

        if (selectedData) {
            onShowModal({
                title: '商品詳情',
                subtitle: selectedData.Name,
                detail:
                    '<hr>完成『登記換』者，將於2020/10/30 18:00前以我的禮物盒推播通知。<br>東森幣效期：2021/1/30 23:59。<br>使用東森幣注意事項請見：會員＞幫助中心＞常見問題＞東森幣說明',
                btnCallback: () => {}
            })
        }
    })
})

// 登記換 觸發事件
document.querySelectorAll('.cta--active').forEach(el => {
    // var isLogin = Math.random() > 0.5

    el.addEventListener('click', function (el) {
        const parnetNode = el.target.closest('.cta__box')
        let type
        let Id
        let selectedData
        if (parnetNode) {
            type = parnetNode.dataset['type']
            Id = parnetNode.dataset['Id']
        }

        switch (type) {
            case 'Gift':
                selectedData = data.gifts.find(gift => gift.Id == Id)
                break

            case 'Jajago':
                selectedData = data.jajagos.find(jajago => jajago.Id == Id)

                break
        }

        if (true) {
            if (selectedData) {
                onShowModal({
                    title: `請確認是否使用${selectedData.UsePoint}點登記購「${selectedData.Name}」，一經確認後，立即扣除，無法取消返還`,
                    showCancelBtn: true,
                    btnCallback: () => {}
                })
            }
        } else {
            onShowModal({
                title: '請先登入會員',
                showCancelBtn: false,
                btnCallback: () => {
                    //document.location.href = '@ViewBag.LoginUrl'
                }
            })
        }
    })
})

// 關閉彈窗按鈕
document.querySelector('.n-btn--cancel').addEventListener('click', onCloseModal)

function onShowModal({ title = '', subtitle = '', detail = '', showCancelBtn = false, btnCallback }) {
    document.querySelector('.area-title').children[0].innerHTML = title
    document.querySelector('.area-subtitle').innerHTML = subtitle
    document.querySelector('.area-detail').innerHTML = detail

    if (!subtitle && !detail) {
        document.querySelector('.scroll-section').style.display = 'none'
    }

    // 顯示Modal
    document.querySelector('.modal').classList.add('active')

    // 鎖住滾動
    document.body.classList.add('modal-on')

    document.querySelector('.n-btn.n-btn--cancel').style.display = showCancelBtn ? 'inline-block' : 'none'

    document.querySelector('.n-btn').addEventListener('click', onCloseModal)

    if (btnCallback) {
        document.querySelector('.n-btn').addEventListener('click', btnCallback)
    }
}

// 關閉彈窗
function onCloseModal() {
    document.querySelector('.scroll-section').style.display = 'block'
    document.querySelector('.modal').classList.remove('active')
    document.body.classList.remove('modal-on')
}
