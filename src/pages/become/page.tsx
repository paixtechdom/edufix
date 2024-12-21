import { Button } from "../../assets/components/Button"
import { Registration } from "./Registration"
import { ImageText } from "../../assets/components/ImageText"
import { How } from "./How"
import { InfoPoster } from "../../assets/components/InfoPoster"
import { BiDownload } from "react-icons/bi"
import { BreadCrumbs } from "../../assets/components/BreadCrumbs"
import img from "../../assets/images/write-364178_1920.jpg"
import file from "../../assets/EDUCFIX CREATEHIVE FEES.pdf"
import { useSelector } from "react-redux"
import { RootState } from "../../assets/store/AppStore"
import { useEffect } from "react"

const BecomePage = () => {

  const navigation = useSelector((state: RootState) => state.navigation)
  const scrollPageTo = navigation.scrollPageTo

  useEffect(() => {
    if(scrollPageTo !== ""){
      document.querySelector(`#${scrollPageTo}`)?.scrollIntoView({
        behavior: "smooth"
      })
    }
  }, [])



  return (
    <main className='w-full center flex-col pb-[15vh] lg:mt-10'>
      <div className="flex flex-col w-11/12 lg:w-10/12 gap-20">
        <ImageText 
          title="BECOME A CREATEHIVE"
          desc={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti expedita vel, enim quos laborum id molestiae obcaecati similique nostrum ullam neque nemo sed magnam porro laboriosam sunt voluptate provident! Aut!",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti expedita vel, enim quos laborum id molestiae obcaecati similique nostrum ullam neque nemo sed magnam porro laboriosam sunt voluptate provident! Aut!",
          ]}
          img={img}
          btn={
            <div onClick={() => {
              document.querySelector('#registrationForm')?.scrollIntoView({
                behavior: "smooth"
              })
            }}>
                <Button 
                  text={"register now"}
                  className="bg-white border border-sec w-fit min-w-[200px] h-122"
                />
            </div>

          }
        />
        
        <BreadCrumbs links={["Home", "Become a Createhive"]} />     

        <How />

        <InfoPoster 
          text={'Download our fee structure'}
          btn={
            <a href={file} target="_blank">
            <Button 
                text={"Download"}
                icon={<BiDownload />}
                className="border border-sec transition-all duration-1000 hover:scale-90 active:scale-90 min-w-[200px] h-12 center gap-2 text-sm"
            />
            </a>
          }
          />
          
        <Registration />

      </div>

    </main>
  )
}

export default BecomePage