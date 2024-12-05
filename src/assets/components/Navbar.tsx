import { Link, useNavigate } from "react-router-dom"
import { Navigation, logo_transparent } from "../Constants"
import { useState } from "react"
import { BiChevronDown, BiChevronUp, BiMenu, BiX } from "react-icons/bi"

const Navbar = () => {
    const navigate = useNavigate()
    const [ showNav, setShowNav ] = useState(false)
    const [ currentNav, setCurrentNav ] = useState(0)
    const [ currentDropDown, setCurrentDropDown ] = useState("")
    const [ currentDropDownIndex, setCurrentDropDownIndex ] = useState(0)


    return(
        <header className={`fixed center w-full left-0 top-0 h-[10vh] md:h-[12vh] z-50 transition-all duration-1000 bg-white shad ow-xl transparent`}>
            <div className="flex items-center justify-end w-11/12 lg:w-10/12">

                <Link to="/" className="w-3/12 flex justify-start outline-none bg-g reen-800">
                    <img src={logo_transparent} alt="Edufix Logo" className="w-7/12"/>
                </Link>        

                <div className="center text-3xl lg:hidden" onClick={() => {
                    setShowNav(!showNav)
                }}>
                    {
                        showNav ? 
                        <BiX />
                        : 
                        <BiMenu />
                    }
                </div>

                <div className={`fixed w-full flex justify-center items-start transition-all duration-1000 top-[8vh] md:top-[10vh] h-screen lg:relative lg:top-0 lg:w-11/12 lg:h-fit ${showNav ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-white lg:bg-transparent`}>
                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-end betwee n transition-all duration-1000`}>
                            {
                                Navigation.map((nav, i) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-end w-fit border-b border-gray-200 lg:border-0 relative`}>

                                        <div className={`flex w-full lg:w-fit py-5 px-[5%] lg:p-0 justify-between items-center cursor-pointer ${currentNav === i ? 'text-green text-xl font-bold lg:bg-transparent lg:hover:border-b border-green' : 'text-secondary hover:bg-gray-200 lg:hover:bg-transparent border-blue lg:hover:border-b'}`} onClick={() => {
                                            if( nav.sublinks){
                                                setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title) 

                                            }else{
                                                navigate(`/${nav.link}`)
                                                setCurrentNav(i)
                                                setShowNav(false)
                                                setCurrentDropDown('')
                                            }
                                        
                                        }}>
                                            <p>{nav.title}</p>
                                            
        
                                            {nav.sublinks ?
                                            <div className="text-xl text-sec">
                                                {currentDropDown === nav.title ? 
                                                <BiChevronUp /> :
                                                <BiChevronDown />}
                                            </div>
                                            :""}
        
                                        </div>
                                        {/**** NAVS WITH SUBLINKS */}
                                        {
                                            nav.sublinks ?
                                            <div className={`flex flex-col gap-1 w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-[300px] lg:shadow-xl lg:gap-1 bg-gray-200 lg:rounded-b-lg z-0
                                            
                                            ${currentDropDown == nav.title ? 'lg:border lg:border-blue lg:border-t-0 block  mb-7 lg:top-[7vh] ' : 'h-0 lg:h-fit text-[0px] mb-0 lg:-top-[300px]'}
                                            
                                            `}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink, j) => (
                                                        <Link to={`/${nav.link}/${sublink.link}`} key={j} className={`flex gap-5 py-3 lg:py-5 bg-white hover:bg-gray-100  w-full px-8 lg:px-0 lg:p-2 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == 2 && 
                                                            currentDropDownIndex == j ? 'text-green' :
                                                            ``
                                                        }
                                                         `} onClick={() => {setShowNav(false)
                                                            setCurrentNav(i)
                                                          setCurrentDropDown('')
                                                        }}>
                                                        <p className={``}>{sublink.title}</p>
                                                    </Link>
                                                    ))
                                                }
                                            </div>  : ''
                                        }
                                    </div>
                                ))
                            }
                        </nav>
        
                    </div>
       
            </div>

            
        </header>
    )
}


export default Navbar
