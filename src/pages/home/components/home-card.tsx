import { Tooltip } from "@/components/tooltip";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type HomeCardProps = {
  path: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function HomeCard({
  path,
  title,
  description,
  children,
}: HomeCardProps) {
  return (
    <Card className="w-full border-none outline-none shadow-none">
      <div className="flex justify-between items-center pr-6">
        <CardHeader className="w-full flex-row flex justify-between items-center pr-0">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg font-medium">{title}</CardTitle>

            <CardDescription className="text-sm text-text-secondary">
              {description || (
                <>
                  Clique{" "}
                  <Link to={path} className="underline text-blue-500">
                    aqui
                  </Link>{" "}
                  para ver todos.
                </>
              )}
            </CardDescription>
          </div>
          <Tooltip title="Ver mais">
            <Button variant="ghost" size={"icon"} asChild>
              <Link to={path}>
                <ExternalLink size={16} />
              </Link>
            </Button>
          </Tooltip>
        </CardHeader>
      </div>
      <CardContent className="flex flex-col gap-2">{children}</CardContent>
    </Card>
  );
}

HomeCard.Item = function HomeCardItem({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Link to={path}>
      <div className="flex flex-col  px-1 py-2  rounded-sm dark:hover:bg-[#323232a1] hover:bg-slate-300/20 transition-all ">
        <h1 className="text-[14px]">{title}</h1>
        <span className="text-xs text-text-secondary">{description}</span>
      </div>
    </Link>
  );
};

HomeCard.Loading = function HomeCardLoading() {
  return (
    <div className="flex flex-col gap-2  px-1 py-2   ">
      <Skeleton className="w-32 h-4 bg-[#00000015] dark:bg-[#ffffff15]" />
      <Skeleton className="w-16 h-4 bg-[#00000015] dark:bg-[#ffffff15]" />
    </div>
  );
};
