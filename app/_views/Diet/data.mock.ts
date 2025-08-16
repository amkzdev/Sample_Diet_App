import { StaticImageData } from "next/image"
import milk from '@images/Food/milk.png'
import olive from '@images/Food/olive.png'
import peanut from '@images/Food/peanut.png'


export const dietData = {
    method: 'رژیم عادی',
    type: 'ارتقا سلامتی و افزایش وزن',
    menu: 'منو رژیم غذایی متعادل و همه چیز خواری مختص فصول گرم'
}



export const weekDaysData: Array<{ title: string, day: number, active?: boolean, checked?: boolean, notWeight?: boolean, weight?: boolean }> = [
    {
        title: 'شنبه',
        day: 8,
        notWeight: true
    }
    ,
    {
        title: 'یکشنبه',
        day: 9,
        checked: true
    }
    ,
    {
        title: 'دوشنبه',
        day: 10,
        checked: true
    }
    ,
    {
        day: 11,
        title: 'سه شنبه',
        active: true
    }
    ,
    {
        day: 12,
        title: 'چهارشنبه'
    }
    ,
    {
        title: 'پنج شنبه',
        day: 13
    }
    ,
    {
        day: 14,
        title: 'جمعه',
        weight: true
    }
]

export const shareData: Array<{ title: string, usage: string, menu: string, img: StaticImageData }> = [
    {
        title: "لبنیات",
        img:milk,
        menu:'دو لیوان شیر کامل (۳ درصد)',
        usage:'به سلیقه خودتان (به عنوان میان وعده یا همراه وعده)'
    }
    
    ,
    {
        img:olive,
        menu:'۱ قاشق مرباخوری روغن زیتون (ترجیحا تصویه نشده)',
        title:'روغن زیتون',
        usage:'همراه با سالاد'
    }
    ,
    {
        img:peanut,
        menu:'۲.۵ قاشق غذاخوری مغز مخلوط (قاشق غذاخوری مغز معادل: ۱۰ گرم)',
        title:'آجیل',
        usage:'(به صورت ریزه خوری در طی روز)'
    }
]