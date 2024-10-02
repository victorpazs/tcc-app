import HomeCourses from "./components/home-courses";
import HomeCalendar from "./components/home-calendar";
import HomeJuries from "./components/home-juries";
import moment from "moment";

export default function HomePage() {
  return (
    <div className="w-full grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="flex flex-col gap-2 text-start">
          <h2 className="text-3xl">Bem vindo, coordenador!</h2>
          <h3 className="text-lg text-secondary">{`${moment().format(
            "dddd"
          )}, ${moment().format("D")} de ${moment().format(
            "MMMM"
          )} de ${moment().format("YYYY")}`}</h3>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="w-full flex flex-col gap-6">
          <HomeCourses />
          <HomeJuries />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <HomeCalendar />
      </div>
    </div>
  );
}
