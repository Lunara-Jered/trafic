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
          <i class="fa-solid
