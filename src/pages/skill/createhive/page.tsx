import { useState } from "react"
import { CoursesList } from "../../../assets/Constants"
import { BiCheck, BiCheckCircle, BiChevronDown } from "react-icons/bi"
import { Button } from "../../../assets/components/Button"
import { BsStarFill } from "react-icons/bs"
import { Header } from "../../../assets/components/Header"
import { InfoPoster } from "../../../assets/components/InfoPoster"

export const CreateHiveInfo = {
  desc: [
  <p>Developed by EDUCFIX, Createhive is formed from the combination of two words <strong>“Creativity”</strong> and <strong>“Hive Mind”.</strong>  A hive mind typically refers to a collective consciousness or intelligence formed through the interconnectedness of individuals within a group. Examples include social insects like bees and ants, where individual actions contribute to the overall success of the colony.</p>,
  "Creativity, on the other hand, is often associated with individual expression, imagination, and the generation of novel ideas.",
    "CreateHive means the generation of novel ideas backed up with collective intelligence formed through the interconnectedness of individuals within a group."
  ],
  aims: [
    "To train and build leaders in the areas of skills.",
    "To ensure the interconnectedness of individuals in the same niche.",
    "To generate novel ideas in solving practical issues that either comes from life or in the community.",
    "To create a world where skills are been recognized and is regarded as important.",
    "To create a medium where Ideas can be tested and iterated upon through collective feedback, leading to more robust and innovative outcomes."
  ],
  how: [
    {
      info: "It will be an online skill school.",
    },
    {
      info: "Since it is going to be a school, the following will be present;",
      points: [
        "A classroom",
        "Courses available with a curriculum",
        "Admissions",
        "Admission letter",
        "Matriculation Number",
        "Certificate",
        "Materials",
        "Assignments",
        "Exams",
        "Registration",
        "Lectures",
        "And all facilities and materials needed for a normal secular education will be present and used.",
      ]
    },
    {
      info: "All trainees will pay a small amount of money."
    },
    {
      info: "Expulsion and promotion will be present."
    },
    {
      info: "It will span for 4 months (2 months for learning and the other 2 months for mentorship)."
    }
  ],
  reason: [
    "Keep pace with the evolving skill demands",
    "Enhance learners engagement and motivation",
    "Measure training effectiveness and ROI",
    "Provide resources and make skill training affordable",
    "Build collaborative networks"
  ]
}

const CreateHivePage = () => {
  const [ currentCourse, setCurrentCourse ] = useState(0)

  return (
    <main className="text-base w-full pt-32 center flex-col gap-20 bg-primary bg-opacity-5 pb-32">
      <div className="w-11/12 lg:w-9/12  flex flex-col">


      <div className="flex flex-col gap-3">
        <h1 className="font-bold bg-clip-text bg-gradient-to-r from-primary to-sec text-transparent text-4xl w-fit">CREATEHIVE</h1>
        <div className="flex flex-col gap-2">
          {
            CreateHiveInfo.desc.map((info, i) => (
              <p key={i}>{info}</p>
            ))
          }
        </div>


        <h2 className="font-bold text-primary text-xl uppercase mt-10">
          Aims and objectives of createhive
        </h2>
        <div className="flex flex-col gap-2">
          {
            CreateHiveInfo.aims.map((aim, i) => (
              <div key={i} className="flex gap-2">
                <BsStarFill  className="text-sec text-lg mt-1"/>
                <p>
                  {aim}
                </p>
              </div>
            ))
          }
        </div>
        
      </div>


      <div className="flex flex-col mt-20">
        <Header 
          text={
            <h2 className="text-3xl ">How will CREATEHIVE work?</h2> 
          }
        />

        <p className="mt-5">Skills and skills education is usually been treated as unimportant and hereby trained or taught casually. Hence, the reason why a new approach and method will be implored into the skill education. </p>

        <div className="flex flex-col gap-2 mt-4">
          {CreateHiveInfo.how.map((h, i) => (
            <div key={i} className="flex flex-col gap-2" >
            <p>
              <b className="mr-1">{i+1}.</b> {h.info}
            </p>

              {h.points ? 
              <div className="flex flex-col gap-2 ml-4">
                {
                  h.points.map((p, i) => (
                    <div key={i} className="inline-flex gap-2">
                      <BiCheck className="mt-1"/>
                      <p>
                        {p}
                      </p>
                    </div>
                  ))
                }
              </div> : "" }
            </div>

          ))}
        </div>


        <div className="mt-6 flex flex-col gap-2">
          <h3 className="font-bold text-primary">
          The reason for establishing the skill education like this is to:
          </h3>
          {CreateHiveInfo.reason.map((r, i) => (
            <p key={i}><b className="mr-1">{i+1}.</b> {r}</p>
          ))}
        </div>
      </div>



      <div id="courses" className="flex flex-col mt-20">
          
        <Header 
          text={
            <h2 className="uppercase text-3xl font-bold bg-clip-text bg-gradient-to-r from-primary to-sec  text-transparent w-fit ">LIST OF COURSES</h2>
          }
        />
        <p className="mt-5">Amidst all the skills available to learn, we will be focusing on the soft skills and streamlining it to a few that we will be providing for the mean time. Here are the skills to train: 

        </p>

        {CoursesList.map((course, i) => (
          <div id={`${course.title.replace(" ",'').replace(" ",'').replace(" ",'').replace(" ",'').replace("&",'')}`}
            key={i} className={`transition-all duration-500 ${currentCourse == i ? "py-10" : "py-5"} `} onClick={() => {
              setCurrentCourse(i)
              document.querySelector(`#${course.title.replace(" ",'').replace(" ",'').replace(" ",'').replace(" ",'').replace("&",'')}`)?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
              <div className="flex justify-between cursor-pointer bg-white p-9 rounded-xl shadow-lg ">

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row lg:items-center gap-2">
                    <BiCheckCircle className="text-3xl text-sec"/>
                    <h3 className="uppercase text-primary text-xl font-bold">{course.title}</h3>
                  </div>

                  <p className={`${currentCourse == i ? "font-bold " : "" }`}>{course.intro} {currentCourse ==i ? "" : <>... <b>Read more</b></>}</p>



                  {
                    currentCourse === i ? 
                    <>
                      
                      <p>{course.desc}</p> 

                      <div className="flex flex-col gap-2">
                        {course.applications.map((application, i) => (
                          <div key={i} className="flex gap-2">
                            <BsStarFill  className="text-sec text-lg mt-1"/>
                            <p>{application}</p>
                          </div>
                        ))}
                      </div>
                      <Button 
                        text={"Apply Now"}
                        className="bg-white border border-sec rounded-full text-primary min-w-[200px] w-fit mt-5 shadow-xl"
                      />
                    </> :""
                  }

                </div>
                
                {
                  currentCourse !== i &&
                  <div className="hidden cursor-pointer rounded-lg lg:center bg-primary text-white h-fit" onClick={() => {
                    setCurrentCourse(i)
                  }}>
                    <BiChevronDown  className="text-6xl cursor-pointer bg-re d-400 z-10"/>
                  </div>
                }

              </div>

          </div>
        ))}
      </div>


      </div>  

        <InfoPoster 
          text="BECOME A CREATEHIVE"
        />
    </main>
  )
}

export default CreateHivePage