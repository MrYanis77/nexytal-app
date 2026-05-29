/**
 * Données page d'accueil Nexytal
 */

export const heroSlides = [
  {
    id: 'informatique',
    theme: 'Informatique',
    title: 'Construisez votre avenir',
    titleHighlight: 'dans le numérique',
    subtitle:
      'Expertises diplômantes et certifiantes en développement, cybersécurité, réseaux et intelligence artificielle.',
    video: '/assets/video/formations/informatique.mp4',
  },
  {
    id: 'consulting',
    theme: 'Consulting',
    title: 'Accompagnez la transformation',
    titleHighlight: 'de votre entreprise',
    subtitle:
      'Conseil, audit et montée en compétences sur mesure pour les organisations et les professionnels.',
    video: '/assets/video/entreprise.mp4',
  },
  {
    id: 'medicale',
    theme: 'Médical',
    title: 'Développez votre expertise',
    titleHighlight: 'dans le secteur médical',
    subtitle:
      'Parcours professionnalisants pour les assistantes médico-administratives et les équipes de santé.',
    video: '/assets/video/formations/administration.mp4',
  },
  {
    id: 'recrutement',
    theme: 'Recrutement',
    title: 'Trouvez votre voie',
    titleHighlight: 'avec Nexytal',
    subtitle:
      'Accompagnement RH, coaching emploi et recrutement spécialisé pour les candidats et les entreprises.',
    video: '/assets/video/carriere.mp4',
  },
];

export const expertises = [
  {
    title: 'Nexytal Coaching',
    image: '/assets/images/comptable2.jpg',
    theme: 'coaching',
    href: '/expertises',
  },
  {
    title: 'Nexytal Médical',
    image: '/assets/images/secretaire_4.jpg',
    theme: 'medical',
    href: '/expertises',
  },
  {
    title: 'Nexytal Recrutement',
    image: '/assets/images/rejoindre.jpg',
    theme: 'recrutement',
    href: '/carrieres',
  },
  {
    title: 'Nexytal Trainers',
    image: '/assets/images/entreprise.jpg',
    theme: 'trainers',
    href: '/expertises',
  },
  {
    title: 'Nexytal RH',
    image: '/assets/images/secretaire_5.jpg',
    theme: 'rh',
    href: '/expertise/formations-assistante-ressources-humaines',
  },
];

/** @deprecated Utiliser expertises */
export const formationsDiplomantes = expertises;
