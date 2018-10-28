const aboutme = {
  name: '黃俊諺',
  facebook: 'https://www.facebook.com/profile.php?id=100000224732119',
  linkedin: 'https://www.linkedin.com/in/jyuan3310',
  github: 'https://github.com/ji394snoopy',
  mail: 'eric60513@gmail.com',
  phone: '0975-220-827',
  myPhone: '886975220827',
  intro:'喜愛研究前端的技術和JavaScript，以能夠專精js橫跨前後端為目標，除了前端技術也有在撰寫Swift和Java。'
};

const awards = [
  '103學年度第十屆中興大學資訊管理實務專題成果展 B組第二名',
  '2015精誠盃APP創意競賽 佳作',
  '2015軟體創作達人暑期成長營 優勝團隊',
  '2015Open Data創新應用競賽開放資料應用組銀獎',
  '2015第20屆全國大專校院資訊應用服務創新競賽: 資訊技術應用組(一) 第一名',
  '2015第20屆全國大專校院資訊應用服務創新競賽: 臺北生活好友善創新應用組 第三名'
];

const skills = [
  {
    name: 'HTML5/CSS3',
    percentage: 85,
    isBase: true,
    count: 0
  },
  {
    name: 'JavaScript',
    percentage: 85,
    isBase: true,
    count: 0
  },
  {
    name: 'Angular.js',
    percentage: 80,
    isBase: false,
    count: 0
  },
  {
    name: 'Vue.js',
    percentage: 75,
    isBase: false,
    count: 0
  },
  {
    name: 'Node.js',
    percentage: 70,
    isBase: false,
    count: 0
  },
  {
    name: 'Swift',
    percentage: 75,
    isBase: true,
    count: 0
  },
  {
    name: 'iOS Develop',
    percentage: 75,
    isBase: false,
    count: 0
  },
  {
    name: 'Java',
    percentage: 70,
    isBase: true,
    count: 0
  },
  {
    name: 'Android Develop',
    percentage: 65,
    isBase: false,
    count: 0
  }
];

const experience = [
  {
    company: 'Systex 精誠資訊',
    job: '軟體工程師',
    time: '2017 - ~',
    detail: [
      '開發金融交易模組，主要為理財規劃模組，負責範圍橫跨前端、後端及iOS App',
      '理財規劃模組：計算投資預算，推薦商品，客製商品，最後產出規劃書',
      '主導部門新專案樣本開發',
      '開發前端新元件以加速專案進行、維護舊有元件',
      '維護共用模組、協助及處理各金融交易模組問題',
      '引導新人或實習生融入專案',
      '協助上線壓力測試'
    ],
    tech: [
      'HTML / CSS / Bootstrap / Angular.ui',
      'JavaScript / Angular.js / JQuery / Vue.js',
      'Swift(iOS) / Onsen UI(Hybrid App)',
      'Java / Spring',
      'Oracle / MS SQL',
      'Jmeter'
    ]
  },
  {
    company: 'LifeLine 生命連線',
    job: '前端工程師',
    time: '2016 - 2017',
    detail: [
      '開發新內部系統平台，引進Vue.js：模組化建立問卷、輸出報表、使用者建單、會員系統',
      '模組、優化程式',
      '開發、設計官方網站前台和後台系統 (作品1)',
      '維護及更新現有網站',
      '進行Android系統開發',
      '進行iOS系統開發'
    ],
    tech: [
      'HTML / CSS / Bootstrap / W3.css',
      'JavaScript / Ajax / Vue.js / JQuery',
      'Swift(iOS)',
      'Java(Android)'
    ],
    works: [
      {
        title: '基金會官網',
        href: 'http://www.lifecare.org.tw'
      }
    ]
  },
  {
    company: 'DreamLearn',
    job: 'iOS工程師',
    time: '2015 - 2016',
    detail: ['維護現有Objective-C程式', '以Swift語言重新編寫專案'],
    tech: ['Swift', 'Objective-C']
  },
  {
    company: '碳基科技',
    job: '實習生',
    time: '2015 - 2015',
    detail: ['短期實習', '以HTML5+PhoneGap製作產品介紹及客服服務App('],
    tech: ['HTML / CSS', 'JavaScript / JQuery', 'PhoneGap'],
    works: [
      {
        title: 'Uaver App',
        modal: 'picture',
        bind: 'uaver'
      }
    ]
  }
];

const education = {
  school: 'NCHU 國立中興大學',
  department: '資訊管理學系',
  time: '2012 - 2016',
  detail_list: [
    {
      title: '系所課程內容資訊和管理參半 :',
      items: [
        '管理課程: 經濟學、管理學、統計學、初等會計學、財務管理 ...',
        '資訊課程: Java、MySQL(PHP)、HTML/JavaScript、XML、專案管理 ...',
        '個人選擇: C++/Cli(資工)、SAS ...'
      ]
    },
    {
      title: '獲得獎項 :',
      items: [
        '103學年度第十屆中興大學資訊管理實務專題成果展 B組第二名',
        '2015精誠盃APP創意競賽 佳作',
        '2015軟體創作達人暑期成長營 優勝團隊',
        '2015Open Data創新應用競賽開放資料應用組 銀獎',
        '2015第20屆全國大專校院資訊應用服務創新競賽: 資訊技術應用組(一) 第一名',
        '2015第20屆全國大專校院資訊應用服務創新競賽: 臺北生活好友善創新應用組 第三名'
      ]
    },
    {
      title: '其他事蹟 :',
      items: [
        '擔任2年系學會幹部，並曾擔任系上大型活動總召和多個小活動組長',
        '曾參加咖啡研究社'
      ]
    }
  ],
  detail_p: [
    '大三專題三人團隊，以街頭藝人為出發點開發行動App--iBusker。以HTML5、CSS、JavaScript為基礎並由PhoneGap把網頁包裝成行動App，後端以雲端SAAS平台Parse.com(已關閉)和Heroku建立，並結合Beacon和定位技術發送通知給使用者。 此構想獲得教授們的青睞，也參加許多比賽獲得佳績。'
  ]
};

const sideproj = [
  {
    name: 'PlayMine',
    version: 'v1.0',
    tag: ['Vue.js'],
    description: '以Vue.js為基礎的網頁版踩地雷，可以選擇3種難度遊玩。',
    demo: 'mines',
    github: 'https://github.com/ji394snoopy/PlayMine',
    screenshot: require('./images/playmine_screenshot.png')
  }
];

const uaverPics = [
  {
    name: 'Screen Shot 0',
    href: require('./images/uaver_screenshot_0.jpg')
  },
  {
    name: 'Screen Shot 1',
    href: require('./images/uaver_screenshot_1.jpg')
  }
];

const ibuskerPics = [
  {
    name: 'Screen Shot 0',
    href: require('./images/ibusker_screenshot_0.png')
  },
  {
    name: 'Screen Shot 1',
    href: require('./images/ibusker_screenshot_1.png')
  },
  {
    name: 'Screen Shot 2',
    href: require('./images/ibusker_screenshot_2.png')
  },
  {
    name: 'Screen Shot 3',
    href: require('./images/ibusker_screenshot_3.png')
  },
  {
    name: 'Screen Shot 4',
    href: require('./images/ibusker_screenshot_4.png')
  },
  {
    name: 'Screen Shot 5',
    href: require('./images/ibusker_screenshot_5.png')
  },
  {
    name: 'Screen Shot 6',
    href: require('./images/ibusker_screenshot_6.png')
  },
  {
    name: 'Screen Shot 7',
    href: require('./images/ibusker_screenshot_7.png')
  },
  {
    name: 'Screen Shot 8',
    href: require('./images/ibusker_screenshot_8.png')
  },
  {
    name: 'Screen Shot 9',
    href: require('./images/ibusker_screenshot_9.png')
  },
  {
    name: 'Screen Shot 10',
    href: require('./images/ibusker_screenshot_10.png')
  },
  {
    name: 'Screen Shot 11',
    href: require('./images/ibusker_screenshot_11.png')
  },
  {
    name: 'Screen Shot 12',
    href: require('./images/ibusker_screenshot_12.png')
  },
  {
    name: 'Screen Shot 13',
    href: require('./images/ibusker_screenshot_13.png')
  },
  {
    name: 'Screen Shot 14',
    href: require('./images/ibusker_screenshot_14.png')
  },
  {
    name: 'Screen Shot 15',
    href: require('./images/ibusker_screenshot_15.png')
  },
  {
    name: 'Screen Shot 16',
    href: require('./images/ibusker_screenshot_16.png')
  },
  {
    name: 'Screen Shot 17',
    href: require('./images/ibusker_screenshot_17.png')
  },
  {
    name: 'Screen Shot 18',
    href: require('./images/ibusker_screenshot_18.png')
  },
  {
    name: 'Screen Shot 19',
    href: require('./images/ibusker_screenshot_19.png')
  },
  {
    name: 'Screen Shot 20',
    href: require('./images/ibusker_screenshot_20.png')
  },
  {
    name: 'Screen Shot 21',
    href: require('./images/ibusker_screenshot_21.png')
  },
  {
    name: 'Screen Shot 22',
    href: require('./images/ibusker_screenshot_22.png')
  },
  {
    name: 'Screen Shot 23',
    href: require('./images/ibusker_screenshot_23.png')
  },
  {
    name: 'Screen Shot 24',
    href: require('./images/ibusker_screenshot_24.png')
  },
  {
    name: 'Screen Shot 25',
    href: require('./images/ibusker_screenshot_25.png')
  },
  {
    name: 'Screen Shot 26',
    href: require('./images/ibusker_screenshot_26.png')
  },
  {
    name: 'Screen Shot 27',
    href: require('./images/ibusker_screenshot_27.png')
  },
  {
    name: 'Screen Shot 28',
    href: require('./images/ibusker_screenshot_28.png')
  },
  {
    name: 'Screen Shot 29',
    href: require('./images/ibusker_screenshot_29.png')
  },
  {
    name: 'Screen Shot 30',
    href: require('./images/ibusker_screenshot_30.png')
  },
  {
    name: 'Screen Shot 31',
    href: require('./images/ibusker_screenshot_31.png')
  },
  {
    name: 'Screen Shot 32',
    href: require('./images/ibusker_screenshot_32.png')
  },
  {
    name: 'Screen Shot 33',
    href: require('./images/ibusker_screenshot_33.png')
  },
  {
    name: 'Screen Shot 34',
    href: require('./images/ibusker_screenshot_34.png')
  },
  {
    name: 'Screen Shot 35',
    href: require('./images/ibusker_screenshot_35.png')
  },
  {
    name: 'Screen Shot 36',
    href: require('./images/ibusker_screenshot_36.png')
  },
  {
    name: 'Screen Shot 37',
    href: require('./images/ibusker_screenshot_37.png')
  },
  {
    name: 'Screen Shot 38',
    href: require('./images/ibusker_screenshot_38.png')
  }
];

export default {
  aboutme: aboutme,
  awards: awards,
  skills: skills,
  experience: experience,
  education: education,
  ibuskerPics: ibuskerPics,
  uaverPics: uaverPics,
  sideproj: sideproj
};
