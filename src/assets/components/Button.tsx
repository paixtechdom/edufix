import { useNavigate } from "react-router-dom"
import { button } from "../Interfaces"
import { FC } from "react"


export const Button:FC <button> = ({text , navigateTo, className, scrollTo, icon}) => {
    const navigate = useNavigate()
    return(
       <button onClick={() => {
            if(navigateTo){
                navigate(`/${navigateTo}`)
            }else{ 
                document.querySelector(`#${scrollTo}`)?.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }}
       className={`${className} cursor-pointer p-2 uppercase px-6 rounded-full text-base`}>
        {text}
        {icon}
       </button>
    )
}