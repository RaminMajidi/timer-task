'use client'
import Buttom from '@/components/custom/Buttom'
import { useTimerStore } from '@/stores/TimerStore'


const BtnLop = () => {

  const setLops = useTimerStore(state => state.setLops);



  return (
    <Buttom
      onClickHandler={() => setLops()}
      text="LOP"
      className={`w-[200px] border h-[35px] rounded-lg`}
      isPending={false}
      type="button"
    />
  )
}

export default BtnLop;