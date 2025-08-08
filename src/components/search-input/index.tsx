"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { RxCross2 } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';

export default function SearchInput() {
    const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <div>
       {showSearch && (
                  <div className="relative transition-all duration-300 ease-in-out w-64">
                    <Input placeholder="Search by Remark or Type..." className="pl-4 pr-10 bg-white rounded-lg w-full" />

                    <RxCross2
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1B2528] cursor-pointer"
                      onClick={() => setShowSearch(false)}
                    />
                  </div>
                )}

                {/* <div>
                  <IoSearch className="text-2xl text-[#1B2528] cursor-pointer" />
                </div> */}
                {!showSearch && (
                  <div>
                    <IoSearch
                      className="text-2xl text-[#1B2528] cursor-pointer transition-all duration-300"
                      onClick={() => setShowSearch(true)}
                    />
                  </div>
                )}
    </div>
  )
}
