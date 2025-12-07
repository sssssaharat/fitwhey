// assets/js/product.content.js

export function initProductContentTabs() {
  const segment = document.querySelector('.pd-slider-tab');
  const sliderEl = document.querySelector('.pd-content-slider');
  if (!segment || !sliderEl) return;

  const buttons = Array.from(
    segment.querySelectorAll('ion-segment-button.pd-tab-btn')
  );

  // init Swiper สำหรับ content
  const contentSlider = new Swiper('.pd-content-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
  });

  // ----------- เมื่อกด tab ด้านบน -----------
  segment.addEventListener('ionChange', (event) => {
    const value = event.detail.value; // "1" | "2" | ...
    const index = buttons.findIndex(
      (btn) => btn.getAttribute('value') === value
    );
    if (index >= 0) {
      contentSlider.slideTo(index);
    }
  });

  // ----------- เมื่อปัด slide ให้ tab ตาม -----------
  contentSlider.on('slideChange', () => {
    const index = contentSlider.realIndex;
    const btn = buttons[index];
    if (!btn) return;

    const value = btn.getAttribute('value');
    if (value) {
      segment.value = value; // Ionic จะจัดการ active tab ให้เอง
    }
  });

  // ตั้งค่าเริ่มต้น: ให้ tab แรก & slide แรกตรงกัน
  const activeValue = segment.getAttribute('value') || '1';
  const startIndex =
    buttons.findIndex((btn) => btn.getAttribute('value') === activeValue) || 0;

  contentSlider.slideTo(startIndex);
  segment.value = buttons[startIndex]?.getAttribute('value') || '1';
}
