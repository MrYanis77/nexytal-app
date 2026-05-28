import planFormation2026 from "./plan-formation-2026.json";
import financementCpfOpco from "./financement-cpf-opco.json";
import etudeRemuneration2026 from "./etude-remuneration-2026.json";
import barometreRh2026 from "./barometre-rh-2026.json";
import coachingDirigeants from "./coaching-dirigeants.json";
import leadershipTransformation from "./leadership-transformation.json";
import metiersMedicauxTension from "./metiers-medicaux-tension.json";
import recruterProfilMedical from "./recruter-profil-medical.json";
import sourcerFormateurExpert from "./sourcer-formateur-expert.json";
import evaluerFormateur from "./evaluer-formateur.json";
import guideEntretienCabinet from "./guide-entretien-cabinet.json";
import erreursRecrutement from "./erreurs-recrutement.json";

export interface Section {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface RessourceData {
  slug: string;
  pole: string;
  type: string;
  date: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  sections: Section[];
  keyPoints: string[];
}

const ressourcesMap: Record<string, RessourceData> = {
  "plan-formation-2026": planFormation2026 as RessourceData,
  "financement-cpf-opco": financementCpfOpco as RessourceData,
  "etude-remuneration-2026": etudeRemuneration2026 as RessourceData,
  "barometre-rh-2026": barometreRh2026 as RessourceData,
  "coaching-dirigeants": coachingDirigeants as RessourceData,
  "leadership-transformation": leadershipTransformation as RessourceData,
  "metiers-medicaux-tension": metiersMedicauxTension as RessourceData,
  "recruter-profil-medical": recruterProfilMedical as RessourceData,
  "sourcer-formateur-expert": sourcerFormateurExpert as RessourceData,
  "evaluer-formateur": evaluerFormateur as RessourceData,
  "guide-entretien-cabinet": guideEntretienCabinet as RessourceData,
  "erreurs-recrutement": erreursRecrutement as RessourceData,
};

export default ressourcesMap;
