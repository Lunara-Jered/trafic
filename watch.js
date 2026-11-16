// ===== RÉFÉRENCES DOM =====
const watchPrimary = document.getElementById('watchPrimary');
const suggestionsList = document.getElementById('suggestionsList');
const backBtn = document.getElementById('backBtn');

// ===== RÉCUPÉRER L'ID DEPUIS L'URL =====
const params = new URLSearchParams(window.location.search);
const videoId = parseInt(params.get('id')) || contents[0].id;
const currentVideo = contents.find(c => c.id === videoId) || contents[0];

// ===== BOUTON RETOUR =====
if (backBtn) {
  backBtn.addEventListener('click', () => {
    // Si l'utilisateur vient d'une page du site, il y retourne
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
      window.history.back();
    } else {
      window.location.href = 'index.html';
    }
  });
}

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

    <div class="watch-actions-simple">
      <button class="action-btn" id="shareBtn">
        <i class="fa-solid fa-share"></i> Partager
      </button>
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

  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: v.title,
      text: v.description,
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        const original = shareBtn.innerHTML;
        shareBtn.innerHTML = '<i class="fa-solid fa-check"></i> Lien copié !';
        setTimeout(() => { shareBtn.innerHTML = original; }, 2000);
      }
    } catch (err) {
      // silencieux : l'utilisateur a annulé
    }
  });
}

// ===== RENDER LES SUGGESTIONS =====
function renderSuggestions() {
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

// ===== TITRE =====
document.title = `${currentVideo.title} - Gabon Nature`;

// ===== INIT =====
renderPlayer();
renderSuggestions();
window.scrollTo(0, 0);
