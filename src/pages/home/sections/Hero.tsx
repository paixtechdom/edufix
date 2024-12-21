import { Link } from "react-router-dom"
import { Button } from "../../../assets/components/Button"



export const Hero = () => {
    return(
        <section className="min-h-screen bg-hero bg-center bg-fixed bg-no-repeat bg-cover h-fit w-full center py-[15vh]"> 
            <div className="lg:mt-0 w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-between gap-20">
                <div className="flex flex-col gap-4 w-full lg:w-7/12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
                        <span className="text-2xl md:text-3xl lg:text-4xl text-primary">
                        EDUCFIX Presents:
                        </span>
                         <br /> 
                         Innovation Forge – Your Paths to Success
                    </h1>
                    <p className="text-base">
                    Innovation Forge is a comprehensive online education platform offering programs in online skill development, online business education, and advanced business training, designed to empower individuals and businesses to thrive in the digital age. We equip you with the knowledge and skills needed to launch or scale your business and build a successful career.
                    </p>
                    <Link to="/become-a-createhive">
                        <Button 
                            text={"APPLY NOW"}
                            className="bg-primary text-white h-12 w-52 hover:bg-white hover:border border-sec hover:text-black transition-all duration-500"
                        />
                    </Link>
                </div>

                {/* <div className="center lg:w-4/12">
                    <img src={logo_transparentII} alt="Logo" className="w-full h-full object-cover"/>
                </div> */}

            </div>        
        </section>      
    )
}