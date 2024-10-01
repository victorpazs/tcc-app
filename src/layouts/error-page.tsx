import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center">
      <h1 className="text-5xl font-medium">Opa!</h1>
      <p>Ocorreu um error no carregamento desta tela!</p>
      <p>
        <Button>
          <ArrowLeft size="sm" className="mr-2" />{" "}
          <Link to="/">Voltar ao início</Link>
        </Button>
      </p>
    </div>
  );
}
