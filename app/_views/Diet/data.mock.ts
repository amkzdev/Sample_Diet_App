export const dietData = {
    method: 'رژیم عادی',
    type: 'ارتقا سلامتی و افزایش وزن',
    menu: 'منو رژیم غذایی متعادل و همه چیز خواری مختص فصول گرم'
}



export const weekDaysData  :Array <{title:string , day:number , active?:boolean , checked?:boolean ,notWeight?:boolean , weight?:boolean}> = [
    {
        title:'شنبه',
        day:8,
        notWeight:true
    }
    ,
    {
        title:'یکشنبه',
        day:9,
        checked:true
    }
    ,
    {
        title:'دوشنبه',
        day:10,
        checked:true
    }
    ,
    {
        day:11,
        title:'سه شنبه',
        active:true
    }
    ,
    {
        day:12,
        title:'چهارشنبه'
    }
    ,
    {
        title:'پنج شنبه',
        day:13
    }
    ,
    {
        day:14,
        title:'جمعه',
        weight:true
    }
]