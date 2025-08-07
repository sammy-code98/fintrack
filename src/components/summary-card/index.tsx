import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

export type SummaryCardT = {
  title:string;
  amount:string | number;
  percentage:string;
}
export default function SummaryCard(props:SummaryCardT) {
  return (
    <div className='bg-[#eaeff0] rounded-xl px-6 py-4 space-y-5 cursor-pointer hover:shadow-md'>
      <div className='flex justify-between items-center'>
        <h3 className='text-[#1B2528] text-lg font-semibold'>{props.title}</h3>
        <BsThreeDots className='h-4 w-4 text-[#1B2528]' />
      </div>

      <div className='space-y-2'>
        <h1 className='text-[#1B2528] text-4xl font-semibold'>{props.amount}</h1>
        <p className='text-[#3E7383] text-sm font-medium'>{props.percentage}</p>
      </div>
      </div>
  )
}
