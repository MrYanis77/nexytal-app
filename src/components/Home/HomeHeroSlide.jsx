export default function HomeHeroSlide({ slide }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md">
        {slide.theme}
      </span>

      <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight text-white drop-shadow-md md:text-5xl lg:text-[3.25rem]">
        {slide.title}
        <br />
        <span className="text-white/95">{slide.titleHighlight}</span>
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/95 drop-shadow-sm md:text-lg">
        {slide.subtitle}
      </p>
    </div>
  );
}
