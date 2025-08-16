import { ClockIcon } from '@heroicons/react/24/outline'
import { Edit, Milk } from '@icons'
import { ILocalIconType } from '_icons/type'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IProps {
    title: string,
    usage: string,
    menu: string,
    img: StaticImageData
    icon:ILocalIconType
}

export const EachShare = ({ img, menu, title, usage, icon:Icon }: IProps) => {
    return (
        <div className='from-cr2 to-white bg-gradient-to-l p-0.5 h-full flex  flex-col rounded-2xl relative'>
            <div className='bg-[#FAFFF4] flex flex-col gap-5 items-start p-4 flex-1 h-fit rounded-[0.9rem]'>

                <div className='flex flex-row gap-3 items-center'>

                    <span className='text-cr2 font-bold text-xl'>سهمیه {title}</span>

                    <Edit className='size-5 text-cr2 cursor-pointer' />

                </div>

                <p className='  inline gap-2 items-center text-sm whitespace -pre-wrap   w-3/4 text-wrap'>
                    <ClockIcon className='text-cr2 size-5 inline' />
                    &nbsp;
                    &nbsp;
                    <span className='text-cr2 font-bold whitespace-nowrap'>زمان مصرف:</span>

                    &nbsp;
                    &nbsp;
                    <span className='text-[#646566] whitespace -pre-wrap'>{usage}</span>

                </p>


                <p className='  gap-2 items-center text-sm break-words inline  w-3/4 text-wrap'>
                    <Icon className='text-cr2 size-5 inline' />
                    &nbsp;
                    &nbsp;
                    <span className='text-cr2 font-bold whitespace-nowrap'>منو: </span>
                    &nbsp;
                    &nbsp;
                    <span className='text-[#646566] break-words whitespace-pre-wrap'>{menu}</span>

                </p>



                <Image src={img} alt='Image' width={115} height={115} className='absolute left-0 ' />


            </div>

        </div>
    )
}
