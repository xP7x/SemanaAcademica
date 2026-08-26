import { Schedule } from "../components/Schedule";
import { Workshops } from "../components/Workshops";

export function Programacao() {
  return (
    <div className="pt-16">
      <Schedule />
      <Workshops />
    </div>
  );
}
