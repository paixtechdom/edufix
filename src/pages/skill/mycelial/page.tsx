import { CgCommunity } from "react-icons/cg"
import { ImageText } from "../../../assets/components/ImageText"
import { FcPodiumWithAudience } from "react-icons/fc"
import { BreadCrumbs } from "../../../assets/components/BreadCrumbs"
import { BiChevronRight } from "react-icons/bi"
import img from "../../../assets/images/pexels-fauxels-3183197.jpg"



export const mycelial = {
  intro: [
    <p><strong>BUSINESS EDUbeCATION, called <span className="text-primary">MYCELIAL NETWORK</span> </strong>  is a powerful metaphor for interconnectedness and
    collaboration. It reminds us that everything in nature is connected, and that the
    health of one organism can influence the health of others.
    </p>,
    <p>Mycelial Network fosters a collaborative environment where students, faculty,
    industry, and community work together to share knowledge and solve problems
    </p>
  ],
  niche: "Entrepreneurs (major) and executives",
  goals: [
    {
      text: "Build a community and produce impactful leaders",
      icon: <CgCommunity />
    },
    {
      text: "Develop a strong brand that resonates with our target audience",
      icon: <FcPodiumWithAudience />
    }
  ],
  aims: [
    "To train and build leaders in the areas of business.",
    "To ensure the interconnectedness of individuals in the same niche.",
    "To provide open access to knowledge, research and data.",
    "The conversion of skills to yield great fortune and income through successful business.",
    "To create a medium where Ideas can be tested and iterated upon through collective feedback, leading to more robust and innovative outcomes."
  ],
  eligibility: [
    "All prospective students must have a skill",
    "Working experience of the skill learnt (master level)",
    "All prospective students must be ready to learn",
    "All prospective students must be the owner of a business or have one in mind",
    "All prospective students must have gone through our skill school (CREATEHIVE). Valid proof of skill acquired will be required if otherwise.",
    "A growth mindset and positive interpersonal relationship."
  ]
}
const MycelialPage = () => {
  return (
    <main className='w-full center flex-col gap-20 lg:gap-30 mb-32'>
        <div className="w-11/12 lg:w-10/12 center flex-col">
          <ImageText 
          id="mycelialhero"
          title="MYCELIAL NETWORK" 
          desc={mycelial.intro}
          img={img}  
          btn=""
          
          />
          <BreadCrumbs links={["Home", <p className="center gap-3"><span className="font-light text-sm text-black center gap-3">Programs <BiChevronRight className="text-primary"/> </span>  Mycelial Network</p>]} />  

          <div className="flex flex-col lg:flex-row justify-between gap-10 w-10/12 ">
            {
              mycelial.goals.map((goal, i) => (
                <div key={i} className="flex items-center flex-col text-center w-full bg-primary bg-opacity-[0.01] p-9 rounded-2xl shadow-lg border border-sec">
                  <div className="text-8xl text-sec">
                    {goal.icon}
                  </div>
                  <p>{goal.text}</p>
                </div>
              ))
            }
          </div>


          <div className="flex flex-col gap-3 mt-32">
            <h2 className="font-bold text-primary text-2xl w-fit uppercase">
              Aims and Objectives of MYCELIAL NETWORK
            </h2>
            <p className="font-bold">The main aim and objectives of Mycelial Network are:</p>

            <div className="flex flex-col mt-2 gap-3">
              {
                mycelial.aims.map((aim, i) => (
                  <p key={i} className='bg-primary bg-opacity-5 p-3 w-full rounded-lg'>{aim}</p>
                  
                ))
              }
            </div>
          </div>
        </div>

        {/* <InfoPoster 
          text={<p className="flex flex-col gap-2">
              <span className="text-primary">Niche</span>

              {mycelial.niche}
          </p>}
        /> */}
       

        <div className="w-11/12 lg:w-10/12 flex-col gap-10"
        >
          <div className="flex flex-col gap-3 mb-12 mt-12">
            <h2 className="font-bold text-primary text-2xl w-fit uppercase">
              Eligibility
            </h2>
            <div className="flex flex-col mt-2 gap-3">
              {
                mycelial.eligibility.map((eligibility, i) => (
                  <p key={i} className='bg-primary bg-opacity-5 p-3 w-full rounded-lg'>{eligibility}</p>
                ))
              }
            </div>
          </div>

        </div>



    </main>
  )
}

export default MycelialPage