import React from 'react'
import { Summary } from './components/Summary'
import { WeekDays } from './components/WeekDays'

export const Hero = () => {


  return (
    <div  className='flex flex-col  items-center'>

        <Summary/>

        <WeekDays/>

        
    </div>
  )
}
