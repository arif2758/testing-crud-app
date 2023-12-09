"use client"
import { IoHomeOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links:any = [
  { name: "GTCoding", href: "/", icon: IoHomeOutline },
  { name: "Add Topic", href: "/addTopic", icon: IoMdAddCircleOutline,},
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link:any) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex justify-between items-center gap-2 rounded-md bg-gray-50 p-3 mb-4 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block"> {link.name} </p>
          </Link>
        );
      })}
    </>
  );
}

