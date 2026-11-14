// ===== BASE DE DONNÉES DES CONTENUS =====
// Chaque item possède : image (Unsplash), youtubeId (vidéo réelle), catégorie, description
const contents = [
  // ========== FAUNE ==========
  {
    id: 1,
    cat: 'faune',
    title: 'Le gorille des plaines du Gabon',
    image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&q=80',
    youtubeId: 'F0Xx0F5ZYbc',
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
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80',
    youtubeId: 'fbfjr8lq5Oc',
    duration: '08:21',
    channel: 'Gabon Sauvage',
    views: '89K vues',
    time: 'il y a 5 jours',
    description: "Les éléphants de forêt du parc national de la Lopé sont parmi les plus étudiés au monde. Plus petits que leurs cousins de savane, ils jouent un rôle crucial dans la dispersion des graines et le maintien de l'écosystème forestier gabonais.",
    tags: ['Parc de la Lopé', 'Éléphants', 'UNESCO', 'Écosystème']
  },
  {
    id: 3,
    cat: 'faune',
    title: 'Les baleines à bosse de Loango',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80',
    youtubeId: 'L9K7I8v0nBE',
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
    image: 'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=600&q=80',
    youtubeId: '8A1q2E5g4iQ',
    duration: '06:12',
    channel: 'Gabon Nature',
    views: '67K vues',
    time: 'il y a 3 jours',
    description: "Le mandrill est le plus grand singe du monde. Reconnaissable à son visage coloré, il vit en groupes dans les forêts tropicales du Gabon. Espèce vulnérable, sa protection est essentielle.",
    tags: ['Mandrill', 'Forêt tropicale', 'Singes', 'Vulnérable']
  },

  // ========== FLORE ==========
  {
    id: 5,
    cat: 'flore',
    title: "La forêt équatoriale gabonaise",
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    youtubeId: 'kJQP7kiw5Fk',
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
    image: 'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=600&q=80',
    youtubeId: '3JZ_D3ELwOQ',
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
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80',
    youtubeId: 'kXYiU_JCYtU',
    duration: '05:30',
    channel: "Flore d'Afrique",
    views: '32K vues',
    time: 'il y a 2 semaines',
    description: "Le palmier à huile est originaire d'Afrique de l'Ouest et du Centre. Au Gabon, il pousse naturellement dans les zones humides et est utilisé par les populations locales pour l'alimentation et l'artisanat.",
    tags: ['Palmier', 'Plante', 'Tradition', 'Artisanat']
  },
  {
    id: 8,
    cat: 'flore',
    title: "Les orchidées du Gabon",
    image: 'https://images.unsplash.com/photo-1524598171347-abf62f4d6bde?w=600&q=80',
    youtubeId: 'RgKAFK5djSk',
    duration: '09:58',
    channel: "Flore d'Afrique",
    views: '56K vues',
    time: 'il y a 5 jours',
    description: "Le Gabon abrite plus de 400 espèces d'orchidées, dont certaines sont endémiques. Ces fleurs rares et précieuses sont un trésor de la biodiversité gabonaise, menacées par la déforestation.",
    tags: ['Orchidées', 'Endémique', 'Fleurs', 'Biodiversité']
  },

  // ========== HISTOIRE ==========
  {
    id: 9,
    cat: 'histoire',
    title: "Les royaumes précoloniaux du Gabon",
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80',
    youtubeId: 'y6120QOlsfU',
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
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80',
    youtubeId: 'hTWKbfoikeg',
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
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    youtubeId: '09R8_2nJtjg',
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
    image: 'https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=600&q=80',
    youtubeId: 'CevxZvSJLk8',
    duration: '25:33',
    channel: 'Histoire Gabon',
    views: '143K vues',
    time: 'il y a 1 mois',
    description: "Depuis son indépendance en 1960, le Gabon a connu une histoire politique riche et complexe. Entre pétrole, développement et enjeux démocratiques, retour sur 60 ans d'histoire nationale.",
    tags: ['Indépendance', 'Pétrole', 'Politique', 'Développement']
  },

  // ========== GÉOGRAPHIE ==========
  {
    id: 13,
    cat: 'geo',
    title: "La géographie du Gabon",
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
    youtubeId: '1La4QzGeaaQ',
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
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
    youtubeId: 'JGwWNGJdvx8',
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
    image: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=600&q=80',
    youtubeId: 'RgKAFK5djSk',
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
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80',
    youtubeId: '9bZkp7q19f0',
    duration: '06:20',
    channel: 'Géo Gabon',
    views: '38K vues',
    time: 'il y a 3 semaines',
    description: "Le Gabon bénéficie d'un climat équatorial chaud et humide toute l'année, avec une saison des pluies et une saison sèche. Les températures moyennes oscillent entre 24°C et 28°C, et les précipitations annuelles peuvent dépasser 2 500 mm.",
    tags: ['Climat équatorial', 'Température', 'Pluies', 'Saisons']
  }
];

// ===== ICÔNES PAR CATÉGORIE =====
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
    videoGrid.innerHTML = '<p style="padding:40px;color:#666;"><i class="fa-solid fa-magnifying-glass"></i> Aucun résultat trouvé 😕</p>';
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
    <div class="modal-video">
      <iframe 
        src="https://www.youtube.com/embed/${item.youtubeId}?autoplay=1" 
        title="${item.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div class="modal-text">
      <span class="badge ${item.cat}">
        <i class="fa-solid ${catIcons[item.cat]}"></i> ${catLabels[item.cat]}
      </span>
      <h2>${item.title}</h2>
      <div class="meta-line">
        <i class="fa-solid fa-circle-check"></i> ${item.channel} • ${item.views} • ${item.time}
      </div>
      <p>${item.description}</p>
      <div class="info-tags">
        ${item.tags.map(t => `<span class="info-tag"><i class="fa-solid fa-hashtag"></i> ${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  // Empêcher le scroll du body
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  modalBody.innerHTML = ''; // Stoppe la vidéo en cours
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// ===== FILTRES CATÉGORIES =====
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBt
