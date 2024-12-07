import { useState } from "react"
import { CoursesList } from "../../../assets/Constants"
import { BiCheckCircle } from "react-icons/bi"
import { Button } from "../../../assets/components/Button"

export const CreateHiveInfo = {
  desc: [
    <p><strong>CREATEHIVE:</strong> formed from the combination of two words <strong>“Creativity”</strong> and <strong>“Hive Mind”.</strong>  A hive mind typically refers to a collective consciousness or intelligence formed through the interconnectedness of individuals within a group. Examples include social insects like bees and ants, where individual actions contribute to the overall success of the colony.</p>,
  "Creativity, on the other hand, is often associated with individual expression, imagination, and the generation of novel ideas.",
    "CreateHive means the generation of novel ideas backed up with collective intelligence formed through the interconnectedness of individuals within a group."
  ],
  aims: [
    "To train and build leaders in the areas of skills.",
    "To ensure the interconnectedness of individuals in the same niche.",
    "To generate novel ideas in solving practical issues that either comes from life or in the community.",
    "To create a world where skills are been recognized and is regarded as important.",
    "To create a medium where Ideas can be tested and iterated upon through collective feedback, leading to more robust and innovative outcomes."
  ]
}

const CreateHivePage = () => {
  const [ currentCourse, setCurrentCourse ] = useState(0)

  return (
    <main className="text-base w-full pt-32 center bg-primary bg-opacity-5 pb-32">
      <div className="w-11/12 lg:w-10/12 flex flex-col">
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
              <li key={i}>{aim}</li>
            ))
          }
        </div>
        
      </div>


      <h2 className="uppercase text-4xl font-bold mb-12 bg-clip-text bg-gradient-to-r from-primary to-sec  text-transparent w-fit mt-20">LIST OF COURSES</h2>
      

      <div id="courses" className="flex flex-col gap-16">

        {CoursesList.map((course, i) => (
          <div id={`${course.title.replace(" ",'').replace(" ",'').replace(" ",'').replace(" ",'').replace("&",'')}`}
            key={i} className={`flex flex-col gap-3 cursor-pointer ${currentCourse == i ? "bg-white p-9 rounded-xl shadow-xl" : ""} `} onClick={() => {
              setCurrentCourse(i)
            }}>
              <div className="flex items-center gap-2 flex-wrap">
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
                    <li key={i}>{application}</li>
                  ))}
                </div>
                <Button 
                  text={"Apply Now"}
                  className="bg-white border border-sec rounded-full text-primary min-w-[200px] w-fit mt-5 shadow-xl"
                />
              </> :""
            }

          </div>
        ))}
      </div>


      </div>  
    </main>
  )
}

export default CreateHivePage