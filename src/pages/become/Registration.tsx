import { useState } from 'react'
import { Header } from '../../assets/components/Header'
import { Button } from '../../assets/components/Button'
import { CountriesOption, InputField, RadioSelect, Select } from '../../assets/components/FormInputs'
import { setAlertMessage, setAlertType, toggleShowAlert } from '../../assets/store/AlertSlice'
import { useDispatch } from 'react-redux'
import { BiChevronDown, BiLoaderAlt } from 'react-icons/bi'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { CoursesList } from '../../assets/Constants'
import axios from 'axios'

export const Registration = () => {
    const dispatch = useDispatch()


    const [ loading, setLoading ] = useState(false)
    const [ emptyFieldsError, setEmptyFieldsError ] = useState(false)
    const [ formInputs, setFormInputs ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        phoneNumber: "",
        country: "",
        course: ""

    })
    const [ showCountries, setShowCountries ] = useState(false)
    const [ searchInput, setSearchInput ] = useState('')
    const [ showPopUp, setShowPopUp ] = useState("")

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
        const subject = 'Important! New Student Registration'
        console.log(cleanedInputs)
        sendContactEmail(subject)        

    }



    const sendContactEmail = (subject:string) => {
        cleanedInputs.subject = subject
        axios.post(`http://localhost:80/api/registrationemail.php`, {
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
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            age: "",
            phoneNumber: "",
            country: "",
            course: ""
        })
    }



  return (
    <section className="flex flex-col gap-10 mt-32">
        <Header 
            text={
                <h2 className="uppercase text-3xl font-bold bg-clip-text bg-gradient-to-r from-primary to-sec  text-transparent w-fit ">REGISTRATION</h2>
            }
        />

        <div className="w-full lg:w-10/12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-9/12 lg:w-9/12 xl:w-8/12 bg-primary bg-opacity-5 shadow-xl px-7 md:px-9 p-9 rounded-2xl py-[5vh]">
                <InputField 
                    label="First Name"
                    name="firstName"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.firstName}
                />
                <InputField 
                    label="Last Name"
                    name="lastName"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.lastName}
                />
                <RadioSelect 
                    options={["Male", "Female", "Rather Not say"]}
                    formInputs={formInputs}
                    label={"Gender"}
                    name={"gender"}
                    setFormInputs={setFormInputs}
                />
                <InputField 
                    label="Age"
                    name="age"
                    handleChange={handleChange}
                    type="string"
                    value={formInputs.age}
                />
                <InputField 
                    label="Email Address"
                    name="email"
                    handleChange={handleChange}
                    type="email"
                    value={formInputs.email}
                />
                <InputField 
                    label="Phone Number"
                    name="phoneNumber"
                    handleChange={handleChange}
                    type="tel"
                    value={formInputs.phoneNumber}
                />
                
                <InputField 
                    label="Select Country"
                    name="country"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.country}
                    isReadonly={true}
                    func={() => {
                        setShowPopUp('')
                        setShowCountries(true)
                    }}
                    icon={
                        <BiChevronDown className="text-4xl mr-4"/>
                    }
                >
                    <CountriesOption 
                        setFormInputs={setFormInputs}
                        setShowCountries={setShowCountries} 
                        showCountries={showCountries}                         
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        formInputs={formInputs}
                    />
                </InputField>

                <InputField 
                    label="Select Course"
                    name="course"
                    handleChange={handleChange}
                    type="text"
                    value={formInputs.course}
                    isReadonly={true}
                    func={() => {
                        setShowCountries(false)
                        setShowPopUp("course")
                    }}
                    icon={
                        <BiChevronDown className="text-4xl mr-4"/>
                    }
                >

                    <Select 
                        options={CoursesList.map((a) => a.title)}
                        showPopUp={showPopUp}
                        setShowPopUp={setShowPopUp}
                        formInputs={formInputs}
                        name={"course"}
                        label={"Select Course"}
                    
                    />
                
                </InputField>

                {emptyFieldsError ? 
                    <div className="text-red-900 text-lg flex gap-2 items-center col-span-2"><BsExclamationCircleFill /> Please, fill out all fields
                    </div> 
                    : ""
                }
            
                <div className="mt-5" onClick={(e) => !loading && handleSubmit(e)}>
                    <Button 
                        text={loading ? 
                            <>
                                <span>Submitting</span>
                                <BiLoaderAlt className="animate-spin ml-2 text-xl" />
                            </> 
                            : <>Submit</>
                        }
                        className='bg-primary text-white transition-all duration-1000 hover:scale-90 active:scale-90 min-w-[200px] h-12'
                    />
                </div>


            </form>
                
        </div>

    </section>
  )
}
