export function initProductContentTabs() {
  const segment = document.querySelector('.pd-slider-tab');
  const sliderEl = document.querySelector('.pd-content-slider');
  if (!segment || !sliderEl) return;

  const buttons = Array.from(
    segment.querySelectorAll('ion-segment-button.pd-tab-btn')
  );

  const contentSlider = new Swiper('.pd-content-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
  });

  segment.addEventListener('ionChange', (event) => {
    const value = event.detail.value; // "1" | "2" | ...
    const index = buttons.findIndex(
      (btn) => btn.getAttribute('value') === value
    );
    if (index >= 0) {
      contentSlider.slideTo(index);
    }
  });

  contentSlider.on('slideChange', () => {
    const index = contentSlider.realIndex;
    const btn = buttons[index];
    if (!btn) return;

    const value = btn.getAttribute('value');
    if (value) {
      segment.value = value;
    }
  });

  const activeValue = segment.getAttribute('value') || '1';
  const startIndex =
    buttons.findIndex((btn) => btn.getAttribute('value') === activeValue) || 0;

  contentSlider.slideTo(startIndex);
  segment.value = buttons[startIndex]?.getAttribute('value') || '1';
}
