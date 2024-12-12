import { BiBriefcase, BiCheckCircle, BiShield } from "react-icons/bi"
import { FaHandshake } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"
import { InfoPoster } from "../../assets/components/InfoPoster"
import { Header } from "../../assets/components/Header"

export const About = {
  about: [
    <p >EDUCFIX, an educational organization committed to fostering ethical, innovative, and creative leadership, traces its origins back to December 2021, when the foundational concept for its flagship program, Innovation Forge, was conceived. While Innovation Forge represents EDUCFIX's public launch, the organization's journey began with a period of intensive development and exploration.</p>,
    'In 2022, EDUCFIX launched "Amethyst Tutorials," an online learning initiative that served as a valuable testing ground for pedagogical approaches and content development. While Amethyst Tutorials eventually concluded, the core vision of EDUCFIX remained steadfast.',
    "Building upon the lessons learned, EDUCFIX continued its development, refining its approach and curriculum before settling on its current structure, with Innovation Forge as its inaugural program, and further branches poised to launch soon.",
    "EDUCFIX's overarching mission is to advance learning through rigorous research and the cultivation of future leaders across science, arts, business, and related fields. The organization's ambitious goal is to build, train, and certify over 10 million leaders in diverse areas of life."
  ],
  vision: "To become a premier educational organization known for excellence in teaching, learning, and research.",
  missison: "To advance knowledge through research and building of future leaders.",
  values: [
      {
          title: "Success",
          icon: <BiCheckCircle />
      },
      {
          title: "Discipline",
          icon: <FiTarget />
      },
      {
          title: "Travail",
          icon: <BiBriefcase />
      },
      {
          title: "Integrity",
          icon: <BiShield />
      },
      {
          title: "Trust",
          icon: <FaHandshake />
      }
  ],
  goal: "Our goal is to build, train and certify 10M+ leaders in different areas of life"
}

const AboutPage = () => {
  return (
    <main className="w-full center flex-col py-[15vh]">

        <section className="w-full center"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-8 justify-between">
                    <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent w-fit">
                        ABOUT US
                    </h1>

                    <div className="flex flex-col gap-4">
                      {About.about.map((a, i) => (
                        <p key={i} className="">
                          {a}
                        </p>
                      ))}
                    </div>
                    
      

              

            </div>        
        </section>

        <section className="w-11/12 lg:w-10/12 flex flex-col gap-40 my-32 lg:mt-24">


            <div className="bg-primary center min-h-[30vh] rounded-3xl py-9 relative overflow-hidden">
              <DesignLines />
              <div className="z-10 text-center center flex-col gap-4 w-11/12">
                <h3 className="font-bold text-3xl text-zinc-100">OUR GOAL</h3>
                <p className="text-white">{About.goal}</p>
              </div>
            </div>


            <div className="center w-full flex-col gap-12">
              <Header 
                text={
                  <h2 className="font-bold text-4xl w-full lg:w-fit">OUR VALUES</h2>
                }
              />
              <div className="flex flex-col lg:flex-row gap-9 lg:justify-between lg:gap-3 flex-wrap w-full divide-y lg:divide-y-0 divide-sec">
                {
                  About.values.map((j, i) => (
                    <div key={i} className="center flex-col gap-3 bg-red-2 00 pt-6 lg:pt-0">

                      <div className={`text-4xl ${i %2==0 ? "text-sec" : "text-primary"}`}>
                        {j.icon}
                      </div>

                      <h3 className={`font-bold text-xl text-primary uppercase  ${i %2!==0 ? "text-sec" : "text-primary"}`}>{j.title}</h3>

                    </div>
                  ))
                }
              </div>
            </div>

            <div className="bg-primary center min-h-[30vh] rounded-3xl py-9 relative overflow-hidden">
              <DesignLines />
              <div className="z-10 text-center center flex-col gap-4 w-11/12">
                <h3 className="font-bold text-3xl text-zinc-100">OUR MISSION</h3>
                <p className="text-white">{About.missison}</p>
              </div>
            </div>
  

          
          </section>

          <InfoPoster 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus!"
            />

    </main>
  )
}

export default AboutPage


export const DesignLines = () => {
  return(
    <>
      <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 top-6 -left-14 w-64 h-12 bg-sec bg-opacity-10 border border-sec -rotate-45">
      </div>
      <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 bottom-6 -left-14 w-64 h-12 bg-sec bg-opacity-10 border border-sec rotate-45">
      </div>
      <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 bottom-6 -right-14 w-64 h-12 bg-sec bg-opacity-10 border border-sec -rotate-45">
      </div>
      <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 top-6 -right-14 w-64 h-12 bg-sec bg-opacity-10 border border-sec rotate-45">
      </div>
    </>
  )
}