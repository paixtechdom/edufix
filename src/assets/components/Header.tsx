import { FC } from "react"

export const Header:FC<any> = ({text}) => {
    return(
        <div className="flex bg-red-30 0 h-full gap-3">
                
                {/* <div className="rounded-lg center w-3 bg-sec border border-sec overflow-hidden relative">
                    <div className="h-full w-3 rounded-full bg-white transition-all duration-500 animate-b ounce absolute top-0"></div>
                </div> */}
                <div className="text-primary w-fit font-bold uppercase">
                    {text}
                </div>
        </div>
    )
}