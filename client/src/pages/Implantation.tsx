import React from "react";
import Layout from "../components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Implantation() {
  const offices = [
    {
      city: "Paris",
      role: "Siège Social & Campus Île-de-France",
      address: "8 Avenue des Talents, 75008 Paris",
      phone: "+33 (0)1 80 88 61 02",
      email: "paris@nexytal.com",
      hours: "Lun - Ven : 8h30 - 18h30",
      color: "border-l-4 border-indigo-600"
    },
    {
      city: "Lyon",
      role: "Campus Rhône-Alpes",
      address: "42 Rue de la République, 69002 Lyon",
      phone: "+33 (0)4 72 00 12 34",
      email: "lyon@nexytal.com",
      hours: "Lun - Ven : 8h30 - 18h00",
      color: "border-l-4 border-purple-500"
    },
    {
      city: "Bordeaux",
      role: "Campus Nouvelle-Aquitaine",
      address: "15 Cours de l'Intendance, 33000 Bordeaux",
      phone: "+33 (0)5 56 00 56 78",
      email: "bordeaux@nexytal.com",
      hours: "Lun - Ven : 8h30 - 18h00",
      color: "border-l-4 border-emerald-500"
    },
    {
      city: "Nantes",
      role: "Campus Pays de la Loire",
      address: "3 Rue de Strasbourg, 44000 Nantes",
      phone: "+33 (0)2 40 00 90 12",
      email: "nantes@nexytal.com",
      hours: "Lun - Ven : 8h30 - 18h00",
      color: "border-l-4 border-blue-500"
    },
    {
      city: "Marseille",
      role: "Campus Provence-Alpes-Côte d'Azur",
      address: "58 Quai du Port, 13002 Marseille",
      phone: "+33 (0)4 91 00 34 56",
      email: "marseille@nexytal.com",
      hours: "Lun - Ven : 8h30 - 18h00",
      color: "border-l-4 border-rose-500"
    },
    {
      city: "Lille",
      role: "Campus Hauts-de-France",
      address: "12 Avenue de l'Opéra, 59000 Lille",
      phone: "+33 (0)3 20 00 78 90",
      email: "lille@nexytal.com",
      hours: "Lun - Ven : 8h30 - 18h00",
      color: "border-l-4 border-amber-500"
    }
  ];

  return (
    <Layout>
      {/* Page Header (ALT RH Inspired, Dark Blue Banner) */}
      <section className="bg-[#0B192C] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_120%,rgba(241,122,40,0.1),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-left">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-300">
              <span>Présence Nationale</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Nos Implantations
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Avec nos 6 campus régionaux et nos centres de formation agréés, nous assurons un accompagnement de proximité pour l'ensemble de nos clients nationaux.
            </p>
          </div>
        </div>
      </section>

      {/* Map and Office Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Office Cards */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#F17A28]">Nos Campus</h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Trouvez le centre NEXYTAL le plus proche de chez vous
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {offices.map((office, index) => (
                  <Card key={index} className={`bg-white border-none shadow-sm hover:shadow-md transition-shadow ${office.color} p-5 space-y-4 text-left`}>
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-slate-900">{office.city}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{office.role}</p>
                    </div>
                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <p className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-[#F17A28] transition-colors">{office.phone}</a>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-[#F17A28] transition-colors">{office.email}</a>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{office.hours}</span>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Map Placeholder / Regional info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-[#F17A28]/10 text-[#F17A28] rounded-xl w-fit border border-[#F17A28]/20">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">Une couverture nationale complète</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Grâce à notre maillage territorial, nos experts interviennent directement au sein de vos locaux pour vos projets d'audit (cybersécurité, organisationnel), d'accompagnement juridique et de conseil fiscal.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Nos campus accueillent vos collaborateurs pour l'ensemble de nos sessions de formation inter-entreprises dans des conditions d'apprentissage optimales (salles équipées, accès PMR, espaces de convivialité).
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Besoin d'une formation sur-mesure ?</p>
                  <p className="text-xs text-slate-300">Nous concevons des parcours de formation intra-entreprise sur l'ensemble du territoire français, adaptés à vos spécificités sectorielles.</p>
                  <Link href="/contact">
                    <Button className="w-full bg-[#F17A28] hover:bg-[#d66218] text-white font-bold rounded-md flex items-center justify-center space-x-2 group">
                      <span>Demander un devis intra-entreprise</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
