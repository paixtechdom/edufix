import { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"

export const InfoPoster:FC<any> = ({text, btn}) => {
  return (
    <section className="w-full center min-h-[40vh] py-9 bg-primary bg-opacity-[0.01] shadow-xl relative overflow-hidden">
      
        <div className="w-11/12 lg:w-10/12 center flex-col text-center gap-10">
            <h3 className="text-2xl md:text-3xl font-bold w-11/12 lg:w-9/12">{text}</h3>
            
            {
              btn ?
              btn 
              :
              <Link to="/become-a-createhive">
                  <Button 
                      text={"APPLY NOW"}
                      className="border border-sec transition-all duration-1000 hover:scale-90 active:scale-90 min-w-[200px] h-12"
                  />
              </Link>
            }
        </div>

    </section>
  )
}

