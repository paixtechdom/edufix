import { Link } from "react-router-dom"
import { Button } from "../../../assets/components/Button"
import { logo_transparentII } from "../../../assets/Constants"



export const Hero = () => {
    return(
        <section className="min-h-screen h-fit w-full center"> 
            <div className="mt-20 lg:mt-0 w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-between gap-20">
                <div className="flex flex-col gap-4 w-full lg:w-7/12">
                    <h1 className="text-6xl font-bold ">
                        <span className="text-4xl bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent">
                            EDUFIX:
                        </span>
                         <br /> 
                        THE INNOVATION FORGE
                    </h1>
                    <p className="text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, fugit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique harum corrupti sint incidunt optio, saepe facilis totam aut minus possimus nesciunt laboriosam nemo inventore. Molestiae at aperiam blanditiis quam.
                    </p>
                    <Link to="/">
                        <Button 
                            text={"APPLY NOW"}
                            className="bg-primary text-white h-12 w-52"
                        />
                    </Link>
                </div>

                <div className="center lg:w-4/12">
                    <img src={logo_transparentII} alt="Logo" className="w-full h-full object-cover"/>
                </div>

            </div>        
        </section>      
    )
}