import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    pole: "Recrutements",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires (*).");
      return;
    }
    
    // Simulate API call
    setSubmitted(true);
    toast.success("Votre message a été envoyé avec succès !", {
      description: "Un conseiller de NEXYTAL Groupe vous recontactera sous 24 heures.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      {/* Page Header - Pure White, Minimal */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-20 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c22d4a] bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full">
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Contactez NEXYTAL Groupe
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              Une question ? Un projet de recrutement ou d'accompagnement ? Nos équipes de consultants régionaux sont à votre entière disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Form and Info Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7">
              <Card className="border border-slate-100 shadow-sm bg-slate-50 p-6 md:p-8 text-left">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nom complet *</label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Adresse email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder="jean.dupont@entreprise.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Téléphone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder="+33 (0)6 12 34 56 78"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Entreprise / Organisation</label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder="Ma Société SAS"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Pôle d'intérêt principal</label>
                      <select
                        value={formData.pole}
                        onChange={(e) => setFormData({ ...formData, pole: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:bg-white rounded-md text-sm font-medium p-3 focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Formations">NEXYTAL Formations (Formation Professionnelle)</option>
                        <option value="RH">NEXYTAL RH (Ressources Humaines)</option>
                        <option value="Coaching">NEXYTAL Coaching (Leadership & Performance)</option>
                        <option value="Médicale">NEXYTAL Médicale (Santé & Médical)</option>
                        <option value="Trainer">NEXYTAL Trainer (Training & Delivery)</option>
                        <option value="Recrutements">NEXYTAL Recrutements (Talent Acquisition)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Votre message *</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white border-slate-200 focus:bg-white rounded-md"
                        placeholder="Décrivez brièvement votre projet ou votre demande..."
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-[#c22d4a] hover:bg-[#a1233c] text-white font-bold py-6 rounded-md flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <span>Envoyer ma demande</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-6 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">Merci pour votre message !</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
                        Votre demande a bien été transmise à notre équipe. Un conseiller spécialisé du pôle <strong>NEXYTAL {formData.pole}</strong> prendra contact avec vous sous 24 heures (jours ouvrés).
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", pole: "Recrutements", message: "" });
                      }}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#c22d4a]">Nos Coordonnées</h2>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Restons en contact
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  Que vous soyez une entreprise cherchant à recruter ses futurs cadres dirigeants, un établissement de santé en quête d'audit organisationnel ou un dirigeant souhaitant sécuriser ses infrastructures numériques, nous avons une réponse adaptée.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-600 rounded-xl border border-indigo-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Siège Social</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                      NEXYTAL Groupe SAS<br />
                      8 Avenue des Talents, 75008 Paris
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl border border-emerald-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Téléphone</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href="tel:+33180886102" className="hover:text-[#c22d4a] transition-colors font-bold text-slate-900">+33 (0)1 80 88 61 02</a>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">Appel non surtaxé, Lun - Ven : 8h30 - 18h30</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl border border-amber-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href="mailto:contact@nexytal.com" className="hover:text-[#c22d4a] transition-colors font-bold text-slate-900">contact@nexytal.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center space-x-2 text-[#c22d4a]">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold text-xs uppercase tracking-wide">Support Réactif</span>
                </div>
                <h4 className="font-bold text-sm">Garantie de réponse sous 24h</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Toutes les demandes formulées via ce formulaire sont automatiquement routées vers le directeur du pôle concerné pour vous garantir une réponse rapide et hautement qualifiée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
