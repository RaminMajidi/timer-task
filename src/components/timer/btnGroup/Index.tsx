import BtnLop from "../btnLop/Index";
import BtnPause from "../btnPause/Index"
import BtnReset from "../btnReset/Index";
import BtnStart from "../btnStart/BtnStart";

const BtnGroup = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-2">
        <BtnLop/>
        <BtnPause/>
        <BtnStart/>
        <BtnReset/>
    </div>
  )
}

export default BtnGroup;