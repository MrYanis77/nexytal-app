import React from "react";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

interface Expertise {
  id: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  cardGradient: string;
  image: string;
}

interface ExpertiseCardProps {
  expertise: Expertise;
  ctaPath: string;
  ctaLabel: string;
}

export default function ExpertiseCard({ expertise: exp, ctaPath, ctaLabel }: ExpertiseCardProps) {
  const [, navigate] = useLocation();

  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    const hashIndex = ctaPath.indexOf("#");
    if (hashIndex !== -1) {
      const path = ctaPath.slice(0, hashIndex);
      const hash = ctaPath.slice(hashIndex + 1);
      navigate(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    } else {
      navigate(ctaPath);
    }
  };

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-row h-[280px] md:h-[300px] group"
      style={{ background: exp.cardGradient }}
    >
      {/* Left — transparent panel (inherits parent gradient), 60% */}
      <div className="w-[60%] p-6 md:p-8 flex flex-col justify-between shrink-0 text-center">
        <div className="space-y-3">
          <div className="rounded-xl px-3 py-2 w-full bg-white/15 border border-white/10 backdrop-blur-sm">
            <p className="text-xs font-black tracking-wider text-white uppercase opacity-95 leading-tight">
              {exp.subtitle}
            </p>
          </div>
          <h3 className="font-black text-white leading-tight tracking-tight">
            <span className="block text-sm md:text-base opacity-90 tracking-widest">{exp.titleLine1}</span>
            <span className="block text-xl md:text-2xl">{exp.titleLine2}</span>
          </h3>
        </div>

        <p className="text-xs text-white/90 line-clamp-3 leading-relaxed font-semibold">
          {exp.description}
        </p>

        <div className="flex justify-center pt-2">
          <a href={ctaPath} onClick={handleCta} className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-white hover:opacity-90 cursor-pointer group/link">
            <span>{ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Right — image blended with parent gradient via luminosity */}
      <div className="w-[40%] relative overflow-hidden" style={{ mixBlendMode: "luminosity" }}>
        <img
          src={exp.image}
          alt={`${exp.titleLine1} ${exp.titleLine2}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
      </div>
    </div>
  );
}
