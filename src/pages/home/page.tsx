import { AfterHero, Content } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import { Button } from "../../assets/components/Button"
import { useEffect } from "react"
import { ScrolltoTop } from "../../App"
import { InfoPoster } from "../../assets/components/InfoPoster"
import { IoBulbSharp } from "react-icons/io5"
import { BsPeople } from "react-icons/bs"
import { FaDollarSign } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FAQ } from "./sections/FAQ"
import { Header } from "../../assets/components/Header"
import { useDispatch } from "react-redux"
import { setScrollPageTo } from "../../assets/store/navigation/navigationSlice"

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
                title: "Millionaire Mind",
                desc: [
                    'This is the last stage in the EDUCFIX skill acquisition stages. It is where there is rigorous training on how to make it with the skill and business education. '
                ],
                icon: <FaDollarSign />
            },
            // {
            //     title: "Trainings",
            //     desc: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt praesentium fugiat hic, ullam omnis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, harum."],
            //     icon: <BiBook />
            // }
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

    const dispatch = useDispatch()

    return(
        <main className="center flex-col w-full text-base">

            <Hero />
            
            <AfterHero />

            <div className="w-11/12 lg:w-10/12 flex flex-col gap-3 mt-[15vh]">
                <Header 
                    text={
                        <h2 className="text-4xl">THE INNOVATION FORGE PROGRAMS</h2>
                    }
                />
                <div className="flex flex-col">
                    <p>
                        Innovation Forge builds upon EDUCFIX's legacy by delivering focused, high-impact online training programs in business, advanced business strategies, and in-demand skills, equipping our students with the expertise needed to succeed.
                    </p>
                    <p className="mb-3 mt-1">
                        Our programs are designed to be practical, engaging, and effective, fostering a community of learners who are ready to make their mark in the world.
                    </p>
                    <p>
                        Innovation Forge benefits from EDUCFIX's extensive network of expert instructors and state-of-the-art learning management system, providing students with a superior learning experience.
                    </p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 justify-between mt-5 gap-16">
                    {Branches[1]?.sub?.map((j, i) => (
                        <div key={i} className="flex p-7 rounded-xl flex-col w-full bg-primary bg-opacity-5 gap-3 borde r border-sec shadow-xl">
                            <p className="text-6xl text-sec">
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
                            <Link key={i} to={`programs/${j.title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()}`}>
                            <Button 
                                text={"learn more"}
                                className="border border-sec rounded-full min-w-[180px] w-fit h-10 mt-3 text-sm transition-all duration-1000 hover:bg-primary hover:text-white active:bg-primary active:text-white hover:border-none"
                            />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <section className="w-full center py-[15vh] my-[15vh] overflow-hidden relative bg-bg text-base bg-primary bg-opacity-5">
                <div className="w-11/12 lg:w-10/12 center flex-col gap-10">
                    <Header 
                        text={
                            <h2 className="text-4xl">WHY EDUCFIX</h2>
                        }
                    />
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
                    <Link to="/programs/createhive" 
                     onClick={() => {
                        dispatch(setScrollPageTo('courses'))
                    }}>
                        <Button 
                            text={"View Our Courses"}
                            className="bg-primary text-white h-12 min-w-[240px]  hover:bg-white hover:border border-sec hover:text-black transition-all duration-500"
                            />
                    </Link>
                </div>
            </section>

            <FAQ />


            <InfoPoster 
              text="Experience a new approach and method implored into skill education."
            />

            
        </main>
    )
}


export default HomePage