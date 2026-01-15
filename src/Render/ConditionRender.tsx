import React from 'react'
import { Condition_Render } from '../component/Condition_Render'

const ConditionRender = () => {

  const [trigger,setTrigger] = React.useState<Boolean>(false)
  console.log(trigger)

  return (
    <>

  <button onClick={() => setTrigger(!trigger)}>Trigger</button>
  {trigger ? (<Condition_Render/>) : <>show false</>} 
  
    </>

  )
}

export default ConditionRender