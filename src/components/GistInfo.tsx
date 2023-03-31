import shiki from 'shiki'
import { Code } from './Code'
interface GistProps{
    GistURL: string
    lang: string
}
export default async function GistInfo({GistURL, lang}: GistProps) {
    const response = await fetch(GistURL)
    const responseToTxt = await response.text()

    const Highlight = await shiki.getHighlighter({
        theme:'rose-pine-moon'
    })

    const code = Highlight.codeToHtml(responseToTxt, {lang})

  return (
    <div className='flex flex-1 scrollbar-thin scrollbar-thumb-[#2b2838] scrollbar-track-inherit overflow-y-scroll h-[95%]'>
      <Code code={code}/>
    </div>
  )
}
