/**
 * Page Domaines d'expertise — grille Nexytal (sans catalogue formations).
 * E-Learning : /expertises?type=elearning
 */
import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';
import HomeExpertiseCard from '../components/Home/HomeExpertiseCard';
import CatalogueFormationsPage from '../components/CatalogueFormationsPage';
import { catalogueCourtes, hero } from '../data/formations';
import { expertises } from '../data/nexytal-home';
import { hero as heroElearning } from '../data/elearning';
import { normalizeCatalogType } from '../data/formationsCatalogTypes';
import {
  Code,
  Users,
  Container,
  Cpu,
  Shield,
  Monitor,
  FileSpreadsheet,
} from 'lucide-react';

const categoryIconsElearning = {
  cybersecurite: <Shield className="w-6 h-6" />,
  'digital-developpement': <Code className="w-6 h-6" />,
  management: <Users className="w-6 h-6" />,
  'devops-devsecops': <Container className="w-6 h-6" />,
  'informatique-systemes-reseaux': <Monitor className="w-6 h-6" />,
  'systemes-embarques-iot': <Cpu className="w-6 h-6" />,
  bureautique: <FileSpreadsheet className="w-6 h-6" />,
};

const PAGE_HERO = {
  titre: "Domaines d'expertise",
  sousTitre:
    'Consulting, médical, recrutement, trainers et RH : découvrez les pôles Nexytal.',
  video: hero.video,
};

const PAGE_CTA = {
  titre: "Besoin d'orientation ?",
  sousTitre:
    'Nos conseillers vous accompagnent pour choisir le parcours adapté à vos objectifs.',
  bouton: 'NOUS CONTACTER',
  lien: '/contact',
};

export default function FormationsCatalogueHub() {
  const [searchParams] = useSearchParams();
  const isElearning = normalizeCatalogType(searchParams.get('type')) === 'elearning';

  const elearningBundle = useMemo(
    () => ({
      hero: heroElearning,
      breadcrumb: 'E-Learning',
      catalogue: catalogueCourtes,
      categoryIcons: categoryIconsElearning,
      cardTypeBadge: 'E-Learning',
      cta: {
        titre: 'Une formation sur mesure ?',
        sousTitre:
          'Nos conseillers peuvent adapter le contenu et le planning de toute formation courte à votre équipe ou vos besoins spécifiques.',
        bouton: 'NOUS CONTACTER',
        lien: '/contact',
      },
    }),
    []
  );

  const elearningAfterBreadcrumb = (
    <section className="bg-surface border-b border-gray-100">
      <div className="max-w-container-3xl mx-auto px-6 py-4">
        <Link
          to="/expertises"
          className="text-sm font-bold text-accent hover:underline no-underline inline-flex items-center gap-1"
        >
          ← Domaines d'expertise
        </Link>
      </div>
    </section>
  );

  if (isElearning) {
    return (
      <CatalogueFormationsPage
        key="elearning"
        hero={elearningBundle.hero}
        breadcrumb={elearningBundle.breadcrumb}
        catalogue={elearningBundle.catalogue}
        categoryIcons={elearningBundle.categoryIcons}
        cta={elearningBundle.cta}
        crossLinks={[]}
        afterBreadcrumbSlot={elearningAfterBreadcrumb}
        cardTypeBadge={elearningBundle.cardTypeBadge}
      />
    );
  }

  return (
    <div className="bg-surface min-h-screen antialiased">
      <Hero title={PAGE_HERO.titre} subtitle={PAGE_HERO.sousTitre} video={PAGE_HERO.video} />

      <Breadcrumb items={[{ label: 'Accueil', to: '/accueil' }, { label: "Domaine d'expertise" }]} />

      <section className="mx-auto max-w-container-2xl px-6 pb-16 pt-12 md:pt-16">
        <div className="mb-10 flex items-start gap-4">
          <img
            src="/assets/logo_nexytal.png"
            alt=""
            aria-hidden
            className="mt-1 h-10 w-auto shrink-0 object-contain md:h-12"
          />
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Nos Expertises
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {expertises.map((item) => (
            <HomeExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <CallToAction
        variante="sombre"
        titre={PAGE_CTA.titre}
        sousTitre={PAGE_CTA.sousTitre}
        texteBouton={PAGE_CTA.bouton}
        lienBouton={PAGE_CTA.lien}
      />
    </div>
  );
}
