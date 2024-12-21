import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { RiWhatsappFill } from "react-icons/ri"
import { CoursesList, logo_transparent, Navigation } from "../Constants"
import { Branches } from "../../pages/home/page"
import { useDispatch } from "react-redux"
import { setCurrentCourse, setScrollPageTo } from "../store/navigation/navigationSlice"

export const ContactInfo = [
    // {
    //     icon: <BsGeoAltFill />,
    //     text: "Location",
    //     contact: 'Lagos, Nigeria',
    //     link: "#"
    // },
    {
        icon: <BsEnvelopeFill className="text-sec"/>,
        text: "Email",
        contact: 'talktoeducfix@gmail.com',
        link: "mailto:talktoeducfix@gmail.com"
    },
    {
        icon: <BsTelephoneFill className="text-sec"/>,
        text: "Call",
        contact: '+229 400 527 11',
        link: "https://api.whatsapp.com/send?phone=22940052711"
    },
    {
        icon: <BsTelephoneFill className="text-sec"/>,
        text: "Call",
        contact: '+234 810 596 7311',
        link: "https://api.whatsapp.com/send?phone=2348105967311"
    },
    {
        icon: <RiWhatsappFill className="text-sec"/>,
        text: "Whatsapp",
        contact: '+234 906 647 6770,',
        link: "https://api.whatsapp.com/send?phone=2349066476770,"
    },

]


const Footer = () => {
    const dispatch = useDispatch()
    return(
        <footer className="w-full center flex-col bg-primary bg-opacity-5 pt-[10vh] lg:pt-[15vh] border-t border-sec">
            <div className="w-11/12 xl:w-10/12 flex flex-col gap-6 text-gray-900 z-10">
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-9 md:gap-9">

                    <div className="flex flex-col gap-2 ">
                        <img src={logo_transparent} alt="Company's Logo" className="w-4/12"/>                     

                        <div className="flex flex-col gap-3 mt-3">
                        {
                            ContactInfo.map((info, i) => (
                                <div key={i} className="flex flex-col gap-2 w-full">

                                    <div key={i} className="flex items-center gap-2">
                                        {info.icon}
                                        <p className="text-primary font-bold">
                                            {info.text}
                                        </p>

                                    </div>
                                    <a href={info.link} target="_blank" className="pl-6">{info.contact}</a>
                                </div>
                            ))
                        }
                        </div>
                    </div>


                    <div className={`flex flex-col gap-3 w-full 2`}>
                        <h3 className="text-black font-semibold text-lg">Courses</h3>

                        <div className="flex flex-col gap-3 text-sm text-gray-900">
                            {
                                CoursesList.map((course, i) => (
                                    <Link key={i} to={`/programs/createhive`}
                                    onClick={() => {
                                        dispatch(setScrollPageTo(course.title.replace(" ",'').replace(" ",'').replace(" ",'').replace(" ",'').replace("&",'')))
                                        dispatch(setCurrentCourse(i))
                                    }}
                                    >
                                        {course.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    
                    

                    <div className="flex flex-col gap-9">
                        <div className={`flex flex-col gap-3 w-full `}>
                            <h3 className="text-black font-semibold text-lg">Innovation Forge Programs</h3>

                            <div className="flex flex-col gap-3 text-sm text-gray-900">
                                {
                                    Branches[1].sub?.map((branch, i) => (
                                        <Link key={i} to={`programs/${branch.title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()}`}>
                                            {branch.title.replace("Easy ", "")}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={`flex flex-col gap-3 w-full `}>
                            <h3 className="text-black font-semibold text-lg">Quick Links</h3>

                            <div className="flex flex-col gap-3 text-sm text-gray-900">
                                {
                                    Navigation.map((nav, i) => (
                                        i !== 1 &&
                                        <Link key={i} to={`/${nav.link}`}>
                                            {nav.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                       
                    
                </div>

               

               

            </div>


            <div className="justify-center w-full items-center text-center flex flex-col gap-3 mt-[10vh] py-6 bg-secondary border-t border-primary text-primary">
                <p className="w-full lg:w-fit">Copyright © <strong className="font-bold">EDUCFIX</strong> {new Date().getFullYear()} </p>


                <a target="_blank" href="https://paixtechdom.com" className="">Developed By <strong>Paix Techdom</strong></a>
            </div>
        </footer>
    )
}

export default Footer