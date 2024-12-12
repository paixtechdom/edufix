import { Button } from '../../../assets/components/Button'

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
    <main className='w-full center flex-col gap-20 lg:gap-30 my-32'>
    <div className="w-11/12 lg:w-10/12 center flex-col">

        <div className="text-center center flex-col gap-5 lg:w-10/12">
            <h1 className="font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent text-4xl w-fit">
                MILLIONAIRE MIND
            </h1>

            <p className="text-lg">
              {millionaire.intro}  
            </p>

            <Button 
                text={"APPLY NOW"}
                className='bg-primary text-white h-12 min-w-[200px] w-fit'
            />
        </div>

        <div className="flex flex-col gap-3 my-12 mt-32">
          <h2 className="font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent text-2xl w-fit uppercase">
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
  )
}

export default MillionairePage