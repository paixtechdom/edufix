import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { useDispatch } from "react-redux";
import { toggleScrolledDown } from "./assets/store/navigation/navigationSlice";
import { logo_transparent } from "./assets/Constants";

export const ScrolltoTop = () => {
  document.querySelector('#top')?.scrollIntoView({
    behavior: "smooth"
  })
}

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    document.addEventListener('scroll', () => {
        dispatch(toggleScrolledDown(document.documentElement.scrollTop > 200 ? true : false))
    })
    document.removeEventListener('scroll', () => null)
}, [])



  return (
    <div id="top" className='App relative text-base'>

        <AppRouter />

        {/* <div className="fixed z-10 top-0 right-0 w-full h-full bg- red-300 opacity-10"> */}
          <img src={logo_transparent} alt="Edufix Logo" className="rotate-[270deg] fixed w-[71%] left-[56%] top-[37%] bg-blue-8 00 opacity-[0.02]"/>
        {/* </div> */}

    </div>
  );


}
export default App

