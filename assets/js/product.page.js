import { fetchProduct } from './product.service.js';
import { fetchRelatedProducts } from './related.service.js';
import { initProductHeader } from './product.header.js';
import { initProductSlider } from './product.slider.js';
import { initProductSupplement } from './product.supplement.js';
import { initProductContentTabs } from './product.content.js';
import { initRelatedProductSlider } from './product.related.js';


document.addEventListener('DOMContentLoaded', async () => {
  const productId = 'Baam 100% My Whey';

  // ดึง 2 อย่างคู่กัน (product + related)
  const [product, relatedProducts] = await Promise.all([
    fetchProduct(productId),
    fetchRelatedProducts(productId),
  ]);

  if (!product) return;

  initProductHeader(product);
  initProductSlider(product);
  initProductSupplement(product);
  initProductContentTabs();
  initRelatedProductSlider(relatedProducts);
});
