import React, { useState } from "react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  videoUrl?: string;
}

export default function PageHeader({ badge, title, description, videoUrl }: PageHeaderProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const hasVideo = Boolean(videoUrl) && !videoFailed;

  return (
    <section
      className="border-b py-20 md:py-28 relative overflow-hidden text-left"
      style={{
        backgroundColor: hasVideo ? "transparent" : "var(--surface)",
        borderColor: "var(--border-light)",
        minHeight: hasVideo ? "320px" : undefined,
      }}
    >
      {Boolean(videoUrl) && !videoFailed && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right, rgba(3,7,18,0.82) 0%, rgba(3,7,18,0.65) 55%, rgba(3,7,18,0.35) 100%)",
            }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="space-y-4 max-w-3xl">
          <span
            className="badge-brand"
            style={
              hasVideo
                ? { backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }
                : undefined
            }
          >
            {badge}
          </span>
          <h1
            className="text-3xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: hasVideo ? "white" : "var(--text-primary)" }}
          >
            {title}
          </h1>
          <p
            className="text-base md:text-lg font-medium leading-relaxed"
            style={{ color: hasVideo ? "rgba(255,255,255,0.78)" : "var(--text-secondary)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
