import { Link, useNavigate } from "react-router-dom"
import { Navigation, logo_transparent } from "../Constants"
import { useEffect } from "react"
import { BiChevronDown, BiChevronUp, BiMenu, BiX } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/AppStore"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav, toggleShowNav } from "../store/navigation/navigationSlice" 


const Navbar = () => {
    const navigate = useNavigate()
    const navigation = useSelector((state: RootState) => state.navigation)
    const dispatch = useDispatch()
    const currentNav = navigation.currentNav
    const showNavbar = navigation.showNavbar
    const currentDropDown = navigation.currentDropDown
    const scrolledDown = navigation.scrolledDown

    const currentDropDownIndex = navigation.currentDropDownIndex

    
    useEffect(() => {

        Navigation.forEach((nav, i) => {
            if(document.URL.toLowerCase().includes(nav.link.toLowerCase()) ){
                dispatch(setCurrentNav(i))
                if(i == 1){
                    Navigation[i].sublinks?.forEach((sub, j) => {

                        if(document.URL.toLowerCase().includes(sub.link.toLowerCase())) {
                            dispatch(setCurrentDropDownIndex(j))
                        }
                    })
                }
            }        
                    
        })
        scrollTo({
            top: 0,
            behavior: "smooth" 
        })

    }, [document.URL])

    return(
        <header className={`fixed center w-full left-0 top-0 h-[10vh] md:h-[12vh] z-50 transition-all duration-1000 ${scrolledDown ? "bg-whit e shadow shadow-sec" : "bg-transparent"} `}>
            <div className="flex items-center justify-end w-11/12 lg:w-10/12">

                <Link to="/" className="w-full lg:w-3/12 flex justify-start outline-none">
                    <img src={logo_transparent} alt="Edufix Logo" className="w-6/12 lg:w-7/12"/>
                </Link>        

                <div className="flex items-center justify-end text-3xl lg:hidden w-full cursor-pointer" onClick={() => {
                    dispatch(toggleShowNav())
                }}>
                    {
                        showNavbar ? 
                        <BiX />
                        : 
                        <BiMenu />
                    }
                </div>

                <div className={`fixed w-full flex justify-center items-start transition-all duration-1000 top-[8vh] md:top-[10vh] h-scre en lg:relative lg:top-0 lg:w-11/12 lg:h-fit ${showNavbar ? ' left-0 z-40' : '-left-[100%] lg:-left-0'} bg-white lg:bg-transparent`}>

                        <nav className={`flex flex-col lg:flex-row items-center w-full h-screen lg:gap-9 lg:h-fit lg:bg-transparent lg:justify-end betwee n transition-all duration-1000`}>
                            {
                                Navigation.map((nav, i) => (
                                    <div key={i} className={`flex flex-col transition-all duration-1000 justify-end w-full lg:w-fit border-b border-gray-200 lg:border-0 relative`}>

                                        <div className={`flex w-full lg:w-fit py-5 px-[5%] lg:p-0 justify-between items-center cursor-pointer ${currentNav === i ? 'text-green font-bold lg:bg-transparent lg:hover:border-b border-sec' : 'text-secondary hover:bg-sec lg:hover:bg-transparent border-sec lg:hover:border-b'}`} onClick={() => {
                                            if( nav.sublinks){
                                                dispatch(setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title) )

                                            }else{
                                                navigate(`/${nav.link}`)
                                                dispatch(setCurrentNav(i))
                                                dispatch(toggleShowNav())
                                                dispatch(setCurrentDropDown(''))
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
                                            <div className={`flex flex-col gap-1 w-full overflow-hidden transition-all duration-200 lg:duration-1000 lg:absolute lg:min-w-fit lg:shadow-xl lg:gap-1 bg-gray-200 z-0 ${currentDropDown == nav.title ? 'lg:border lg:border-blue lg:border-t-0 block  mb-7 lg:top-[7vh] ' : 'h-0 lg:h-fit text-[0px] mb-0 lg:-top-[300px]'}
                                            
                                            `}>
        
                                                {   
                                                    nav?.sublinks?.map((sublink, j) => (
                                                        <Link to={`/${nav.link}/${sublink.link}`} key={j} className={`flex gap-5 py-3 lg:py-4 bg-white hover:bg-primary hover:bg-opacity-10  w-full px-8 lg:px-6 text-sm transition-all duration-500
                                                        ${
                                                            currentNav == 1 && 
                                                            currentDropDownIndex == j ? 'text-primary font-bold' :
                                                            ``
                                                        }
                                                         `} 
                                                         onClick={() => {
                                                            dispatch(toggleShowNav())
                                                            dispatch(setCurrentNav(i))
                                                            dispatch(setCurrentDropDown(''))
                                                            dispatch(setCurrentDropDownIndex(j))
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
