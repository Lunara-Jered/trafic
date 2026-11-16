// ===== ATTENDRE LE DOM =====
window.addEventListener('DOMContentLoaded', () => {

  // Sécurité : data.js chargé ?
  if (typeof contents === 'undefined') {
    const grid = document.getElementById('videoGrid');
    if (grid) grid.innerHTML = '<p style="padding:40px;color:red;">⚠️ Données non chargées</p>';
    return;
  }

  // Icônes & labels en dur (ne dépend pas de data.js)
  const catIcons = {
    faune: 'fa-paw',
    flore: 'fa-tree',
    histoire: 'fa-scroll',
    geo: 'fa-map'
  };
  const catLabels = {
    faune: 'Faune',
    flore: 'Flore',
    histoire: 'Histoire',
    geo: 'Géographie'
  };

  // ===== REFS =====
  const videoGrid = document.getElementById('videoGrid');
  const catBtns = document.querySelectorAll('.cat-btn');
  const sideLinks = document.querySelectorAll('.side-link[data-cat]');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item[data-cat]');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const mobileSearchToggle = document.getElementById('mobileSearchToggle');
  const mobileSearchBar = document.getElementById('mobileSearchBar');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const mobileSearchClose = document.getElementById('mobileSearchClose');

  // ===== ÉTAT =====
  let currentFilter = 'all';
  let currentSearch = '';

  // ===== SYNC DES FILTRES =====
  function syncFilter(cat) {
    currentFilter = cat;
    catBtns.forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    sideLinks.forEach(l => l.classList.toggle('active', l.dataset.cat === cat));
    mobileNavItems.forEach(l => l.classList.toggle('active', l.dataset.cat === cat));
  }

  // ===== RENDER =====
  function renderCards() {
    let filtered = contents;
    if (currentFilter !== 'all') filtered = filtered.filter(c => c.cat === currentFilter);
    if (currentSearch) {
      const s = currentSearch.toLowerCase();
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(s) ||
        c.description.toLowerCase().includes(s) ||
        c.tags.some(t => t.toLowerCase().includes(s))
      );
    }

    if (filtered.length === 0) {
      videoGrid.innerHTML = '<p style="padding:40px;color:#666;text-align:center;"><i class="fa-solid fa-magnifying-glass"></i> Aucun résultat.</p>';
      return;
    }

    videoGrid.innerHTML = filtered.map(c => `
      <div class="video-card" data-id="${c.id}">
        <div class="thumb" style="background-image:url('${c.image}')">
          <div class="play-overlay"><i class="fa-solid fa-circle-play"></i></div>
          <span class="duration">${c.duration}</span>
        </div>
        <div class="video-info">
          <span class="badge ${c.cat}">
            <i class="fa-solid ${catIcons[c.cat]}"></i> ${catLabels[c.cat]}
          </span>
          <div class="video-title">${c.title}</div>
          <div class="video-channel"><i class="fa-solid fa-circle-check"></i> ${c.channel}</div>
          <div class="video-meta">${c.views} • ${c.time}</div>
        </div>
      </div>
    `).join('');

    videoGrid.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = `watch.html?id=${card.dataset.id}`;
      });
    });
  }

  // ===== ÉVÉNEMENTS CATÉGORIES =====
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      syncFilter(btn.dataset.cat);
      renderCards();
    });
  });

  sideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      syncFilter(link.dataset.cat);
      renderCards();
    });
  });

  mobileNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      syncFilter(item.dataset.cat);
      renderCards();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ===== RECHERCHE DESKTOP =====
  function doSearch() {
    currentSearch = searchInput.value.trim();
    renderCards();
  }
  if (searchBtn) searchBtn.addEventListener('click', doSearch);
  if (searchInput) {
    searchInput.addEventListener('input', doSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') doSearch();
    });
  }

  // ===== RECHERCHE MOBILE =====
  if (mobileSearchToggle) {
    mobileSearchToggle.addEventListener('click', () => {
      mobileSearchBar.classList.toggle('active');
      if (mobileSearchBar.classList.contains('active')) {
        mobileSearchInput.focus();
      }
    });
  }
  if (mobileSearchClose) {
    mobileSearchClose.addEventListener('click', () => {
      mobileSearchBar.classList.remove('active');
      mobileSearchInput.value = '';
      currentSearch = '';
      renderCards();
    });
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', () => {
      currentSearch = mobileSearchInput.value.trim();
      renderCards();
    });
  }

  // ===== INIT =====
  renderCards();
});
