import { FC } from "react"

export const Header:FC<any> = ({text}) => {
    return(
        <div className="flex bg-red-30 0 h-full gap-3">
                
                <div className="rounded-lg center w-3 bg-sec border border-sec overflow-hidden relative">
                    <div className="h-full w-3 rounded-full bg-white transition-all duration-500 animate-bounce absolute top-0"></div>
                </div>
                <div className="bg-clip-text bg-gradient-to-r from-primary to-sec  text-transparent w-fit font-bold uppercase">
                    {text}
                </div>
        </div>
    )
}