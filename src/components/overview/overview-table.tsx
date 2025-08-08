/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Badge } from '../ui/badge';
import { formatCurrency } from '@/lib/utils';

interface OverviewTableI {
  allTransactions: {
    id: string;
    date: string;
    remark: string;
    amount: number;
    currency: string;
    type: "Credit" | "Debit";
  }[]
}

const typeTheme: string | any = {
  Debit: "bg-[#C6381B]",
  Credit: "bg-[#087A2E]"
}

export default function OverviewTable({ allTransactions }: OverviewTableI) {

  const getTypeClass = (status: string | any) => {
    return typeTheme[status] || ""
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[800px]">
              <div className='flex items-center gap-1'>
                <p className='text-sm text-[#15272D]'>Date</p>
                <IoMdArrowDropdown className="h-6 w-6 text-[#15272D]" />
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-1'>
                <p className='text-sm text-[#15272D]'>Remark</p>
                <IoMdArrowDropdown className="h-6 w-6 text-[#15272D]" />
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-1'>
                <p className='text-sm text-[#15272D]'>Amount</p>
                <IoMdArrowDropdown className="h-6 w-6 text-[#15272D]" />
              </div>
            </TableHead>
            <TableHead className="text-right">
              <div className='flex items-center gap-1'>
                <p className='text-sm text-[#15272D]'>Currency</p>
                <IoMdArrowDropdown className="h-6 w-6 text-[#15272D]" />
              </div>
            </TableHead>
            <TableHead className="text-right">
              <div className='flex items-center gap-1'>
                <p className='text-sm text-[#15272D]'>Type</p>
                <IoMdArrowDropdown className="h-6 w-6 text-[#15272D]" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTransactions?.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-[#1B2528]">{item.date}</TableCell>
              <TableCell className='font-medium text-[#1B2528]'>{item.remark}</TableCell>
              <TableCell className='font-medium text-[#1B2528]'>{item.type === "Debit" ? "-" : ""}{formatCurrency(item.amount)}</TableCell>
              <TableCell className='font-medium text-[#1B2528]'>{item.currency}</TableCell>
              <TableCell className='font-medium text-[#1B2528]'>
                <Badge variant="secondary" className="gap-2 rounded-full bg-[#dde5e7] text-[#1B2528] font-semibold">
                  <span className={`${getTypeClass(item.type)} h-2 w-2 rounded-full`}></span>
                  {item.type}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
