// ===== RÉFÉRENCES DOM =====
const videoGrid = document.getElementById('videoGrid');
const catBtns = document.querySelectorAll('.cat-btn');
const sideLinks = document.querySelectorAll('.side-link[data-cat]');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

// ===== ÉTAT =====
let currentFilter = 'all';
let currentSearch = '';

// ===== AFFICHAGE DES CARTES =====
function renderCards() {
  let filtered = contents;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(c => c.cat === currentFilter);
  }

  if (currentSearch) {
    const s = currentSearch.toLowerCase();
    filtered = filtered.filter(c =>
      c.title.toLowerCase().includes(s) ||
      c.description.toLowerCase().includes(s) ||
      c.tags.some(t => t.toLowerCase().includes(s))
    );
  }

  if (filtered.length === 0) {
    videoGrid.innerHTML = '<p style="padding:40px;color:#666;"><i class="fa-solid fa-magnifying-glass"></i> Aucun résultat trouvé.</p>';
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

  // Redirection vers la page watch
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = `watch.html?id=${card.dataset.id}`;
    });
  });
}

// ===== FILTRES =====
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.cat;
    sideLinks.forEach(l => l.classList.remove('active'));
    const match = Array.from(sideLinks).find(l => l.dataset.cat === currentFilter);
    if (match) match.classList.add('active');
    renderCards();
  });
});

sideLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    sideLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    currentFilter = link.dataset.cat;
    catBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.cat === currentFilter);
    });
    renderCards();
    if (window.innerWidth < 900) {
      sidebar.classList.remove('open');
      mainContent.classList.remove('full');
    }
  });
});

// ===== RECHERCHE =====
function doSearch() {
  currentSearch = searchInput.value.trim();
  renderCards();
}
searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('input', doSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') doSearch();
});

// ===== MENU MOBILE =====
menuBtn.addEventListener('click', () => {
  if (window.innerWidth < 900) {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('full');
  } else {
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('full');
  }
});

// ===== INIT =====
renderCards();
