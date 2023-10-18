"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Head = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Acessar Jotion <ArrowRight className="h4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button>
              Cadastre-se <ArrowRight className="h4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};

export default Head;
