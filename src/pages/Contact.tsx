import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useSearch } from "wouter";
import contactData from "@/data/contact.json";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const poleFromUrl = params.get("pole") ?? "Recrutements";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    pole: poleFromUrl,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(contactData.form.submitValidationError);
      return;
    }
    
    // Simulate API call
    setSubmitted(true);
    toast.success(contactData.form.submitSuccessTitle, {
      description: contactData.form.submitSuccessDescription,
      duration: 5000,
    });
  };

  return (
    <Layout>
      <PageHeader
        badge={contactData.header.badge}
        title={contactData.header.title}
        description={contactData.header.description}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-woman-talking-on-the-phone-in-a-street-4570-large.mp4"
      />

      {/* Form and Info Grid */}
      <section className="py-20 md:py-28 bg-page">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7">
              <Card className="border border-slate-100 shadow-sm bg-slate-50 p-6 md:p-8 text-left">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{contactData.form.nameLabel}</label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder={contactData.form.namePlaceholder}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{contactData.form.emailLabel}</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder={contactData.form.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{contactData.form.phoneLabel}</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder={contactData.form.phonePlaceholder}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{contactData.form.companyLabel}</label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white border-slate-200 focus:bg-white py-5 rounded-md"
                          placeholder={contactData.form.companyPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{contactData.form.poleLabel}</label>
                      <select
                        value={formData.pole}
                        onChange={(e) => setFormData({ ...formData, pole: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:bg-white rounded-md text-sm font-medium p-3 focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {contactData.form.poleOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{contactData.form.messageLabel}</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white border-slate-200 focus:bg-white rounded-md"
                        placeholder={contactData.form.messagePlaceholder}
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full text-white font-bold py-6 rounded-md flex items-center justify-center space-x-2 shadow-lg"
                        style={{ backgroundColor: "var(--brand)" }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-hover)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand)")}
                      >
                        <span>{contactData.form.submitButtonText}</span>
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
                      <h3 className="text-2xl font-black text-slate-900">{contactData.form.successCardTitle}</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-medium">
                        {contactData.form.successCardDescriptionPrefix} <strong>{formData.pole}</strong> {contactData.form.successCardDescriptionSuffix}
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", pole: "Recrutements", message: "" });
                      }}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold"
                    >
                      {contactData.form.resetButtonText}
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>{contactData.details.label}</h2>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  {contactData.details.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {contactData.details.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-600 rounded-xl border border-indigo-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{contactData.details.addressTitle}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                      {contactData.details.companyName}<br />
                      {contactData.details.addressLine}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl border border-emerald-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{contactData.details.phoneTitle}</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href={contactData.details.phoneHref} className="transition-colors font-bold"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}>{contactData.details.phoneDisplay}</a>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">{contactData.details.phoneMeta}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl border border-amber-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{contactData.details.emailTitle}</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href={contactData.details.emailHref} className="transition-colors font-bold"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}>{contactData.details.emailDisplay}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center space-x-2" style={{ color: "var(--brand)" }}>
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold text-xs uppercase tracking-wide">{contactData.supportBox.label}</span>
                </div>
                <h4 className="font-bold text-sm">{contactData.supportBox.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {contactData.supportBox.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
