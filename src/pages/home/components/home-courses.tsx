import { HomeCard } from "./home-card";
import { useEffect } from "react";
import { useFetchCourses } from "@/pages/courses/hooks/useFetchCourses";
import { NoData } from "@/components/no-data";

export default function HomeCourses() {
  const { data: courses, loading, fetchData } = useFetchCourses();

  useEffect(() => {
    fetchData({ limit: 3 });
  }, [fetchData]);

  return (
    <HomeCard
      title="Cursos"
      description={`Você cadastrou ${courses?.length || 0} cursos.`}
      path="/cursos"
    >
      {loading && <HomeCard.Loading />}
      {courses && courses[0] ? (
        <>
          {courses.map((item) => (
            <HomeCard.Item
              key={item.id}
              title={item.name}
              description={"Clique aqui para ver detalhes"}
              path={`/cursos?id=${encodeURIComponent(item.id)}`}
            />
          ))}
        </>
      ) : (
        <NoData label="Nenhum curso encontrado" />
      )}
    </HomeCard>
  );
}
