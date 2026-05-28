import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Expertise {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  image: string;
  overlayClass: string;
  badgeBg: string;
}

interface ExpertiseGridProps {
  expertises: Expertise[];
  gridCols?: "1" | "2" | "3";
}

export default function ExpertiseGrid({ expertises, gridCols = "2" }: ExpertiseGridProps) {
  const gridClass = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 lg:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  }[gridCols];

  return (
    <div className={`grid ${gridClass} gap-10`}>
      {expertises.map((exp) => (
        <div
          key={exp.id}
          className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-row h-[280px] md:h-[300px] text-left group"
        >
          {/* Image de fond globale s'étendant sur TOUTE la carte */}
          <div className="absolute inset-0 z-0">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Overlay de couleur CLAIRE, lumineuse et vibrante par-dessus (pas sombre) */}
          <div className={`absolute inset-0 z-10 ${exp.overlayClass} transition-opacity duration-300`}></div>

          {/* Left Column: Content & Text (60% width) - Positioned above background & overlay */}
          <div className="w-[58%] md:w-[62%] p-6 md:p-8 flex flex-col justify-between relative z-20">
            <div className="space-y-3">
              {/* Badge style */}
              <div className={`rounded-xl p-3 w-fit ${exp.badgeBg} border border-white/10 backdrop-blur-sm`}>
                <p className="text-[10px] font-black tracking-wider text-white uppercase opacity-95 leading-tight">
                  {exp.subtitle}
                </p>
                <p className="text-lg md:text-xl font-black text-white mt-1">
                  {exp.year}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight">
                {exp.title}
              </h3>
            </div>

            {/* Short description */}
            <p className="text-xs text-white/90 line-clamp-3 leading-relaxed font-semibold">
              {exp.description}
            </p>

            {/* CTA Link */}
            <div className="pt-2">
              <Link href="/expertises">
                <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-white hover:opacity-90 cursor-pointer group/link">
                  <span>Découvrir le pôle</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual area (42% width) - Keeps spacing to let professional visual show clearly */}
          <div className="w-[42%] md:w-[38%] relative h-full shrink-0 z-20 pointer-events-none">
            {/* Empty block to preserve right-side composition, image is already in the absolute background */}
          </div>
        </div>
      ))}
    </div>
  );
}
