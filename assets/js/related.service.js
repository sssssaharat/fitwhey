import { mockRelatedProducts } from '../mock/related-products.mock.js';

const USE_MOCK = true;

export async function fetchRelatedProducts(productId) {
  if (USE_MOCK) {
    // ถ้าอยาก filter ตาม productId ค่อยปรับตรงนี้
    return mockRelatedProducts;
  }

  const res = await fetch(`/api/products/${productId}/related`);
  return res.json();
}
