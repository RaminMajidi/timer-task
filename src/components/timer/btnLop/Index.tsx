'use client'
import Buttom from '@/components/custom/Buttom'


const BtnLop = () => {

    const lopTimerHandler = ()=>{

    }

  return (
          <Buttom
            onClickHandler={lopTimerHandler}
            text="LOP"
            className={`w-[200px] border h-[35px] rounded-lg`}
            isPending={false}
            type="button"
        />
  )
}

export default BtnLop;