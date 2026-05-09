function initFilters() {
  const cards = document.querySelectorAll('.card[data-filters]');
  const selects = document.querySelectorAll('.filter-group select');
  const resetBtn = document.querySelector('.filter-reset');
  const noResults = document.querySelector('.no-results');
  if (!cards.length || !selects.length) return;

  function applyFilters() {
    const active = {};
    selects.forEach(s => { if (s.value) active[s.dataset.filter] = s.value.toLowerCase(); });

    let visible = 0;
    cards.forEach(card => {
      const data = JSON.parse(card.dataset.filters);
      const match = Object.entries(active).every(([key, val]) => {
        const cardVal = (data[key] || '').toLowerCase();
        return cardVal.includes(val);
      });
      card.hidden = !match;
      if (match) visible++;
    });

    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  selects.forEach(s => s.addEventListener('change', applyFilters));

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      selects.forEach(s => s.value = '');
      applyFilters();
    });
  }
}

function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initMobileNav();
});
