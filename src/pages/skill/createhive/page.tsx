import { useEffect } from "react"
import { CoursesList } from "../../../assets/Constants"
import { BiCheck, BiChevronDown, BiChevronRight } from "react-icons/bi"
import { Button } from "../../../assets/components/Button"
import { Header } from "../../../assets/components/Header"
import { InfoPoster } from "../../../assets/components/InfoPoster"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentCourse, setSelectedCourse } from "../../../assets/store/navigation/navigationSlice"
import { Link } from "react-router-dom"
import { BreadCrumbs } from "../../../assets/components/BreadCrumbs"
import { RootState } from "../../../assets/store/AppStore"

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
  const dispatch = useDispatch()
  const navigation = useSelector((state: RootState) => state.navigation)
  const scrollPageTo = navigation.scrollPageTo
  const currentCourse = navigation.currentCourse

  useEffect(() => {
    if(scrollPageTo !== ""){
      document.querySelector(`#${scrollPageTo}`)?.scrollIntoView({
        behavior: "smooth"
      })
    }
  }, [scrollPageTo])

  return (
    <main className="text-base w-full center flex-col gap -20 bg-primary bg-opacity-5 pb-32">


      <section className="center flex-col bg-createhive bg-center bg-fixed bg-no-repeat bg-cover py-32">
        <div className="flex justify-start w-11/12 lg:w-10/12">
          <div className="flex flex-col gap-3 w-full lg:w-10/12">

            <h1 className="font-bold text-primary text-4xl w-fit">CREATEHIVE</h1>
            <div className="flex flex-col gap-2">
              {
                CreateHiveInfo.desc.map((info, i) => (
                  <p key={i}>{info}</p>
                ))
              }
            </div>
          </div>



        </div>


      </section>

      <div className="w-11/12 lg:w-10/12  flex flex-col">
          <BreadCrumbs links={["Home", <p className="center gap-3"><span className="font-light text-sm text-black
           center gap-3">Programs <BiChevronRight className="text-primary"/> </span>  Createhive</p>]} />     
          
        <div className="flex flex-col gap-3 mt-20">
          <h2 className="font-bold text-primary text-2xl uppercase">
            Aims and objectives of createhive
          </h2>
          <div className="flex flex-col gap-2">
            {
              CreateHiveInfo.aims.map((aim, i) => (
                <p  key={i} className='bg-white p-3 w-full rounded-lg'>
                  {aim}
                </p>
              ))
            }
          </div>
        </div>
        
        <div className="flex flex-col mt-20">
          <Header 
            text={
              <h2 className="text-2xl">How will CREATEHIVE work?</h2> 
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
                        <>
                          {p}
                        </>
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
              <p key={i} className='bg-white p-3 w-full rounded-lg'>{r}</p>
            ))}
          </div>
        </div>



        <div id="courses" className="flex flex-col pt-20">
            
          <Header 
            text={
              <h2 className="uppercase text-3xl font-bold text-primary ">LIST OF COURSES</h2>
            }
          />

          <p className="mt-5">Amidst all the skills available to learn, we will be focusing on the soft skills and streamlining it to a few that we will be providing for the mean time. Here are the skills to train: 

          </p>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-6 items-stretch">
            {CoursesList.map((course, i) => (
              
              <div id={`${course.title.replace(" ",'').replace(" ",'').replace(" ",'').replace(" ",'').replace("&",'')}`}
                key={i} 
                className={`w-full transition-all duration-500 full 
                  ${currentCourse == i ? "py-10 lg:py-20 col-span-2" : "py-5"} `} 
                  
                onClick={() => {
                dispatch(setCurrentCourse(i))
                dispatch(setSelectedCourse(course.title))
                document.querySelector(`#${course.title.replace(" ",'').replace(" ",'').replace(" ",'').replace(" ",'').replace("&",'')}`)?.scrollIntoView({
                  behavior: "smooth"
                })

              }}>
                  <div className="flex justify-between cursor-pointer bg-white p-9 rounded-xl shadow-lg relative overflow-hidden">

                    <div className="bg-sec w-8 h-32 absolute -top-20 left-0 rotate-45"></div>

                    <div className="bg-sec w-8 h-32 absolute -bottom-20 right-0 rotate-45"></div>

                    <div className="flex flex-col gap-3">
                      <h3 className="uppercase text-primary text-xl font-bold">{course.title}</h3>

                      <p className={`${currentCourse == i ? "font-bold " : "" }`}>{course.intro} {currentCourse ==i ? "" : <>... <b>Read more</b></>}</p>



                      {
                        currentCourse === i ? 
                        <>
                          
                          <p>{course.desc}</p> 

                          <div className="flex flex-col gap-2">
                            {course.applications.map((application, i) => (
                              <p  key={i} className='bg-primary bg-opacity-5 p-3 w-full rounded-lg'>{application}</p>
                            ))}
                          </div>
                          <Link to={"/become-a-createhive"}>
                            <Button 
                              text={"Apply Now"}
                              className="bg-white border border-sec rounded-full text-primary min-w-[200px] w-fit mt-5 shadow-xl"
                            />
                          </Link>
                        </> :""
                      }

                    </div>
                    
                    {
                      currentCourse !== i &&
                      <div className="hidden cursor-pointer rounded-lg lg:center bg-primary text-white h-fit" onClick={() => {
                        dispatch(setCurrentCourse(i))
                      }}>
                        <BiChevronDown  className="text-6xl cursor-pointer bg-re d-400 z-10"/>
                      </div>
                    }

                  </div>

              </div>
            ))}
          </div>
        </div>


      </div>  

        <InfoPoster 
          text="BECOME A CREATEHIVE"
        />
    </main>
  )
}

// talk to people
// hear how she's gonna place the stuffs
export default CreateHivePage