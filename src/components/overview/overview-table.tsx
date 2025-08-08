import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { IoMdArrowDropdown } from 'react-icons/io'

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
export default function OverviewTable({ allTransactions }: OverviewTableI) {
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
              <TableCell className="font-medium">{item.date}</TableCell>
              <TableCell>{item.remark}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell className="text-right-">{item.currency}</TableCell>
              <TableCell className="text-right-">{item.type}</TableCell>

            </TableRow>
          ))}

        </TableBody>
      </Table>
    </>
  )
}
