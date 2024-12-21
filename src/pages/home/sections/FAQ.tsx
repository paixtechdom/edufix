import { useState } from "react"
import { Questions } from "../../../assets/Constants"
import { BiMinus, BiPlus } from "react-icons/bi"


export const FAQ = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    // react-helmet-async 
    return(
        <section id="FAQ" className="center flex-col py-[9ch] w-full">   
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 overflow-hidden gap-10">
                <h2 className="text-3xl mb-[7vh] lg:w-4/12 font-bold text-primary">COMMON QUESTIONS STUDENTS ARE ASKING US</h2>
           

            
                <div className="center flex-col w-full gap-9 lg:w-8/12">
                    {
                        Questions.map((question, i) => (
                            <div key={i} className={`flex gap-2 h-full w-full `}>
                                  

                                <div className={`flex flex-col w-full gap-3 border-b border-sec p- 4 overflow-hidden h-fit`}>
                                    <div className="flex justify-between items-start g ap-9 cursor-pointer w-full z-20"
                                        onClick={() => setCurrentQuestion(i == currentQuestion ? 0 : i)}> 
                                        <h3 className="font-bold text-xl">
                                            {question.title}
                                        </h3>
                                        
                                        {currentQuestion == i ? 
                                            <BiMinus className="cursor-pointer text-2xl"/> 
                                            : <BiPlus className="cursor-pointer text-2xl"/>
                                        }
                                        
                                    </div>


                                    <p className={`text-zinc-950 tracking-wide leading-relaxed text-[15px] transition-all duration-500 bg-primary bg-opacity-10 px-5 ${currentQuestion == i ? 'py-5' : 'h-0'}`}>{question.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>

        </section>
    )
}


