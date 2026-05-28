import React from "react";
import { useParams } from "wouter";
import RessourcePage from "@/components/RessourcePage";
import NotFound from "@/pages/NotFound";
import ressourcesMap from "@/data/ressources/index";

export default function RessourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = ressourcesMap[slug ?? ""];

  if (!data) return <NotFound />;

  return <RessourcePage {...data} />;
}
