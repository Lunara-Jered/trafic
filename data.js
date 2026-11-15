// ===== BASE DE DONNÉES DES CONTENUS - VRAIES DONNÉES SUR LE GABON =====
const contents = [
  // ========== FAUNE ==========
  {
    id: 1, cat: 'faune',
    title: 'Les gorilles des plaines de l\'Ouest',
    image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&q=80',
    youtubeId: 'F0Xx0F5ZYbc',
    duration: '12:34', channel: 'Gabon Nature',
    views: '125K vues', time: 'il y a 2 jours',
    description: "Le Gabon abrite l'une des populations les plus importantes de gorilles des plaines de l'Ouest. Les estimations font état d'environ 35 000 individus recensés dans le pays. La Station d'études des gorilles et chimpanzés, située dans le parc national de la Lopé, est dédiée à leur étude et à leur protection. Ces primates jouent un rôle crucial dans la dispersion des graines et le maintien de l'écosystème forestier.",
    tags: ['Gorilles', 'Parc de la Lopé', 'Primates', 'Conservation']
  },
  {
    id: 2, cat: 'faune',
    title: 'Les éléphants de forêt du Gabon',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
    youtubeId: 'fbfjr8lq5Oc',
    duration: '08:21', channel: 'Gabon Sauvage',
    views: '89K vues', time: 'il y a 5 jours',
    description: "Le Gabon abrite plus de la moitié de la population mondiale des éléphants de forêt d'Afrique, avec environ 22 000 individus recensés dans le parc national de Minkébé. Ces éléphants sont plus petits que leurs cousins de savane et jouent un rôle essentiel dans la dispersion des graines et le maintien de la biodiversité forestière. À Loango, il est même possible de les observer sur les plages.",
    tags: ['Éléphants de forêt', 'Minkébé', 'Loango', 'Biodiversité']
  },
  {
    id: 3, cat: 'faune',
    title: 'Les baleines à bosse et dauphins de Loango',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80',
    youtubeId: 'L9K7I8v0nBE',
    duration: '15:47', channel: 'Océan Gabon',
    views: '210K vues', time: 'il y a 1 semaine',
    description: "Le parc national de Loango possède la deuxième plus grande concentration et variété de baleines et de dauphins au monde. Chaque année, les baleines à bosse migrent vers les côtes gabonaises pour se reproduire. Le parc de Mayumba abrite également certains des sites de nidification de tortues luth les plus denses au monde.",
    tags: ['Baleines à bosse', 'Loango', 'Mayumba', 'Tortues luth']
  },
  {
    id: 4, cat: 'faune',
    title: 'Une biodiversité exceptionnelle : chiffres clés',
    image: 'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=800&q=80',
    youtubeId: '8A1q2E5g4iQ',
    duration: '06:12', channel: 'Gabon Nature',
    views: '67K vues', time: 'il y a 3 jours',
    description: "Le Gabon est l'un des pays les plus riches en biodiversité au monde. On y dénombre environ 198 espèces de mammifères, 700 espèces d'oiseaux, 98 espèces d'amphibiens et entre 95 et 160 espèces de reptiles. Le pays abrite également des espèces rares comme le pangolin du Gabon et le picatharte, ainsi que des espèces endémiques comme le cercopithèque à queue de soleil.",
    tags: ['Biodiversité', 'Mammifères', 'Oiseaux', 'Espèces endémiques']
  },

  // ========== FLORE ==========
  {
    id: 5, cat: 'flore',
    title: 'La forêt équatoriale gabonaise',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    youtubeId: 'kJQP7kiw5Fk',
    duration: '10:15', channel: 'Gabon Vert',
    views: '98K vues', time: 'il y a 4 jours',
    description: "Le Gabon est l'un des pays les plus boisés au monde, avec environ 88 % de son territoire couvert de forêt. Cette forêt équatoriale abrite près de 10 000 espèces de plantes et plus de 400 essences forestières. Les forêts gabonaises stockent près de 4 milliards de tonnes de carbone, ce qui en fait l'un des actifs naturels les plus importants d'Afrique subsaharienne.",
    tags: ['Forêt équatoriale', '88% forêt', 'Carbone', 'Biodiversité']
  },
  {
    id: 6, cat: 'flore',
    title: 'Les mangroves et zones humides du Gabon',
    image: 'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=800&q=80',
    youtubeId: '3JZ_D3ELwOQ',
    duration: '07:42', channel: 'Gabon Vert',
    views: '45K vues', time: 'il y a 1 semaine',
    description: "Le Gabon possède un vaste réseau de zones humides, notamment les mangroves côtières et les forêts inondables le long du fleuve Ogooué. Le parc national d'Akanda, situé près de Libreville, est une zone humide d'importance internationale. Ces écosystèmes protègent les côtes de l'érosion, servent de nurserie pour de nombreuses espèces marines et jouent un rôle clé dans le stockage du carbone.",
    tags: ['Mangroves', 'Akanda', 'Zones humides', 'Ogooué']
  },
  {
    id: 7, cat: 'flore',
    title: 'Les orchidées et plantes endémiques',
    image: 'https://images.unsplash.com/photo-1524598171347-abf62f4d6bde?w=800&q=80',
    youtubeId: 'kXYiU_JCYtU',
    duration: '05:30', channel: "Flore d'Afrique",
    views: '32K vues', time: 'il y a 2 semaines',
    description: "La flore gabonaise est d'une richesse exceptionnelle, avec près de 10 000 espèces de plantes dont certaines sont endémiques. Les forêts des Monts de Cristal et du massif du Chaillu abritent de nombreuses espèces rares d'orchidées et de plantes médicinales. La préservation de ces habitats est essentielle pour maintenir cette diversité unique.",
    tags: ['Orchidées', 'Plantes médicinales', 'Monts de Cristal', 'Endémique']
  },
  {
    id: 8, cat: 'flore',
    title: 'Les essences forestières du Gabon',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
    youtubeId: 'RgKAFK5djSk',
    duration: '09:58', channel: "Flore d'Afrique",
    views: '56K vues', time: 'il y a 5 jours',
    description: "Le Gabon est célèbre pour ses essences forestières de grande valeur, notamment l'okoumé et l'ozigo, utilisés dans la construction et l'ébénisterie. Le pays compte plus de 400 essences forestières différentes. La gestion durable de cette ressource est un enjeu majeur, avec plus de 2,5 millions d'hectares de forêts certifiées FSC au Gabon.",
    tags: ['Okoumé', 'Ozigo', 'Essences forestières', 'FSC']
  },

  // ========== HISTOIRE ==========
  {
    id: 9, cat: 'histoire',
    title: 'Les premiers peuplements du Gabon',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    youtubeId: 'y6120QOlsfU',
    duration: '18:22', channel: 'Histoire Gabon',
    views: '112K vues', time: 'il y a 1 semaine',
    description: "Les traces d'un peuplement préhistorique du Gabon remontent à environ 400 000 ans. Les Pygmées, chasseurs-cueilleurs, sont les premiers habitants connus et s'installent environ 5 000 ans avant notre ère. Une vague de peuplement bantoue leur succède, apportant l'agriculture, l'élevage et la métallurgie. Les Mpongwes s'installent dans la région de l'Estuaire entre le XIe et le XVIIIe siècle, tandis que les Fang arrivent progressivement jusqu'au XIXe siècle.",
    tags: ['Préhistoire', 'Pygmées', 'Bantous', 'Peuplement']
  },
  {
    id: 10, cat: 'histoire',
    title: 'L\'arrivée des Européens et la colonisation',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80',
    youtubeId: 'hTWKbfoikeg',
    duration: '22:10', channel: 'Histoire Gabon',
    views: '87K vues', time: 'il y a 2 semaines',
    description: "Les premiers Européens, des Portugais, accostent au XVe siècle. Le nom « Gabon » viendrait du portugais « gabão » (caban), en référence à la forme de l'estuaire de Libreville. Après une période de commerce (esclaves, caoutchouc, bois, ivoire), la France occupe progressivement le territoire à partir de 1839. En 1886, le Gabon devient une colonie française, puis est intégré à l'Afrique-Équatoriale française en 1910.",
    tags: ['Portugais', 'Colonisation', 'France', 'Traite négrière']
  },
  {
    id: 11, cat: 'histoire',
    title: 'Albert Schweitzer à Lambaréné',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    youtubeId: '09R8_2nJtjg',
    duration: '14:05', channel: 'Histoire Gabon',
    views: '54K vues', time: 'il y a 3 semaines',
    description: "Albert Schweitzer (1875-1965), médecin, théologien et musicien alsacien, a fondé son célèbre hôpital à Lambaréné au Gabon en 1913. Il y a soigné des milliers de patients et a reçu le prix Nobel de la Paix en 1952 pour son œuvre humanitaire. Son hôpital continue encore aujourd'hui de fonctionner et reste un lieu emblématique de l'histoire du Gabon.",
    tags: ['Albert Schweitzer', 'Lambaréné', 'Prix Nobel', 'Médecine']
  },
  {
    id: 12, cat: 'histoire',
    title: 'L\'indépendance du Gabon (1960)',
    image: 'https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=800&q=80',
    youtubeId: 'CevxZvSJLk8',
    duration: '25:33', channel: 'Histoire Gabon',
    views: '143K vues', time: 'il y a 1 mois',
    description: "Le Gabon accède à l'indépendance le 17 août 1960. Léon Mba devient le premier président. Après son décès en 1967, Omar Bongo prend le pouvoir et dirige le pays pendant plus de 40 ans. Son fils Ali Bongo lui succède en 2009. En août 2023, un coup d'État militaire porte au pouvoir le général Brice Clotaire Oligui Nguema, marquant un tournant dans l'histoire politique du pays.",
    tags: ['Indépendance 1960', 'Léon Mba', 'Omar Bongo', 'Politique']
  },

  // ========== GÉOGRAPHIE ==========
  {
    id: 13, cat: 'geo',
    title: 'La géographie du Gabon',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    youtubeId: '1La4QzGeaaQ',
    duration: '11:48', channel: 'Géo Gabon',
    views: '76K vues', time: 'il y a 4 jours',
    description: "Situé en Afrique centrale, le Gabon s'étend sur 267 667 km², soit environ la moitié de la superficie de la France. Il est bordé à l'ouest par l'océan Atlantique (885 km de littoral), au nord par la Guinée équatoriale et le Cameroun, et à l'est et au sud par le Congo. Le point culminant est le mont Iboundji (1 575 m). Le relief comprend des plaines côtières, des plateaux et des massifs montagneux (Monts de Cristal, massif du Chaillu).",
    tags: ['Afrique centrale', '267 667 km²', 'Atlantique', 'Relief']
  },
  {
    id: 14, cat: 'geo',
    title: 'Les 13 parcs nationaux du Gabon',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    youtubeId: 'JGwWNGJdvx8',
    duration: '13:27', channel: 'Géo Gabon',
    views: '101K vues', time: 'il y a 1 semaine',
    description: "Le Gabon a créé 13 parcs nationaux en 2002, couvrant environ 11 % du territoire. Les plus emblématiques sont : Loango (parc côtier avec plages, forêts et savanes), Ivindo (forêt primaire et chutes spectaculaires), Akanda (zone humide près de Libreville), Minkébé (refuge des éléphants de forêt), et Mayumba (site de nidification des tortues luth). L'Agence Nationale des Parcs Nationaux (ANPN) gère ces aires protégées.",
    tags: ['Parcs nationaux', 'Loango', 'Ivindo', 'ANPN']
  },
  {
    id: 15, cat: 'geo',
    title: 'Le fleuve Ogooué : colonne vertébrale du Gabon',
    image: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&q=80',
    youtubeId: 'RgKAFK5djSk',
    duration: '08:55', channel: 'Géo Gabon',
    views: '42K vues', time: 'il y a 2 semaines',
    description: "L'Ogooué est le principal fleuve du Gabon. Son bassin couvre environ 215 000 km², soit les quatre cinquièmes du territoire national. Long d'environ 1 200 km, il traverse le pays d'est en ouest et joue un rôle vital pour les populations, la faune et l'économie. Ses affluents (Nyanga, Ivindo, etc.) et les massifs où ils prennent leur source (Chaillu, Monts de Cristal) constituent un réseau hydrographique essentiel pour l'approvisionnement en eau et en électricité du pays.",
    tags: ['Ogooué', 'Fleuve', 'Bassin versant', 'Hydrographie']
  },
  {
    id: 16, cat: 'geo',
    title: 'Climat et environnement du Gabon',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    youtubeId: '9bZkp7q19f0',
    duration: '06:20', channel: 'Géo Gabon',
    views: '38K vues', time: 'il y a 3 semaines',
    description: "Le Gabon bénéficie d'un climat équatorial chaud et humide toute l'année, avec des températures moyennes entre 24°C et 28°C et des précipitations pouvant dépasser 2 500 mm par an. Le pays possède un score moyen de l'Indice d'intégrité du paysage forestier de 9,07 (2019), le classant 9e sur 172 pays. Malgré un fort engagement en faveur de la conservation, le Gabon fait face à des pressions : exploitation forestière et minière illégale, braconnage, et risques de fragmentation des habitats liés au développement des infrastructures.",
    tags: ['Climat équatorial', 'Conservation', 'Menaces', 'Indice forestier']
  }
];
