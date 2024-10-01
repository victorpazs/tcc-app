import {
  Tooltip as TooltipShad,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
type TooltipType = {
  children: React.ReactNode;
  title?: string;
};

export function Tooltip({ children, title }: TooltipType) {
  return (
    <TooltipProvider>
      <TooltipShad>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </TooltipShad>
    </TooltipProvider>
  );
}
