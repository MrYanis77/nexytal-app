import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';
import RessourcesArticleRow from '../components/Ressources/RessourcesArticleRow';
import RessourcesSectionNav from '../components/Ressources/RessourcesSectionNav';
import { ressourcesHub, getRessourcesTopic, ressourcesSectionPath } from '../data/ressources';

export default function RessourcesTopicPage({ sectionId, topicId }) {
  const data = getRessourcesTopic(sectionId, topicId);

  if (!data) return null;

  const { section, topic, submenuItem } = data;
  const intro = topic.intro ?? submenuItem?.description ?? section.description;

  return (
    <div className="min-h-screen bg-surface-soft antialiased">
      <Hero title={topic.titre} subtitle={intro} video={ressourcesHub.hero.video} compact />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/accueil' },
          { label: 'Ressources', to: '/ressources' },
          { label: section.titre, to: ressourcesSectionPath(section.id) },
          { label: topic.titre },
        ]}
      />

      <div className="mx-auto max-w-container-3xl px-6 py-12 md:py-16">
        <RessourcesSectionNav section={section} activeTopicId={topicId} />

        {topic.articles?.length > 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white px-4 md:px-6">
            {topic.articles.map((article) => (
              <RessourcesArticleRow key={article.title} {...article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-100 bg-white px-6 py-12 text-center">
            <p className="font-body text-content-muted">
              Contenus à venir dans cette rubrique.{' '}
              <Link to="/contact" className="font-bold text-accent no-underline hover:underline">
                Contactez Nexytal
              </Link>{' '}
              pour en savoir plus.
            </p>
          </div>
        )}
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
