"use client"
import React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ReactNode, useState} from 'react'
import { ChevronDown, ChevronRight, FolderIcon, FolderOpen } from 'lucide-react'

interface FolderProps {
    title: string,
    children: ReactNode,
    defaultOpen: boolean
}
export function Folder({title, children, defaultOpen} : FolderProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger className='flex items-center gap-2 w-full hover:bg-[#2f2b46] p-1 group'>
            {open ? <ChevronDown size={20} className='stroke-[#908caa] group-hover:stroke-white'/> : <ChevronRight size={20} className='stroke-[#908caa] group-hover:stroke-white'/>}

            {open ? <FolderOpen size={18} className='stroke-[#908caa] group-hover:stroke-white'/>: <FolderIcon size={18} className='stroke-[#908caa] group-hover:stroke-white'/>}

            <p className='text-sm text-[#908caa]  group-hover:text-white'>{title}</p>
        </Collapsible.Trigger>

        <Collapsible.Content>
          {children}
        </Collapsible.Content>
    </Collapsible.Root>
  )
}
