import React, { useMemo, useState } from 'react';
import { campus, hero, getCampusGalleryImages } from '../data/campus';
import CardFormation from '../components/Card/CardFormation';
import Breadcrumb from '../components/Breadcrumb';
import Hero from '../components/Hero/Hero';
import CampusImageLightbox from '../components/Campus/CampusImageLightbox';
import SEOHead from '../components/SEO/SEOHead';

export default function CampusPages() {
  const [lightboxCampusId, setLightboxCampusId] = useState(null);

  const activeCampus = useMemo(
    () => (lightboxCampusId ? campus.find((c) => c.id === lightboxCampusId) : null),
    [lightboxCampusId],
  );

  const galleryImages = useMemo(
    () => (activeCampus ? getCampusGalleryImages(activeCampus) : []),
    [activeCampus],
  );

  return (
    <div className="bg-surface min-h-screen">
      <SEOHead
        title="Implantations — Nos campus Nexytal en Île-de-France"
        description="Découvrez les implantations Nexytal en Île-de-France : Paris La Défense, Montévrain, Noisiel, Trappes, Cergy, Asnières, Créteil, Melun."
        canonical="https://nexytal.com/implantations"
      />

      <Hero
        title={hero.titre}
        subtitle={hero.sousTitre}
        video={hero.video}
        poster={hero.poster}
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: hero.titre },
        ]}
      />

      <section className="py-14 md:py-16 px-6 bg-surface-soft">
        <div className="max-w-container-xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-primary mb-4">
              {hero.sectionTitre}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {campus.map((item) => (
              <CardFormation
                key={item.id}
                title={item.nom}
                image={item.image}
                href="#"
                variant="white"
                compact
                dense
                hideButton
                mapsHref={item.mapLink}
                mapsButtonLabel={`Aller à ${item.nom}`}
                onImageClick={() => setLightboxCampusId(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <CampusImageLightbox
        open={Boolean(lightboxCampusId)}
        onClose={() => setLightboxCampusId(null)}
        title={activeCampus?.nom ?? ''}
        images={galleryImages}
        initialIndex={0}
      />
    </div>
  );
}
