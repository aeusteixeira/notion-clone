"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Head = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:6xl">
        Suas ideias. Documentos & projetos. Unificados. Bem vindo ao{" "}
        <span className="font-bold underline">Jotion</span>.
      </h1>
      <h2 className="text-base sm:text-sm md:text-2xl font-medium">
        O Jotion é um sistema de gerenciamento de projetos e documentos que
        permite que você e sua equipe trabalhem juntos de forma mais eficiente.
      </h2>
      <Button>
        Começar
        <ArrowRight className="h4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Head;
