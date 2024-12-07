import { Link } from "react-router-dom"
import { Button } from "../../assets/components/Button"
import { logo_transparentII } from "../../assets/Constants"
import { BiBriefcase, BiCheckCircle, BiShield } from "react-icons/bi"
import { FaHandshake } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"
import { ImageText } from "../../assets/components/ImageText"
import { InfoPoster } from "../../assets/components/InfoPoster"

export const About = {
  about: "EDUCFIX is an educational organization poised to build ethical, innovative, and creative leaders who are solution providers in the areas of science, arts, business, and related areas through excellence in research and learning.",
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
    <main className="w-full center flex-col mt-3">

        <section className="min-h-[90vh] w-full center mt-20 lg:mt-0"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row gap-20 items-center justify-between">
                <div className="flex flex-col gap-4 w-full lg:w-7/12">
                    <h1 className="text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent">
                        ABOUT US
                    </h1>
                    <p className="text-base">
                      {About.about}
                    </p>
                    
                </div>

                <div className="center lg:w-4/12">
                    <img src={logo_transparentII} alt="Logo" className="w-full h-full object-cover"/>
                </div>

            </div>        
        </section>

        <section className="w-11/12 lg:w-10/12 flex flex-col gap-40 mt-32 lg:mt-24">

            <div className="center w-full flex-col gap-12">
              <h2 className="font-bold text-4xl w-full lg:w-fit">
                OUR VALUES
              </h2>
              <div className="grid grid-cols-2 gap-9 lg:flex justify-between lg:gap-3 flex-wrap w-full">
                {
                  About.values.map((j, i) => (
                    <div key={i} className="flex flex-col gap-3 w-fu ll">

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
                <h3 className="font-bold text-3xl text-zinc-300">OUR MISSION</h3>
                <p className="text-white">{About.missison}</p>
              </div>
            </div>
    
            <ImageText
              title="OUR GOAL AT EDUCFIX" 
              desc={[About.goal]}
              img={logo_transparentII}
              btn={
                <Link to="/">
                  <Button 
                    text={"Apply Now"} 
                    className={"bg-primary text-white uppercase h-12 min-w-[200px] w-fit"}                               
                  /> 
                </Link>
              }
            />
            
        
            {/* <div className="bg-primary center min-h-[30vh] rounded-3xl py-9  relative overflow-hidden">
              <>
                <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 top-6 -left-14 w-64 h-12 bg-transparent border border-sec -rotate-45">
                </div>
                <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 bottom-6 -left-14 w-64 h-12 bg-transparent border border-sec rotate-45">
                </div>
                <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 bottom-6 -right-14 w-64 h-12 bg-transparent border border-sec -rotate-45">
                </div>
                <div className="absolute border-opacity-25 lg:border-opacity-100 z-0 top-6 -right-14 w-64 h-12 bg-transparent border border-sec rotate-45">
                </div>
              </>
            <div className="z-10 text-center center flex-col gap-4 w-11/12">
              <h3 className="font-bold text-3xl text-zinc-300">OUR VISION</h3>
              <p className="text-white">{About.vision}</p>
              </div>
              </div> */}

            
            {/* vision */}

          
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