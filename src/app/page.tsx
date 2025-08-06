import BtnGroup from "@/components/timer/btnGroup/Index";
import ClockList from "@/components/timer/clockList/Index";
import LopList from "@/components/timer/lopList/Index";
import ShowTimer from "@/components/timer/showTimer/Index";
import TopInputs from "@/components/timer/topInputs/Index";

export default function Home() {
  return (
    <section>
      <TopInputs />
      <ShowTimer />
      <BtnGroup />
      <div className="flex justify-center mt-8">
        <LopList />
        <ClockList />
      </div>
    </section>
  );
}
