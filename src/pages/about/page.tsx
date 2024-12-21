import { BiBriefcase, BiCheckCircle, BiShield } from "react-icons/bi"
import { FaHandshake } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"
import { InfoPoster } from "../../assets/components/InfoPoster"
import { Header } from "../../assets/components/Header"
import { BreadCrumbs } from "../../assets/components/BreadCrumbs"
import img from "../../assets/images/pexels-olly-3762800.jpg"


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
          <Header 
            text={
              <h1 className="text-4xl font-bold text-primary w-fit">
                  ABOUT US
              </h1>

            }
          />

              <div className="flex flex-col gap-4">
                {About.about.map((a, i) => (
                  <p key={i} className="">
                    {a}
                  </p>
                ))}
              </div>            
            <BreadCrumbs links={["Home", "About"]} />     
          </div>   

        </section>


        <section className="w-11/12 lg:w-10/12 flex flex-col gap-40 my-32 lg:mt-24">

            <div className="center w-full flex-col gap-12">
              <Header 
                text={
                  <h2 className="font-bold text-4xl w-full lg:w-fit">OUR VALUES</h2>
                }
              />
              <div className="flex flex-col lg:flex-row gap-9 lg:justify-center lg:gap-20 flex-wrap w-full">
                {
                  About.values.map((j, i) => (
                    <div key={i} className="center flex-col gap-3 bg-red-2 00 pt-6 lg:pt-0 cursor-pointer hover:border-b-2 ottom hover:border-primary transition-all duration-500 scale-90 hover:scale-110">

                      <div className={`text-6xl bg-primary text-white rounded-full size-28 center`}>
                        {j.icon}
                      </div>

                      <h3 className={`font-bold text-xl u ppercase`}>{j.title}</h3>

                    </div>
                  ))
                }
              </div>
            </div>          

          </section>

            <section className={`bg-primary bg-opacity-5 center relative lg:h-[80vh] overflow-hidden`}>            
              <div className={`h-[90%] w-11/12 lg:w-10/12 flex items-start lg:items-center z-10 flex-col lg:flex-row  gap-[5ch] lg:gap-[0ch] xl:gap-[5ch] py-[15vh] lg:pt-0`}>
                  
                  <div className={`flex flex-col gap-4 lg:w-10/12 rounded-tl-3xl justify-center `}>
                    <div className="flex flex-col gap-2">
                      <h2 className={`text-3xl font-bold text-primary`}>Our Mission</h2>
                      <p>{About.missison}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className={`text-3xl font-bold text-primary`}>Our Goal</h2>
                      <p>{About.goal}</p>
                    </div>
                  </div>
                  
                  <div className={'w-full lg:w-7/12 flex lg:items-center justify-center relative '}>

                      <img
                          src={img} 
                          alt={'Image to describe ' + 'title'} 
                          className={` w-full h-full -translate-x-[10px]  scale-90 -translate-y-[10px] rounded-b-xl`}                            
                      />
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


