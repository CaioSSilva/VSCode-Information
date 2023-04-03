"use client"
import { Clipboard } from "lucide-react";

interface CopyProps{
    code:string
}
export default function CopyBtn({code}:CopyProps) {
    function Copy(){
        navigator.clipboard.writeText(code)
    }
    return (
        <div className=" w-32 h-10 bg-[#232135] flex justify-around items-center rounded-md hover:bg-[#383353] cursor-pointer m-3 group p-3 gap-3" onClick={()=>Copy()}>
            <Clipboard className="stroke-[#908caa] group-hover:stroke-white" size={18}/>
            <p className="text-sm text-[#908caa] group-hover:text-white">Copy text</p>
        </div>
    );
}