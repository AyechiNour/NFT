import React,{useEffect} from "react"
import About from "../Components/About.jsx/About"
import Faq from "../Components/Faq/Faq"
import Footer from "../Components/Footer"
import Header from "../Components/Header/Header"
import BlocLevels from "../Components/Levels/BlocLevels"
import Navbar from "../Components/Navbar"
import Video from "../Components/Video"
import Creation from "../Components/Creation/Creation"
import Platform from "../Components/Platform/Platform"
import Discord from "../Components/Discord"
import { useInView } from "react-intersection-observer"
import { useNavigate} from "react-router-dom"


const Main = () => {
  const navigate = useNavigate();


  const [refAbout, inViewAbout] = useInView()
  const [refRoad, inViewRoad] = useInView()
  const [refLook, inViewLook] = useInView()
  const [refFaq, inViewFaq] = useInView()
  const [refProject, inViewProject] = useInView()
  useEffect(() => {
    if (inViewAbout) {
   navigate("/#About")
     
    }else if(inViewRoad){
      navigate("/#RoadMap")
    }else if(inViewLook){
      navigate("/#LookBook")
    }else if(inViewFaq){
      navigate("/#Faq")
    }else if(inViewProject){
      navigate("/#Project")
    }
  }, [inViewAbout,inViewRoad,inViewLook,inViewFaq,inViewProject]);

  return (
    <div className="relative z-30">
        <div className="absolute right-0 h-screen w-screen "> <img src="./Images/animation.gif" className="h-full w-full" alt="" /> </div>

      <Navbar />
        <div className="fixed bottom-3 lg:bottom-10 right-3 lg:right-10 z-50"> <Discord /></div>  

        <div className="">
       

        <Header />
        <div ref={refAbout} id="About" ></div>
        
        <About />
   
        <Video />
        <div ref={refRoad} id="RoadMap"></div>
        <BlocLevels />
        <div ref={refProject} id="Project"></div> 
        <Creation />
        <div ref={refLook} id="LookBook"></div>
        <Platform />
        <div  ref={refFaq} id="Faq"></div>
        <Faq />
        <Footer />
      </div>
 

    </div>
  )
}

export default Main
