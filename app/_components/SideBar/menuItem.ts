import { Cart, Dish, Health , Support , User } from "@icons";
import { ILocalIconType } from "_icons/type";

export const menuItems :Array  <{title:string , route:string , icon:ILocalIconType }> =[
    {
        title:'وضعیت',
        icon:Health,
        route:'/status'
    }
    ,
    {
        title:"فروشگاه",
        icon:Cart,
        route:'/shop'
    }
    ,
    {
        icon:Dish,
        route:'/diet',
        title:'دریافت رژیم'
    }
    ,
    {
        icon:Support,
        route:'/support',
        title:'پشتیبانی'
    }
    ,
    {
        icon:User,
        route:'/profile',
        title:'پروفایل کاربری'
    }
]