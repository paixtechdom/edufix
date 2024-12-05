import { AfterHero, Content } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import { Button } from "../../assets/components/Button"
import { useEffect } from "react"
import { ScrolltoTop } from "../../App"
import { InfoPoster } from "../../assets/components/InfoPoster"
import { IoBulbSharp } from "react-icons/io5"
import { BiBook } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"
import { FaDollarSign } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FAQ } from "./sections/FAQ"

export const Branches = [
    {
        title: "Education",
    },
    {
        title: "Innovation Forge",
        sub: [
            {
                title: "CreateHive",
                desc: [
                    'CreateHive means the generation of novel ideas backed up with collective intelligence formed through the interconnectedness of individuals within a group'],
                icon: <IoBulbSharp />
            },
            {
                title: "Mycelial Network",
                desc: [
                    "Mycelial Network fosters a collaborative environment where students, faculty, industry, and community work together to share knowledge and solve problems"
                ],
                icon: <BsPeople />
            },
            {
                title: "Millioniare Mind",
                desc: [
                    'This is the last stage in the EDUCFIX skill acquisition stages. It is where there is rigorous training on how to make it with the skill and business education. '
                ],
                icon: <FaDollarSign />
            },
            {
                title: "Trainings (Seminars and Webinars)",
                desc: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt praesentium fugiat hic, ullam omnis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, harum."],
                icon: <BiBook />
            }
        ]
    },
    {
        title: "Training"
    },
    {
        title: "Computer/Tech"
    },
]


const HomePage = () => {
    useEffect(() => {
        ScrolltoTop()
    }, [])
    return(
        <main className="center flex-col bg-bg w-full mt -32 text-base">

            <Hero />
            
            <AfterHero />

            <div className="w-11/12 lg:w-10/12 center flex-col gap-3">
                <h2 className="text-4xl font-bold text-center">INNOVATION FORGE PROGRAMS</h2>
                <p className="w-11/12 lg:w-8/12 text-center">We aim to become a premier educational organization known for excellence in teaching, learning, and research. 
                </p>

                <div className="flex flex-col lg:grid lg:grid-cols-2 justify-between mt-5 gap-10">
                    {Branches[1]?.sub?.map((j, i) => (
                        <div key={i} className="flex p-7 rounded-xl flex-col w-full bg-primary bg-opacity-10 gap-3 borde r border-sec shadow-xl">
                            <p className="text-4xl text-sec">
                                {j.icon}
                            </p>
                            <h3 className="font-bold text-xl uppercase">{j.title}</h3>

                            <div className="flex flex-col gap-2">
                                {
                                    j?.desc?.map((d, i) => (
                                        <p key={i}>{d}</p>
                                    ))
                                }
                            </div>
                            <Button 
                                text={"learn more"}
                                className="bg-primary rounded-full text-white min-w-[200px] w-fit"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <section className="w-full center py-[15vh] my-[15vh] overflow-hidden relative bg-bg text-base bg-primary bg-opacity-5">
                <div className="w-11/12 lg:w-10/12 center flex-col gap-10">
                    <h2 className="text-4xl font-bold ">WHY EDUFIX</h2>
                    <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">

                        {
                            Content.map((j, i) => (
                                j.type !== "after" &&
                                <div key={i} className="flex flex-col gap-3 items-center w-full">
                                    <div className="text-sec text-5xl">
                                        {j.icon}
                                    </div>
                                    <h3 className="uppercase text-primary font-bold text-xl">{j.title}</h3>
                                    <p className="text-center">{j.desc}</p>
                                </div> 
                            ))
                        }
                    </div>
                    <Link to="/">
                        <Button 
                            text={"View Our Courses"}
                            className="bg-primary text-white h-12 min-w-[240px]"
                            />
                    </Link>
                </div>
            </section>

            <FAQ />


            <InfoPoster 
              text="experience a new approach and method implored into skill education."
            />

            
        </main>
    )
}


export default HomePage