export function initProductSlider(product) {
  const root    = document.querySelector('.slider-item');
  if (!root) return;

  const label   = root.querySelector('.product-label span');
  const counter = root.querySelector('.slide-count span');
  const wrap    = root.querySelector('.swiper-wrapper');
  const prevBtn = root.querySelector('.slide-btn-left');
  const nextBtn = root.querySelector('.slide-btn-right');

  label.textContent = product.weightLabel;
  bindTierLevel(product);

  wrap.innerHTML = '';
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

  wrap.appendChild(frag);

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
    prevBtn.classList.toggle('disabled', slider.isBeginning);
    nextBtn.classList.toggle('disabled', slider.isEnd);
    counter.textContent = `${slider.realIndex + 1}/${total}`;
  };

  prevBtn.onclick = () => slider.slidePrev();
  nextBtn.onclick = () => slider.slideNext();
  slider.on('slideChange', updateUI);

  updateUI();
}
function bindTierLevel(product) {
  const tier = document.querySelector('.tier-level');
  if (!tier) return;

  const sub = tier.querySelector('.sub-text');
  const main = tier.querySelector('.main-text');
  const img = main.querySelector('img');

  sub.textContent = product.tierLabel;       
  img.src = product.tierIcon;       
  img.alt = product.tierName || 'Tier Icon';

  const toRemove = [];
  main.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '') {
      toRemove.push(n);
    }
  });
  toRemove.forEach((n) => n.remove());

  main.append(' ' + product.tierName);  
}



