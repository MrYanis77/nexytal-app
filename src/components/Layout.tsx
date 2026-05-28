import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ArrowRight, Shield, Brain, HeartPulse, Scale, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import layoutData from "@/data/layout.json";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const iconMap = { Brain, HeartPulse, Users, Shield, Scale };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = layoutData.navigation.links;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--page-bg)", color: "var(--text-primary)" }}>

      {/* Top Utility Bar */}
      <div className="text-xs py-2 px-4 border-b hidden md:block"
        style={{ backgroundColor: "var(--topbar-bg)", borderColor: "var(--topbar-border)", color: "var(--text-secondary)" }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{layoutData.topBar.brand}</span>
            <span>{layoutData.topBar.tagline}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={layoutData.topBar.phoneHref}
              className="flex items-center space-x-1 font-semibold transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: "var(--brand)" }} />
              <span>{layoutData.topBar.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md shadow-md py-3" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled ? "var(--header-bg-scroll)" : "var(--header-bg)",
          borderBottom: scrolled ? `1px solid var(--header-border)` : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <img src="/assets/logo_nexytal.png" alt="Nexytal" className="h-20 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              const isResources = link.path === "/ressources";
              if (isResources) {
                return (
                  <div key={link.path} className="relative group">
                    <Link href={link.path}>
                      <div
                        className="px-4 py-2 rounded-md text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1"
                        style={{
                          color: isActive ? "var(--brand)" : "var(--text-primary)",
                          backgroundColor: isActive ? "var(--brand-light)" : "transparent",
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.color = "var(--brand)";
                            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          }
                        }}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </div>
                    </Link>
                    <div className="absolute left-1/2 top-full z-50 w-[860px] -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                      <div className="rounded-xl border bg-page shadow-xl p-5" style={{ borderColor: "var(--border-base)" }}>
                        <div className="grid grid-cols-3 gap-5">
                          {layoutData.navigation.resourcesMenu.columns.map((col) => (
                            <div key={col.title} className="space-y-2 rounded-lg p-3" style={{ backgroundColor: "var(--surface)", border: `1px solid var(--border-light)` }}>
                              <h4 className="text-sm font-extrabold uppercase tracking-wide" style={{ color: "var(--text-primary)" }}>{col.title}</h4>
                              <ul className="space-y-1 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                                {col.items.map((item) => (
                                  <li key={item.label}>
                                    <Link href={item.path}
                                      className="block transition-colors"
                                      style={{ color: "inherit" }}
                                      onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={link.path} href={link.path}>
                  <div
                    className="px-4 py-2 rounded-md text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer"
                    style={{
                      color: isActive ? "var(--brand)" : "var(--text-primary)",
                      backgroundColor: isActive ? "var(--brand-light)" : "transparent",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "var(--brand)";
                        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {link.name}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <Button className="text-white font-bold tracking-wide shadow-sm transition-all duration-300 px-6 py-5 rounded-md flex items-center space-x-2 group active:scale-95"
                style={{ backgroundColor: "var(--brand)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}
              >
                <span>{layoutData.navigation.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-page border-b shadow-xl py-4 px-6 animate-fadeIn"
            style={{ borderColor: "var(--border-light)" }}>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                const isResources = link.path === "/ressources";
                return (
                  <div key={link.path}>
                    <Link href={link.path}>
                      <div
                        onClick={() => setIsOpen(false)}
                        className="py-3 px-4 rounded-md text-base font-bold transition-all duration-200 cursor-pointer text-left flex items-center justify-between"
                        style={{
                          color: isActive ? "var(--brand)" : "var(--text-primary)",
                          backgroundColor: isActive ? "var(--brand-light)" : "transparent",
                        }}
                      >
                        <span>{link.name}</span>
                        {isResources ? <ChevronDown className="w-4 h-4" /> : null}
                      </div>
                    </Link>
                    {isResources ? (
                      <div className="pl-5 pr-4 py-2 space-y-3 border-l-2 ml-4" style={{ borderColor: "var(--border-light)" }}>
                        {layoutData.navigation.resourcesMenu.columns.map((col) => (
                          <div key={col.title} className="space-y-1">
                            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>{col.title}</p>
                            {col.items.map((item) => (
                              <Link key={item.label} href={item.path}>
                                <div onClick={() => setIsOpen(false)} className="text-sm transition-colors" style={{ color: "var(--text-secondary)" }}
                                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--brand)")}
                                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                                >
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <div className="pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <Link href="/contact">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full text-white font-bold py-6 rounded-md flex items-center justify-center space-x-2"
                    style={{ backgroundColor: "var(--brand)" }}
                  >
                    <span>{layoutData.navigation.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow" style={{ backgroundColor: "var(--page-bg)" }}>{children}</main>

      {/* Footer */}
      <footer className="border-t" style={{ backgroundColor: "var(--footer-bg)", color: "var(--footer-text)", borderColor: "var(--footer-border)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1: Brand */}
            <div className="space-y-4 text-left">
              <div className="flex flex-col">
                <img src="/assets/logo_nexytal.png" alt="Nexytal" className="h-18 w-auto object-contain" />
                <span className="text-[9px] uppercase tracking-widest font-bold mt-1" style={{ color: "var(--footer-muted)" }}>
                  {layoutData.footer.logoSubline}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--footer-muted)" }}>
                {layoutData.footer.description}
              </p>
            </div>

            {/* Column 2: Expertises */}
            <div className="space-y-4 text-left">
              <h3 className="text-white font-bold text-base tracking-wide pb-2" style={{ borderBottom: `1px solid var(--footer-border)` }}>
                {layoutData.footer.expertisesTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {layoutData.footer.expertisesLinks.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  return (
                    <li key={item.label}>
                      <a href={item.path}
                        className="flex items-center space-x-2 transition-colors"
                        style={{ color: "var(--footer-text)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--footer-text)")}
                      >
                        {Icon ? <Icon className={`w-4 h-4 ${item.iconClass}`} /> : null}
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4 text-left">
              <h3 className="text-white font-bold text-base tracking-wide pb-2" style={{ borderBottom: `1px solid var(--footer-border)` }}>
                {layoutData.footer.resourcesTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {layoutData.footer.resourcesLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.path}
                      className="transition-colors"
                      style={{ color: "var(--footer-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--footer-muted)")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-4 text-left">
              <h3 className="text-white font-bold text-base tracking-wide pb-2" style={{ borderBottom: `1px solid var(--footer-border)` }}>
                {layoutData.footer.contactTitle}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--footer-muted)" }}>
                {layoutData.footer.companyName}<br />
                {layoutData.footer.addressLine1}<br />
                {layoutData.footer.addressLine2}
              </p>
              <div className="pt-2 space-y-2 text-sm">
                <p className="flex items-center space-x-2">
                  <span style={{ color: "var(--footer-muted)" }}>{layoutData.footer.phoneLabel}</span>
                  <a href={layoutData.footer.phoneHref} className="text-white transition-colors"
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "white")}
                  >
                    {layoutData.footer.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span style={{ color: "var(--footer-muted)" }}>{layoutData.footer.emailLabel}</span>
                  <a href={layoutData.footer.emailHref} className="text-white transition-colors"
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "white")}
                  >
                    {layoutData.footer.emailDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs space-y-4 sm:space-y-0"
            style={{ borderTop: `1px solid var(--footer-border)`, color: "var(--footer-muted)" }}>
            <span>© {new Date().getFullYear()} {layoutData.footer.copyrightSuffix}</span>
            <div className="flex space-x-6">
              {layoutData.footer.legalLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition-colors hover:text-slate-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
