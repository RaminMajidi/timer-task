'use client'
import Buttom from '@/components/custom/Buttom'


const BtnReset = () => {

    const resetTimerHandler = ()=>{

    }

  return (
          <Buttom
            onClickHandler={resetTimerHandler}
            text="RESET"
            className={`w-[200px] border h-[35px] rounded-lg`}
            isPending={false}
            type="button"
        />
  )
}

export default BtnReset;