import { Button, Divider } from '@components'
import { shareData } from '_views/Diet/data.mock'
import React from 'react'
import { EachShare } from './components/EachShare'

export const Share = () => {
    return (
        <div className='flex flex-col gap-5 items-stretch'>
            <div className='flex flex-row gap-2 items-center justify-between'>

                <Button variant='secondary'>الگو روزه داری امروز</Button>

                <span className='text-cr2 font-bold text-2xl'>سهمیه ها</span>

                <Button variant='tertiary'>دریافت PDF</Button>

            </div>

            <Divider/>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {shareData.map(item => <div className='col-span-1'>
                    <EachShare key={item.title} {...item} />
                </div>)}

            </div>



        </div>
    )
}
