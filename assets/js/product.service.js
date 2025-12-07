import { mockProduct } from '../mock/product.mock.js';

// สลับเป็น false เมื่อใช้ API จริง
const USE_MOCK = true;

export async function fetchProduct(productId) {
  if (USE_MOCK) {
    return mockProduct;
  }

  const res = await fetch(`/api/products/${productId}`);
  return res.json();
}
