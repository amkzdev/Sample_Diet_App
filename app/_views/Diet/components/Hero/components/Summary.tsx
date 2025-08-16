import { dietData } from '_views/Diet/data.mock'
import React from 'react'


const ItemComponent = ({ title, value }: { title: string, value: string }) => {
    return <div className='flex flex-row gap-2 items-center text-sm text-white'>

        <span className='font-bold'>{title}:</span>

        <span>{value}</span>

    </div>
}

export const Summary = () => {

    const { menu, method, type } = dietData


    return (
        <div className='bg-cr3 rounded-t-xl flex flex-row gap-8 items-center p-3 mr-auto ml-4'>

            <ItemComponent title='روش رژیم غذایی' value={method} />
            <ItemComponent title='نوع رژیم' value={type} />
            <ItemComponent title='منوی رژیم غذایی' value={menu} />

        </div>
    )
}
