// ===== BASE DE DONNÉES DES CONTENUS =====
const contents = [
  // FAUNE
  {
    id: 1,
    cat: 'faune',
    title: 'Le gorille des plaines du Gabon',
    emoji: '🦍',
    bg: 'linear-gradient(135deg, #2c3e50, #4a6741)',
    duration: '12:34',
    channel: 'Gabon Nature',
    views: '125K vues',
    time: 'il y a 2 jours',
    description: "Le Gabon abrite l'une des plus grandes populations de gorilles des plaines de l'Ouest. Ces primates majestueux vivent dans les forêts denses du parc national de Loango et de Moukalaba-Doudou. Leur préservation est un enjeu majeur pour la biodiversité gabonaise.",
    tags: ['Parc de Loango', 'Primates', 'Conservation', 'Espèce protégée']
  },
  {
    id: 2,
    cat: 'faune',
    title: 'Les éléphants de forêt de Lopé',
    emoji: '🐘',
    bg: 'linear-gradient(135deg, #6b5b3e, #8b7355)',
    duration: '08:21',
    channel: 'Gabon Sauvage',
    views: '89K vues',
    time: 'il y a 5 jours',
    description: "Les éléphants de forêt du parc national de la Lopé sont parmi les plus studied au monde. Plus petits que leurs cousins de savane, ils jouent un rôle crucial dans la dispersion des graines et le maintien de l'écosystème forestier gabonais.",
    tags: ['Parc de la Lopé', 'Éléphants', 'UNESCO', 'Écosystème']
  },
  {
    id: 3,
    cat: 'faune',
    title: 'Les baleines à bosse de Loango',
    emoji: '🐋',
    bg: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    duration: '15:47',
    channel: 'Océan Gabon',
    views: '210K vues',
    time: 'il y a 1 semaine',
    description: "Chaque année entre juillet et septembre, les baleines à bosse migrent vers les côtes gabonaises pour se reproduire. Le parc national de Loango est l'un des meilleurs endroits au monde pour les observer.",
    tags: ['Loango', 'Baleines', 'Océan Atlantique', 'Migration']
  },
  {
    id: 4,
    cat: 'faune',
    title: 'Le mandrill, trésor des forêts',
    emoji: '🐒',
    bg: 'linear-gradient(135deg, #c0392b, #e74c3c)',
    duration: '06:12',
    channel: 'Gabon Nature',
    views: '67K vues',
    time: 'il y a 3 jours',
    description: "Le mandrill est le plus grand singe du monde. Reconnaissable à son visage coloré, il vit en groupes dans les forêts tropicales du Gabon. Espèce vulnérable, sa protection est essentielle.",
    tags: ['Mandrill', 'Forêt tropicale', 'Singes', 'Vulnérable']
  },

  // FLORE
  {
    id: 5,
    cat: 'flore',
    title: "La forêt équatoriale gabonaise",
    emoji: '🌳',
    bg: 'linear-gradient(135deg, #134e13, #3d9a3d)',
    duration: '10:15',
    channel: 'Gabon Vert',
    views: '98K vues',
    time: 'il y a 4 jours',
    description: "Le Gabon est couvert à 88% de forêt, ce qui en fait l'un des pays les plus boisés au monde. Cette forêt équatoriale abrite une biodiversité exceptionnelle et joue un rôle clé dans la régulation du climat mondial.",
    tags: ['Forêt équatoriale', 'Biodiversité', 'Carbone', '88% forêt']
  },
  {
    id: 6,
    cat: 'flore',
    title: "Les mangroves du Gabon",
    emoji: '🌿',
    bg: 'linear-gradient(135deg, #1a5c3a, #2d8659)',
    duration: '07:42',
    channel: 'Gabon Vert',
    views: '45K vues',
    time: 'il y a 1 semaine',
    description: "Les mangroves gabonaises couvrent environ 1 000 km² et constituent un écosystème unique entre terre et mer. Elles protègent les côtes de l'érosion et servent de nurserie pour de nombreuses espèces marines.",
    tags: ['Mangrove', 'Côte', 'Écosystème', 'Protection']
  },
  {
    id: 7,
    cat: 'flore',
    title: "Le palmier à huile sauvage",
    emoji: '🌴',
    bg: 'linear-gradient(135deg, #8b6f1e, #b8952e)',
    duration: '05:30',
    channel: 'Flore d\'Afrique',
    views: '32K vues',
    time: 'il y a 2 semaines',
    description: "Le palmier à huile est originaire d'Afrique de l'Ouest et du Centre. Au Gabon, il pousse naturellement dans les zones humides et est utilisé par les populations locales pour l'alimentation et l'artisanat.",
    tags: ['Palmier', 'Plante', 'Tradition', 'Artisanat']
  },
  {
    id: 8,
    cat: 'flore',
    title: "Les orchidées du Gabon",
    emoji: '🌸',
    bg: 'linear-gradient(135deg, #8e44ad, #c39bd3)',
    duration: '09:58',
    channel: 'Flore d\'Afrique',
    views: '56K vues',
    time: 'il y a 5 jours',
    description: "Le Gabon abrite plus de 400 espèces d'orchidées, dont certaines sont endémiques. Ces fleurs rares et précieuses sont un trésor de la biodiversité gabonaise, menacées par la déforestation.",
    tags: ['Orchidées', 'Endémique', 'Fleurs', 'Biodiversité']
  },

  // HISTOIRE
  {
    id: 9,
    cat: 'histoire',
    title: "Les royaumes précoloniaux du Gabon",
    emoji: '👑',
    bg: 'linear-gradient(135deg, #6d4c41, #8d6e63)',
    duration: '18:22',
    channel: 'Histoire Gabon',
    views: '112K vues',
    time: 'il y a 1 semaine',
    description: "Avant la colonisation, le territoire gabonais était habité par plusieurs royaumes et peuples organisés : les Myéné, les Fang, les Punu, les Nzébi... Chacun avec sa culture, sa langue et ses traditions propres.",
    tags: ['Royaumes', 'Peuples', 'Myéné', 'Fang', 'Punu']
  },
  {
    id: 10,
    cat: 'histoire',
    title: "Le Gabon et l'époque coloniale",
    emoji: '📜',
    bg: 'linear-gradient(135deg, #5d4037, #795548)',
    duration: '22:10',
    channel: 'Histoire Gabon',
    views: '87K vues',
    time: 'il y a 2 semaines',
    description: "De l'arrivée des Européens au XIXe siècle jusqu'à l'indépendance en 1960, le Gabon a traversé une période complexe marquée par le commerce, la colonisation française et l'émergence d'une conscience nationale.",
    tags: ['Colonisation', 'Indépendance 1960', 'France', 'Histoire']
  },
  {
    id: 11,
    cat: 'histoire',
    title: "Albert Schweitzer à Lambaréné",
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #37474f, #546e7a)',
    duration: '14:05',
    channel: 'Histoire Gabon',
    views: '54K vues',
    time: 'il y a 3 semaines',
    description: "Albert Schweitzer, prix Nobel de la paix 1952, a fondé son célèbre hôpital à Lambaréné au Gabon. Son œuvre humanitaire a marqué l'histoire du pays et continue d'inspirer aujourd'hui.",
    tags: ['Albert Schweitzer', 'Lambaréné', 'Prix Nobel', 'Médecine']
  },
  {
    id: 12,
    cat: 'histoire',
    title: "Le Gabon indépendant (1960-2023)",
    emoji: '🇬🇦',
    bg: 'linear-gradient(135deg, #1a6b1a, #2d8f2d)',
    duration: '25:33',
    channel: 'Histoire Gabon',
    views: '143K vues',
    time: 'il y a 1 mois',
    description: "Depuis son indépendance en 1960, le Gabon a connu une histoire politique riche et complexe. Entre pétrole, développement et enjeux démocratiques, retour sur 60 ans d'histoire nationale.",
    tags: ['Indépendance', 'Pétrole', 'Politique', 'Développement']
  },

  // GÉOGRAPHIE
  {
    id: 13,
    cat: 'geo',
    title: "La géographie du Gabon",
    emoji: '🗺️',
    bg: 'linear-gradient(135deg, #2874a6, #5dade2)',
    duration: '11:48',
    channel: 'Géo Gabon',
    views: '76K vues',
    time: 'il y a 4 jours',
    description: "Situé en Afrique centrale, le Gabon s'étend sur 267 667 km². Il est bordé par l'océan Atlantique à l'ouest, le Cameroun au nord, la Guinée équatoriale au nord-ouest et le Congo à l'est et au sud. Son relief varié comprend plaines côtières, collines et montagnes.",
    tags: ['Afrique centrale', '267 667 km²', 'Atlantique', 'Relief']
  },
  {
    id: 14,
    cat: 'geo',
    title: "Le parc national de Loango",
    emoji: '🏞️',
    bg: 'linear-gradient(135deg, #1e8449, #58d68d)',
    duration: '13:27',
    channel: 'Géo Gabon',
    views: '101K vues',
    time: 'il y a 1 semaine',
    description: "Le parc national de Loango, situé sur la côte atlantique, est l'un des joyaux du Gabon. Avec ses plages sauvages, ses lagunes, ses forêts et sa savane, il offre un concentré unique de paysages africains et une faune exceptionnelle.",
    tags: ['Loango', 'Parc national', 'Côte', 'Faune sauvage']
  },
  {
    id: 15,
    cat: 'geo',
    title: "Le fleuve Ogooué",
    emoji: '💧',
    bg: 'linear-gradient(135deg, #1a5276, #3498db)',
    duration: '08:55',
    channel: 'Géo Gabon',
    views: '42K vues',
    time: 'il y a 2 semaines',
    description: "L'Ogooué est le principal fleuve du Gabon, long de 1 200 km. Il traverse le pays d'est en ouest et joue un rôle vital pour les populations, la faune et l'économie. Son bassin abrite une biodiversité remarquable.",
    tags: ['Ogooué', 'Fleuve', '1 200 km', 'Bassin']
  },
  {
    id: 16,
    cat: 'geo',
    title: "Le climat équatorial gabonais",
    emoji: '☀️',
    bg: 'linear-gradient(135deg, #b9770e, #f1c40f)',
    duration: '06:20',
    channel: 'Géo Gabon',
    views: '38K vues',
    time: 'il y a 3 semaines',
    description: "Le Gabon bénéficie d'un climat équatorial chaud et humide toute l'année, avec une saison des pluies et une saison sèche. Les températures moyennes oscillent entre 24°C et 28°C, et les précipitations annuelles peuvent dépasser 2 500 mm.",
    tags: ['Climat équatorial', 'Température', 'Pluies', 'Saisons']
  }
];

// ===== ÉTAT =====
let currentFilter = 'all';
let currentSearch = '';

// ===== RÉFÉRENCES DOM =====
const videoGrid = document.getElementById('videoGrid');
const catBtns = document.querySelectorAll('.cat-btn');
const sideLinks = document.querySelectorAll('.side-link[data-cat]');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

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
    videoGrid.innerHTML = '<p style="padding:40px;color:#666;">Aucun résultat trouvé 😕</p>';
    return;
  }

  videoGrid.innerHTML = filtered.map(c => `
    <div class="video-card" data-id="${c.id}">
      <div class="thumb" style="background:${c.bg}">
        ${c.emoji}
        <span class="duration">${c.duration}</span>
      </div>
      <div class="video-info">
        <span class="badge ${c.cat}">${c.cat.toUpperCase()}</span>
        <div class="video-title">${c.title}</div>
        <div class="video-channel">${c.channel}</div>
        <div class="video-meta">${c.views} • ${c.time}</div>
      </div>
    </div>
  `).join('');

  // Ajouter les événements de clic
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

// ===== MODAL =====
function openModal(id) {
  const item = contents.find(c => c.id === id);
  if (!item) return;

  modalBody.innerHTML = `
    <div class="modal-hero" style="background:${item.bg};color:#fff;">${item.emoji}</div>
    <div class="modal-text">
      <span class="badge ${item.cat}" style="margin-bottom:12px;">${item.cat.toUpperCase()}</span>
      <h2>${item.title}</h2>
      <div class="video-meta" style="margin-bottom:16px;">${item.channel} • ${item.views} • ${item.time} • ${item.duration}</div>
      <p>${item.description}</p>
      <div class="info-tags">
        ${item.tags.map(t => `<span class="info-tag">#${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// ===== FILTRES CATÉGORIES =====
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

// ===== SIDEBAR LINKS =====
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
    // Fermer la sidebar sur mobile
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

// ===== INITIALISATION =====
renderCards();
