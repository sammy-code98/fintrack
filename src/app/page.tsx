import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
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
              <Badge variant="secondary" className="gap-1.5 rounded-full bg-[#dde5e7] text-[#1B2528] font-medium">
                <span className="h-1 w-1 rounded-full bg-[#087A2E] animate-ping"></span>
                Active
              </Badge>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src="https://github.com/leerob.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src="https://github.com/evilrabbit.png" />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarImage src="https://github.com/sammy-code98.png" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-muted-foreground">Ava, Liam, Noah +12 others</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="px-6 bg-[#4B8B9F] text-[#020303] font-medium rounded-full hover:bg-[#4B8B9F] cursor-pointer">Share</Button>
            <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
              <BsThreeDots className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="py-8">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transaction">Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">hello</TabsContent>
            <TabsContent value="transaction">hello</TabsContent>

          </Tabs>
        </div>
      </section>


    </>
  );
}
