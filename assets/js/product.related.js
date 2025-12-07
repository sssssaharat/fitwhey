
export function initRelatedProductSlider(relatedProducts) {
  const sliderRoot = document.querySelector('.pd-product-slider');
  const wrapper = sliderRoot?.querySelector('.pd-product-slide');
  const cartBadge = document.querySelector('.noti-count');
  let cartCount = 0; // หรือเริ่มที่ 0 ก็ได้

  if (!sliderRoot || !wrapper) return;

  if (!relatedProducts || !relatedProducts.length) return;

  const frag = document.createDocumentFragment();

  relatedProducts.forEach((p) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide pd-product-container';
    slide.dataset.productId = p.id;

    slide.innerHTML = `
      <ion-img class="product-image" src="${p.image}"></ion-img>
      <div class="product-info">
        <div class="title">${p.title}</div>
        <div class="price-d">
          ${formatPrice(p.price, '฿')}
          <span class="price-o">${formatPrice(p.originalPrice, '฿')}</span>
        </div>
        <ion-buttons class="cart">
          <ion-button>
            <img src="assets/icon/cart-mini-icon.svg">
          </ion-button>
        </ion-buttons>
      </div>
    `;

    frag.appendChild(slide);
  });

  wrapper.innerHTML = '';
  wrapper.appendChild(frag);

  const relatedSwiper = new Swiper('.pd-product-slider', {
    slidesPerView: 2.2,
    spaceBetween: 12,
    freeMode: true,
    breakpoints: {
      768: { slidesPerView: 3.2 },
      1024: { slidesPerView: 4 },
    },
  });

  wrapper.querySelectorAll('.pd-product-container').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.cart')) return; 
      const productId = card.dataset.productId;
      console.log('go to product detail:', productId);
    });
  });

  wrapper.querySelectorAll('.cart ion-button').forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const card = btn.closest('.pd-product-container');
    const productId = card?.dataset.productId;

    // เพิ่มจำนวนสินค้าในตะกร้า
    cartCount++;
    cartBadge.textContent = cartCount;

    await showAddedToCartToast();
        });
    });

}

function formatPrice(amount, currency) {
  if (amount == null) return '';
  return `${currency}${Number(amount).toLocaleString('th-TH')}`;
}

async function showAddedToCartToast() {
  const toast = document.createElement('ion-toast');
  toast.message = 'เพิ่มสินค้าในตะกร้าแล้ว';
  toast.duration = 1500;  // แสดง 1.5 วินาที
  toast.position = 'bottom';
  document.body.appendChild(toast);
  await toast.present();
}
