import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import moment from "moment";

interface IJuryCard {
  name: string;
  created_at?: Date;
  onClick?: () => void;
}
export function JuryCard({ name, created_at, onClick }: IJuryCard) {
  return (
    <Card
      onClick={onClick}
      className="w-full border-none outline-none shadow-sm"
    >
      <div className="flex justify-between items-center pr-6">
        <CardHeader className="w-full flex-row flex justify-between items-center pr-0">
          <div className="flex flex-col">
            <CardTitle>{name}</CardTitle>

            <CardDescription className="text-xs text-text-secondary">
              {`Criado em ${moment(created_at).format("DD/MM/YYYY")}`}
            </CardDescription>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}

JuryCard.Loading = function JuryCardLoading() {
  return (
    <Card className="w-full border-none outline-none shadow-sm">
      <div className="flex justify-between items-center pr-6">
        <CardHeader className="w-full flex-row flex justify-between items-center pr-0">
          <div className="flex flex-col">
            <CardTitle>
              <Skeleton>
                <span>Ciência da computação</span>
              </Skeleton>
            </CardTitle>

            <CardDescription className="text-xs text-text-secondary">
              <Skeleton> {`Criado em 12/09/2003`}</Skeleton>
            </CardDescription>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
};
