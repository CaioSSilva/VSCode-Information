import { JetBrains_Mono } from "next/font/google";

const JetBrainsMono = JetBrains_Mono({subsets:['latin']})

interface CodeProps{
    code: string
}

export function Code ({code}:CodeProps){
    return(
        <div
            id="shinki-code"
            style={JetBrainsMono.style}
            className=""
            dangerouslySetInnerHTML={{__html:code}}
        ></div>
    )
}