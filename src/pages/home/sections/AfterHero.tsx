import { FaHandshake } from "react-icons/fa"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { TiTime } from "react-icons/ti"
import { Link } from "react-router-dom"
import { Button } from "../../../assets/components/Button"
import { BiGlobe } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"
import { FaStar } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { setScrollPageTo } from "../../../assets/store/navigation/navigationSlice"


export const Content = [
    {
        title: "Tuition-Free",
        icon: <RiMoneyDollarCircleLine />,
        type: "",
        desc: "As a tuition-free, online university, there is no cost for instruction, books or campus fees."
    },
    {
        title: "Flexible",
        icon: <TiTime />,
        type: "",
        desc: "Since Educfix is 100% free, you can study to fit your schedule anytime, anywhere."
    },
    {
        title: "Quality",
        icon: <FaStar />,
        desc: "Educfix is an Acrcredited, Benin Online University. Our academic leadership includes scholars from top universities around the world."
    },
    {
        title: "Support",
        icon: <FaHandshake />,
        desc: "Our classes are small and every student has a Program Advisor from their first day of claseses all the way until graduation."
    },
    {
        title: "Global",
        icon: <BiGlobe />,
        desc: "With students from more than 20 countries and territories, you will learn skills to help you thrive in the global business world."
    },
    {
        title: "Expertise",
        icon: <BsPeople />,
        desc: "We are the leader in 100% online education, with more than 3 years o experience serving students around the world."
    }
]



export const AfterHero : React.FC =  () => {
    const dispatch = useDispatch()
    return(
        <>
            <section className="w-full center py-[15vh] overflow-hidden relative text-base">
                <div className="w-11/12 lg:w-10/12 center flex-col gap-10">
                    <div className="w-full flex flex-col lg:flex-row justify-center gap-10">

                        {
                            Content.map((j, i) => (
                                j.type == "after" || j.type == "" ?
                                <div key={i} className="flex flex-col gap-3 items-center w-full lg:w-4/12">
                                    <div className="text-sec text-5xl">
                                        {j.icon}
                                    </div>
                                    <h3 className="uppercase text-primary font-bold text-xl">{j.title}</h3>
                                    <p className="text-center">{j.desc}</p>
                                </div> : ""
                            ))
                        }
                    </div>
                    <Link to="/programs/createhive" 
                    onClick={() => {
                        dispatch(setScrollPageTo('courses'))
                    }}>
                        <Button 
                            text={"View Our Courses"}
                            className="bg-primary text-white h-12 min-w-[240px] hover:bg-white hover:border border-sec hover:text-black transition-all duration-500"
                            />
                    </Link>
                </div>
            </section>        
        </>
    )
}