"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GroupAvatar from "@/components/group-avatar";
import OverviewTable from "@/components/overview/overview-table";
import SummaryCard from "@/components/summary-card";
import { formatCurrency } from "@/lib/utils";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { transactionSummary } from "@/lib/staticData";
import { Input } from "@/components/ui/input";
import Loader from "@/components/loader";

const TabState = {
  OVERVIEW: "overview",
  TRANSACTIONS: "transactions"
} as const;

type TabStateT = (typeof TabState)[keyof typeof TabState];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabStateT>(TabState.OVERVIEW);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(transactionSummary);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const lowerSearch = search.toLowerCase();
      const filtered = transactionSummary.filter(
        (item) =>
          item.remark.toLowerCase().includes(lowerSearch) ||
          item.type.toLowerCase().includes(lowerSearch)
      );

      setFilteredData(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <section>
      <div className="flex justify-end mb-4">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by remark or type..."
          className="max-w-sm"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-6">
          <div className="flex items-center gap-2 space-x-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold md:text-3xl text-[#1B2528]">Wallet Ledger</h1>
              <IoMdArrowDropdown className="h-6 w-6 text-[#1B2528]" />
            </div>
            <Badge variant="secondary" className="gap-2 rounded-full bg-[#dde5e7] text-[#1B2528] font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[#087A2E] animate-ping"></span>
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

          <TabsContent value={TabState.OVERVIEW}>
            <div>
              <h3 className="text-lg text-[#1B2528] font-semibold">Summary</h3>
            </div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <SummaryCard title={"Total Balance"} amount={formatCurrency(12345)} percentage={"+5%"} />
              <SummaryCard title={"Total Credits"} amount={formatCurrency(7890)} percentage={"+3%"} />
              <SummaryCard title={"Total Debits"} amount={formatCurrency(4455)} percentage={"-2%"} />
              <SummaryCard title={"Transactions"} amount={"150"} percentage={"+10%"} />
            </div>

            <div className="py-2">
              {loading ? (
                <div>
                  <Loader />
                </div>
              ) : filteredData.length === 0 ? (
                <p className="text-lg text-[#1B2528] text-center font-semibold">No results found.</p>
              ) : (
                <OverviewTable allTransactions={filteredData} />
              )}
            </div>
          </TabsContent>

          <TabsContent value={TabState.TRANSACTIONS}>
            <div className="flex justify-center items-center py-3">
              <p className="text-base text-[#1B2528]">Transaction data lives here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
