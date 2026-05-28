import React from "react";

interface SectionIntroProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionIntro({
  badge,
  title,
  description,
  className = "",
  align = "center",
}: SectionIntroProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl space-y-4 ${alignClass} ${className}`}>
      <span className="badge-brand">
        {badge}
      </span>
      <h2 className="text-2xl md:text-4xl font-black tracking-tight"
        style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      <p className="text-base font-medium"
        style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    </div>
  );
}
