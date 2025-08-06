'use client'
import Buttom from '@/components/custom/Buttom'
import { useTimerStore } from '@/stores/TimerStore'


const BtnReset = () => {

  const resetTimer = useTimerStore(state => state.reset);

  return (
    <Buttom
      onClickHandler={()=>resetTimer()}
      text="RESET"
      className={`w-[200px] border h-[35px] rounded-lg`}
      isPending={false}
      type="button"
    />
  )
}

export default BtnReset;