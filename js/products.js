// Barokat — mahsulotlar katalogi uchun ma'lumotlar bazasi
const PRODUCTS = [
  // ---- GURUCH ----
  {
    id: "alanga-guruch",
    category: "guruch",
    name: "Alanga guruchi",
    nameRu: "Рис «Аланга»",
    grade: "1-nav, tozalangan",
    gradeRu: "1 сорт, очищенный",
    description: "Yumshoq va sochiluvchan, palov uchun eng mos guruch turi. Namlik darajasi past, aralashmalardan tozalangan.",
    descriptionRu: "Мягкий и рассыпчатый рис, идеально подходит для плова. Низкий уровень влажности, очищен от примесей.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 15000,
    wholesalePricePerKg: 13200,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "toshkent-alanga",
    category: "guruch",
    name: "Toshkent alanga guruchi",
    nameRu: "Рис «Аланга» (Ташкентский)",
    grade: "Toshkent viloyati navi",
    gradeRu: "Сорт Ташкентской области",
    description: "Toshkent viloyatida yetishtirilgan alanga guruchi. Kundalik ovqatlanish uchun hamyonbop tanlov.",
    descriptionRu: "Рис сорта Аланга, выращенный в Ташкентской области. Доступный выбор для повседневного питания.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 14500,
    wholesalePricePerKg: 12800,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "barokat-alanga",
    category: "guruch",
    name: "Barokat alanga guruchi",
    nameRu: "Рис «Аланга» Barokat",
    grade: "Barokat brendi, saralangan",
    gradeRu: "Бренд Barokat, отборный",
    description: "Kompaniyamizning o'z brendi ostida saralangan, yuqori sifat nazoratidan o'tgan alanga guruchi.",
    descriptionRu: "Отборный рис сорта Аланга под собственным брендом компании, прошедший строгий контроль качества.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 15500,
    wholesalePricePerKg: 13800,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "lazer-guruch",
    category: "guruch",
    name: "Lazer guruchi",
    nameRu: "Рис «Лазер»",
    grade: "Premium nav",
    gradeRu: "Премиум сорт",
    description: "Yirik donli, cho'zilgan shaklga ega premium guruch. Restoran va to'ylar uchun tavsiya etiladi.",
    descriptionRu: "Крупнозёрный, вытянутой формы премиальный рис. Рекомендуется для ресторанов и торжеств.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 25 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 17500,
    wholesalePricePerKg: 15800,
    wholesaleMinKg: 1000,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "toshkent-lazer",
    category: "guruch",
    name: "Toshkent lazer guruchi",
    nameRu: "Рис «Лазер» (Ташкентский)",
    grade: "Toshkent viloyati navi",
    gradeRu: "Сорт Ташкентской области",
    description: "Toshkent viloyatida yetishtirilgan lazer guruchi. Sochiluvchan va yengil hazm bo'ladi.",
    descriptionRu: "Рис сорта Лазер, выращенный в Ташкентской области. Рассыпчатый и легко усваивается.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 17000,
    wholesalePricePerKg: 15300,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "barokat-lazer",
    category: "guruch",
    name: "Barokat lazer guruchi",
    nameRu: "Рис «Лазер» Barokat",
    grade: "Barokat brendi, premium",
    gradeRu: "Бренд Barokat, премиум",
    description: "Kompaniyamizning o'z brendi ostida qadoqlangan premium lazer guruchi.",
    descriptionRu: "Премиальный рис сорта Лазер, упакованный под собственным брендом компании.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 18000,
    wholesalePricePerKg: 16200,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "xorazm-lazer",
    category: "guruch",
    name: "Xorazm lazer guruchi",
    nameRu: "Рис «Лазер» (Хорезмский)",
    grade: "Xorazm viloyati navi",
    gradeRu: "Сорт Хорезмской области",
    description: "Xorazm viloyatining unumdor yerlarida yetishtirilgan lazer guruchi.",
    descriptionRu: "Рис сорта Лазер, выращенный на плодородных землях Хорезмской области.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 16500,
    wholesalePricePerKg: 14800,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "devzira-guruch",
    category: "guruch",
    name: "Devzira guruchi",
    nameRu: "Рис «Девзира»",
    grade: "Qashqadaryo nav, tabiiy",
    gradeRu: "Кашкадарьинский сорт, натуральный",
    description: "O'zbekistonning original qizg'ish-jigarrang guruch turi. Alohida ta'm va xushbo'ylikka ega, palov uchun ideal.",
    descriptionRu: "Оригинальный узбекский рис красновато-коричневого цвета. Обладает особым вкусом и ароматом, идеален для плова.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 22000,
    wholesalePricePerKg: 19500,
    wholesaleMinKg: 300,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "chongara-guruch",
    category: "guruch",
    name: "Cho'ng'ara guruchi",
    nameRu: "Рис «Чунгара»",
    grade: "Andijon nav",
    gradeRu: "Андижанский сорт",
    description: "Andijon viloyatiga xos mahalliy guruch turi. Zich va to'yimli, kundalik palov uchun mos.",
    descriptionRu: "Местный сорт риса, характерный для Андижанской области. Плотный и питательный, подходит для повседневного плова.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 19000,
    wholesalePricePerKg: 17000,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "nukus-guruch",
    category: "guruch",
    name: "Nukus guruchi",
    nameRu: "Рис «Нукус»",
    grade: "Qoraqalpog'iston navi",
    gradeRu: "Каракалпакский сорт",
    description: "Nukus atrofidagi sholizorlarda yetishtirilgan, tabiiy sug'oriladigan guruch turi.",
    descriptionRu: "Рис, выращенный на рисовых полях в окрестностях Нукуса, натурально орошаемый сорт.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 16000,
    wholesalePricePerKg: 14200,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "guliston-guruch",
    category: "guruch",
    name: "Guliston guruchi",
    nameRu: "Рис «Гулистан»",
    grade: "Sirdaryo, Guliston navi",
    gradeRu: "Сырдарьинская область, сорт Гулистан",
    description: "Sirdaryo viloyati Guliston tumanida yetishtirilgan mashhur mahalliy nav.",
    descriptionRu: "Популярный местный сорт, выращенный в Гулистанском районе Сырдарьинской области.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 15800,
    wholesalePricePerKg: 14000,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "yantar-guruch",
    category: "guruch",
    name: "Yantar guruchi",
    nameRu: "Рис «Янтарь»",
    grade: "1-nav",
    gradeRu: "1 сорт",
    description: "Kahrabo rangli, yirik donli guruch turi. Sochiluvchan palov va oshxona taomlari uchun tavsiya etiladi.",
    descriptionRu: "Рис янтарного цвета с крупными зёрнами. Рекомендуется для рассыпчатого плова и других блюд.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 17800,
    wholesalePricePerKg: 16000,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "basmati-guruch",
    category: "guruch",
    name: "Basmati guruchi",
    nameRu: "Рис «Басмати»",
    grade: "Import, uzun donli, aromatik",
    gradeRu: "Импортный, длиннозёрный, ароматный",
    description: "Xushbo'y, uzun va ingichka donli import guruch. Milliy va Yevropa taomlari uchun bab-baravar mos.",
    descriptionRu: "Ароматный, длинный и тонкий импортный рис. Одинаково хорошо подходит для национальных и европейских блюд.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 28000,
    wholesalePricePerKg: 25500,
    wholesaleMinKg: 300,
    availability: "mavjud",
    icon: "🌾"
  },

  // ---- GRECHKA / PERLOVKA ----
  {
    id: "grechka",
    category: "grechka",
    name: "Grechka (Marjumak)",
    nameRu: "Гречка",
    grade: "1-nav, tozalangan",
    gradeRu: "1 сорт, очищенная",
    description: "To'liq qovurilgan, yaxshi ivitiluvchan grechka yormasi. Bolalar va parhez taomlari uchun tavsiya etiladi.",
    descriptionRu: "Полностью прожаренная, хорошо разваривающаяся гречневая крупа. Рекомендуется для детского и диетического питания.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qadoq", amount: 5 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 13000,
    wholesalePricePerKg: 11500,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌰"
  },
  {
    id: "perlovka",
    category: "perlovka",
    name: "Perlovka (Arpa yormasi)",
    nameRu: "Перловка (ячменная крупа)",
    grade: "1-nav",
    gradeRu: "1 сорт",
    description: "Sifatli arzon narxdagi arpa yormasi. Sho'rva va bo'tqa tayyorlash uchun mos.",
    descriptionRu: "Качественная ячменная крупа по доступной цене. Подходит для супов и каш.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 25 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 7000,
    wholesalePricePerKg: 6200,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },

  // ---- DUKKAKLI ----
  {
    id: "garox",
    category: "dukkakli",
    name: "Garox",
    nameRu: "Горох (колотый)",
    grade: "1-nav, tozalangan",
    gradeRu: "1 сорт, очищенный",
    description: "Mayin, tez qaynaydigan no'xat turi. Sho'rva va pyure tayyorlash uchun ideal.",
    descriptionRu: "Мягкий, быстро разваривающийся горох. Идеален для супов и пюре.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 16000,
    wholesalePricePerKg: 14200,
    wholesaleMinKg: 300,
    availability: "mavjud",
    icon: "🫘"
  },
  {
    id: "noxat",
    category: "dukkakli",
    name: "No'xat",
    nameRu: "Нут",
    grade: "1-nav, yirik donli",
    gradeRu: "1 сорт, крупнозёрный",
    description: "Yirik donli, oqsilga boy no'xat. Sho'rva, somsa va milliy taomlar uchun eng mos xomashyo.",
    descriptionRu: "Крупнозёрный нут, богатый белком. Лучшее сырьё для супов, самсы и национальных блюд.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 18000,
    wholesalePricePerKg: 16000,
    wholesaleMinKg: 300,
    availability: "mavjud",
    icon: "🫘"
  },
  {
    id: "mosh",
    category: "dukkakli",
    name: "Mosh",
    nameRu: "Маш",
    grade: "1-nav, tozalangan",
    gradeRu: "1 сорт, очищенный",
    description: "Dukkakli don, oqsilga boy. Moshxo'rda va boshqa milliy taomlar uchun eng mos xomashyo.",
    descriptionRu: "Бобовая культура, богатая белком. Идеальное сырьё для машхурды и других национальных блюд.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 26000,
    wholesalePricePerKg: 24000,
    wholesaleMinKg: 200,
    availability: "mavjud",
    icon: "🫘"
  },
  {
    id: "chechevitsa",
    category: "dukkakli",
    name: "Chechevitsa (Yasmiq)",
    nameRu: "Чечевица",
    grade: "1-nav, qizil",
    gradeRu: "1 сорт, красная",
    description: "Tez qaynaydigan qizil yasmiq. Sho'rva va salatlar uchun to'yimli va foydali xomashyo.",
    descriptionRu: "Быстро разваривающаяся красная чечевица. Питательное и полезное сырьё для супов и салатов.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 20000,
    wholesalePricePerKg: 18000,
    wholesaleMinKg: 300,
    availability: "mavjud",
    icon: "🫘"
  },

  // ---- UN VA MAKARON ----
  {
    id: "un-rossiya",
    category: "un-makaron",
    name: "Un (Rossiya, 1-nav)",
    nameRu: "Мука (Россия, 1 сорт)",
    grade: "Oliy nav, import",
    gradeRu: "Высший сорт, импортная",
    description: "Rossiyadan import qilingan yuqori sifatli bug'doy uni. Non, somsa va xamir mahsulotlari uchun mos.",
    descriptionRu: "Высококачественная пшеничная мука, импортированная из России. Подходит для хлеба, самсы и мучных изделий.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 2 },
      { label: "Qop", amount: 10 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 6500,
    wholesalePricePerKg: 5800,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "makaron-spagetti",
    category: "un-makaron",
    name: "Makaron (Spagetti)",
    nameRu: "Макароны (Спагетти)",
    grade: "1-nav, qattiq bug'doydan",
    gradeRu: "1 сорт, из твёрдых сортов пшеницы",
    description: "Qattiq navli bug'doydan tayyorlangan spagetti turi makaron.",
    descriptionRu: "Спагетти, изготовленные из твёрдых сортов пшеницы.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 0.5 },
      { label: "Quti", amount: 5 },
      { label: "Qop", amount: 10 }
    ],
    retailPricePerKg: 9000,
    wholesalePricePerKg: 8000,
    wholesaleMinKg: 100,
    availability: "mavjud",
    icon: "🍝"
  },
  {
    id: "makaron-vermishel",
    category: "un-makaron",
    name: "Makaron (Vermishel)",
    nameRu: "Макароны (Вермишель)",
    grade: "1-nav",
    gradeRu: "1 сорт",
    description: "Yupqa va tez qaynaydigan vermishel turi makaron.",
    descriptionRu: "Тонкая и быстро разваривающаяся вермишель.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 0.5 },
      { label: "Quti", amount: 5 },
      { label: "Qop", amount: 10 }
    ],
    retailPricePerKg: 8500,
    wholesalePricePerKg: 7500,
    wholesaleMinKg: 100,
    availability: "mavjud",
    icon: "🍝"
  },
  {
    id: "makaron-rojik",
    category: "un-makaron",
    name: "Makaron (Rojiklar)",
    nameRu: "Макароны (Рожки)",
    grade: "1-nav",
    gradeRu: "1 сорт",
    description: "Naycha shaklidagi rojiklar turi makaron, sho'rva va garnir uchun mos.",
    descriptionRu: "Макароны в форме трубочек (рожки), подходят для супов и гарниров.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 0.5 },
      { label: "Quti", amount: 5 },
      { label: "Qop", amount: 10 }
    ],
    retailPricePerKg: 9500,
    wholesalePricePerKg: 8500,
    wholesaleMinKg: 100,
    availability: "mavjud",
    icon: "🍝"
  },
  {
    id: "makaron-perya",
    category: "un-makaron",
    name: "Makaron (Perya)",
    nameRu: "Макароны (Перья)",
    grade: "1-nav",
    gradeRu: "1 сорт",
    description: "Qanotcha (perya) shaklidagi makaron turi, bolalar taomlari uchun ham mos.",
    descriptionRu: "Макароны в форме пёрышек, подходят и для детского питания.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 0.5 },
      { label: "Quti", amount: 5 },
      { label: "Qop", amount: 10 }
    ],
    retailPricePerKg: 9500,
    wholesalePricePerKg: 8500,
    wholesaleMinKg: 100,
    availability: "mavjud",
    icon: "🍝"
  },

  // ---- YOG' ----
  {
    id: "osimlik-yogi",
    category: "yog",
    name: "O'simlik yog'i",
    nameRu: "Растительное масло",
    grade: "Kungaboqar, tozalangan",
    gradeRu: "Подсолнечное, рафинированное",
    description: "Tiniq va hidsiz kungaboqar yog'i. Kundalik pishirish va qovurish uchun mos.",
    descriptionRu: "Прозрачное и без запаха подсолнечное масло. Подходит для повседневной готовки и жарки.",
    unit: "l",
    packagings: [
      { label: "Shisha", amount: 1 },
      { label: "Kanistra", amount: 5 },
      { label: "Kanistra", amount: 20 }
    ],
    retailPricePerKg: 17000,
    wholesalePricePerKg: 15500,
    wholesaleMinKg: 100,
    availability: "mavjud",
    icon: "🛢️"
  },

  // ---- BOSHQA DONLAR ----
  {
    id: "tariq",
    category: "boshqa",
    name: "Tariq",
    nameRu: "Пшено",
    grade: "1-nav, tozalangan",
    gradeRu: "1 сорт, очищенное",
    description: "Oltin rangli, mayda donli tariq yormasi. Sut bo'tqasi va milliy taomlar uchun ishlatiladi.",
    descriptionRu: "Пшено золотистого цвета, мелкозернистое. Используется для молочных каш и национальных блюд.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 25 }
    ],
    retailPricePerKg: 9000,
    wholesalePricePerKg: 8000,
    wholesaleMinKg: 300,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "bugdoy-yormasi",
    category: "boshqa",
    name: "Bug'doy yormasi",
    nameRu: "Пшеничная крупа",
    grade: "1-nav",
    gradeRu: "1 сорт",
    description: "Mayda maydalangan bug'doy yormasi, tez qaynaydigan va to'yimli bo'tqalar uchun.",
    descriptionRu: "Мелко измельчённая пшеничная крупа, быстро разваривается, подходит для питательных каш.",
    unit: "kg",
    packagings: [
      { label: "Qadoq", amount: 1 },
      { label: "Qop", amount: 50 }
    ],
    retailPricePerKg: 8500,
    wholesalePricePerKg: 7500,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  }
];

const CATEGORY_LABELS = {
  barchasi: "Barchasi",
  guruch: "Guruch",
  grechka: "Grechka",
  perlovka: "Perlovka",
  dukkakli: "Dukkakli",
  "un-makaron": "Un va makaron",
  yog: "Yog'",
  boshqa: "Boshqa donlar"
};

const CATEGORY_LABELS_RU = {
  barchasi: "Все",
  guruch: "Рис",
  grechka: "Гречка",
  perlovka: "Перловка",
  dukkakli: "Бобовые",
  "un-makaron": "Мука и макароны",
  yog: "Масло",
  boshqa: "Другие крупы"
};

const AVAILABILITY_LABELS = {
  mavjud: "Mavjud",
  buyurtma: "Buyurtma asosida"
};

const AVAILABILITY_LABELS_RU = {
  mavjud: "В наличии",
  buyurtma: "Под заказ"
};

const PACKAGING_LABELS_RU = {
  Qadoq: "Пачка",
  Qop: "Мешок",
  Shisha: "Бутылка",
  Kanistra: "Канистра",
  Quti: "Коробка"
};
