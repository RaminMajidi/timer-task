import BtnLop from "../btnLop/Index";
import BtnPause from "../btnPause/Index"
import BtnReset from "../btnReset/Index";

const BtnGroup = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-2">
        <BtnLop/>
        <BtnPause/>
        <BtnReset/>
    </div>
  )
}

export default BtnGroup;