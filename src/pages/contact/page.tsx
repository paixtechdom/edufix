import { useState } from "react"
import { InputField } from "../../assets/components/FormInputs"
import { Button } from "../../assets/components/Button"
import { useDispatch } from "react-redux"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../assets/store/AlertSlice"
import axios from "axios"
import { BsExclamationCircleFill } from "react-icons/bs"
import { BiLoaderAlt } from "react-icons/bi"
import { Helmet } from "react-helmet-async"
import { Header } from "../../assets/components/Header"



const ContactPage = () => {
    const [ loading, setLoading ] = useState(false)
    const [ emptyFieldsError, setEmptyFieldsError ] = useState(false)
    const dispatch = useDispatch()
    const [ formInputs, setFormInputs ] = useState({
        fullName: "",
        email: "",
        message: ""
    })


    const cleanedInputs = Object.fromEntries(
        Object.entries(formInputs).map(([key, value]) => [key, value.replace(/\s+/g, ' ').trim()])
    );

    const handleChange = (e: any) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value.replace(/\n/g, '<br>')
        })
    }

    const handleSubmit = (e : any) => {
        e.preventDefault()
        setLoading(true)
       
        const isEmpty = Object.values(cleanedInputs).some(value => value === "");
        if (isEmpty) {
            setEmptyFieldsError(true)
            setLoading(false)
            document.querySelector(`form`)?.scrollIntoView({
                behavior: "smooth"
            })         
            dispatch(toggleShowAlert(true))
            dispatch(setAlertMessage("Please, fill out all fields!"))
            dispatch(setAlertType("error"))
            return;
        }
        setEmptyFieldsError(false)
        cleanedInputs['subject'] = 'Message from ' + cleanedInputs.fullName + ' to Cloud Transio'
        sendContactEmail()        

    }



    const sendContactEmail = () => {
        
        console.log(cleanedInputs.message)

        cleanedInputs['message'] = cleanedInputs.message.replace(/\n/g, '<br>')

        console.log(cleanedInputs.message)
         


        axios.post(`http://localhost:80/api/contactemail.php`, {
            data: cleanedInputs
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
                if(response.data.success == true){
                    dispatch(setAlertType("success"))
                    dispatch(toggleShowAlert(true))
                    dispatch(setAlertMessage("Message sent successfully!"))
                    clearForm()
                
                }else{
                    isError()
                }
            })
            .catch(() => {
                isError()
            });
            setLoading(false)
    }

    const isError = () => {
        dispatch(toggleShowAlert(true))
        dispatch(setAlertMessage("Failed to send message!"))
        dispatch(setAlertType("error"))
    }

    const clearForm = () => {
        setFormInputs({
            fullName: "",
            email: "",            
            message: "",
        })
    }

  return (
    <>  
        <Helmet>
            <title>Contact | EDUCFIX</title>
            <meta name="description" content="" />
        </Helmet>

        <main className='w-full min-h-screen center py-[15vh]'>
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-9 text-white">
            <div className="w-full mb -9">

                <Header 
                    text={
                        <h1 className="text-4xl">CONTACT US</h1>
                    }
                />
            </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-9/12 lg:w-9/12 xl:w-8/12 bg-primary bg-opacity-5 px-3 md:px-9 p-9 rounded-2xl py-[10vh] shadow-xl">
                    <h2 className="text-2xl font-bold text-primary mb-2 uppercase">Send us a message</h2>
                           

                    <InputField 
                        label="Full Name"
                        name="fullName"
                        handleChange={handleChange}
                        type="text"
                        value={formInputs.fullName}
                    />
                    <InputField 
                        label="Email Address"
                        name="email"
                        handleChange={handleChange}
                        type="email"
                        value={formInputs.email}
                    />

                    <div className={`flex flex-col w-full gap-2 relative`}>
                        <label htmlFor={"Message"} className={`${formInputs.message !== "" ? "text-primary" : "text-zinc-900"} text-sm font-bold`}>
                            Message                       
                        </label>

                        <div className={`flex rounded-3xl w-full items-center relative ${formInputs.message !== "" ? "" : "text-zinc-900"}  cursor-pointer overflow-hidden min-h-[20vh] h-[20vh] shadow-2xl`}>
                            <textarea 
                                onChange={handleChange}
                                name={'message'}
                                required
                                value={formInputs.message}   

                                className={`bg-white border-none w-full h-full outline-none p-3 text-black`}
                            ></textarea>
                        </div>
                    </div>

                    {emptyFieldsError ? 
                        <div className="text-red-900 text-lg flex gap-2 items-center col-span-2"><BsExclamationCircleFill /> Please, fill out all fields
                        </div> 
                        : ""
                    }

                    <div className="mt-5" onClick={(e) => !loading && handleSubmit(e)}>
                        <Button 
                            text={loading ? 
                                <>
                                    <span>Sending</span>
                                    <BiLoaderAlt className="animate-spin ml-2 text-xl" />
                                </> 
                                : <>Send</>
                            }
                            className='bg-primary text-white transition-all duration-1000 hover:scale-90 active:scale-90 min-w-[200px] h-12'
                        />
                    </div>
                </form>
           


            </div>       
        </main>
    </>
  )
}

export default ContactPage