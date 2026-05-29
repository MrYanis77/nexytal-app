/**
 * Hub Ressources Nexytal
 */

export const RESSOURCES_NAV_LABEL = 'Ressources';

export const ressourcesHub = {
  hero: {
    titre: 'Ressources Nexytal',
    sousTitre:
      'Conseils, actualités, études et formats experts pour les entreprises, les candidats et les professionnels RH.',
    video: '/assets/video/entreprise.mp4',
  },
  intro:
    'Explorez nos contenus par thématique : recrutement, carrière, expertises métiers, financements et outils numériques. Nexytal accompagne organisations et talents à chaque étape.',
};

export const ressourcesSections = [
  {
    id: 'conseils-entreprises',
    titre: 'Conseils entreprises',
    description: 'Recrutement, marque employeur et politique RH pour les organisations.',
    image: '/assets/images/entreprise.jpg',
    submenu: [
      { id: 'recrutement', label: 'Recrutement & sourcing', description: 'Processus, sourcing et prise de références' },
      { id: 'marque-employeur', label: 'Marque employeur', description: 'Attirer et fidéliser les talents' },
      { id: 'rh-politiques', label: 'Politiques RH', description: 'QVCT, télétravail et expérience collaborateur' },
      { id: 'partenariats', label: 'Partenariats Nexytal', description: 'Expertises sur mesure pour les entreprises' },
    ],
    topics: [
      {
        id: 'recrutement',
        titre: 'Recrutement & sourcing',
        articles: [
          {
            title: 'Externaliser ou internaliser son recrutement en 2026',
            date: '22 Mai 2026',
            href: '/entreprise',
            image: '/assets/images/rejoindre.jpg',
          },
          {
            title: 'Améliorer son processus de recrutement : 5 leviers concrets',
            date: '04 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/responsable_rh.jpg',
          },
          {
            title: 'La prise de références : un levier sous-estimé',
            date: '28 Avr 2026',
            href: '/entreprise',
            image: '/assets/images/emploi.jpg',
          },
        ],
      },
      {
        id: 'marque-employeur',
        titre: 'Marque employeur',
        articles: [
          {
            title: 'Développer sa marque employeur avec Nexytal',
            date: '09 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/entreprise.jpg',
          },
          {
            title: 'Avantages salariés : ce qui fidélise vraiment en 2026',
            date: '01 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/certification.jpg',
          },
        ],
      },
      {
        id: 'rh-politiques',
        titre: 'Politiques RH',
        articles: [
          {
            title: 'Télétravail : cadre juridique et bonnes pratiques',
            date: '10 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/secretaire_5.jpg',
          },
          {
            title: 'Mettre en place une politique QVCT efficace',
            date: '30 Juin 2025',
            href: '/entreprise',
            image: '/assets/images/rejoindre.jpg',
          },
        ],
      },
      {
        id: 'partenariats',
        titre: 'Partenariats Nexytal',
        articles: [
          {
            title: 'Solutions entreprise : expertises et montée en compétences',
            date: '15 Mar 2026',
            href: '/entreprise',
            image: '/assets/images/entreprise.jpg',
          },
          {
            title: 'Financer vos parcours avec le CPF et les OPCO',
            date: '08 Fév 2026',
            href: '/financements',
            image: '/assets/images/analyste_data.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'conseils-candidats',
    titre: 'Conseils candidats',
    description: 'CV, entretiens, reconversion et évolution de carrière.',
    image: '/assets/images/emploi.jpg',
    submenu: [
      { id: 'cv-entretien', label: 'CV & entretien', description: 'Préparer sa candidature' },
      { id: 'reconversion', label: 'Reconversion', description: 'Changer de métier sereinement' },
      { id: 'bilan-carriere', label: 'Bilan & carrière', description: 'Clarifier son projet professionnel' },
    ],
    topics: [
      {
        id: 'cv-entretien',
        titre: 'CV & entretien',
        articles: [
          {
            title: 'Réussir son entretien d’embauche avec Nexytal',
            date: '12 Mar 2026',
            href: '/carrieres',
            image: '/assets/images/rejoindre.jpg',
          },
          {
            title: 'CV et IA : outils utiles, erreurs à éviter',
            date: '16 Juin 2025',
            href: '/carrieres',
            image: '/assets/images/emploi.jpg',
          },
        ],
      },
      {
        id: 'reconversion',
        titre: 'Reconversion',
        articles: [
          {
            title: 'Se reconvertir dans le numérique avec Nexytal',
            date: '20 Jan 2026',
            href: '/expertises',
            image: '/assets/images/analyste_data.jpg',
          },
          {
            title: 'Les expertises éligibles CPF les plus demandées',
            date: '05 Déc 2025',
            href: '/financements',
            image: '/assets/images/certification.jpg',
          },
        ],
      },
      {
        id: 'bilan-carriere',
        titre: 'Bilan & carrière',
        articles: [
          {
            title: 'Bilan de compétences : quand et pourquoi le faire ?',
            date: '08 Fév 2026',
            href: '/bilan-de-competences',
            image: '/assets/images/certification.jpg',
          },
          {
            title: 'Coaching emploi Nexytal : trouver sa voie',
            date: '18 Avr 2026',
            href: '/carrieres',
            image: '/assets/images/secretaire_4.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'actualites',
    titre: 'Actualités',
    description: 'Nouveautés, implantations et vie du groupe Nexytal.',
    image: '/assets/images/certification.jpg',
    submenu: [
      { id: 'groupe', label: 'Le groupe Nexytal', description: 'Actualités institutionnelles' },
      { id: 'expertises', label: 'Nos expertises', description: 'Coaching, médical, RH, recrutement' },
      { id: 'innovation', label: 'Innovation & digital', description: 'IA, outils et pédagogie' },
    ],
    topics: [
      {
        id: 'groupe',
        titre: 'Le groupe Nexytal',
        articles: [
          {
            title: 'Nexytal ouvre de nouvelles implantations en France',
            date: '02 Mai 2026',
            href: '/implantations',
            image: '/assets/images/entreprise.jpg',
          },
          {
            title: 'Nexytal : une approche globale coaching, RH et expertises',
            date: '10 Jan 2026',
            href: '/a-propos',
            image: '/assets/images/rejoindre.jpg',
          },
        ],
      },
      {
        id: 'expertises',
        titre: 'Nos expertises',
        articles: [
          {
            title: 'Nexytal Médical : renforcement des parcours santé',
            date: '14 Mar 2026',
            href: '/expertises',
            image: '/assets/images/secretaire_4.jpg',
          },
          {
            title: 'Nexytal Trainers : former les formateurs de demain',
            date: '28 Fév 2026',
            href: '/expertises',
            image: '/assets/images/certification.jpg',
          },
        ],
      },
      {
        id: 'innovation',
        titre: 'Innovation & digital',
        articles: [
          {
            title: 'Comment l’IA transforme l’accompagnement RH en 2026',
            date: '18 Juin 2025',
            href: '/ressources-ia',
            image: '/assets/images/analyste_data.jpg',
          },
          {
            title: 'E-learning Nexytal : apprendre à son rythme',
            date: '06 Mai 2026',
            href: '/expertises?type=elearning',
            image: '/assets/images/devops.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'etudes',
    titre: 'Études métiers & emploi',
    description: 'Tendances emploi, rémunération et métiers porteurs.',
    image: '/assets/images/comptable2.jpg',
    submenu: [
      { id: 'rh-paie', label: 'RH & paie', description: 'Salaires et évolutions métiers RH' },
      { id: 'numerique', label: 'Numérique & IT', description: 'Tech, cybersécurité, data' },
      { id: 'sante-admin', label: 'Santé & administratif', description: 'Médical et assistanat' },
    ],
    topics: [
      {
        id: 'rh-paie',
        titre: 'RH & paie',
        articles: [
          {
            title: 'Salaires RH et gestionnaire de paie en 2026',
            date: '13 Jan 2026',
            href: '/expertise/formations-assistante-ressources-humaines',
            image: '/assets/images/secretaire_5.jpg',
          },
          {
            title: 'Assistant RH : perspectives et rémunération',
            date: '09 Fév 2026',
            href: '/expertise/formations-assistante-ressources-humaines',
            image: '/assets/images/responsable_rh.jpg',
          },
        ],
      },
      {
        id: 'numerique',
        titre: 'Numérique & IT',
        articles: [
          {
            title: 'Les métiers du numérique les plus recherchés',
            date: '20 Jan 2026',
            href: '/expertises',
            image: '/assets/images/analyste_data.jpg',
          },
          {
            title: 'Cybersécurité : tension sur les profils en 2026',
            date: '11 Déc 2025',
            href: '/expertises',
            image: '/assets/images/expert_cyber.jpg',
          },
        ],
      },
      {
        id: 'sante-admin',
        titre: 'Santé & administratif',
        articles: [
          {
            title: 'Assistant médico-administratif : état du marché',
            date: '07 Mar 2026',
            href: '/expertises',
            image: '/assets/images/secretaire_4.jpg',
          },
          {
            title: 'Assistant de direction : fourchettes salariales 2026',
            date: '09 Fév 2026',
            href: '/expertises',
            image: '/assets/images/secretaire_5.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'podcasts',
    titre: 'Podcasts',
    description: 'Interviews et décryptages audio de nos experts.',
    image: '/assets/images/certification.jpg',
    submenu: [
      { id: 'coaching', label: 'Coaching & carrière', description: 'Accompagnement individuel' },
      { id: 'formation', label: 'Formation & expertises', description: 'Transmission et montée en compétences' },
      { id: 'recrutement', label: 'Recrutement', description: 'Entreprises et candidats' },
    ],
    topics: [
      {
        id: 'coaching',
        titre: 'Coaching & carrière',
        articles: [
          {
            title: 'Podcast — Trouver sa voie avec Nexytal Coaching',
            date: '17 Nov 2025',
            href: '/carrieres',
            image: '/assets/images/emploi.jpg',
          },
        ],
      },
      {
        id: 'formation',
        titre: 'Formation & expertises',
        articles: [
          {
            title: 'Podcast — Former ses équipes : ROI et engagement',
            date: '13 Juin 2025',
            href: '/expertises',
            image: '/assets/images/certification.jpg',
          },
        ],
      },
      {
        id: 'recrutement',
        titre: 'Recrutement',
        articles: [
          {
            title: 'Podcast — Recrutement spécialisé : retours d’expérience',
            date: '07 Oct 2025',
            href: '/carrieres',
            image: '/assets/images/rejoindre.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'experts',
    titre: "Paroles d'experts",
    description: 'Analyses et recommandations de nos consultants Nexytal.',
    image: '/assets/images/rejoindre.jpg',
    submenu: [
      { id: 'coaching-rh', label: 'Coaching & RH', description: 'Accompagnement des talents' },
      { id: 'medical', label: 'Expertise médicale', description: 'Secteur santé et paramédical' },
      { id: 'trainers', label: 'Trainers & pédagogie', description: 'Ingénierie de formation' },
    ],
    topics: [
      {
        id: 'coaching-rh',
        titre: 'Coaching & RH',
        articles: [
          {
            title: 'Accompagner la reconversion : méthode Nexytal',
            date: '22 Déc 2025',
            href: '/carrieres',
            image: '/assets/images/responsable_rh.jpg',
          },
        ],
      },
      {
        id: 'medical',
        titre: 'Expertise médicale',
        articles: [
          {
            title: 'Évolution des métiers médico-administratifs',
            date: '05 Fév 2026',
            href: '/expertises',
            image: '/assets/images/secretaire_4.jpg',
          },
        ],
      },
      {
        id: 'trainers',
        titre: 'Trainers & pédagogie',
        articles: [
          {
            title: 'Devenir formateur Nexytal : parcours et exigences',
            date: '19 Mar 2026',
            href: '/nous-rejoindre',
            image: '/assets/images/entreprise.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'dossiers',
    titre: 'Dossiers thématiques',
    description: 'Zooms approfondis sur les grands enjeux RH et emploi.',
    image: '/assets/images/responsable_rh.jpg',
    submenu: [
      { id: 'recrutement', label: 'Le recrutement', description: 'Dossier complet' },
      { id: 'teletravail', label: 'Le télétravail', description: 'Organisation et cadre' },
      { id: 'marque-employeur', label: 'Marque employeur', description: 'Attirer les talents' },
      { id: 'cpf-financements', label: 'CPF & financements', description: 'Financer son parcours' },
    ],
    topics: [
      {
        id: 'recrutement',
        titre: 'Le recrutement',
        intro: 'Tendances, processus et bonnes pratiques pour recruter efficacement en 2026.',
        articles: [
          {
            title: 'Recrutement en 2026 : tendances et bonnes pratiques',
            date: '16 Avr 2025',
            href: '/entreprise',
            image: '/assets/images/rejoindre.jpg',
          },
          {
            title: 'Externaliser ou internaliser son recrutement',
            date: '22 Mai 2026',
            href: '/entreprise',
            image: '/assets/images/emploi.jpg',
          },
        ],
      },
      {
        id: 'teletravail',
        titre: 'Le télétravail',
        intro: 'Organisation, cadre juridique et bien-être au travail à distance.',
        articles: [
          {
            title: 'Télétravail et bien-être au travail',
            date: '13 Juin 2025',
            href: '/entreprise',
            image: '/assets/images/entreprise.jpg',
          },
          {
            title: 'Télétravail : cadre juridique et bonnes pratiques',
            date: '10 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/secretaire_5.jpg',
          },
        ],
      },
      {
        id: 'marque-employeur',
        titre: 'Marque employeur',
        intro: 'Attirer, engager et fidéliser les talents grâce à une marque employeur forte.',
        articles: [
          {
            title: 'Développer sa marque employeur avec Nexytal',
            date: '09 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/entreprise.jpg',
          },
          {
            title: 'Avantages salariés : ce qui fidélise vraiment en 2026',
            date: '01 Sep 2025',
            href: '/entreprise',
            image: '/assets/images/certification.jpg',
          },
        ],
      },
      {
        id: 'cpf-financements',
        titre: 'CPF & financements',
        intro: 'Guide pratique pour financer un parcours avec le CPF, les OPCO ou France Travail.',
        articles: [
          {
            title: 'CPF, OPCO, France Travail : le guide Nexytal',
            date: '20 Jan 2026',
            href: '/financements',
            image: '/assets/images/analyste_data.jpg',
          },
          {
            title: 'Financer vos parcours avec le CPF et les OPCO',
            date: '08 Fév 2026',
            href: '/financements',
            image: '/assets/images/analyste_data.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
  {
    id: 'ia-numeriques',
    titre: 'IA & ressources numériques',
    description: 'Outils IA, fiches pratiques et ressources pédagogiques.',
    image: '/assets/images/analyste_data.jpg',
    submenu: [
      { id: 'outils-ia', label: 'Outils IA génératifs', description: 'ChatGPT, Copilot, Midjourney…' },
      { id: 'ressources-pedagogiques', label: 'Ressources pédagogiques', description: 'Fiches et guides pratiques' },
    ],
    topics: [
      {
        id: 'outils-ia',
        titre: 'Outils IA génératifs',
        intro: 'Panorama des outils d’intelligence artificielle génératifs utiles en entreprise et en formation.',
        articles: [
          {
            title: 'Comment l’IA transforme l’accompagnement RH en 2026',
            date: '18 Juin 2025',
            href: '/ressources-ia',
            image: '/assets/images/analyste_data.jpg',
          },
          {
            title: 'CV et IA : outils utiles, erreurs à éviter',
            date: '16 Juin 2025',
            href: '/carrieres',
            image: '/assets/images/emploi.jpg',
          },
          {
            title: 'Découvrir tous les outils IA Nexytal',
            date: '01 Mai 2026',
            href: '/ressources-ia',
            image: '/assets/images/devops.jpg',
          },
        ],
      },
      {
        id: 'ressources-pedagogiques',
        titre: 'Ressources pédagogiques',
        intro: 'Fiches pratiques, guides et supports pour monter en compétences à votre rythme.',
        articles: [
          {
            title: 'E-learning Nexytal : apprendre à son rythme',
            date: '06 Mai 2026',
            href: '/expertises?type=elearning',
            image: '/assets/images/devops.jpg',
          },
          {
            title: 'Les expertises éligibles CPF les plus demandées',
            date: '05 Déc 2025',
            href: '/financements',
            image: '/assets/images/certification.jpg',
          },
          {
            title: 'Catalogue complet des ressources IA',
            date: '15 Mar 2026',
            href: '/ressources-ia',
            image: '/assets/images/analyste_data.jpg',
          },
        ],
      },
    ],
    articles: [],
  },
];

/** Chemin URL d'une page rubrique */
export function ressourcesSectionPath(sectionId) {
  return `/ressources/${sectionId}`;
}

/** Chemin URL d'une page thématique */
export function ressourcesTopicPath(sectionId, topicId) {
  return `/ressources/${sectionId}/${topicId}`;
}

/** Sous-menu navbar — une entrée par section, avec sous-liens vers les pages thématiques */
export const ressourcesNavSubmenu = ressourcesSections.map((section) => ({
  label: section.titre,
  href: ressourcesSectionPath(section.id),
  image: section.image,
  description: section.description,
  submenu: section.submenu.map((item) => ({
    label: item.label,
    href: ressourcesTopicPath(section.id, item.id),
    description: item.description,
  })),
}));

export function getRessourcesSectionById(id) {
  return ressourcesSections.find((s) => s.id === id) ?? null;
}

export function getRessourcesTopic(sectionId, topicId) {
  const section = getRessourcesSectionById(sectionId);
  if (!section || !topicId) return null;

  const submenuItem = section.submenu?.find((item) => item.id === topicId) ?? null;
  const topic = section.topics?.find((t) => t.id === topicId) ?? null;

  if (!submenuItem && !topic) return null;

  return {
    section,
    submenuItem,
    topic: topic ?? {
      id: topicId,
      titre: submenuItem?.label ?? topicId,
      intro: submenuItem?.description,
      articles: [],
    },
  };
}

export function getRessourcesSectionsForPage(sectionId) {
  if (!sectionId || sectionId === 'hub') return ressourcesSections;
  const section = getRessourcesSectionById(sectionId);
  return section ? [section] : ressourcesSections;
}

/** Toutes les URLs thématiques (sitemap, tests) */
export function getAllRessourcesTopicPaths() {
  return ressourcesSections.flatMap((section) =>
    section.submenu.map((item) => ({
      sectionId: section.id,
      topicId: item.id,
      path: ressourcesTopicPath(section.id, item.id),
    })),
  );
}
