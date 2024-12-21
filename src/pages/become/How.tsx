import { Button } from "../../assets/components/Button"
import img from "../../assets/images/pexels-hai-nguyen-825252-1699419.jpg"
export const How = () => {

    const steps = [
        {
            title: 'Select a program',
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam obcaecati aperiam earum. Et nihil assumenda ducimus, ullam numquam, commodi facilis dolores sequi blanditiis dolorum maxime vero quos, dignissimos consequuntur quia."
        },
        {
            title: 'Follow the online registration process',
            desc: "Provide basic information Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam obcaecati aperiam earum. Et nihil assumenda ducimus, ullam numquam, commodi facilis dolores sequi blanditiis dolorum maxime vero quos, dignissimos consequuntur quia."
        },
        {
            title: 'Get started ...',
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam obcaecati aperiam earum. Et nihil assumenda ducimus, ullam numquam, commodi facilis dolores sequi blanditiis dolorum maxime vero quos, dignissimos consequuntur quia."
        },
    ]
    return(
        <div className="w-full center flex-col overflow-hidden gap-[5vh]">
            
            <div id='How' className="center w-full flex-col overflow-hidden">
                <h2 className="text-primary uppercase text-2xl mb-3 font-bold tracking-wide">How to be a Student </h2>

                <div className="font-bold text-xl text-black text-center mb-12">
                    Follow this simple steps to
                </div>

                <div className="flex flex-col lg:flex-row gap-[50px] overflow-hidden">
                    <div className="center bg-blue- 300 w-full lg:w-6/12 bg-red-20 0 overflow-hidden"> 
                            <div className="absolute h-[300px] w-[300px] md:h-[530px] md:w-[530px] rounded-full border border-sec">

                            </div>
                        <div className="center rounded-xl h-[250px] md:h-[480px] w-[250px] md:w-[450px] overflow-hidden relative">

                            <div className="center overflow-hidden h-full w-[450px] md:w-[800px] z-10 absolute rounded-xl">

                                <img
                                src={img}
                                alt="How it works image" 
                                className='w-full h-full md:h -[480px] object-contain '
                                />

                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col w-full lg:w-6/12 ">
                        <div className="flex flex-col h-full w-full md:w- 10/12">
                            {
                                steps.map((step, i) => (
                                    <div key={i} className={`flex gap-4 md:gap-5 h-full mb-2`}>
                                        <div className={`flex flex-col items-center lg:h-full w-1/12 gap-1`}>
                                            <p className="bg-primary text-white h-8 w-8 center rounded-full">{i+1}</p>

                                            <div className="border-l border-dashed border-sec h-4/5 w-[1px]"></div>
                                        </div>


                                        <div className={`flex flex-col w-full gap-`}>
                                            <h3 className="text-black text-xl font-bold">
                                                {step.title}
                                            </h3>
                                            <p className='text-sm tracking-wide leading-relaxed'>{step.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="mt-5"></div>

                            <div 
                            onClick={() => {
                                document.querySelector('#registrationForm')?.scrollIntoView({
                                    behavior: "smooth"
                                })
                                }}>
                                <Button text={'Get Started'} className={'w-[200px] bg-primary text-white h-14 py- 3'}/>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

