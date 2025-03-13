"use client";
// libs
import Link from "next/link";

// components
import ComponentPlaceholder from "../ui/ComponentPlaceholder";

function Sidebar() {
  const route = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Other Dashboard", link: "/dashboard/other" },
  ];
  return (
    <ComponentPlaceholder
      height="100%"
      width="35%"
      textColor="text-purple-900"
      backgroundColor="bg-purple-200"
    >
      <div className="w-full h-full flex flex-col p-5 gap-2 bg-purple-200 rounded-lg">
        {route.map((item, index) => (
          <Link
            key={index}
            className="p-5 w-full rounded-md bg-purple-300 text-purple-900 font-semibold hover:bg-purple-500"
            href={item.link}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </ComponentPlaceholder>
  );
}

export default Sidebar;
