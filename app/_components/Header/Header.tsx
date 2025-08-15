import React from 'react'
import hand from '@images/shakehand.png'
import Image from 'next/image'
import { BellAlertIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Bell } from '@icons'

export const Header = () => {

    const userName = 'سهیلا عزیز'
    return (
        <div className='flex flex-row gap-2 justify-between w-full'>

            <div className='flex flex-col gap-2 items-start'>
                <div className='flex flex-row gap-1.5 items-center'>
                    <span className='text-2xl text-cr2 font-bold'>{userName}</span>
                    <Image src={hand} alt='Shake' className='size-5' width={18} height={18} />
                </div>

                <span className='text-[#646566] font-medium'>آماده‌ای برای یک روز پرانرژی و سالم؟</span>

            </div>

            <div className='flex flex-row gap-5 items-center'>
                <div className='bg-[#F3F5F8] flex flex-row gap-2  items-center rounded-md '>

                    <input placeholder='جستجو..' className='p-3 pl-0 outline-none min-w-96' />
                    <MagnifyingGlassIcon className='size-5 text-[#BBBBBB] ml-3 cursor-pointer' />

                </div>

                <button className='flex flex-row gap-2 items-center justify-center bg-cr2 p-3 text-white rounded-md cursor-pointer'>
                    <Bell className='size-5' />

                </button>

            </div>

        </div>
    )
}
