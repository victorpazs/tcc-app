import Tournaments from "./components/tournaments";
import Calendar from "./components/calendar";

export default function HomePage() {
  return (
    <div className="w-full grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4">
        <div className="w-full flex flex-col gap-6">
          <div>
            <Tournaments />
          </div>
          <div></div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <Calendar />
      </div>
    </div>
  );
}
