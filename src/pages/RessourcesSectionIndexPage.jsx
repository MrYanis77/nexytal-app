import Hero from '../components/Hero/Hero';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';
import RessourcesSectionNav from '../components/Ressources/RessourcesSectionNav';
import RessourcesTopicCard from '../components/Ressources/RessourcesTopicCard';
import { ressourcesHub, getRessourcesSectionById } from '../data/ressources';

/** Page rubrique — liste des thématiques d'une section */
export default function RessourcesSectionIndexPage({ sectionId }) {
  const section = getRessourcesSectionById(sectionId);

  if (!section) return null;

  return (
    <div className="min-h-screen bg-surface-soft antialiased">
      <Hero
        title={section.titre}
        subtitle={section.description}
        video={ressourcesHub.hero.video}
        compact
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/accueil' },
          { label: 'Ressources', to: '/ressources' },
          { label: section.titre },
        ]}
      />

      <div className="mx-auto max-w-container-3xl px-6 py-12 md:py-16">
        <RessourcesSectionNav section={section} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.submenu.map((item) => {
            const topic = section.topics?.find((t) => t.id === item.id);
            return (
              <RessourcesTopicCard
                key={item.id}
                sectionId={section.id}
                item={item}
                topic={topic}
              />
            );
          })}
        </div>
      </div>

      <CallToAction
        variante="sombre"
        titre="Besoin d'accompagnement ?"
        sousTitre="Nos équipes Nexytal vous conseillent sur le recrutement, les expertises et le développement des compétences."
        texteBouton="NOUS CONTACTER"
        lienBouton="/contact"
      />
    </div>
  );
}
