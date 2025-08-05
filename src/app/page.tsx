import BtnGroup from "@/components/timer/btnGroup/Index";
import ShowTimer from "@/components/timer/showTimer/Index";
import TopInputs from "@/components/timer/topInputs/Index";

export default function Home() {
  return (
    <section>
      <TopInputs />
      <ShowTimer/>
      <BtnGroup/>
    </section>
  );
}
