import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneOutboundFill } from "react-icons/bs"
import { ContactInfoInterface } from "../Interfaces"



export const ContactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: '+234 803 401 8954',
        link: "tel:+2348034018954"
    },
    {
        icon: <BsEnvelopeFill />,
        contact: 'donatexdiagnostics@gmail.com',
        link: "mailto:donatexdiagnostics@gmail.com"
    },
    {
        icon: <BsGeoAltFill />,
        contact: 'RW8G+Q4C, Apebi Street, Ijebu Ode 120101, Ogun State',
        link: "#"
    },
]




const Footer = () => {
    return(
        <footer className="w-full center bg-primary pt-[10vh] pb-[5vh] lg:py-[5vh] text-white mt-9">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-12 text-
            -200">

                <div className="w-fit ull justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit">Copyright © {new Date().getFullYear()}</p>

                    <p className="w-full lg:w-fit">All Rights Reserved</p>
                </div>

                {/* <a href="https://paixtechdom.com" className="text-center">Developed by <strong> Paix Techdom</strong></a> */}
            </div>
        </footer>
    )
}

export default Footer