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
            Id: 2776984,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣<',
            UsePoint: '99點+9999',
            Amount: 999,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776984,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 999,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776984,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 80,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776984,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 100,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776984,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 63,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776984,
            Name: '9999xzcasdcassdcadadasdasdasd枚東森幣',
            UsePoint: '99點+9999',
            Amount: 15,
            Image: 'https://media.etmall.com.tw/nximg/002776/2776984/2776984-1_xl.jpg',
            Link: 'https://www.etmall.com.tw/i/2776984'
        },
        {
            Id: 2776984,
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

data.gifts.forEach(function (gift, idx) {
    Object.getOwnPropertyNames(gift).forEach(function (name) {
        var dom = document.querySelector(`[data-src='Gift_${name}_${idx + 1}']`)
        if (dom) {
            if (dom.tagName == 'IMG') dom.src = gift[name]
            else dom.innerText = gift[name]
        }
    })
})

data.jajagos.forEach(function (jajago, idx) {
    Object.getOwnPropertyNames(jajago).forEach(function (name) {
        var dom = document.querySelector(`[data-src='Jajago_${name}_${idx + 1}']`)
        if (dom) {
            if (dom.tagName == 'IMG') dom.src = jajago[name]
            else if (dom.tagName == 'A') dom.href = jajago[name]
            else dom.innerText = jajago[name]
        }
    })
})

document.querySelectorAll(`[data-src='NotificationTime']`).forEach(ele => (ele.innerText = data.notificationTime))

// Setup Listener

// 詳情顯示彈窗
document.querySelectorAll('.item__info').forEach(el => {
    el.addEventListener('click', function (el) {
        let selectedData
        const type = el.target.dataset['type']
        const index = el.target.dataset['index']

        if (type === 'Gift') {
            selectedData = data.gifts.find(gift => gift.Id == index)
        } else if (type === 'Jajago') {
            selectedData = data.jajagos.find(jajago => jajago.Id == index)
        }

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

// 登記換
document.querySelectorAll('.cta--active').forEach(el => {
    el.addEventListener('click', function (el) {
        onShowModal({
            title: '請先登入會員',
            btnCallback: () => {}
        })
    })
})

// 關閉彈窗
document.querySelector('.n-btn').addEventListener('click', function () {
    document.querySelector('.scroll-section').style.display = 'block'
    document.querySelector('.modal').classList.remove('active')
    document.body.classList.remove('modal-on')
})

function onShowModal({ title = '', subtitle = '', detail = '', btnCallback }) {
    document.querySelector('.area-title').children[0].innerHTML = title
    document.querySelector('.area-subtitle').innerHTML = subtitle
    document.querySelector('.area-detail').innerHTML = detail

    // 顯示Modal
    document.querySelector('.modal').classList.add('active')

    // 鎖住滾動
    document.body.classList.add('modal-on')

    if (btnCallback) {
        btnCallback()
    }
}
