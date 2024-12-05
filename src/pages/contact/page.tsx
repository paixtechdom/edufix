import { FC, useEffect } from "react"
import { ScrolltoTop } from "../../App"
import { Dogs } from "../../assets/Constants"
import { Button } from "../../assets/components/Button"




const ContactPage = () => {

    useEffect(() => {
        ScrolltoTop()
    }, [])

    return(
        <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-white bg-bg text-base">


            <div className="w-11/12 lg:w-10/12 center flex-col gap-9 text-primary">

                <h1 className="text-4xl uppercase mb-3">
                    Contact Us
                </h1>                

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-7 w-full">

                    <FormInput 
                        name={"name"}
                        label={'Name'}
                    />

                    <FormInput 
                        label={"Phone Number"}
                        name={'phone_number'}
                    />

                    <FormInput 
                        name={"Location"}
                        label={"Location"}
                    />
                   
                    <div className="flex flex-col w-full">
                        <label htmlFor="dog" className="px-2">Select Dog</label>

                        <select name="dog" id="" className="bg-zinc-300 h-12 rounded px-3 outline-none">
                            <option value={undefined}>--Select</option>
                            {
                                Dogs.map((dog, i) => (
                                    <option key={i} value={dog.name}>{dog.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <Button 
                        text={"Submit"}
                        className="bg-primary text-white uppercase text-xl"
                    />

                </div>

            </div>

        </main>
    )
}


export default ContactPage


export const FormInput:FC<any> = ({label, name}) => {
    return(
        <div className="flex flex-col w-full">
            <label htmlFor={name} className="px-2">{label}</label>
            <input type="text" className="w-full outline-none bg-zinc-100 text-black h-12 px-4 rounded"/>
        </div>
    )
}