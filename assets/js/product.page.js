import { fetchProduct } from './product.service.js';
import { initProductHeader } from './product.header.js';
import { initProductSlider } from './product.slider.js';
import { initProductSupplement } from './product.supplement.js';
import { initProductContentTabs } from './product.content.js';

document.addEventListener('DOMContentLoaded', async () => {
  const product = await fetchProduct('Baam 100% My Whey');
  if (!product) return;

  initProductHeader(product);
  initProductSlider(product);
  initProductSupplement(product);
  initProductContentTabs();
});
