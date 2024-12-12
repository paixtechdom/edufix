import { logo_transparentII } from "../../assets/Constants"
import { Button } from "../../assets/components/Button"
import { Registration } from "./Registration"
import { ImageText } from "../../assets/components/ImageText"

const BecomePage = () => {


  return (
    <main className='w-full center flex-col pb-[15vh] lg:mt-10'>
      <div className="flex flex-col w-11/12 lg:w-10/12 gap-20">
        <ImageText 
          title="BECOME A CREATEHIVE"
          desc={[
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti expedita vel, enim quos laborum id molestiae obcaecati similique nostrum ullam neque nemo sed magnam porro laboriosam sunt voluptate provident! Aut!",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti expedita vel, enim quos laborum id molestiae obcaecati similique nostrum ullam neque nemo sed magnam porro laboriosam sunt voluptate provident! Aut!",
          ]}
          img={logo_transparentII}
          btn={
            <Button 
              text={"register now"}
              className="bg-white border border-sec w-fit min-w-[200px] h-122"
            />

          }
        />

        <p>About Create hive</p>
        <p>How to be a student</p>
        <p>Fee structure</p>



        <Registration />
      </div>

    </main>
  )
}

export default BecomePage