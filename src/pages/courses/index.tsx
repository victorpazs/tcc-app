import { Search } from "@/components/search";
import { useFetchCourses } from "./hooks/useFetchCourses";
import { NoData } from "@/components/no-data";
import { useState } from "react";

import { CourseCard } from "./components/course-card";
import { IFilterCourses } from "./types";
export default function CoursesPage() {
  const [filter, setFilter] = useState<IFilterCourses>({ limit: 5 });

  const { data: courses, loading } = useFetchCourses();

  return (
    <div className="w-full grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-3xl font-bold">Cursos</span>
            <span className="text-lg font-light">
              Faça o gerenciamento e controle dos cursos oferecidos na
              instituição.
            </span>
          </div>

          <Search
            className="max-w-64"
            onSearch={(search) => {
              setFilter({ ...filter, search });
            }}
          />
        </div>
      </div>

      <div className="col-span-12">
        <div className="w-full grid grid-cols-12 gap-8">
          {loading ? (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
              <CourseCard.Loading />
            </div>
          ) : courses && courses[0] ? (
            courses.map((course, ind) => (
              <div
                key={"ind_" + ind}
                className="col-span-12 sm:col-span-6 md:col-span-4 "
              >
                <CourseCard name={course.name} created_at={course.created_at} />
              </div>
            ))
          ) : (
            <div className="col-span-12">
              <NoData label="Nenhum curso encontrado" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
