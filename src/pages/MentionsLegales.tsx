import React from "react";
import Layout from "../components/Layout";
import PageHeader from "@/components/PageHeader";

export default function MentionsLegales() {
  return (
    <Layout>
      <PageHeader
        badge="Informations légales"
        title="Mentions légales"
        description="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique."
      />

      <section className="py-16 md:py-24 bg-page">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">

          <Block title="1. Éditeur du site">
            <p>Le site <strong>nexytal.com</strong> est édité par la société :</p>
            <ul>
              <li><strong>Raison sociale :</strong> NEXYTAL Groupe SAS</li>
              <li><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
              <li><strong>Siège social :</strong> 4 Boulevard Michaēl Faraday, 77700 Serris, France</li>
              <li><strong>Téléphone :</strong> 01 60 43 94 30</li>
              <li><strong>Email :</strong> contact@nexytal.com</li>
              <li><strong>Directeur de la publication :</strong> Le Président de NEXYTAL Groupe SAS</li>
            </ul>
          </Block>

          <Block title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <ul>
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>
          </Block>

          <Block title="3. Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de NEXYTAL Groupe SAS ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation, totale ou partielle, de ces contenus est strictement interdite sans l'autorisation écrite préalable de NEXYTAL Groupe SAS.
            </p>
          </Block>

          <Block title="4. Responsabilité">
            <p>
              NEXYTAL Groupe SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site. En conséquence, NEXYTAL Groupe SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
            <p>
              Les liens hypertextes présents sur ce site peuvent renvoyer vers des sites tiers. NEXYTAL Groupe SAS ne saurait être tenue responsable du contenu de ces sites.
            </p>
          </Block>

          <Block title="5. Données personnelles">
            <p>
              Les informations collectées sur ce site font l'objet d'un traitement informatique destiné à NEXYTAL Groupe SAS. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : <strong>contact@nexytal.com</strong>.
            </p>
            <p>
              Pour plus d'informations, consultez notre <a href="/confidentialite" className="underline" style={{ color: "var(--brand)" }}>politique de confidentialité</a>.
            </p>
          </Block>

          <Block title="6. Cookies">
            <p>
              Ce site est susceptible d'utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Vous pouvez paramétrer votre navigateur pour refuser les cookies. Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services.
            </p>
          </Block>

          <Block title="7. Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
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
