import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinksStatic, loadNavMegaData, getFullNavlinks, EXPERTISE_NAV_LABEL } from "../data/navlinks-static";
import { RESSOURCES_NAV_LABEL, ressourcesNavSubmenu } from "../data/ressources";
import RessourcesMegaMenu from "./Ressources/RessourcesMegaMenu";
import ResponsiveImage from "./ResponsiveImage";
// import { useAuth } from "../context/AuthContext";

function navFormationsCatalogActive(location) {
  if (location.pathname !== "/expertises") return { combined: false, navActive: false };
  const t = new URLSearchParams(location.search).get("type");
  const elearning = t === "elearning" || t === "courtes" || t === "courte";
  return { combined: !elearning, elearning, navActive: true };
}

function catalogScopeFromLocation(pathname, search) {
  if (pathname !== "/expertises") return "combined";
  const t = new URLSearchParams(search).get("type");
  const elearning = t === "elearning" || t === "courtes" || t === "courte";
  return elearning ? "elearning" : "combined";
}

function buildCombinedMegaRows(megaMenuCombinedDiplCertRows) {
  return megaMenuCombinedDiplCertRows.map((row) => ({
    ...row,
    rowKey:
      row.kind === "merged" ? `m:${row.id}` : row.kind === "diplomantes" ? `d:${row.id}` : `c:${row.id}`,
  }));
}

function firstCombinedRowKey(megaMenuCombinedDiplCertRows) {
  const r = megaMenuCombinedDiplCertRows[0];
  if (!r) return null;
  return r.kind === "merged" ? `m:${r.id}` : r.kind === "diplomantes" ? `d:${r.id}` : `c:${r.id}`;
}

function buildElearningMegaRows(megaMenuFormations) {
  return megaMenuFormations.elearning.map((c) => ({ ...c, rowKey: `e:${c.id}`, kind: "elearning" }));
}

// ── Mega Menu Formations ───────────────────────────────────────────────────────
function FormationsMegaMenu({ megaMenuFormations, megaMenuCombinedDiplCertRows, onMouseEnter, onMouseLeave, onClose }) {
  const location = useLocation();
  const [catalogScope, setCatalogScope] = useState(() =>
    catalogScopeFromLocation(location.pathname, location.search)
  );
  const variant = catalogScope === "combined" ? "combined" : "elearning";

  const [hoveredRowKey, setHoveredRowKey] = useState(() =>
    variant === "elearning"
      ? megaMenuFormations.elearning[0]
        ? `e:${megaMenuFormations.elearning[0].id}`
        : null
      : firstCombinedRowKey(megaMenuCombinedDiplCertRows)
  );

  useEffect(() => {
    setCatalogScope(catalogScopeFromLocation(location.pathname, location.search));
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (catalogScope === "elearning") {
      const first = megaMenuFormations.elearning[0];
      setHoveredRowKey(first ? `e:${first.id}` : null);
    } else {
      setHoveredRowKey(firstCombinedRowKey(megaMenuCombinedDiplCertRows));
    }
  }, [catalogScope, megaMenuCombinedDiplCertRows, megaMenuFormations.elearning]);

  const megaRows = variant === "elearning" ? buildElearningMegaRows(megaMenuFormations) : buildCombinedMegaRows(megaMenuCombinedDiplCertRows);
  const currentRow = megaRows.find((r) => r.rowKey === hoveredRowKey) || megaRows[0];

  const handleCatalogScopeChange = (scope) => {
    setCatalogScope(scope);
  };

  const ctaTo =
    variant === "elearning" ? "/expertises?type=elearning" : "/expertises";

  const ctaLabel =
    variant === "elearning"
      ? "Tout le catalogue E-Learning"
      : "Tout le catalogue diplômantes & certifiantes";

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-[3px] border-accent z-[99] overflow-hidden max-h-[min(520px,85vh)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col xl:flex-row max-h-[min(520px,85vh)]">

        {/* ── LEFT SIDEBAR ── */}
        <div className="w-full xl:w-72 bg-surface-soft border-b xl:border-b-0 xl:border-r border-border flex flex-col shrink-0 max-h-[40vh] xl:max-h-none">

          {/* Diplômantes & certifiantes | E-Learning */}
          <div className="p-4 border-b border-gray-100 shrink-0">
            <div className="flex gap-1 bg-gray-200/80 rounded-xl p-1">
              <button
                type="button"
                onClick={() => handleCatalogScopeChange("combined")}
                className={`flex-1 text-[10px] font-bold py-2 rounded-lg transition-all leading-tight ${catalogScope === "combined"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                Diplômantes & certifiantes
              </button>
              <button
                type="button"
                onClick={() => handleCatalogScopeChange("elearning")}
                className={`flex-1 text-[11px] font-bold py-2 rounded-lg transition-all ${catalogScope === "elearning"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                E-Learning
              </button>
            </div>
          </div>

          {/* Liste des catégories (diplômantes + certifiantes fusionnées, ou e-learning) */}
          <div className="flex-1 overflow-y-auto py-2">
            {megaRows.map((row) => (
              <button
                key={row.rowKey}
                type="button"
                onMouseEnter={() => setHoveredRowKey(row.rowKey)}
                onClick={() => setHoveredRowKey(row.rowKey)}
                className={`w-full flex items-center px-5 py-3 text-left text-sm font-bold transition-all border-l-[3px] ${hoveredRowKey === row.rowKey
                  ? "border-accent bg-accent/5 text-accent"
                  : "border-transparent text-primary hover:bg-gray-100 hover:text-accent"
                  }`}
              >
                <span className="truncate">{row.label}</span>
              </button>
            ))}
          </div>

          {/* CTA bas */}
          <div className="p-4 border-t border-gray-100 shrink-0">
            <Link
              to={ctaTo}
              onClick={onClose}
              className="flex items-center justify-between w-full px-4 py-3 bg-primary text-white rounded-xl text-xs font-bold no-underline hover:bg-primary/90 transition-colors"
            >
              <span>{ctaLabel}</span>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── RIGHT: détail catégorie ── */}
        {currentRow && (
          <div className="flex-1 flex flex-col overflow-hidden min-h-0 min-w-0">

            {/* Header catégorie avec image */}
            <div className="flex items-center gap-5 px-8 py-5 border-b border-gray-100 bg-white shrink-0">
              <div className="relative w-32 h-[72px] rounded-xl overflow-hidden shadow-md shrink-0">
                <ResponsiveImage
                  src={currentRow.image}
                  alt={currentRow.label}
                  sizes="128px"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-extrabold text-accent uppercase tracking-widest mb-0.5">
                  {currentRow.kind === "merged"
                    ? "Diplômantes & certifiantes"
                    : currentRow.kind === "diplomantes"
                      ? "Formation diplômante"
                      : currentRow.kind === "certifiantes"
                        ? "Formation certifiante"
                        : "E-Learning"}
                </p>
                <h3 className="font-heading font-extrabold text-primary text-lg uppercase tracking-wide truncate">
                  {currentRow.label}
                </h3>
                <Link
                  to={currentRow.href}
                  onClick={onClose}
                  className="text-[11px] text-accent font-semibold hover:underline no-underline"
                >
                  Voir toutes les formations de ce domaine →
                </Link>
              </div>
            </div>

            {/* Grille formations avec images + badge vidéo */}
            <div className="flex-1 overflow-y-auto p-4 xl:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
                {currentRow.formations.map((f, i) => (
                  <Link
                    key={i}
                    to={f.href}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-accent/40 hover:bg-orange-50/50 transition-all no-underline group"
                  >
                    <div className="relative w-14 h-11 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <ResponsiveImage
                        src={f.image}
                        alt=""
                        ariaHidden
                        sizes="56px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug flex-1">
                      {f.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GenericMegaMenu({ item, onMouseEnter, onMouseLeave }) {
  if (!item?.submenu?.length) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-[3px] border-accent z-[99]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-container-3xl mx-auto px-8 py-6">
        <p className="text-[10px] font-extrabold text-accent uppercase tracking-widest mb-4">
          {item.label}
        </p>

        <div className={`grid gap-4 ${item.submenu.length > 2 ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
          {item.submenu.map((sub) => (
            <Link
              key={sub.label}
              to={sub.href || "#"}
              className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-accent/40 hover:bg-orange-50/50 transition-all no-underline group"
            >
              {sub.image && (
                <div className="w-16 h-14 shrink-0 rounded-lg overflow-hidden">
                  <ResponsiveImage
                    src={sub.image}
                    alt=""
                    ariaHidden
                    sizes="64px"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-primary group-hover:text-accent transition-colors truncate">
                  {sub.label}
                </p>
                {sub.description && (
                  <p className="text-xs text-content-muted mt-0.5 line-clamp-2 leading-snug">
                    {sub.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Navbar principale ──────────────────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const [activeMegaLabel, setActiveMegaLabel] = useState(null);
  const [navlinks, setNavlinks] = useState(navlinksStatic);
  const [megaData, setMegaData] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();
  const formationsNav = navFormationsCatalogActive(location);

  const ensureMegaLoaded = useCallback(async () => {
    if (megaData) return megaData;
    const mega = await loadNavMegaData();
    setMegaData(mega);
    const full = await getFullNavlinks();
    setNavlinks(full);
    return mega;
  }, [megaData]);

  const toggleMobileMenu = async (item) => {
    if (item?.lazySubmenu) await ensureMegaLoaded();
    setOpenMobileMenus((prev) => ({ ...prev, [item.label]: !prev[item.label] }));
  };

  const openMega = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMegaLabel(label);
  };

  const handleMegaEnter = async (item) => {
    if (item.megaMenu || item.label === EXPERTISE_NAV_LABEL) await ensureMegaLoaded();
    openMega(item.label);
  };

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setActiveMegaLabel(null), 180);
  };

  const isHomePage = location.pathname === "/accueil" || location.pathname === "/";

  const navLinkClass = (item) => {
    const inactive = "text-black hover:text-primary";
    const hasMenu = item.submenu || item.megaMenu;
    if (hasMenu) {
      if (item.label === EXPERTISE_NAV_LABEL) {
        return formationsNav.navActive ? "text-accent" : inactive;
      }
      if (item.label === "Ressources" && location.pathname.startsWith("/ressources")) {
        return "text-accent";
      }
      if (item.href && item.href !== "/" && location.pathname.startsWith(item.href)) {
        return "text-accent";
      }
      return activeMegaLabel === item.label ? "text-accent" : inactive;
    }
    return item.href !== "/" && location.pathname.startsWith(item.href)
      ? "text-accent"
      : inactive;
  };

  const desktopNavItemClass =
    "text-[11px] xl:text-[12px] 2xl:text-nav min-[1536px]:text-nav-lg font-semibold transition-colors duration-200 font-heading flex items-center gap-0.5 whitespace-nowrap px-2 2xl:px-3 py-2";

  return (
    <nav
      className={`z-[100] w-full relative ${isHomePage ? "absolute top-0 left-0 bg-transparent" : "sticky top-0 bg-white/95 backdrop-blur-md border-b border-border"}`}
    >
      <div className="relative w-full max-w-[100vw] px-4 sm:px-6 xl:px-8 flex items-center h-[70px] xl:h-[80px] gap-3 xl:gap-4">

        {/* Logo */}
        <Link
          to="/"
          className={`relative z-[101] shrink-0 no-underline group flex items-center transition-opacity duration-200 ${isOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"}`}
        >
          <img
            src="/assets/logo_nexytal.png"
            alt="Logo Nexytal"
            fetchPriority="high"
            width={64}
            height={64}
            className={`h-10 sm:h-12 xl:h-14 w-auto max-h-14 object-contain transition-transform duration-300 group-hover:scale-105 ${isHomePage ? "bg-white/90 px-3 py-1.5 rounded-lg" : ""}`}
          />
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center">
          <div className="flex items-center justify-center gap-x-3 xl:gap-x-4 2xl:gap-x-5 min-[1536px]:gap-x-6">
            {navlinks.map((item) => {
              const hasMenu = item.submenu?.length > 0;
              if (hasMenu) {
                return (
                  <div
                    key={item.label}
                    className="flex items-center"
                    onMouseEnter={() => handleMegaEnter(item)}
                    onMouseLeave={scheduleMegaClose}
                  >
                    <Link
                      to={item.href}
                      className={`${desktopNavItemClass} no-underline ${navLinkClass(item)}`}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 2xl:w-3.5 2xl:h-3.5 fill-current opacity-50 transition-transform duration-200 shrink-0 ${activeMegaLabel === item.label ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        aria-hidden
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${desktopNavItemClass} no-underline ${navLinkClass(item)}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Menu mobile */}
        <div className="relative z-[101] ml-auto flex items-center gap-3 shrink-0 lg:hidden">
          {/* Auth desktop commenté
            {user ? (
              <div className="hidden sm:flex items-center gap-2">
                {isAdmin ? (
                  <Link
                    to="/admin"
                    className="text-xs sm:text-sm font-bold text-primary bg-accent hover:bg-accent-dark hover:text-white px-3 py-2 rounded-lg no-underline transition-colors"
                  >
                    Admin · {user.prenom}
                  </Link>
                ) : (
                  <Link
                    to="/mon-espace"
                    className="text-xs sm:text-sm font-bold text-primary bg-white hover:bg-gray-100 px-3 py-2 rounded-lg no-underline transition-colors"
                  >
                    {user.prenom}
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-xs sm:text-sm font-bold text-white hover:text-accent px-2 py-2 transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link to="/connexion" className="hidden sm:block btn-orange text-sm py-2.5 px-5 no-underline">
                Se connecter
              </Link>
            )}
            */}

          {!isOpen && (
            <button
              className="p-2 -mr-2 text-black"
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {activeMegaLabel === RESSOURCES_NAV_LABEL && (
        <RessourcesMegaMenu
          sections={ressourcesNavSubmenu}
          onMouseEnter={() => openMega(RESSOURCES_NAV_LABEL)}
          onMouseLeave={scheduleMegaClose}
        />
      )}

      {/*
      {activeMegaLabel === EXPERTISE_NAV_LABEL && megaData && (
        <FormationsMegaMenu
          megaMenuFormations={megaData.megaMenuFormations}
          megaMenuCombinedDiplCertRows={megaData.megaMenuCombinedDiplCertRows}
          onMouseEnter={() => openMega(EXPERTISE_NAV_LABEL)}
          onMouseLeave={scheduleMegaClose}
          onClose={() => setActiveMegaLabel(null)}
        />
      )}
      {activeMegaLabel && activeMegaLabel !== EXPERTISE_NAV_LABEL && (
        <GenericMegaMenu
          item={navlinks.find((n) => n.label === activeMegaLabel)}
          onMouseEnter={() => openMega(activeMegaLabel)}
          onMouseLeave={scheduleMegaClose}
        />
      )}
      */}

      {/* ── Menu Mobile ── */}
      <div
        className={`fixed inset-0 bg-primary z-[90] transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col overflow-y-auto overscroll-contain`}
      >
          <div className="flex items-center justify-between px-4 sm:px-6 min-h-[70px] border-b border-white/10 shrink-0">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="shrink-0 no-underline"
            >
              <img
                src="/assets/logo_nexytal.png"
                alt="Logo Nexytal"
                className="h-10 w-auto object-contain bg-white/95 px-3 py-1.5 rounded-lg"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white bg-white/5 px-3 py-2 rounded-lg transition-colors"
              aria-label="Fermer le menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-semibold uppercase hidden sm:inline">Fermer</span>
            </button>
          </div>

          <div className="flex flex-col gap-6 py-10 px-6">
            {navlinks.map((item) => (
              <div key={item.label} className="flex flex-col gap-4 text-left">
                <div className="flex items-center justify-between w-full">
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={() => !item.submenu?.length && setIsOpen(false)}
                      className={`text-xl font-bold font-heading no-underline flex-grow ${
                        item.label === EXPERTISE_NAV_LABEL
                          ? formationsNav.navActive
                            ? "text-accent"
                            : "text-white"
                          : item.label === RESSOURCES_NAV_LABEL &&
                              location.pathname.startsWith("/ressources")
                            ? "text-accent"
                            : location.pathname.startsWith(item.href) && item.href !== "/"
                              ? "text-accent"
                              : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-xl font-bold font-heading flex-grow text-white">{item.label}</span>
                  )}
                  {item.submenu?.length > 0 && (
                    <button
                      type="button"
                      onClick={() => toggleMobileMenu(item)}
                      className="p-2 text-white"
                      aria-label={`Ouvrir le sous-menu ${item.label}`}
                    >
                      <svg
                        className={`w-6 h-6 fill-current transition-transform ${openMobileMenus[item.label] ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        aria-hidden
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  )}
                </div>

                {item.submenu?.length > 0 && openMobileMenus[item.label] && (
                  <div className="flex flex-col gap-5 pl-4 border-l-2 border-accent/30">
                    {item.submenu.map((sub) => (
                      <div key={sub.label} className="flex flex-col gap-4">
                        <div className="flex items-center justify-between w-full">
                          <Link
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 text-lg font-semibold no-underline flex-grow"
                          >
                            {sub.label}
                          </Link>
                          {sub.submenu?.length > 0 && (
                            <button
                              type="button"
                              onClick={() => toggleMobileMenu({ label: sub.label })}
                              className="p-2 text-gray-400"
                              aria-label={`Ouvrir ${sub.label}`}
                            >
                              <svg
                                className={`w-5 h-5 fill-current transition-transform ${openMobileMenus[sub.label] ? "rotate-180" : ""}`}
                                viewBox="0 0 20 20"
                                aria-hidden
                              >
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                              </svg>
                            </button>
                          )}
                        </div>

                        {sub.submenu?.length > 0 && openMobileMenus[sub.label] && (
                          <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-600">
                            {sub.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 text-base no-underline hover:text-accent"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Auth mobile commenté
            <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-3">
              {user ? (
                <>
                  {isAdmin ? (
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className="bg-accent text-white text-center py-3 px-5 rounded-lg font-bold no-underline"
                    >
                      Tableau de bord admin ({user.prenom})
                    </Link>
                  ) : (
                    <Link
                      to="/mon-espace"
                      onClick={() => setIsOpen(false)}
                      className="bg-white text-primary text-center py-3 px-5 rounded-lg font-bold no-underline"
                    >
                      Mon espace ({user.prenom})
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="border border-white/30 text-white text-center py-3 px-5 rounded-lg font-bold"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/connexion"
                    onClick={() => setIsOpen(false)}
                    className="btn-orange text-center py-3 px-5 no-underline"
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/inscription"
                    onClick={() => setIsOpen(false)}
                    className="border border-white/30 text-white text-center py-3 px-5 rounded-lg font-bold no-underline"
                  >
                    Créer un compte
                  </Link>
                </>
              )}
            </div>
            */}
          </div>
        </div>
    </nav>
  );
}