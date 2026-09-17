// Barokat — mahsulotlar katalogi uchun ma'lumotlar bazasi
const PRODUCTS = [
  // ---- GURUCH ----
  {
    id: "alanga-guruch",
    category: "guruch",
    name: "Alanga guruchi",
    grade: "1-nav, tozalangan",
    description: "Yumshoq va sochiluvchan, palov uchun eng mos guruch turi. Namlik darajasi past, aralashmalardan tozalangan.",
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
    grade: "Toshkent viloyati navi",
    description: "Toshkent viloyatida yetishtirilgan alanga guruchi. Kundalik ovqatlanish uchun hamyonbop tanlov.",
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
    grade: "Barokat brendi, saralangan",
    description: "Kompaniyamizning o'z brendi ostida saralangan, yuqori sifat nazoratidan o'tgan alanga guruchi.",
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
    grade: "Premium nav",
    description: "Yirik donli, cho'zilgan shaklga ega premium guruch. Restoran va to'ylar uchun tavsiya etiladi.",
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
    grade: "Toshkent viloyati navi",
    description: "Toshkent viloyatida yetishtirilgan lazer guruchi. Sochiluvchan va yengil hazm bo'ladi.",
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
    grade: "Barokat brendi, premium",
    description: "Kompaniyamizning o'z brendi ostida qadoqlangan premium lazer guruchi.",
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
    grade: "Xorazm viloyati navi",
    description: "Xorazm viloyatining unumdor yerlarida yetishtirilgan lazer guruchi.",
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
    grade: "Qashqadaryo nav, tabiiy",
    description: "O'zbekistonning original qizg'ish-jigarrang guruch turi. Alohida ta'm va xushbo'ylikka ega, palov uchun ideal.",
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
    grade: "Andijon nav",
    description: "Andijon viloyatiga xos mahalliy guruch turi. Zich va to'yimli, kundalik palov uchun mos.",
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
    grade: "Qoraqalpog'iston navi",
    description: "Nukus atrofidagi sholizorlarda yetishtirilgan, tabiiy sug'oriladigan guruch turi.",
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
    grade: "Sirdaryo, Guliston navi",
    description: "Sirdaryo viloyati Guliston tumanida yetishtirilgan mashhur mahalliy nav.",
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
    grade: "1-nav",
    description: "Kahrabo rangli, yirik donli guruch turi. Sochiluvchan palov va oshxona taomlari uchun tavsiya etiladi.",
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
    grade: "Import, uzun donli, aromatik",
    description: "Xushbo'y, uzun va ingichka donli import guruch. Milliy va Yevropa taomlari uchun bab-baravar mos.",
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
    grade: "1-nav, tozalangan",
    description: "To'liq qovurilgan, yaxshi ivitiluvchan grechka yormasi. Bolalar va parhez taomlari uchun tavsiya etiladi.",
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
    grade: "1-nav",
    description: "Sifatli arzon narxdagi arpa yormasi. Sho'rva va bo'tqa tayyorlash uchun mos.",
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
    grade: "1-nav, tozalangan",
    description: "Mayin, tez qaynaydigan no'xat turi. Sho'rva va pyure tayyorlash uchun ideal.",
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
    grade: "1-nav, yirik donli",
    description: "Yirik donli, oqsilga boy no'xat. Sho'rva, somsa va milliy taomlar uchun eng mos xomashyo.",
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
    grade: "1-nav, tozalangan",
    description: "Dukkakli don, oqsilga boy. Moshxo'rda va boshqa milliy taomlar uchun eng mos xomashyo.",
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
    grade: "1-nav, qizil",
    description: "Tez qaynaydigan qizil yasmiq. Sho'rva va salatlar uchun to'yimli va foydali xomashyo.",
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
    grade: "Oliy nav, import",
    description: "Rossiyadan import qilingan yuqori sifatli bug'doy uni. Non, somsa va xamir mahsulotlari uchun mos.",
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
    grade: "1-nav, qattiq bug'doydan",
    description: "Qattiq navli bug'doydan tayyorlangan spagetti turi makaron.",
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
    grade: "1-nav",
    description: "Yupqa va tez qaynaydigan vermishel turi makaron.",
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
    grade: "1-nav",
    description: "Naycha shaklidagi rojiklar turi makaron, sho'rva va garnir uchun mos.",
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
    grade: "1-nav",
    description: "Qanotcha (perya) shaklidagi makaron turi, bolalar taomlari uchun ham mos.",
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
    grade: "Kungaboqar, tozalangan",
    description: "Tiniq va hidsiz kungaboqar yog'i. Kundalik pishirish va qovurish uchun mos.",
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
    grade: "1-nav, tozalangan",
    description: "Oltin rangli, mayda donli tariq yormasi. Sut bo'tqasi va milliy taomlar uchun ishlatiladi.",
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
    grade: "1-nav",
    description: "Mayda maydalangan bug'doy yormasi, tez qaynaydigan va to'yimli bo'tqalar uchun.",
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

const AVAILABILITY_LABELS = {
  mavjud: "Mavjud",
  buyurtma: "Buyurtma asosida"
};
