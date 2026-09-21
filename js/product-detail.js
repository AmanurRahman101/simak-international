/**
 * Simak International - Product Detail Page Controller (Star Tech Bangladesh Style)
 */
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'), 10) || 1;
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  renderProductDetail(product);
  renderRelatedProducts(product);

  function renderProductDetail(p) {
    document.title = `${p.name} | Simak International Catalogue`;

    // Breadcrumbs
    const catBreadcrumb = document.getElementById('detail-cat-breadcrumb');
    const nameBreadcrumb = document.getElementById('detail-name-breadcrumb');
    if (catBreadcrumb) {
      catBreadcrumb.textContent = p.categoryName;
      catBreadcrumb.href = `products.html?category=${p.category}`;
    }
    if (nameBreadcrumb) nameBreadcrumb.textContent = p.name;

    // Image
    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) {
      mainImg.src = p.image;
      mainImg.alt = p.name;
      mainImg.onerror = function() { this.src = 'images/logo.png'; };
    }

    // Title & Tags
    const titleEl = document.getElementById('detail-title');
    if (titleEl) titleEl.textContent = p.name;

    const brandEl = document.getElementById('detail-brand');
    if (brandEl) brandEl.textContent = p.brand;

    const modelEl = document.getElementById('detail-model');
    if (modelEl) modelEl.textContent = p.model;

    const availEl = document.getElementById('detail-avail');
    if (availEl) {
      availEl.textContent = p.availabilityText;
      availEl.className = `status-badge ${p.availability}`;
    }

    // Price
    const priceEl = document.getElementById('detail-price');
    if (priceEl) priceEl.textContent = p.priceFormatted;

    // Key Features
    const featuresList = document.getElementById('detail-key-features');
    if (featuresList) {
      featuresList.innerHTML = p.keyFeatures.map(f => `
        <li><i class="fas fa-check-circle text-success mr-2"></i> ${f}</li>
      `).join('');
    }

    // Overview
    const overviewEl = document.getElementById('detail-overview');
    if (overviewEl) overviewEl.textContent = p.overview;

    // Specifications Table
    const specsTbody = document.getElementById('detail-specs-tbody');
    if (specsTbody) {
      specsTbody.innerHTML = Object.entries(p.specifications || {}).map(([key, val]) => `
        <tr>
          <td class="spec-label font-weight-bold" style="width: 35%; background: #f8fafc;">${key}</td>
          <td class="spec-val">${val}</td>
        </tr>
      `).join('');
    }

    // Inquiry modal prefill
    const quoteBtn = document.getElementById('btn-open-quote-modal');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', () => {
        if (window.openQuoteModal) window.openQuoteModal(p.id);
      });
    }
  }

  function renderRelatedProducts(current) {
    const relatedContainer = document.getElementById('related-products-grid');
    if (!relatedContainer) return;

    // Same category, excluding current product, max 4
    const related = PRODUCTS_DATA
      .filter(p => p.category === current.category && p.id !== current.id)
      .slice(0, 4);

    if (related.length === 0) {
      relatedContainer.parentElement.style.display = 'none';
      return;
    }

    relatedContainer.innerHTML = related.map(p => `
      <article class="startech-product-card">
        <div class="product-thumb">
          <span class="brand-pill">${p.brand}</span>
          <span class="avail-badge ${p.availability === 'in-stock' ? 'badge-in-stock' : 'badge-on-order'}">
            ${p.availabilityText}
          </span>
          <a href="product-detail.html?id=${p.id}" class="thumb-link">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/logo.png'">
          </a>
        </div>
        <div class="product-info">
          <div class="product-category-tag">${p.categoryName}</div>
          <h3 class="product-title">
            <a href="product-detail.html?id=${p.id}">${p.name}</a>
          </h3>
          <ul class="key-features-list">
            ${p.keyFeatures.slice(0, 2).map(f => `<li><i class="fas fa-caret-right feature-dot"></i><span>${f}</span></li>`).join('')}
          </ul>
          <div class="card-bottom-row">
            <div class="price-box">
              <span class="price-value">${p.priceFormatted}</span>
            </div>
            <div class="card-actions">
              <a href="product-detail.html?id=${p.id}" class="btn-action btn-view-details">
                <i class="fas fa-eye"></i> View Specs
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }
});
