import Link from "next/link";
import { ReactNode } from "react";

interface FileProps {
  href: string;
  title: string;
  children: ReactNode;
}

export function File({ href, children, title }: FileProps) {
  return (
    <Link
      href={{ pathname: href, query: title }}
      as={href}
      className="flex items-center gap-2 w-full hover:bg-[#2f2b46] pl-10 p-1 group"
    >
      {children}
      <p className="text-sm text-[#908caa] group-hover:text-white">{title}</p>
    </Link>
  );
}
