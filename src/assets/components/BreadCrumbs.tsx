import { Link } from "react-router-dom"
import { FC } from "react"
import { BiChevronRight } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setCurrentDropDown } from "../store/navigation/navigationSlice"

export const BreadCrumbs:FC<any> = ({links}) => {
    const dispatch = useDispatch()


    return(
        <section className="w-full center mt-[10vh] ">
            <div className="border border-sec bg-opacity-5 w-11/12 lg:w-10/12 xl:w-9/12 flex justify-start items-center gap-3 p-9 py-4 lg:pl-[50px] rounded-full mb-[10vh] flex-wrap">
                {
                    links.map((link : any, i : number) => (
                        i !== links.length - 1 ?
                        <Link key={i} to={`/${i == 0 ? "" : link}`} className="text-sm text-blue flex items-center gap-1" onClick={() => {
                            dispatch(setCurrentDropDown(""))
                        }}>
                            {link}
                            <BiChevronRight className="text-primary"/>
                        </Link>  :
                        <div key={i} className="text-primary font-bold cursor-pointer">
                            {link}
                        </div> 
                    ))
                }
            </div>
        </section>
    )
}