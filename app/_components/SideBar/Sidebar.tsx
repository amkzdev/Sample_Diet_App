'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import logo from '@images/logo.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { menuItems } from './menuItem'
import Link from 'next/link'
import clsx from 'clsx'
import saladImg from '@images/salad.png'
import { Exit } from '@icons'

export const Sidebar = () => {

    const pathname = usePathname()

    const remainingDay = 15

    return (
        <div className='p-0.5 from-cr2 to-white bg-linear-to-b to-ri rounded-2xl   w-64  h-[90vh] flex flex-col items-stretch justify-stretch'>

            <div className='flex flex-col gap-3 items-stretch rounded-[14px] bg-[#FAFFF4] h-full   flex-1 p-3 '>
                <div className='flex flex-row gap-4 items-center justify-between w-full  p-3 pl-0 mb-2'>

                    <Image src={logo} alt='Logo' className='w-[8.5rem]' />

                    <div className='rounded bg-[#EDF7E0] flex flex-row gap-2 items-center justify-center p-2 '>
                        <ChevronRightIcon className='size-5 text-cr2' />

                    </div>




                </div>
                {menuItems.map(({ icon: Icon, route, title }) => {

                    const isSelected = route == pathname
                    return <Link href={route} key={route} className={clsx('flex flex-row gap-3 items-center rounded-xl p-4  font-bold ', isSelected ? ' text-white bg-cr2 ' : 'text-cr2 hover:bg-green-50')}>

                        <Icon className='size-6' />
                        <span>{title}</span>
                    </Link>
                })}



                <div className='mt-auto flex flex-col  gap-4'>

                    <div className='bg-cr2  h-40   rounded-[0.875rem] relative flex flex-col justify-end p-4'>
                        <Image alt='Salad' width={140} height={180} className='mx-auto absolute left-1/2 -translate-y-1/3 -translate-x-1/2' src={saladImg} />
                        <div className='flex flex-row gap-1 items-center text-white text-center justify-center font-bold '>
                            <span>روز</span>

                            <span className='text-cr3 text-4xl font-bold'>{remainingDay}</span>

                            <span>آفرین! ادامه بده...</span>

                        </div>
                    </div>


                    <div className='w-full bg-gray-300 h-[1px]'></div>

                    <Link href={'/'} className={clsx('flex flex-row gap-3 items-center rounded-xl  px-4 font-bold ', 'text-cr2')}>

                        <Exit className='size-6' />
                        <span>خروج</span>
                    </Link>


                </div>
            </div>
        </div>
    )
}
