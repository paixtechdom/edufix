import { BiChevronRight } from 'react-icons/bi'
import { BreadCrumbs } from '../../../assets/components/BreadCrumbs'
import { Button } from '../../../assets/components/Button'
import { Helmet } from 'react-helmet-async'

export const millionaire = {
    intro: [
      "This is the last stage in the EDUCFIX skill acquisition stages. It is where there is rigorous training on how to make it with the skill and business education."
    ],
    eligibility: [
      "All prospective students must have a skill",
      "Working experience of the skill learnt (professional level)",
      "All prospective students must be ready to learn",
      "All prospective students must be the owner of a business",
      "All prospective students must have gone through our skill school (CREATEHIVE). Valid proof of skill acquired will be required if otherwise.",
      "A growth mindset and positive interpersonal relationship.",
      "No laziness."
    ]
  }

const MillionairePage = () => {
  return (
    <>
       <Helmet>
          <title>Millionaire Minds | EDUCFIX</title>
          <meta name="description" content="This is the last stage in the EDUCFIX skill acquisition stages. It is where there is rigorous training on how to make it with the skill and business education." />
      </Helmet>

      <main className='w-full center flex-col gap-20 lg:gap-30 my-32'>
        <div className="w-11/12 lg:w-10/12 center flex-col">

            <div className="text-center center flex-col gap-5 lg:w-10/12">
                <h1 className="font-bold text-primary text-4xl w-fit">
                    MILLIONAIRE MIND
                </h1>

                <p className="text-lg">
                  {millionaire.intro}  
                </p>

                <Button 
                    text={"learn more"}
                    className='bg-primary text-white h-12 min-w-[200px] w-fit'
                />
            </div>

            <BreadCrumbs links={["Home", <p className="center gap-3"><span className="font-light text-sm text-black center gap-3">Programs <BiChevronRight className="text-primary"/> </span>  Millionaire Mind</p>]} />  


            <div className="flex flex-col gap-3 my-12 mt-32">
              <h2 className="font-bold text-primary text-2xl w-fit uppercase">
              Eligibility
              </h2>
              <div className="flex flex-col mt-2 gap-3">
              {
                  millionaire.eligibility.map((eligibility, i) => (
                    <p key={i} className='bg-primary bg-opacity-5 p-3 w-full rounded-lg'>{eligibility}</p>
                  
                  ))
              }
              </div>
            </div>

        {/* <InfoPoster 
          text={<p className="flex flex-col gap-2">
              <span className="text-primary">Niche</span>

              {mycelial.niche}
          </p>}
        /> */}
      

        

        </div>



      </main>
    </>
  )
}

export default MillionairePage