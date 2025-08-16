import { ClockIcon } from '@heroicons/react/24/outline'
import { ClockReturn } from '@icons'
import { MealType } from '_views/Diet/data.mock'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export const EachMeal = ({ data }: { data: MealType }) => {

    const { img, items, title, type } = data


    const textColor = () => {
        switch (type) {
            case 1: return 'text-cr3';
            case 2: return 'text-cr2';
            case 3: return 'text-cr1';
        }
        return 'text-cr2'
    }


    return (
        <div className='flex flex-row gap-5 items-stretch '>

            <div className={clsx('rounded-2xl p-4 text-center text-white text-3xl   align-middle flex flex-row justify-center items-centers   rotate-180', type == 1 && 'bg-cr3', type == 2 && 'bg-cr2', type == 3 && 'bg-cr1')} style={{ writingMode: 'vertical-rl' }}>
                <span>
                    {title}
                </span>
            </div>

            <div className='flex-1 flex flex-col gap-4 items-stretch'>

                {items.map((item, index)  => <div className={clsx('bg-linear-to-l to-white p-0.5 rounded-xl flex flex-1 overflow-hidden', type == 1 && 'from-cr3', type == 2 && 'from-cr2', type == 3 && 'from-cr1')}>

                    <div className='bg-[#F8F8F8] flex-1 rounded-[0.6rem] p-4 flex flex-row gap-8 items-center'>

                        <div className='basis-1/3 flex flex-row gap-2'>
                            {index % 2 == 0
                                ? <ClockReturn className={clsx(textColor(), 'size-6')} />
                                : <ClockIcon className={clsx(textColor(), 'size-6')} />}

                                <span className={clsx(textColor(),'font-bold')}>{item.title}</span>

                                <span className='text-[#646566]'>({item.hint})</span>
                        </div>

                        <div className='h-8 bg-[#D1D1D1] w-[1px]'></div>

                        <div className='flex-1 text-[#646566]'>

                            {item.desc}
                        </div>
                    </div>
                </div>)}

            </div>

            <div className={clsx('rounded-2xl border flex flex-col gap-4 p-3', type == 1 && 'border-cr3', type == 2 && 'border-cr2', type == 3 && 'border-cr1')}>


                <span className={clsx('text-center font-bold', type == 1 && 'text-cr3', type == 2 && 'text-cr2', type == 3 && 'text-cr1')}>چطور بشقاب سالم <br /> صبحانه خودتو بچینی؟</span>

                <Image src={img} alt={title} width={115} height={200} />

            </div>


        </div>
    )
}
