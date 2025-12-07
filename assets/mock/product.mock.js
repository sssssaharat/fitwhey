export const mockProduct = {
  id: 'Baam 100% My Whey',
  title: 'Baam 100% My Whey',

  rating: 4.8,
  reviewCount: 200,
  points: 500,

  price: {
    base: 1800,      
    original: 2000,   
    currency: '฿',
  },

  yourPrice: 1600,  

  variants: [
    { id: 'sample', label: 'Sample', price: 200,  yourPrice: 180,  points: 50 },
    { id: '250g',   label: '250g',   price: 600,  yourPrice: 550, points: 150 },
    { id: '2lb',    label: '2lb',    price: 1200, yourPrice: 1100, points: 300 },
    { id: '5lb',    label: '5lb',    price: 1800, yourPrice: 1600, points: 500 },
    { id: '10lb',   label: '10lb',   price: 3200, yourPrice: 2900, points: 900 },
    { id: '12lb',   label: '12lb',   price: 3800, yourPrice: 3400, points: 1100 },
  ],

  // ---------- image slider ----------
  weightLabel: '5lb',
  images: [
    { url: 'assets/img/place-holder0.png' },
    { url: 'assets/img/place-holder0-1.png' },
    { url: 'assets/img/baam-directions.png' },
  ],
  tierLabel: 'Your Tier',
  tierName: 'Pro Member',
  tierIcon: 'assets/icon/dumbbell-icon.svg',

  // ---------- supplement fact (section ด้านล่าง) ----------
  supplement: {
    anchorId: 'supplement-fact',
    buttonLabel: 'View Supplement Fact',

    title: 'รายละเอียดสินค้า',
    productLine: 'Baam 100% My Whey',
    highlight: '"เวย์โปรตีนที่ไม่ได้สร้างคนธรรมดา"',
    description:
      'เวย์โปรตีนไอโซเลต สำหรับผู้ที่ต้องการดูแลโภชนาการอย่างเข้มข้น ผ่านกระบวนการกรองพิเศษ ...', // ตัดให้สั้นหน่อยได้

    claim: 'คำเตือน: ไม่มีไขมัน ไม่มีน้ำตาล = ไม่มีข้ออ้าง',

    bullets: [
      'โปรตีน 30 g.*',
      'พลังงานเพียง 130 Kcal.*',
      'น้ำตาล 0, ไขมัน 0, คาร์โบไฮเดรต 0, คอเลสเตอรอล 0*',
      'ให้ BCAA ประมาณ 6 g., Glutamine ประมาณ 5 g.*',
      'ไม่มีการใส่น้ำตาล (ใช้สารให้ความหวานทดแทน)',
      'No Amino Spiking ส่งตรวจแลปสม่ำเสมอ',
      'ใช้เวย์โปรตีนที่นำเข้าจาก USA เป็นวัตถุดิบหลักของส่วนผสม',
      'มีผล LAB GUARANTEE',
    ],

    footnote: '* สารอาหารต่อ 1 ช้อน (Bliss Vanilla Icecream)',

    targetTitle: 'เหมาะกับใคร ?',
    targetText:
      'ผู้ที่ต้องการเสริมโปรตีนในแต่ละวันให้เพียงพอ ผู้ที่ควบคุมพลังงานจากไขมันและน้ำตาล ...',
  },
};
