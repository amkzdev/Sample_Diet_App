import React from 'react'
import { Hero, Meals, Share } from './components'

export const Diet = () => {
  return (
    <div className='flex flex-col gap-7 items-stretch py-4'>

      <Hero />

      <Share />

      <Meals />

    </div>
  )
}
