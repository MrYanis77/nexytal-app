import React from "react";
import Layout from "../components/Layout";
import PageHeader from "@/components/PageHeader";

export default function ConditionsGenerales() {
  return (
    <Layout>
      <PageHeader
        badge="Conditions d'utilisation"
        title="Conditions générales d'utilisation"
        description="Les présentes CGU définissent les règles d'utilisation du site nexytal.com et des services proposés par NEXYTAL Groupe SAS."
      />

      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">

          <Block title="1. Objet">
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site internet <strong>nexytal.com</strong> (ci-après « le Site »), édité par NEXYTAL Groupe SAS. L'accès et l'utilisation du Site impliquent l'acceptation sans réserve des présentes CGU.
            </p>
          </Block>

          <Block title="2. Accès au site">
            <p>
              Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. NEXYTAL Groupe SAS se réserve le droit de modifier, interrompre ou suspendre l'accès au Site à tout moment, sans préavis, notamment pour des raisons de maintenance, de mise à jour ou de force majeure.
            </p>
            <p>
              NEXYTAL Groupe SAS ne saurait être tenue responsable des interruptions temporaires d'accès au Site liées à des causes techniques indépendantes de sa volonté.
            </p>
          </Block>

          <Block title="3. Services proposés">
            <p>Le Site présente les activités et services de NEXYTAL Groupe SAS, notamment :</p>
            <ul>
              <li>Formation professionnelle (intra/inter-entreprises, certifiants)</li>
              <li>Conseil et accompagnement RH (audit, marque employeur, GPEC)</li>
              <li>Coaching de dirigeants et de managers</li>
              <li>Recrutement de profils médicaux et paramédicaux</li>
              <li>Sourcing et recrutement de formateurs experts</li>
              <li>Recrutement de talents tous secteurs</li>
            </ul>
            <p>
              Les informations présentées sur le Site ont un caractère indicatif et ne constituent pas une offre contractuelle ferme.
            </p>
          </Block>

          <Block title="4. Utilisation du site">
            <p>L'utilisateur s'engage à utiliser le Site de manière licite et à ne pas :</p>
            <ul>
              <li>Tenter d'accéder de manière non autorisée à des zones restreintes du Site</li>
              <li>Diffuser des contenus illicites, diffamatoires ou portant atteinte aux droits de tiers</li>
              <li>Utiliser des robots, scripts ou outils automatisés pour extraire des données du Site</li>
              <li>Perturber le bon fonctionnement du Site ou de ses infrastructures</li>
              <li>Usurper l'identité d'un tiers ou de NEXYTAL Groupe SAS</li>
            </ul>
          </Block>

          <Block title="5. Propriété intellectuelle">
            <p>
              L'ensemble des éléments du Site (textes, images, logos, charte graphique, structure) sont la propriété exclusive de NEXYTAL Groupe SAS et sont protégés par le droit français de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation expresse et écrite de NEXYTAL Groupe SAS est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </Block>

          <Block title="6. Ressources et contenus éditoriaux">
            <p>
              Les guides, études, interviews et ressources publiées sur le Site sont fournis à titre informatif. Ils reflètent l'expertise des consultants NEXYTAL Groupe SAS au moment de leur rédaction. NEXYTAL Groupe SAS ne garantit pas l'exhaustivité ni l'exactitude de ces informations et décline toute responsabilité quant à leur utilisation.
            </p>
          </Block>

          <Block title="7. Formulaires et données personnelles">
            <p>
              Les données collectées via les formulaires du Site (contact, inscription newsletter) sont traitées conformément à notre <a href="/confidentialite" className="underline" style={{ color: "var(--brand)" }}>politique de confidentialité</a>. Aucune donnée n'est transmise à des tiers sans votre consentement préalable.
            </p>
          </Block>

          <Block title="8. Limitation de responsabilité">
            <p>
              NEXYTAL Groupe SAS s'efforce de maintenir le Site accessible et à jour. Cependant, elle ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du Site, d'une interruption de service, d'erreurs ou d'omissions dans les contenus, ou de l'impossibilité d'accéder au Site.
            </p>
          </Block>

          <Block title="9. Liens hypertextes">
            <p>
              Le Site peut contenir des liens vers des sites tiers. NEXYTAL Groupe SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité.
            </p>
            <p>
              Tout lien vers le Site nexytal.com doit faire l'objet d'une autorisation préalable écrite de NEXYTAL Groupe SAS.
            </p>
          </Block>

          <Block title="10. Modification des CGU">
            <p>
              NEXYTAL Groupe SAS se réserve le droit de modifier les présentes CGU à tout moment. Les nouvelles CGU seront publiées sur le Site et prendront effet dès leur mise en ligne. Il appartient à l'utilisateur de les consulter régulièrement.
            </p>
          </Block>

          <Block title="11. Droit applicable et juridiction compétente">
            <p>
              Les présentes CGU sont régies par le droit français. En cas de litige relatif à leur interprétation ou à leur exécution, et à défaut d'accord amiable, les tribunaux compétents du ressort du siège social de NEXYTAL Groupe SAS seront seuls compétents.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Dernière mise à jour : Mai 2026</p>
          </Block>

        </div>
      </section>
    </Layout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-black text-slate-900 tracking-tight border-b pb-3" style={{ borderColor: "var(--border-light)" }}>
        {title}
      </h2>
      <div className="space-y-3 text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {children}
      </div>
    </div>
  );
}
