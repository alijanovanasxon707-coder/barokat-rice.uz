// Barokat — mahsulotlar katalogi uchun ma'lumotlar bazasi
const PRODUCTS = [
  {
    id: "alanga-guruch",
    category: "guruch",
    name: "Alanga guruchi",
    grade: "1-nav, tozalangan",
    description: "Yumshoq va sochiluvchan, palov uchun eng mos guruch turi. Namlik darajasi past, aralashmalardan tozalangan.",
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qadoq", weightKg: 5 },
      { label: "Qop", weightKg: 50 }
    ],
    retailPricePerKg: 15000,
    wholesalePricePerKg: 13200,
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
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qadoq", weightKg: 5 },
      { label: "Qop", weightKg: 25 },
      { label: "Qop", weightKg: 50 }
    ],
    retailPricePerKg: 17500,
    wholesalePricePerKg: 15800,
    wholesaleMinKg: 1000,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "devzira-guruch",
    category: "guruch",
    name: "Devzira guruchi",
    grade: "Qashqadaryo nav, tabiiy",
    description: "O'zbekistonning original qizg'ish-jigarrang guruch turi. Alohida ta'm va xushbo'ylikka ega, palov uchun ideal.",
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qadoq", weightKg: 5 },
      { label: "Qop", weightKg: 25 }
    ],
    retailPricePerKg: 22000,
    wholesalePricePerKg: 19500,
    wholesaleMinKg: 300,
    availability: "buyurtma",
    icon: "🌾"
  },
  {
    id: "grechka",
    category: "grechka",
    name: "Grechka (Marjumak)",
    grade: "1-nav, tozalangan",
    description: "To'liq qovurilgan, yaxshi ivitiluvchan grechka yormasi. Bolalar va parhez taomlari uchun tavsiya etiladi.",
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qadoq", weightKg: 5 },
      { label: "Qop", weightKg: 50 }
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
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qop", weightKg: 25 },
      { label: "Qop", weightKg: 50 }
    ],
    retailPricePerKg: 7000,
    wholesalePricePerKg: 6200,
    wholesaleMinKg: 500,
    availability: "mavjud",
    icon: "🌾"
  },
  {
    id: "tariq",
    category: "boshqa",
    name: "Tariq",
    grade: "1-nav, tozalangan",
    description: "Oltin rangli, mayda donli tariq yormasi. Sut bo'tqasi va milliy taomlar uchun ishlatiladi.",
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qop", weightKg: 25 }
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
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qop", weightKg: 50 }
    ],
    retailPricePerKg: 8500,
    wholesalePricePerKg: 7500,
    wholesaleMinKg: 500,
    availability: "buyurtma",
    icon: "🌾"
  },
  {
    id: "mosh",
    category: "boshqa",
    name: "Mosh",
    grade: "1-nav, tozalangan",
    description: "Dukkakli don, oqsilga boy. Moshxo'rda va boshqa milliy taomlar uchun eng mos xomashyo.",
    packagings: [
      { label: "Qadoq", weightKg: 1 },
      { label: "Qop", weightKg: 25 }
    ],
    retailPricePerKg: 26000,
    wholesalePricePerKg: 24000,
    wholesaleMinKg: 200,
    availability: "mavjud",
    icon: "🫘"
  }
];

const CATEGORY_LABELS = {
  barchasi: "Barchasi",
  guruch: "Guruch",
  grechka: "Grechka",
  perlovka: "Perlovka",
  boshqa: "Boshqa donlar"
};

const AVAILABILITY_LABELS = {
  mavjud: "Mavjud",
  buyurtma: "Buyurtma asosida"
};
