import { FC, useEffect, useState } from "react"
import { BiX } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { countries } from "../Constants"

export interface InputFieldInterface {
    label: string,
    type: string,
    name: string,
    className?: string
    handleChange: Function,
    value: string | number,
    placeholder?: string,
    formInputs?: string,
    children?: JSX.Element,
    isReadonly?: boolean, 
    func?: Function, 
    icon?:JSX.Element
}


// ******************* INPUT FIELD************************//



export const InputField:FC<InputFieldInterface> = ({type, label, className, handleChange, name, value, children, isReadonly, func, placeholder, icon }) => {
    return(
        <div id={name} className={`flex flex-col w-full gap-2 ${className} relative`}>
            <label htmlFor={label} className={`${value !== "" ? "text-primary" : "text-zinc-900"} font-bold text-sm`}>
                {label}
            </label>

            <div className={`flex rounded-full  w-full items-center relative shadow-xl b order border-sec ${value !== "" ? "" : ""} cursor-pointer
                 ${func ? 'cursor-pointer' : ''} overflow-hidden`} onClick={() => func && func()}>
                     
                    <input 
                        type={type}
                        onChange={(e) => handleChange(e)}
                        name={name}
                        required
                        value={value}
                        readOnly={isReadonly}
                        placeholder={placeholder}
                        className={`bg-white border-none w-full outline-none py-[12px] px-5 text-black ${func && children !== undefined ? 'cursor-pointer' : ''}`}
                    />

                    {icon}
            </div>



            {children}
        </div>
    )
}



// *************** SELECT OPTIONS **************************//
interface selectInterface {
    options?: any[],
    showPopUp?: string,
    setShowPopUp?: any, 
    formInputs?: any,
    name: string,
    label: string,
    gridDisplay?: string
}


export const Select:FC<selectInterface> = ({setShowPopUp, showPopUp, options, formInputs, name, label, gridDisplay}) => {
   
    return(
            <div className={`absolute w-full flex flex-col border border-primary border-opacity-30 shadow-xl rounded-xl h-fit transition-all duration-500 ${showPopUp == name ? 'z-20' : '-z-10 opacity-[0] scale-[0.8] translate-y-32'} max-h-[70vh] overflow-y-auto`}>

                <div className="w-full flex justify-between items-center cursor-pointer sticky top-0 bg-white z-20 px-12 p-9" onClick={() => {setShowPopUp(false)}}>
                    <label htmlFor={label} className="font-bold text-primary text-xl">
                        {label}
                    </label>
                    <BiX className="text-3xl size-8 btn"/>
                </div>

                <div className={`${gridDisplay ? `grid grid-cols-5` : "flex flex-col"}  gap-3 w-full p-9 bg-white bg-opacity-50 backdrop-blur-3xl`}>

                    {
                        options?.map((o, i) => (
                            <div key={i} className={`py-3 border border-primary border-opacity-30 px-5 w-full rounded-full cursor-pointer hover:bg-primary hover:text-white active:text-white transition-all duration-500 active:bg-primary ${formInputs[name] == o ? "bg-primary text-white" : ""}`} onClick={() => {
                                formInputs[name] = o
                                setShowPopUp('')
                            }}>
                                {o}
                            </div>
                        ))
                    }

                </div>
            </div>
    )
}




// ************* RADIO BUTTONS *************************

interface radioSelectInterface {
    options: string[]
    formInputs?:any
    label: string
    name: string,
    setFormInputs: any
}
export const RadioSelect:FC<radioSelectInterface> = ({options, formInputs, label, name, setFormInputs }) => {
    return(
        <div className={`flex flex-col w-full gap-2 relative`}>
            <label htmlFor={label} className={`${formInputs[name] !== "" ? "text-tertiary" : "text-zinc-900"} font-bold text-sm`}>
                {label}
            </label>
            <div className="flex flex-col gap-2">
                {
                    options.map((o, i) => (
                        <div key={i} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                            setFormInputs({
                                ...formInputs, 
                                [name]: o
                            })
                         }}>
                            <div className={`size-5 transition-ll duration-1000 rounded-full border border-sec ${formInputs[name] == o ? "bg-sec" : ""}`}></div>
                            <span className={`${formInputs[name] == o ? "font-bold" : "last:"}`}>{o}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


// ************SELECT COUNTRIES ***************************//




export const CountriesOption:FC<any> = ({setFormInputs, setShowCountries, showCountries, searchInput, setSearchInput, formInputs }) => {
    const [ Countries, setCountries ] = useState<any>([])

    useEffect(() => {
        const newCountriesList = countries.filter((c) => c.country.toLowerCase().includes(searchInput.toLowerCase()))

        setCountries(newCountriesList)
    }, [searchInput])

    return(
            <div className={`absolute w-full z-20 flex flex-col shadow-xl rounded-xl h-fit gap-6 transition-all duration-500 max-h-[70vh] overflow-y-scroll border border-primary border-opacity-50 ${showCountries ? '' : 'opacity-[0] scale-[0]'}`}>

            <div className={`w-full center flex-col bg-white bg-opacity-50 backdrop-blur-3xl h-fit gap-6`}>
                <div className="text-sm w-full flex flex-col  justify-between items-center cursor-pointer sticky top-0 bg-white z-20 gap-4 px-9 pt-9 pb-4" >
                    <div className="flex justify-between items-center w-full font-bold text-xl text-primary" onClick={() => {
                    setShowCountries(false)
                }}>
                        Select Country
                        <BiX className="text-3xl"/>
                    </div>
                    <div className="flex bg-primary bg-opacity-20 w-full rounded-full shadow-xl overflow-hidden border-opacity-40">
                        <div className="p-3">
                            <BsSearch className="text-lg text-zinc-900"/>
                        </div>
                        <input type="text"  placeholder="Search Countries" 
                        className="bg-transparent outline-none w-full p-3" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

                    </div>

                </div>

                <div className="flex flex-col gap-3 w-full px-9 pb-9">

                    {
                        Countries.map((c:any, i:number) => (
                            <div key={i} className={`py-3 border border-primary px-5 w-full rounded-full border-opacity-30 text-sm cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 active:bg-primary active:text-white flex items-center gap-3  ${formInputs["country"] == c.country ? "bg-primary text-white" : ""}`} onClick={() => {
                                setFormInputs({
                                    ...formInputs,
                                    ["country"]: c.country
                                })
                                setShowCountries(false)
                            }}> 
                                <i className={c.flag}></i>
                                {c.country}
                            </div>
                        ))
                    }
                    {
                        Countries.length == 0 ? 
                        <p className="text-sm">Not Found</p> : ''
                    }

                </div>
            </div>
            </div>
    )
}