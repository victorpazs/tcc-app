import { useFetchJury } from "./hooks/useFetchJury";
import { NoData } from "@/components/no-data";
import { JuryCard } from "./components/jury-card";

export default function JuryPage() {
  const { data: juries, loading } = useFetchJury();

  return (
    <div className="w-full grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-3xl font-bold">Bancas</span>
            <span className="text-lg font-light">
              Faça o gerenciamento das bancas dos TCs.
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="w-full grid grid-cols-12 gap-8">
          {loading ? (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
              <JuryCard.Loading />
            </div>
          ) : juries && juries[0] ? (
            juries.map((jury, ind) => (
              <div
                key={"ind_" + ind}
                className="col-span-12 sm:col-span-6 md:col-span-4 "
              >
                <JuryCard name={jury.name} created_at={jury.created_at} />
              </div>
            ))
          ) : (
            <div className="col-span-12">
              <NoData label="Nenhuma banca encontrada" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
