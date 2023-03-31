import { LucideIcon, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps{
  name: string,
  Icon: LucideIcon
}
export default function Header({name, Icon}:HeaderProps) {
  return (
    <div className="flex gap-2 pl-2 items-center bg-[#2f2b46] hover:bg-[#383353] p-1 cursor-pointer w-min">
        <Icon size={16} className="stroke-white"/>
        <p className="text-white text-xs">{name}</p>
        <Link href={'/'}>
            <X size={16} className="hover:bg-[#221f31] stroke-white"/>
        </Link>
    </div>
  )
}
