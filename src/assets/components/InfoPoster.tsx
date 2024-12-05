import { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"

export const InfoPoster:FC<any> = ({text}) => {
  return (
    <section className="w-full center min-h-[40vh] py-9 bg-primary bg-opacity-5 shadow-xl relative overflow-hidden">
      
        <div className="w-11/12 lg:w-10/12 center flex-col text-center gap-10">
            <h3 className="text-3xl font-bold uppercase w-11/12 lg:w-9/12">{text}</h3>

            <Link to="/">
                <Button 
                    text={"APPLY NOW"}
                    className="bg-primary text-white min-w-[200px] h-12"
                />
            </Link>
        </div>

    </section>
  )
}

