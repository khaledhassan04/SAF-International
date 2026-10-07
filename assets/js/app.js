/* ==========================================================================
   SAF INTERNATIONAL — MAIN APP & PAGE CONTROLLERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }

  // Check if we are on the product details page
  if (document.getElementById('product-detail-view')) {
    initProductDetailPage();
  }

  // Check if we are on the category details page
  if (document.getElementById('category-detail-view')) {
    initCategoryDetailPage();
  }

  // Check if we are on the catalog page
  if (document.getElementById('catalog-products-grid')) {
    initCatalogPage();
  }
});

/* --------------------------------------------------------------------------
   Product Details Page Controller
   -------------------------------------------------------------------------- */
function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'executive-gift-set';
  
  const product = SAF_DATA.products.find(p => p.id === productId) || SAF_DATA.products[0];
  
  // Update Document Title
  document.title = `${product.title} — SAF International Trading & Sourcing`;

  // Update Breadcrumb & Header
  const crumbEl = document.getElementById('crumb-product-title');
  if (crumbEl) crumbEl.textContent = product.title;

  const titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.textContent = product.title;

  const badgeEl = document.getElementById('detail-badge');
  if (badgeEl) badgeEl.textContent = product.badge;

  const skuEl = document.getElementById('detail-sku');
  if (skuEl) skuEl.textContent = `SKU: ${product.sku}`;

  const moqEl = document.getElementById('detail-moq');
  if (moqEl) moqEl.textContent = `MOQ: ${product.moq}`;

  const descEl = document.getElementById('detail-desc');
  if (descEl) descEl.textContent = product.overview || product.desc;

  // Update Specs Table
  const materialEl = document.getElementById('spec-material');
  if (materialEl) materialEl.textContent = product.material;

  const finishingEl = document.getElementById('spec-finishing');
  if (finishingEl) finishingEl.textContent = product.finishing;

  const dimensionsEl = document.getElementById('spec-dimensions');
  if (dimensionsEl) dimensionsEl.textContent = product.dimensions;

  const leadTimeEl = document.getElementById('spec-leadtime');
  if (leadTimeEl) leadTimeEl.textContent = product.leadTime;

  const complianceEl = document.getElementById('spec-compliance');
  if (complianceEl) complianceEl.textContent = product.compliance;

  const packagingEl = document.getElementById('spec-packaging');
  if (packagingEl) packagingEl.textContent = product.packaging;

  // Update Main Image & Gallery
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.title;
  }

  const thumbsWrap = document.getElementById('detail-thumbs-wrap');
  if (thumbsWrap && product.gallery) {
    thumbsWrap.innerHTML = product.gallery.map((imgSrc, idx) => `
      <button class="gallery-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchDetailImage('${imgSrc}', this)">
        <img src="${imgSrc}" alt="${product.title} view ${idx + 1}">
      </button>
    `).join('');
  }

  // Pre-fill Quote Button
  const quoteBtn = document.getElementById('detail-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => Modal.openQuote(product.title, product.badge);
  }

  // Render Related Curated Products
  const relatedGrid = document.getElementById('detail-related-grid');
  if (relatedGrid) {
    const related = SAF_DATA.products.filter(p => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(p => `
      <div class="product-card">
        <div class="product-card-img-box">
          <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="product-card-body">
          <div class="product-card-title">${p.title}</div>
          <p class="product-card-desc">${p.desc}</p>
          <div class="product-card-actions">
            <a href="product-details.html?id=${p.id}" class="product-card-link">VIEW DETAILS</a>
            <button class="btn btn-stone" onclick="Modal.openQuote('${p.title}', '${p.badge}')">REQUEST QUOTE</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Image switcher
function switchDetailImage(src, btn) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// Tier selection
function selectTier(card, qty) {
  document.querySelectorAll('.tier-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  Modal.showToast(`Selected tier: ${qty} units. Volume pricing tier applied.`);
}

/* --------------------------------------------------------------------------
   Catalog Page Controller
   -------------------------------------------------------------------------- */
function initCatalogPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCat = urlParams.get('category');

  const filterBtns = document.querySelectorAll('.filter-pill-btn');

  if (initialCat) {
    let matchedBtn = false;
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-cat') === initialCat) {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        matchedBtn = true;
      }
    });

    if (matchedBtn) {
      const filtered = SAF_DATA.products.filter(p => p.categoryId === initialCat);
      renderCatalog(filtered);
    } else {
      renderCatalog(SAF_DATA.products);
    }
  } else {
    renderCatalog(SAF_DATA.products);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const catId = btn.getAttribute('data-cat');
      
      if (catId === 'all') {
        renderCatalog(SAF_DATA.products);
      } else {
        const filtered = SAF_DATA.products.filter(p => p.categoryId === catId);
        renderCatalog(filtered);
      }
    });
  });

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = SAF_DATA.products.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q)
      );
      renderCatalog(filtered);
    });
  }
}

function renderCatalog(items) {
  const grid = document.getElementById('catalog-products-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--color-text-muted);">No products match your inquiry criteria. Please contact our trade desk for bespoke sourcing.</div>`;
    return;
  }

  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <div class="product-card-img-box">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="product-card-body">
        <div class="product-card-title">${p.title}</div>
        <p class="product-card-desc">${p.desc}</p>
        <div class="product-card-actions">
          <a href="product-details.html?id=${p.id}" class="product-card-link">VIEW DETAILS</a>
          <button class="btn btn-stone" onclick="Modal.openQuote('${p.title}', '${p.badge}')">REQUEST QUOTE</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   Category Details Page Controller
   -------------------------------------------------------------------------- */
function initCategoryDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const catId = urlParams.get('id') || 'corporate-gifts';

  const category = SAF_DATA.categories.find(c => c.id === catId) || SAF_DATA.categories[0];

  document.title = `${category.title} — SAF International Trading & Sourcing`;

  const crumbEl = document.getElementById('crumb-category-title');
  if (crumbEl) crumbEl.textContent = category.title;

  const badgeEl = document.getElementById('cat-detail-badge');
  if (badgeEl) badgeEl.textContent = category.badge;

  const titleEl = document.getElementById('cat-detail-title');
  if (titleEl) titleEl.textContent = category.title;

  const descEl = document.getElementById('cat-detail-desc');
  if (descEl) descEl.textContent = category.desc;

  const subcatsWrap = document.getElementById('cat-subcategories-list');
  if (subcatsWrap && category.subcategories) {
    subcatsWrap.innerHTML = category.subcategories.map(s => `
      <span class="feature-tag-pill">${s}</span>
    `).join('');
  }

  const inquireBtn = document.getElementById('cat-inquire-btn');
  if (inquireBtn) {
    inquireBtn.onclick = () => Modal.openQuote(category.title, category.badge);
  }

  const grid = document.getElementById('cat-products-grid');
  if (grid) {
    const products = SAF_DATA.products.filter(p => p.categoryId === category.id);
    if (products.length > 0) {
      grid.innerHTML = products.map(p => `
        <div class="product-card">
          <div class="product-card-img-box">
            <img src="${p.image}" alt="${p.title}">
          </div>
          <div class="product-card-body">
            <div class="product-card-title">${p.title}</div>
            <p class="product-card-desc">${p.desc}</p>
            <div class="product-card-actions">
              <a href="product-details.html?id=${p.id}" class="product-card-link">VIEW DETAILS</a>
              <button class="btn btn-stone" onclick="Modal.openQuote('${p.title}', '${p.badge}')">REQUEST QUOTE</button>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      // If no exact match, show related items
      grid.innerHTML = SAF_DATA.products.slice(0, 3).map(p => `
        <div class="product-card">
          <div class="product-card-img-box">
            <img src="${p.image}" alt="${p.title}">
          </div>
          <div class="product-card-body">
            <div class="product-card-title">${p.title}</div>
            <p class="product-card-desc">${p.desc}</p>
            <div class="product-card-actions">
              <a href="product-details.html?id=${p.id}" class="product-card-link">VIEW DETAILS</a>
              <button class="btn btn-stone" onclick="Modal.openQuote('${p.title}', '${p.badge}')">REQUEST QUOTE</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

