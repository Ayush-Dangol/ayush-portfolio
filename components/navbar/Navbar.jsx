import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: "",
  },
  {
    id: 1,
    title: "My Notes",
    url: "/dashboard/myNotes",
    icon: "",
  },
  {
    id: 1,
    title: "My To DOs",
    url: "/dashboard/myToDos",
    icon: "",
  },
];

const Navbar = () => {
  return (
    <div>
      {links.map((item) => {
        return (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
