/* ==========================================================================
   SAF INTERNATIONAL — MODAL & INTERACTION HANDLER
   ========================================================================== */

const Modal = {
  // Show toast notification
  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 14 14"></polyline>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  // Open Request A Quote Modal
  openQuote(productName = '', category = '') {
    const overlay = document.getElementById('quote-modal-overlay');
    if (!overlay) return;

    const prodInput = document.getElementById('quote-product-input');
    const catInput = document.getElementById('quote-category-input');

    if (prodInput && productName) {
      prodInput.value = productName;
    }
    if (catInput && category) {
      catInput.value = category;
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeQuote() {
    const overlay = document.getElementById('quote-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  // Open Quick View Modal
  openQuickView(productId) {
    const product = SAF_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('quickview-modal-overlay');
    const content = document.getElementById('quickview-modal-content');
    if (!overlay || !content) return;

    content.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 32px; align-items: start;">
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--color-border); background: #FAF8F5;">
          <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <span class="eyebrow eyebrow-pill">${product.badge}</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--color-text-title); margin-bottom: 8px;">
            ${product.title}
          </h3>
          <div style="display: flex; gap: 12px; margin-bottom: 16px;">
            <span class="moq-pill">MOQ: ${product.moq}</span>
            <span class="sku-text">SKU: ${product.sku}</span>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: var(--color-text-body); margin-bottom: 20px;">
            ${product.overview || product.desc}
          </p>
          <div style="margin-bottom: 20px; font-size: 0.8125rem;">
            <div style="padding: 6px 0; border-bottom: 1px solid var(--color-border-subtle); display: flex; justify-content: space-between;">
              <strong style="color: var(--color-text-muted);">Lead Time:</strong>
              <span>${product.leadTime}</span>
            </div>
            <div style="padding: 6px 0; border-bottom: 1px solid var(--color-border-subtle); display: flex; justify-content: space-between;">
              <strong style="color: var(--color-text-muted);">Compliance:</strong>
              <span>${product.compliance}</span>
            </div>
            <div style="padding: 6px 0; display: flex; justify-content: space-between;">
              <strong style="color: var(--color-text-muted);">Material:</strong>
              <span>${product.material}</span>
            </div>
          </div>
          <div style="display: flex; gap: 12px;">
            <a href="product-details.html?id=${product.id}" class="btn btn-dark">Full Details Page &rarr;</a>
            <button class="btn btn-gold" onclick="Modal.closeQuickView(); Modal.openQuote('${product.title}', '${product.badge}')">Request Quote</button>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeQuickView() {
    const overlay = document.getElementById('quickview-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  // Submit quote handler
  handleQuoteSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements['name'] ? form.elements['name'].value : 'Corporate Client';
    
    Modal.closeQuote();
    Modal.showToast(`Thank you, ${name}. Your sourcing RFQ has been submitted to SAF International Trade Desk. We will dispatch a formal quotation within 24 hours.`, 'success');
    form.reset();
  }
};

// Global key listener for escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    Modal.closeQuote();
    Modal.closeQuickView();
  }
});
