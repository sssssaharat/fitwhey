export function initProductSupplement(product) {
  const sup = product.supplement;
  if (!sup) return;

  const section = document.getElementById(sup.anchorId);
  if (!section) return;

  section.querySelector('.supp-title').textContent        = sup.title;
  section.querySelector('.supp-product-line').textContent = sup.productLine;
  section.querySelector('.supp-highlight').textContent    = sup.highlight;
  section.querySelector('.supp-description').textContent  = sup.description;
  section.querySelector('.supp-claim').textContent        = sup.claim;
  section.querySelector('.supp-footnote').textContent     = sup.footnote;
  section.querySelector('.supp-target-title').textContent = sup.targetTitle;
  section.querySelector('.supp-target-text').textContent  = sup.targetText;

  const ul = section.querySelector('.supp-bullets');
  ul.innerHTML = '';
  sup.bullets.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
}
