export function initProductHeader(product) {
  const root = document.querySelector('.product-heading-wrap');
  if (!root) return;

  root.querySelector('.product-title').textContent = product.title;

  const rateLabel   = root.querySelector('.rate label');
  const reviewCount = root.querySelector('.review-count');
  const pointsEl    = root.querySelector('.points');

  const stars = Math.round(product.rating);
  rateLabel.textContent = '★'.repeat(stars).padEnd(5, '☆');
  reviewCount.textContent = `(${product.reviewCount} Reviews)`;
  pointsEl.textContent = product.points;

  const basePriceEl     = root.querySelector('.price-w:first-child .price-d');
  const originalPriceEl = root.querySelector('.price-w:first-child .price-o');
  const yourPriceEl     = root.querySelector('.price-w.border-left .price-d');

  setPrice(basePriceEl, product.price.base, product.price.currency, originalPriceEl, product.price.original);
  setPrice(yourPriceEl, product.yourPrice, product.price.currency);

  buildVariantButtons(root, product);

  bindSupplementButton(root, product);
  bindYourPriceInfo(root, product);
  
}

function formatPrice(amount, currency) {
  return `${currency}${Number(amount).toLocaleString('th-TH')}`;
}

function setPrice(el, amount, currency, originalEl, originalAmount) {
  if (!el) return;

  const toRemove = [];
  el.childNodes.forEach(n => {
    if (n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '') {
      toRemove.push(n);
    }
  });
  toRemove.forEach(n => n.remove());

  el.insertBefore(
    document.createTextNode(formatPrice(amount, currency) + ' '),
    el.firstChild
  );

  if (originalEl && originalAmount) {
    originalEl.textContent = formatPrice(originalAmount, currency);
  }
}

function buildVariantButtons(root, product) {
  const tab = root.querySelector('.pd-size-slider-tab');
  if (!tab || !product.variants?.length) return;

  tab.innerHTML = '';

  product.variants.forEach((v, idx) => {
    const btn = document.createElement('ion-button');
    btn.className = 'size-sub-btn ' + (idx === 0 ? 'active' : 'inactive');
    btn.textContent = v.label;

    btn.addEventListener('click', () => {
      tab.querySelectorAll('.size-sub-btn').forEach(b => {
        b.classList.remove('active');
        b.classList.add('inactive');
      });
      btn.classList.remove('inactive');
      btn.classList.add('active');

      const basePriceEl     = root.querySelector('.price-w:first-child .price-d');
      const originalPriceEl = root.querySelector('.price-w:first-child .price-o');
      const yourPriceEl     = root.querySelector('.price-w.border-left .price-d');
      const pointsEl        = root.querySelector('.points');

      setPrice(
        basePriceEl,
        v.price ?? product.price.base,
        product.price.currency,
        originalPriceEl,
        v.originalPrice ?? product.price.original
      );
      setPrice(
        yourPriceEl,
        v.yourPrice ?? product.yourPrice,
        product.price.currency
      );

      if (v.points) {
        pointsEl.textContent = v.points;
      }
    });

    tab.appendChild(btn);
  });
}

function bindSupplementButton(root, product) {
  const btn = root.querySelector('.supp-btn');
  const sup = product.supplement;
  if (!btn || !sup) return;

  const defaultLabel = sup.buttonLabel || 'View Supplement Fact';
  const hideLabel = 'Hide Supplement Fact'; 

  btn.textContent = defaultLabel;

  btn.addEventListener('click', () => {
    const section = document.getElementById(sup.anchorId);
    if (!section) return;

    const isVisibleNow = section.classList.toggle('is-visible'); // toggle class

    btn.textContent = isVisibleNow ? hideLabel : defaultLabel;

    if (isVisibleNow) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function bindYourPriceInfo(root, product) {
  const info = product.yourPriceInfo;
  if (!info) return;

  const yourPriceRow = root.querySelector('.price-w.border-left .sub-text');
  if (!yourPriceRow) return;

  const icon = yourPriceRow.querySelector('ion-icon');
  if (!icon) return;

  icon.setAttribute('title', info);

  icon.setAttribute('aria-label', info);
  icon.setAttribute('role', 'img');
}
