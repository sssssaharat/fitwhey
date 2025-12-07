import { fetchProduct } from './product.service.js';

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchProduct();
  renderProduct(data);
  initSlider();
});

// -------------------------------------------
// Render UI
// -------------------------------------------
function renderProduct(product) {
  const root      = document.querySelector('.slider-item');
  const wrapper   = root.querySelector('.swiper-wrapper');
  const label     = root.querySelector('.product-label span');
  const tierSub   = root.querySelector('.tier-level .sub-text');
  const tierMain  = root.querySelector('.tier-level .main-text');
  const tierIcon  = tierMain.querySelector('img');
  const counter   = root.querySelector('.slide-count span');

  // เติม label
  label.textContent = product.weightLabel;
  tierSub.textContent = product.tierLabel;
  tierIcon.src = product.tierIcon;

  // ล้าง text node เก่าของ tierName
  tierMain.childNodes.forEach(n => n.nodeType === 3 && n.remove());
  tierMain.append(' ' + product.tierName);

  // สร้าง slide อย่างมีประสิทธิภาพ
  const frag = document.createDocumentFragment();

  product.images.forEach(img => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const ionImg = document.createElement('ion-img');
    ionImg.src = img.url;
    ionImg.className = 'slides-product-image';

    slide.appendChild(ionImg);
    frag.appendChild(slide);
  });

  wrapper.appendChild(frag);

  // ตัวเลขเริ่มต้น
  counter.textContent = `1/${product.images.length}`;
}

// -------------------------------------------
// Slider Logic
// -------------------------------------------
function initSlider() {
  const prevBtn = document.querySelector('.slide-btn-left');
  const nextBtn = document.querySelector('.slide-btn-right');
  const counter = document.querySelector('.slide-count span');

  const slider = new Swiper('.slider-item', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const total = slider.slides.length;

  const updateUI = () => {
    const first = slider.isBeginning;
    const last = slider.isEnd;

    prevBtn.classList.toggle('disabled', first);
    nextBtn.classList.toggle('disabled', last);

    counter.textContent = `${slider.realIndex + 1}/${total}`;
  };

  slider.on('slideChange', updateUI);

  prevBtn.onclick = () => !slider.isBeginning && slider.slidePrev();
  nextBtn.onclick = () => !slider.isEnd && slider.slideNext();

  updateUI(); // init
}
