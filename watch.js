// ===== RÉFÉRENCES DOM =====
const watchPrimary = document.getElementById('watchPrimary');
const suggestionsList = document.getElementById('suggestionsList');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const watchMain = document.getElementById('watchMain');

// ===== RÉCUPÉRER L'ID DEPUIS L'URL =====
const params = new URLSearchParams(window.location.search);
const videoId = parseInt(params.get('id')) || contents[0].id;
const currentVideo = contents.find(c => c.id === videoId) || contents[0];

// ===== RENDER LE LECTEUR + INFOS =====
function renderPlayer() {
  const v = currentVideo;

  watchPrimary.innerHTML = `
    <div class="player-wrapper">
      <iframe 
        src="https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0" 
        title="${v.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <h1 class="watch-title">${v.title}</h1>

    <div class="watch-meta-row">
      <div class="watch-channel-block">
        <div class="channel-avatar">${v.channel.substring(0,2).toUpperCase()}</div>
        <div class="channel-info">
          <div class="channel-name">
            ${v.channel} <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="channel-subs">125K abonnés</div>
        </div>
        <button class="subscribe-btn" id="subscribeBtn">S'abonner</button>
      </div>

      <div class="watch-actions">
        <button class="action-btn" id="likeBtn">
          <i class="fa-regular fa-thumbs-up"></i> J'aime
        </button>
        <button class="action-btn">
          <i class="fa-solid fa-share"></i> Partager
        </button>
        <button class="action-btn">
          <i class="fa-solid fa-download"></i> Télécharger
        </button>
        <button class="action-btn">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>

    <div class="watch-description">
      <div class="desc-meta">
        ${v.views} • ${v.time} • <span class="badge ${v.cat}" style="margin-left:6px;">
          <i class="fa-solid ${catIcons[v.cat]}"></i> ${catLabels[v.cat]}
        </span>
      </div>
      <p>${v.description}</p>
      <div class="desc-tags">
        ${v.tags.map(t => `<span class="info-tag"><i class="fa-solid fa-hashtag"></i> ${t}</span>`).join('')}
      </div>
    </div>
  `;

  // Interactions simples
  const likeBtn = document.getElementById('likeBtn');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
    const icon = likeBtn.querySelector('i');
    if (likeBtn.classList.contains('active')) {
      icon.className = 'fa-solid fa-thumbs-up';
      likeBtn.style.color = '#3d9a3d';
    } else {
      icon.className = 'fa-regular fa-thumbs-up';
      likeBtn.style.color = '';
    }
  });

  const subscribeBtn = document.getElementById('subscribeBtn');
  subscribeBtn.addEventListener('click', () => {
    if (subscribeBtn.textContent === "S'abonner") {
      subscribeBtn.textContent = 'Abonné ✓';
      subscribeBtn.style.background = '#e5e5e5';
      subscribeBtn.style.color = '#0f0f0f';
    } else {
      subscribeBtn.textContent = "S'abonner";
      subscribeBtn.style.background = '';
      subscribeBtn.style.color = '';
    }
  });
}

// ===== RENDER LES SUGGESTIONS =====
function renderSuggestions() {
  // Mélange : même catégorie d'abord, puis les autres
  const sameCat = contents.filter(c => c.id !== currentVideo.id && c.cat === currentVideo.cat);
  const otherCat = contents.filter(c => c.id !== currentVideo.id && c.cat !== currentVideo.cat);
  const suggestions = [...sameCat, ...otherCat];

  suggestionsList.innerHTML = suggestions.map(c => `
    <div class="suggestion-card" data-id="${c.id}">
      <div class="suggestion-thumb" style="background-image:url('${c.image}')">
        <span class="duration">${c.duration}</span>
      </div>
      <div class="suggestion-info">
        <div class="suggestion-title">${c.title}</div>
        <div class="suggestion-channel">${c.channel}</div>
        <div class="suggestion-meta">${c.views} • ${c.time}</div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.suggestion-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = `watch.html?id=${card.dataset.id}`;
    });
  });
}

// ===== MENU MOBILE =====
menuBtn.addEventListener('click', () => {
  if (window.innerWidth < 900) {
    sidebar.classList.toggle('open');
    watchMain.classList.toggle('full');
  } else {
    sidebar.classList.toggle('hidden');
    watchMain.classList.toggle('full');
  }
});

// ===== METTRE À JOUR LE TITRE DE LA PAGE =====
document.title = `${currentVideo.title} - Gabon Nature`;

// ===== INIT =====
renderPlayer();
renderSuggestions();

// Scroll en haut au chargement
window.scrollTo(0, 0);
