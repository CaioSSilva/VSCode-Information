import GistInfo from '@/components/GistInfo'
import Header from '@/components/Header'
import { FileJson } from 'lucide-react'
import React from 'react'

export default function page() {

    const settingsURL = 'https://gist.githubusercontent.com/CaioSSilva/9e3f528d674426e9fdf13127eb9a1711/raw/24678f54297f5aa4aec5d809de1755bffb848e3e/extensions.json'
  return (
    <div className='flex-col flex-1'>
        <Header Icon={FileJson} name='extensions.json'/>
        {
            //@ts-expect-error
            <GistInfo GistURL={settingsURL} lang='json'/>
        }
    </div>
  )
}
