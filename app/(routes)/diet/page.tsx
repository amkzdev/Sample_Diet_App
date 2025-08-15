import { Diet } from '@views'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata ={
    title:"رژیم غذایی"
}
export default function page() {
  return (
    <Diet/>
  )
}
