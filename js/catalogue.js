/**
 * Simak International - Star Tech-Style Interactive Product Catalogue Engine
 */
document.addEventListener('DOMContentLoaded', () => {
  // State
  const state = {
    products: [...PRODUCTS_DATA],
    filteredProducts: [...PRODUCTS_DATA],
    currentCategory: 'all',
    selectedBrands: new Set(),
    selectedAvailability: new Set(),
    minPrice: 0,
    maxPrice: 50000000,
    currentMinPrice: 0,
    currentMaxPrice: 50000000,
    sortBy: 'default',
    viewMode: 'grid', // 'grid' or 'list'
    itemsPerPage: 12,
    currentPage: 1,
    searchQuery: '',
    comparedProducts: new Set(),
  };

  // DOM Elements
  const productsGrid = document.getElementById('products-container');
  const totalCountEl = document.getElementById('total-product-count');
  const paginationEl = document.getElementById('pagination-container');
  const sortSelect = document.getElementById('sort-select');
  const showSelect = document.getElementById('show-select');
  const searchInput = document.getElementById('catalogue-search');
  const clearFiltersBtn = document.getElementById('clear-filters-btn');
  const categoryFiltersContainer = document.getElementById('category-filter-list');
  const brandFiltersContainer = document.getElementById('brand-filter-list');
  const brandSearchInput = document.getElementById('brand-search-input');
  const availabilityContainer = document.getElementById('availability-filter-list');
  const priceRangeMin = document.getElementById('price-min-input');
  const priceRangeMax = document.getElementById('price-max-input');
  const priceSlider = document.getElementById('price-range-slider');
  const priceFilterBtn = document.getElementById('apply-price-filter');
  const gridViewBtn = document.getElementById('view-grid-btn');
  const listViewBtn = document.getElementById('view-list-btn');
  const activeFiltersContainer = document.getElementById('active-filters-bar');
  const mobileFilterToggle = document.getElementById('mobile-filter-toggle');
  const filterSidebar = document.getElementById('catalogue-sidebar');
  const filterCloseBtn = document.getElementById('close-filter-sidebar');
  const compareDrawer = document.getElementById('compare-drawer');
  const compareCountEl = document.getElementById('compare-count');
  const compareItemsList = document.getElementById('compare-items-preview');
  const compareActionBtn = document.getElementById('compare-action-btn');
  const clearCompareBtn = document.getElementById('clear-compare-btn');

  // Initialize
  initCatalogue();

  function initCatalogue() {
    renderCategoryFilters();
    renderBrandFilters();
    renderAvailabilityFilters();
    setupEventListeners();
    applyFilters();
  }

  // Render Categories in Sidebar
  function renderCategoryFilters() {
    if (!categoryFiltersContainer) return;
    categoryFiltersContainer.innerHTML = CATEGORIES_DATA.map(cat => `
      <li class="filter-item ${state.currentCategory === cat.id ? 'active' : ''}">
        <label class="custom-radio">
          <input type="radio" name="category-filter" value="${cat.id}" ${state.currentCategory === cat.id ? 'checked' : ''}>
          <span class="radio-mark"></span>
          <span class="filter-label"><i class="${cat.icon} cat-icon"></i> ${cat.name}</span>
          <span class="filter-count">(${cat.count})</span>
        </label>
      </li>
    `).join('');

    categoryFiltersContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.currentCategory = e.target.value;
        state.currentPage = 1;
        updateActiveCategoryClass();
        applyFilters();
      });
    });
  }

  function updateActiveCategoryClass() {
    if (!categoryFiltersContainer) return;
    categoryFiltersContainer.querySelectorAll('.filter-item').forEach(item => {
      const radio = item.querySelector('input');
      if (radio && radio.value === state.currentCategory) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Render Brands in Sidebar
  function renderBrandFilters(filterText = '') {
    if (!brandFiltersContainer) return;
    const filteredBrands = BRANDS_DATA.filter(b => b.name.toLowerCase().includes(filterText.toLowerCase()));
    
    if (filteredBrands.length === 0) {
      brandFiltersContainer.innerHTML = '<li class="no-filter-match">No brand found</li>';
      return;
    }

    brandFiltersContainer.innerHTML = filteredBrands.map(b => `
      <li class="filter-item">
        <label class="custom-checkbox">
          <input type="checkbox" name="brand-filter" value="${b.id}" ${state.selectedBrands.has(b.id) ? 'checked' : ''}>
          <span class="checkbox-mark"></span>
          <span class="filter-label">${b.name}</span>
          <span class="filter-count">(${b.count})</span>
        </label>
      </li>
    `).join('');

    brandFiltersContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedBrands.add(e.target.value);
        } else {
          state.selectedBrands.delete(e.target.value);
        }
        state.currentPage = 1;
        applyFilters();
      });
    });
  }

  // Render Availability Filters
  function renderAvailabilityFilters() {
    if (!availabilityContainer) return;
    const availCounts = {
      'in-stock': PRODUCTS_DATA.filter(p => p.availability === 'in-stock').length,
      'available-on-order': PRODUCTS_DATA.filter(p => p.availability === 'available-on-order').length,
      'upcoming': PRODUCTS_DATA.filter(p => p.availability === 'upcoming').length,
    };

    availabilityContainer.innerHTML = `
      <li class="filter-item">
        <label class="custom-checkbox">
          <input type="checkbox" name="avail-filter" value="in-stock" ${state.selectedAvailability.has('in-stock') ? 'checked' : ''}>
          <span class="checkbox-mark"></span>
          <span class="filter-label"><span class="status-dot in-stock"></span> In Stock</span>
          <span class="filter-count">(${availCounts['in-stock']})</span>
        </label>
      </li>
      <li class="filter-item">
        <label class="custom-checkbox">
          <input type="checkbox" name="avail-filter" value="available-on-order" ${state.selectedAvailability.has('available-on-order') ? 'checked' : ''}>
          <span class="checkbox-mark"></span>
          <span class="filter-label"><span class="status-dot on-order"></span> On Order / Indent</span>
          <span class="filter-count">(${availCounts['available-on-order']})</span>
        </label>
      </li>
    `;

    availabilityContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedAvailability.add(e.target.value);
        } else {
          state.selectedAvailability.delete(e.target.value);
        }
        state.currentPage = 1;
        applyFilters();
      });
    });
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Brand search inside sidebar
    if (brandSearchInput) {
      brandSearchInput.addEventListener('input', (e) => {
        renderBrandFilters(e.target.value);
      });
    }

    // Sort select
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        applyFilters();
      });
    }

    // Show per page select
    if (showSelect) {
      showSelect.addEventListener('change', (e) => {
        state.itemsPerPage = e.target.value === 'all' ? 999 : parseInt(e.target.value, 10);
        state.currentPage = 1;
        applyFilters();
      });
    }

    // Catalogue main search bar
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          state.searchQuery = e.target.value.trim().toLowerCase();
          state.currentPage = 1;
          applyFilters();
        }, 250);
      });
    }

    // Clear filters button
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Price range inputs
    if (priceFilterBtn) {
      priceFilterBtn.addEventListener('click', () => {
        const minVal = parseInt(priceRangeMin.value, 10) || 0;
        const maxVal = parseInt(priceRangeMax.value, 10) || 50000000;
        state.currentMinPrice = minVal;
        state.currentMaxPrice = maxVal;
        state.currentPage = 1;
        applyFilters();
      });
    }

    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (priceRangeMax) priceRangeMax.value = val;
        state.currentMaxPrice = val;
      });
      priceSlider.addEventListener('change', () => {
        state.currentPage = 1;
        applyFilters();
      });
    }

    // View Mode Toggle (Grid vs List)
    if (gridViewBtn && listViewBtn) {
      gridViewBtn.addEventListener('click', () => {
        state.viewMode = 'grid';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        productsGrid.className = 'products-grid grid-view';
      });

      listViewBtn.addEventListener('click', () => {
        state.viewMode = 'list';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        productsGrid.className = 'products-grid list-view';
      });
    }

    // Mobile filter drawer
    if (mobileFilterToggle && filterSidebar) {
      mobileFilterToggle.addEventListener('click', () => {
        filterSidebar.classList.add('open');
        document.body.classList.add('sidebar-open');
      });
    }

    if (filterCloseBtn && filterSidebar) {
      filterCloseBtn.addEventListener('click', () => {
        filterSidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
      });
    }

    // Compare Drawer Actions
    if (clearCompareBtn) {
      clearCompareBtn.addEventListener('click', () => {
        state.comparedProducts.clear();
        updateCompareDrawer();
        renderProducts();
      });
    }

    if (compareActionBtn) {
      compareActionBtn.addEventListener('click', openCompareModal);
    }
  }

  // Apply All Active Filters and Sorting
  function applyFilters() {
    let list = [...state.products];

    // 1. Category Filter
    if (state.currentCategory !== 'all') {
      list = list.filter(p => p.category === state.currentCategory);
    }

    // 2. Brand Filter
    if (state.selectedBrands.size > 0) {
      list = list.filter(p => state.selectedBrands.has(p.brandSlug));
    }

    // 3. Availability Filter
    if (state.selectedAvailability.size > 0) {
      list = list.filter(p => state.selectedAvailability.has(p.availability));
    }

    // 4. Price Filter
    if (state.currentMinPrice > 0 || state.currentMaxPrice < 50000000) {
      list = list.filter(p => p.price >= state.currentMinPrice && p.price <= state.currentMaxPrice);
    }

    // 5. Search Query Filter
    if (state.searchQuery) {
      const q = state.searchQuery;
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.keyFeatures.some(f => f.toLowerCase().includes(q))
      );
    }

    // 6. Sorting
    switch (state.sortBy) {
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'model-asc':
        list.sort((a, b) => a.model.localeCompare(b.model));
        break;
      case 'rating-desc':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured default ID sort
        list.sort((a, b) => a.id - b.id);
        break;
    }

    state.filteredProducts = list;
    renderActiveFiltersBar();
    renderProducts();
    renderPagination();
    updateTotalCount();
  }

  // Render Product Cards (Star Tech Bangladesh Style)
  function renderProducts() {
    if (!productsGrid) return;

    if (state.filteredProducts.length === 0) {
      productsGrid.innerHTML = `
        <div class="empty-catalogue-state">
          <div class="empty-icon"><i class="fas fa-box-open"></i></div>
          <h3>No matching medical equipment found</h3>
          <p>Try resetting your filter parameters or searching with a different term.</p>
          <button class="btn btn-primary" onclick="window.resetSimakFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    // Paginate slice
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const currentItems = state.filteredProducts.slice(startIndex, endIndex);

    productsGrid.className = `products-grid ${state.viewMode}-view`;

    productsGrid.innerHTML = currentItems.map(product => {
      const isCompared = state.comparedProducts.has(product.id);
      const availBadgeClass = product.availability === 'in-stock' ? 'badge-in-stock' : 'badge-on-order';

      return `
        <article class="startech-product-card" data-product-id="${product.id}">
          <div class="product-thumb">
            <span class="brand-pill">${product.brand}</span>
            <span class="avail-badge ${availBadgeClass}">
              <i class="${product.availability === 'in-stock' ? 'fas fa-check-circle' : 'fas fa-clock'}"></i>
              ${product.availabilityText}
            </span>
            <a href="product-detail.html?id=${product.id}" class="thumb-link">
              <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/logo.png'">
            </a>
          </div>

          <div class="product-info">
            <div class="product-category-tag">${product.categoryName}</div>
            <h3 class="product-title">
              <a href="product-detail.html?id=${product.id}">${product.name}</a>
            </h3>

            <!-- Star Tech Signature Key Features List -->
            <ul class="key-features-list">
              ${product.keyFeatures.map(feat => `<li><i class="fas fa-caret-right feature-dot"></i><span>${feat}</span></li>`).join('')}
            </ul>

            <div class="card-bottom-row">
              <div class="price-box">
                <span class="price-caption">Official Price / Quotation</span>
                <span class="price-value">${product.priceFormatted}</span>
                <span class="price-note">Warranty & Free Installation</span>
              </div>

              <div class="card-actions">
                <button class="btn-action btn-view-details" onclick="window.openProductQuickView(${product.id})" title="View Complete Specs">
                  <i class="fas fa-info-circle"></i> Details
                </button>
                <button class="btn-action btn-quote" onclick="window.openQuoteModal(${product.id})" title="Request Formal Price Quotation">
                  <i class="fas fa-file-invoice-dollar"></i> Get Quote
                </button>
              </div>
            </div>

            <div class="card-compare-footer">
              <label class="compare-checkbox-label">
                <input type="checkbox" onchange="window.toggleProductCompare(${product.id})" ${isCompared ? 'checked' : ''}>
                <span class="compare-check"></span>
                <span class="compare-text">Add to Compare</span>
              </label>
              <div class="product-rating">
                <i class="fas fa-star star-filled"></i>
                <span>${product.rating.toFixed(1)}</span>
                <span class="review-count">(${product.reviewsCount})</span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Active Filter Pills Bar
  function renderActiveFiltersBar() {
    if (!activeFiltersContainer) return;
    const pills = [];

    if (state.currentCategory !== 'all') {
      const cat = CATEGORIES_DATA.find(c => c.id === state.currentCategory);
      if (cat) {
        pills.push({
          label: `Category: ${cat.name}`,
          onRemove: () => { state.currentCategory = 'all'; updateActiveCategoryClass(); applyFilters(); }
        });
      }
    }

    state.selectedBrands.forEach(brandId => {
      const br = BRANDS_DATA.find(b => b.id === brandId);
      if (br) {
        pills.push({
          label: `Brand: ${br.name}`,
          onRemove: () => { state.selectedBrands.delete(brandId); renderBrandFilters(); applyFilters(); }
        });
      }
    });

    state.selectedAvailability.forEach(avail => {
      pills.push({
        label: avail === 'in-stock' ? 'In Stock' : 'On Order',
        onRemove: () => { state.selectedAvailability.delete(avail); renderAvailabilityFilters(); applyFilters(); }
      });
    });

    if (state.currentMinPrice > 0 || state.currentMaxPrice < 50000000) {
      pills.push({
        label: `৳ ${state.currentMinPrice.toLocaleString()} - ৳ ${state.currentMaxPrice.toLocaleString()}`,
        onRemove: () => {
          state.currentMinPrice = 0;
          state.currentMaxPrice = 50000000;
          if (priceRangeMin) priceRangeMin.value = 0;
          if (priceRangeMax) priceRangeMax.value = 50000000;
          if (priceSlider) priceSlider.value = 50000000;
          applyFilters();
        }
      });
    }

    if (state.searchQuery) {
      pills.push({
        label: `Search: "${state.searchQuery}"`,
        onRemove: () => {
          state.searchQuery = '';
          if (searchInput) searchInput.value = '';
          applyFilters();
        }
      });
    }

    if (pills.length === 0) {
      activeFiltersContainer.style.display = 'none';
      activeFiltersContainer.innerHTML = '';
      return;
    }

    activeFiltersContainer.style.display = 'flex';
    activeFiltersContainer.innerHTML = `
      <span class="active-filters-title">Active Filters:</span>
      ${pills.map((p, idx) => `
        <span class="filter-pill" data-pill-index="${idx}">
          ${p.label}
          <button type="button" class="remove-pill" onclick="window.removeFilterPill(${idx})">&times;</button>
        </span>
      `).join('')}
      <button type="button" class="btn-clear-all-inline" onclick="window.resetSimakFilters()">Clear All</button>
    `;

    window._activeFilterPills = pills;
  }

  window.removeFilterPill = function(idx) {
    if (window._activeFilterPills && window._activeFilterPills[idx]) {
      window._activeFilterPills[idx].onRemove();
    }
  };

  // Pagination (Star Tech Format: Showing 1 to 12 of 36)
  function renderPagination() {
    if (!paginationEl) return;
    const totalItems = state.filteredProducts.length;
    const totalPages = Math.ceil(totalItems / state.itemsPerPage);

    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
      return;
    }

    let buttonsHtml = '';

    // Prev
    buttonsHtml += `
      <button class="page-btn prev-btn ${state.currentPage === 1 ? 'disabled' : ''}" 
        onclick="window.goToCataloguePage(${state.currentPage - 1})" ${state.currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i> Prev
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      buttonsHtml += `
        <button class="page-btn num-btn ${state.currentPage === i ? 'active' : ''}" 
          onclick="window.goToCataloguePage(${i})">${i}</button>
      `;
    }

    // Next
    buttonsHtml += `
      <button class="page-btn next-btn ${state.currentPage === totalPages ? 'disabled' : ''}" 
        onclick="window.goToCataloguePage(${state.currentPage + 1})" ${state.currentPage === totalPages ? 'disabled' : ''}>
        Next <i class="fas fa-chevron-right"></i>
      </button>
    `;

    paginationEl.innerHTML = buttonsHtml;
  }

  function updateTotalCount() {
    if (!totalCountEl) return;
    const total = state.filteredProducts.length;
    const startIndex = total === 0 ? 0 : (state.currentPage - 1) * state.itemsPerPage + 1;
    const endIndex = Math.min(state.currentPage * state.itemsPerPage, total);
    totalCountEl.textContent = `Showing ${startIndex} to ${endIndex} of ${total} (${Math.ceil(total / state.itemsPerPage) || 1} Pages)`;
  }

  window.goToCataloguePage = function(pageNum) {
    const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
    if (pageNum < 1 || pageNum > totalPages) return;
    state.currentPage = pageNum;
    renderProducts();
    renderPagination();
    updateTotalCount();
    window.scrollTo({ top: productsGrid.offsetTop - 120, behavior: 'smooth' });
  };

  function resetAllFilters() {
    state.currentCategory = 'all';
    state.selectedBrands.clear();
    state.selectedAvailability.clear();
    state.currentMinPrice = 0;
    state.currentMaxPrice = 50000000;
    state.searchQuery = '';
    state.sortBy = 'default';
    state.currentPage = 1;

    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'default';
    if (priceRangeMin) priceRangeMin.value = 0;
    if (priceRangeMax) priceRangeMax.value = 50000000;
    if (priceSlider) priceSlider.value = 50000000;
    if (brandSearchInput) brandSearchInput.value = '';

    renderCategoryFilters();
    renderBrandFilters();
    renderAvailabilityFilters();
    applyFilters();
  }
  window.resetSimakFilters = resetAllFilters;

  // Compare Functions
  window.toggleProductCompare = function(id) {
    if (state.comparedProducts.has(id)) {
      state.comparedProducts.delete(id);
    } else {
      if (state.comparedProducts.size >= 4) {
        alert('You can compare a maximum of 4 products at a time.');
        renderProducts();
        return;
      }
      state.comparedProducts.add(id);
    }
    updateCompareDrawer();
    renderProducts();
  };

  function updateCompareDrawer() {
    if (!compareDrawer) return;
    const count = state.comparedProducts.size;

    if (count === 0) {
      compareDrawer.classList.remove('active');
      return;
    }

    compareDrawer.classList.add('active');
    if (compareCountEl) compareCountEl.textContent = count;

    if (compareItemsList) {
      const items = Array.from(state.comparedProducts).map(id => state.products.find(p => p.id === id)).filter(Boolean);
      compareItemsList.innerHTML = items.map(item => `
        <div class="compare-thumb-pill">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='images/logo.png'">
          <span class="compare-pill-title">${item.model}</span>
          <button type="button" class="remove-compare-item" onclick="window.toggleProductCompare(${item.id})">&times;</button>
        </div>
      `).join('');
    }
  }

  function openCompareModal() {
    const ids = Array.from(state.comparedProducts);
    if (ids.length < 2) {
      alert('Please select at least 2 products to compare specifications.');
      return;
    }
    const products = ids.map(id => state.products.find(p => p.id === id)).filter(Boolean);

    // Extract all unique spec keys
    const allSpecKeys = new Set();
    products.forEach(p => {
      Object.keys(p.specifications || {}).forEach(k => allSpecKeys.add(k));
    });

    const modal = document.getElementById('compare-modal');
    const modalBody = document.getElementById('compare-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="compare-table-wrapper">
        <table class="table compare-table">
          <thead>
            <tr>
              <th class="feature-col">Feature / Specification</th>
              ${products.map(p => `
                <th class="product-col text-center">
                  <div class="compare-header-card">
                    <img src="${p.image}" alt="${p.name}" class="compare-header-img" onerror="this.src='images/logo.png'">
                    <span class="badge badge-primary">${p.brand}</span>
                    <h5 class="compare-p-name">${p.name}</h5>
                    <div class="compare-p-price">${p.priceFormatted}</div>
                    <button class="btn btn-sm btn-outline-danger mt-2" onclick="window.toggleProductCompare(${p.id}); window.openCompareModal();">
                      <i class="fas fa-times"></i> Remove
                    </button>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="feature-name"><strong>Category</strong></td>
              ${products.map(p => `<td>${p.categoryName} (${p.subCategory})</td>`).join('')}
            </tr>
            <tr>
              <td class="feature-name"><strong>Availability</strong></td>
              ${products.map(p => `<td><span class="status-badge ${p.availability}">${p.availabilityText}</span></td>`).join('')}
            </tr>
            <tr>
              <td class="feature-name"><strong>Key Highlights</strong></td>
              ${products.map(p => `<td><ul class="compare-specs-ul">${p.keyFeatures.map(k => `<li>${k}</li>`).join('')}</ul></td>`).join('')}
            </tr>
            ${Array.from(allSpecKeys).map(key => `
              <tr>
                <td class="feature-name"><strong>${key}</strong></td>
                ${products.map(p => `<td>${(p.specifications && p.specifications[key]) ? p.specifications[key] : '—'}</td>`).join('')}
              </tr>
            `).join('')}
            <tr>
              <td class="feature-name"><strong>Action</strong></td>
              ${products.map(p => `
                <td class="text-center">
                  <button class="btn btn-primary btn-sm btn-block" onclick="window.openQuoteModal(${p.id})">
                    <i class="fas fa-file-invoice"></i> Request Quote
                  </button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    modal.classList.add('show');
  }
  window.openCompareModal = openCompareModal;

  window.closeCompareModal = function() {
    const modal = document.getElementById('compare-modal');
    if (modal) modal.classList.remove('show');
  };

  // Quick View Detail Modal
  window.openProductQuickView = function(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('product-detail-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-product-left">
          <div class="main-image-frame">
            <img src="${product.image}" alt="${product.name}" id="modal-main-img" onerror="this.src='images/logo.png'">
            <span class="modal-badge ${product.availability === 'in-stock' ? 'badge-in-stock' : 'badge-on-order'}">
              ${product.availabilityText}
            </span>
          </div>
          <div class="brand-origin-badge mt-3 text-center">
            <strong>Brand:</strong> ${product.brand} | <strong>Model:</strong> ${product.model}
          </div>
        </div>

        <div class="modal-product-right">
          <div class="breadcrumbs-modal">Home / Products / ${product.categoryName}</div>
          <h2 class="modal-product-title">${product.name}</h2>

          <div class="modal-rating-row">
            <div class="stars">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <span class="rating-num">${product.rating.toFixed(1)}</span>
            </div>
            <span class="divider">|</span>
            <span class="reviews-link">${product.reviewsCount} Verified Clinical Inquiries</span>
            <span class="divider">|</span>
            <span class="official-partner-tag"><i class="fas fa-shield-alt"></i> Official Bangladesh Partner</span>
          </div>

          <div class="modal-price-panel">
            <div class="price-header">Estimated Institutional Pricing</div>
            <div class="price-val">${product.priceFormatted}</div>
            <div class="price-sub">Duty-free hospital indent pricing available on tender request</div>
          </div>

          <div class="modal-overview-text">
            <p>${product.overview}</p>
          </div>

          <div class="modal-key-specs">
            <h5>Key Specifications & Highlights</h5>
            <ul>
              ${product.keyFeatures.map(feat => `<li><i class="fas fa-check text-success"></i> ${feat}</li>`).join('')}
            </ul>
          </div>

          <div class="modal-action-buttons">
            <button class="btn btn-quote-primary" onclick="window.openQuoteModal(${product.id})">
              <i class="fas fa-file-invoice"></i> Request Official Price Quote
            </button>
            <a href="product-detail.html?id=${product.id}" class="btn btn-primary">View full details</a>
            <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-outline-secondary">
              <i class="fas fa-phone-alt"></i> Contact Specialist
            </a>
          </div>
        </div>
      </div>

      <!-- Complete Technical Specification Table -->
      <div class="modal-specs-section mt-4">
        <h4>Comprehensive Technical Specifications</h4>
        <table class="table specs-table">
          <tbody>
            ${Object.entries(product.specifications || {}).map(([key, val]) => `
              <tr>
                <td class="spec-label">${key}</td>
                <td class="spec-val">${val}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    modal.classList.add('show');
  };

  window.closeProductQuickView = function() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) modal.classList.remove('show');
  };

  // Quote Request Modal
  window.openQuoteModal = function(productId) {
    const product = state.products.find(p => p.id === productId);
    const modal = document.getElementById('quote-modal');
    if (!modal) return;

    const nameInput = document.getElementById('quote-product-name');
    const modelInput = document.getElementById('quote-product-model');
    if (nameInput && product) nameInput.value = product.name;
    if (modelInput && product) modelInput.value = product.model;

    modal.classList.add('show');
  };

  window.closeQuoteModal = function() {
    const modal = document.getElementById('quote-modal');
    if (modal) modal.classList.remove('show');
  };

  // Close modals on outside click
  window.addEventListener('click', (e) => {
    const detailModal = document.getElementById('product-detail-modal');
    const compareModal = document.getElementById('compare-modal');
    const quoteModal = document.getElementById('quote-modal');

    if (e.target === detailModal) detailModal.classList.remove('show');
    if (e.target === compareModal) compareModal.classList.remove('show');
    if (e.target === quoteModal) quoteModal.classList.remove('show');
  });
});
