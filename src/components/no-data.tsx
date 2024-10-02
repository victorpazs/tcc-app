import { CircleSlash2 } from "lucide-react";

export function NoData({ label }: { label?: string }) {
  return (
    <div className="min-w-full min-h-full flex justify-center items-center mt-4">
      <div className="flex flex-col items-center gap-6">
        <CircleSlash2 strokeWidth={0.5} className="w-24 h-24 text-secondary" />
        <span className="text-md text-secondary">
          {label || "Nenhum dado encontrado"}.
        </span>
      </div>
    </div>
  );
}
