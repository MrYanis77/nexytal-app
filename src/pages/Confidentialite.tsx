import React from "react";
import Layout from "../components/Layout";
import PageHeader from "@/components/PageHeader";

export default function Confidentialite() {
  return (
    <Layout>
      <PageHeader
        badge="Protection des données"
        title="Politique de confidentialité"
        description="NEXYTAL Groupe SAS s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles avec le plus grand soin."
      />

      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">

          <Block title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles collectées via ce site est :
            </p>
            <ul>
              <li><strong>Société :</strong> NEXYTAL Groupe SAS</li>
              <li><strong>Siège social :</strong> 4 Boulevard Michaēl Faraday, 77700 Serris, France</li>
              <li><strong>Contact DPO :</strong> contact@nexytal.com</li>
            </ul>
          </Block>

          <Block title="2. Données collectées">
            <p>Dans le cadre de son activité, NEXYTAL Groupe SAS est susceptible de collecter les données suivantes :</p>
            <ul>
              <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone</li>
              <li>Données professionnelles : entreprise, poste, secteur d'activité</li>
              <li>Données de navigation : adresse IP, pages visitées, durée de session (via cookies analytiques)</li>
              <li>Données de contact : messages envoyés via le formulaire de contact</li>
            </ul>
          </Block>

          <Block title="3. Finalités du traitement">
            <p>Les données collectées sont utilisées pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de renseignements</li>
              <li>Vous adresser des informations sur nos services (avec votre consentement)</li>
              <li>Améliorer nos services et l'expérience utilisateur sur notre site</li>
              <li>Respecter nos obligations légales et réglementaires</li>
              <li>Réaliser des statistiques d'audience anonymisées</li>
            </ul>
          </Block>

          <Block title="4. Base légale des traitements">
            <p>Les traitements reposent sur les bases légales suivantes :</p>
            <ul>
              <li><strong>Consentement :</strong> pour les communications marketing et les cookies non essentiels</li>
              <li><strong>Intérêt légitime :</strong> pour la gestion des demandes de contact et l'amélioration du service</li>
              <li><strong>Obligation légale :</strong> pour la conservation de certaines données comptables et juridiques</li>
            </ul>
          </Block>

          <Block title="5. Durée de conservation">
            <p>Vos données sont conservées pour les durées suivantes :</p>
            <ul>
              <li>Données de contact et prospects : 3 ans à compter du dernier contact</li>
              <li>Données clients : 5 ans à compter de la fin de la relation contractuelle</li>
              <li>Données de navigation : 13 mois maximum</li>
              <li>Candidatures : 2 ans à compter de la réception du CV</li>
            </ul>
          </Block>

          <Block title="6. Vos droits">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer à certains traitements</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>contact@nexytal.com</strong>. Vous pouvez également adresser une réclamation à la <strong>CNIL</strong> (cnil.fr) si vous estimez que vos droits ne sont pas respectés.
            </p>
          </Block>

          <Block title="7. Partage des données">
            <p>
              Vos données ne sont pas vendues à des tiers. Elles peuvent être transmises à des sous-traitants techniques (hébergeur, outil CRM, outil d'emailing) agissant exclusivement sur instruction de NEXYTAL Groupe SAS et soumis à des obligations de confidentialité strictes.
            </p>
          </Block>

          <Block title="8. Cookies">
            <p>
              Notre site utilise des cookies analytiques (Umami, respectueux de la vie privée, sans transfert hors UE) pour mesurer l'audience. Ces cookies ne collectent pas de données personnellement identifiables. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </Block>

          <Block title="9. Sécurité">
            <p>
              NEXYTAL Groupe SAS met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction : connexion HTTPS, accès restreints, mises à jour régulières des systèmes.
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
