type MenuT = {
  title:string;
  url:string;
  isActive?:boolean
}

export  function getSidebarList(pathname:string): MenuT[]{
  return [
    {
      title: "Dashboard",
      url: "/",
      isActive: pathname.includes("/"),
    },
    {
      title: "Transactions",
      url: "/transactions",
      isActive: pathname.includes("/transactions"),
    },
    {
      title: "Reports",
      url: "/reports",
      isActive:pathname.includes("/reports")
    },
    {
      title: "Settings",
      url: "/settings",
      isActive:pathname.includes("/settings")
    },
  ];
}