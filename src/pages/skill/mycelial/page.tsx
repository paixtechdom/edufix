import { CgCommunity } from "react-icons/cg"
import { ImageText } from "../../../assets/components/ImageText"
import { InfoPoster } from "../../../assets/components/InfoPoster"
import { logo_transparentII } from "../../../assets/Constants"
import { FcPodiumWithAudience } from "react-icons/fc"
import { BsStarFill } from "react-icons/bs"
import { PiCheckFill } from "react-icons/pi"


export const mycelial = {
  intro: [
    <p><strong>BUSINESS EDUCATION, called <span className="text-primary">MYCELIAL NETWORK</span> </strong>  is a powerful metaphor for interconnectedness and
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
          img={logo_transparentII}  
          btn=""
          
          />

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


          <div className="flex flex-col gap-3 my-12 mt-32">
            <h2 className="font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent text-2xl w-fit uppercase">
              Aims and Objectives of MYCELIAL NETWORK
            </h2>
            <p className="font-bold">The main aim and objectives of Mycelial Network are:</p>

            <div className="flex flex-col mt-2 gap-3">
              {
                mycelial.aims.map((aim, i) => (
                  <div key={i} className="flex gap-2">
                    <BsStarFill className="text-sec text-lg mt-1"/>
                    <p>{aim}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <InfoPoster 
          text={<p className="flex flex-col gap-2">
              <span className="text-primary">Niche</span>

              {mycelial.niche}
          </p>}
        />
       

        <div className="w-11/12 lg:w-10/12 flex-col gap-10"
        >
          <div className="flex flex-col gap-3 my-12 mt-32">
            <h2 className="font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent text-2xl w-fit uppercase">
              Eligibility
            </h2>
            <div className="flex flex-col mt-2 gap-3">
              {
                mycelial.eligibility.map((eligibility, i) => (
                  <div key={i} className="flex gap-2">
                    <PiCheckFill className="text-sec text-lg mt-1"/>
                    <p>{eligibility}</p>
                  </div>
                ))
              }
            </div>
          </div>

        </div>



    </main>
  )
}

export default MycelialPage