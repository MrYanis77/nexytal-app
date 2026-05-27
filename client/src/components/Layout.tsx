import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ArrowRight, Shield, Brain, HeartPulse, Scale, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Le groupe", path: "/groupe" },
    { name: "Domaine d'expertise", path: "/expertises" },
    { name: "Ressources", path: "/ressources" },
    { name: "Implantation", path: "/implantation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-rose-500/20 selection:text-rose-900">
      {/* Top Utility Bar (Linking Talents Style - White & Slate) */}
      <div className="bg-slate-50 text-slate-600 text-xs py-2 px-4 border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-slate-700">NEXYTAL Groupe National</span>
            <span>Conseil, Recrutement & Accompagnement Stratégique</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+33180886102" className="flex items-center space-x-1 hover:text-[#c22d4a] transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5 text-[#c22d4a]" />
              <span>+33 (0)1 80 88 61 02</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Pure White */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo (NEXYTAL - Slate & Rose Accent) */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                  NEXY<span className="text-[#c22d4a]">TAL</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold text-left">
                  Cabinet de recrutement & conseil spécialisé
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link key={link.path} href={link.path}>
                  <div
                    className={`px-4 py-2 rounded-md text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#c22d4a] bg-rose-50/50"
                        : "text-slate-700 hover:text-[#c22d4a] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <Button className="bg-[#c22d4a] hover:bg-[#a1233c] text-white font-bold tracking-wide shadow-sm transition-all duration-300 px-6 py-5 rounded-md flex items-center space-x-2 group active:scale-95">
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-[#c22d4a] hover:bg-slate-50 focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <Link key={link.path} href={link.path}>
                    <div
                      onClick={() => setIsOpen(false)}
                      className={`py-3 px-4 rounded-md text-base font-bold transition-all duration-200 cursor-pointer text-left ${
                        isActive
                          ? "text-[#c22d4a] bg-rose-50"
                          : "text-slate-700 hover:text-[#c22d4a] hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <Link href="/contact">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-[#c22d4a] hover:bg-[#a1233c] text-white font-bold py-6 rounded-md flex items-center justify-center space-x-2"
                  >
                    <span>Nous contacter</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow bg-white">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Brand */}
            <div className="space-y-4 text-left">
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  NEXY<span className="text-[#c22d4a]">TAL</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                  NEXYTAL Groupe National
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                NEXYTAL Groupe accompagne les entreprises et les professionnels à travers ses pôles d'expertises nationaux en Conseil RH, Recrutement, Cybersécurité, Intelligence Artificielle, Accompagnement Juridique, Fiscalité et Santé.
              </p>
            </div>

            {/* Column 2: Expertises */}
            <div className="space-y-4 text-left">
              <h3 className="text-white font-bold text-base tracking-wide border-b border-slate-800 pb-2">
                Nos Domaines d'Expertise
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/expertises" className="hover:text-[#c22d4a] transition-colors flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span>NEXYTAL Coaching & IA</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expertises" className="hover:text-[#c22d4a] transition-colors flex items-center space-x-2">
                    <HeartPulse className="w-4 h-4 text-rose-400" />
                    <span>NEXYTAL Médical & Santé</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expertises" className="hover:text-[#c22d4a] transition-colors flex items-center space-x-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>NEXYTAL Recrutement & RH</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expertises" className="hover:text-[#c22d4a] transition-colors flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>NEXYTAL Cybersécurité & Tech</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expertises" className="hover:text-[#c22d4a] transition-colors flex items-center space-x-2">
                    <Scale className="w-4 h-4 text-indigo-400" />
                    <span>NEXYTAL Fiscal & Juridique</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Quick links */}
            <div className="space-y-4 text-left">
              <h3 className="text-white font-bold text-base tracking-wide border-b border-slate-800 pb-2">
                Ressources Utiles
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/ressources" className="hover:text-[#c22d4a] transition-colors">
                    Études Métiers & Rémunérations 2026
                  </Link>
                </li>
                <li>
                  <Link href="/ressources" className="hover:text-[#c22d4a] transition-colors">
                    Actualités du Recrutement & RH
                  </Link>
                </li>
                <li>
                  <Link href="/ressources" className="hover:text-[#c22d4a] transition-colors">
                    Guides de l'Intelligence Artificielle
                  </Link>
                </li>
                <li>
                  <Link href="/ressources" className="hover:text-[#c22d4a] transition-colors">
                    Fiches pratiques Cybersécurité
                  </Link>
                </li>
                <li>
                  <Link href="/groupe" className="hover:text-[#c22d4a] transition-colors">
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link href="/implantation" className="hover:text-[#c22d4a] transition-colors">
                    Nos implantations régionales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-4 text-left">
              <h3 className="text-white font-bold text-base tracking-wide border-b border-slate-800 pb-2">
                Siège Social
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                NEXYTAL Groupe SAS<br />
                8 Avenue des Talents<br />
                75008 Paris, France
              </p>
              <div className="pt-2 space-y-2 text-sm">
                <p className="flex items-center space-x-2">
                  <span className="text-slate-500">Tél :</span>
                  <a href="tel:+33180886102" className="text-white hover:text-[#c22d4a] transition-colors">
                    +33 (0)1 80 88 61 02
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-slate-500">Email :</span>
                  <a href="mailto:contact@nexytal.com" className="text-white hover:text-[#c22d4a] transition-colors">
                    contact@nexytal.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
            <div>
              <span>© {new Date().getFullYear()} NEXYTAL Groupe. Tous droits réservés.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-slate-300 transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
