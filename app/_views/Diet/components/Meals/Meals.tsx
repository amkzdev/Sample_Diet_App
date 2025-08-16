import { Divider } from '@components'
import { meals } from '_views/Diet/data.mock'
import React from 'react'
import { EachMeal } from './components/EachMeal'

export const Meals = () => {
    return (
        <div className='flex flex-col gap-4 items-stretch mt-4'>

            <span className='text-cr2 font-bold text-2xl text-center'>وعده ها و میان وعده ها</span>

            <Divider />

            <div className='flex flex-col gap-12'>

                {meals.map(meal => <EachMeal data={meal} />)}

            </div>

        </div>
    )
}
