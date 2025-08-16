import Image from 'next/image'
import React from 'react'
import img from '@images/vegetable.png'
import { Calender, Check, Tip } from '@icons'
import { weekDaysData } from '_views/Diet/data.mock'
import clsx from 'clsx'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'




export const WeekDays = () => {
    return (
        <div className='bg-cr2 rounded-2xl flex flex-row justify-between w-full  items-center h-40 relative'>

            <div className='w-60'></div>

            <Image src={img} alt='Vegetable' className='object-contain absolute right-0  bottom-0 w-60 xl:w-80' width={300} height={200} />

            <div className='flex flex-row gap-6 items-start justify-center pt-2 '>

                {weekDaysData.map((item, index) => <div key={index} className={clsx('flex flex-col gap-2 items-center ', item.active ? 'text-cr3' : 'text-white')}>

                    <span >{item.title}</span>

                    <div className={clsx('border rounded-lg flex flex-row gap-2 justify-center items-center aspect-square size-12 font-bold text-xl pt-1.5', item.active ? 'border-cr3' : 'border-white ')}>
                        {item.day}
                    </div>

                    {item.notWeight && <div className='text-cr3 flex flex-col gap-1 items-center text-xs'>
                        <XMarkIcon className='size-4' />
                        <span>عدم اعلام وزن</span>
                    </div>}

                    {item.weight && <div className='bg-cr3 rounded p-1 text-xs'>
                        اعلام وزن
                        </div>}

                    {item.checked && <Check className={clsx(' size-3', item.active ? 'text-cr3' : 'text-white')} />}

                </div>)}

            </div>

            <div className='flex flex-row gap-2.5 items-center m-4 '>

                <div className='bg-[rgba(255,255,255,0.1)] text-white rounded-lg p-1.5 w-8 rotate-180 h-28 text-center' style={{ writingMode: 'vertical-rl' }}>
                    مرداد 1404
                </div>

                <div className='flex flex-col gap-2.5 items-center bg-cr1 p-2 size-28    justify-center text-white rounded-lg aspect-square shrink-0'>
                    <Calender className='size-10 shrink-0' />

                    <span>تقویم من</span>

                </div>


                <div className='flex flex-col gap-2.5 items-cente bg-cr1  p-2 size-28  items-center justify-center text-white rounded-lg aspect-square shrink-0'>
                    <Tip className='size-10 shrink-0' />

                    <span>توصیه و نکات</span>

                </div>

            </div>


        </div>
    )
}
