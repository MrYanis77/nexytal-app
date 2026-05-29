import Hero from '../components/Hero/Hero';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';
import RessourcesSectionCard from '../components/Ressources/RessourcesSectionCard';
import { ressourcesHub, ressourcesSections } from '../data/ressources';

/** Page d'accueil Ressources — vue synthétique des rubriques */
export default function RessourcesSummaryPage() {
  return (
    <div className="min-h-screen bg-surface-soft antialiased">
      <Hero
        title={ressourcesHub.hero.titre}
        subtitle={ressourcesHub.hero.sousTitre}
        video={ressourcesHub.hero.video}
        compact
      />

      <Breadcrumb items={[{ label: 'Accueil', to: '/accueil' }, { label: 'Ressources' }]} />

      <section className="border-b border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-container-3xl px-6 text-center">
          <p className="mx-auto max-w-3xl font-body text-base leading-relaxed text-content-muted md:text-lg">
            {ressourcesHub.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-container-3xl px-6 py-12 md:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-primary md:text-3xl">
            Nos rubriques
          </h2>
          <p className="mt-2 font-body text-sm text-content-muted md:text-base">
            Choisissez une thématique pour accéder à nos contenus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ressourcesSections.map((section) => (
            <RessourcesSectionCard key={section.id} section={section} />
          ))}
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
