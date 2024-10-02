import { Search } from "@/components/search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  return (
    <div className="w-full grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-3xl font-bold">Gestão</span>
            <span className="text-lg font-light">
              Adicione os docentes e alunos.
            </span>
          </div>

          <Search onSearch={() => {}} className="py-2" />
        </div>
      </div>

      <div className="col-span-12">
        <Tabs className="w-full" defaultValue="teacher">
          <TabsList className="grid max-w-64 grid-cols-2">
            <TabsTrigger value="teacher">Docentes</TabsTrigger>
            <TabsTrigger value="student">Alunos</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="teacher"></TabsContent>
          <TabsContent value="student"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
