"use client"
import GroupAvatar from "@/components/group-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const TabState = {
  OVERVIEW: "overview",
  TRANSACTIONS: "transactions"
} as const

type TabStateT = (typeof TabState)[keyof typeof TabState]

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabStateT>(TabState.OVERVIEW)

  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2 space-x-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold md:text-3xl text-[#1B2528]">Wallet Ledger</h1>
                <IoMdArrowDropdown className="h-6 w-6 text-[1B2528]" />
              </div>
              <Badge variant="secondary" className="gap-2 rounded-full bg-[#dde5e7] text-[#1B2528] font-medium">
                <span className="h-1 w-1 rounded-full bg-[#087A2E] animate-ping"></span>
                Active
              </Badge>
            </div>
            <GroupAvatar />
          </div>
          <div className="flex items-center space-x-3">
            <Button className="px-6 bg-[#4B8B9F] text-[#020303] font-medium rounded-full hover:bg-[#4B8B9F] cursor-pointer">Share</Button>
            <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
              <BsThreeDots className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="py-8">
          <Tabs value={activeTab} onValueChange={(value: unknown) => (setActiveTab(value as TabStateT))}>
            <TabsList>
              <TabsTrigger value={TabState.OVERVIEW}>Overview</TabsTrigger>
              <TabsTrigger value={TabState.TRANSACTIONS}>Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value={TabState.OVERVIEW}>OVERVIEW</TabsContent>
            <TabsContent value={TabState.TRANSACTIONS}>TRANSACTIONS</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
