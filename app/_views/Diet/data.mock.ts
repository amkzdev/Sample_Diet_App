import { StaticImageData } from "next/image"
import milk from '@images/Food/milk.png'
import olive from '@images/Food/olive.png'
import peanut from '@images/Food/peanut.png'

import meal1 from '@images/meal/1.png'
import meal2 from '@images/meal/2.png'
import meal3 from '@images/meal/3.png'
import { ILocalIconType } from "_icons/type"
import { Milk, Olive } from "@icons"
import { Nuts } from "_icons/Nuts"

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

export const shareData: Array<{ title: string, usage: string, menu: string, img: StaticImageData, icon:ILocalIconType }> = [
    {
        title: "لبنیات",
        img: milk,
        menu: 'دو لیوان شیر کامل (۳ درصد)',
        usage: 'به سلیقه خودتان (به عنوان میان وعده یا همراه وعده)',
        icon:Milk
    }

    ,
    {
        img: olive,
        menu: '۱ قاشق مرباخوری روغن زیتون (ترجیحا تصویه نشده)',
        title: 'روغن زیتون',
        usage: 'همراه با سالاد',
        icon:Olive
    }
    ,
    {
        img: peanut,
        menu: '۲.۵ قاشق غذاخوری مغز مخلوط (قاشق غذاخوری مغز معادل: ۱۰ گرم)',
        title: 'آجیل',
        usage: '(به صورت ریزه خوری در طی روز)',
        icon:Nuts
    }
]

export interface MealType { title: string, img: StaticImageData, items: Array<{ title: string, hint: string, desc: string }>, type: number }
export const meals: Array<MealType> = [
    {
        title: 'بازه صبح',
        img:meal1,
        type:1,
        items: [
            {
                title: "قبل از صبحانه",
                hint: "20 دقیقه قبل صبحانه",
                desc:"لطفا مواد غذایی مصرف نکنید"
            },

            {
                title:"صبحانه",
                desc:"2و نیم قاشق غذا خوری مخلوط شیره ارده (به نسب دلخواه) + 35گرم نان",
                hint:'ساعت 8 تا 10'
            }
            ,
            {
                title:"بعد از صبحانه",
                desc:"1 و 1 چهارم لیوان چای نبات",
                hint:'نزدیک به صبحانه'
            },
            {
                title:"میان وعده صبح",
                desc:'سه 3 چهار عدد کیک (معادل 50 گرم) + 13 عدد بادام',
                hint:'10 تا 11'
            }
        ]
    },

    {
        title: 'بازه عصر',
        img:meal2,
        type:2,
        items: [
            {
                title: "قبل از ناهار",
                hint: "20 دقیقه قبل ناهار",
                desc:"لطفا مواد غذایی مصرف نکنید"
            }
            ,
            {
                title:"ناهار",
                desc:'7 و نیم عدد دلمه برگ مو',
                hint:'ساعت 12 تا 14'
            }
            ,
            {
                title:"بعد از ناهار",
                desc:"سه چهارم لیوان کاستر",
                hint:"نزدیک به ناهار"
            }
            ,
            {
                title:"میان وعده عصر",
                desc:"2 عدد بستنی یخی + 2 واحد میوه",
                hint:'ساعت 13 تا 15'
            }
        ]
    }

    ,
    {
        title: 'بازه صبح',
        img:meal3,
        type:3,
        items: [
            {
                title: "قبل از شام",
                hint: "20 دقیقه قبل شام",
                desc:"لطفا مواد غذایی مصرف نکنید"
            }
            ,
            {
                title: "شام",
                hint: " ساعت 19 تا 21",
                desc:"1 و 1 چهارم کوکو سیب زمینی (معادل 50 گرم) + 40 گرم نان"
            }
            ,
            {
                title: "خوراکی خوشمزه قبل خواب",
                hint: "نزدیک به خواب",
                desc:"2 لیوان مخلوط اب میوه طبیعی و مغز (ترکیب : ابمیوه ، خامه ، پودر مغز )"
            }
        ]
    }
]