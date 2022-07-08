import React, { useRef ,useState ,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const Video = () => {
  const vd = useRef()
  const [Show, setShow] = useState(false);
  const [ShowClass, setShowClass] = useState(false);
  const playVd=()=>{ 
    vd.current.play()
    setShow(true)
  }
  const closeVd=()=>{ 
    vd.current.pause()
    setShow(false)
  }
  const [refVideo, inViewVideo] = useInView()
  useEffect(() => {
    if(inViewVideo){
setShowClass(true)
    }
  
  }, [inViewVideo])
  
  return (
    <div className='overflow-hidden relative py-4 lg:py-10'>
    <div id="videoDiv" ref={refVideo} className={ShowClass?"animVd":""}>
    <video ref={vd} id="video1" autoplay   src="./Images/Teaser.mp4" />
    </div> 
    {!Show?<img src="/Images/Play.png" alt="" srcset="" className={ShowClass?'w-16 h-16 lg:w-28 lg:h-28 cursor-pointer absolute top-1/3 mt-8 sm:mt-0 sm:top-1/2 left-1/2 anim':'w-16 h-16 lg:w-28 lg:h-28 cursor-pointer absolute top-1/3 mt-8 sm:mt-0 sm:top-1/2 left-1/2'} onClick={playVd} />
    :<img src="/Images/Stop.png" alt="" srcset="" className='w-16 h-16 lg:w-28 lg:h-28 cursor-pointer absolute top-1/3 mt-8 sm:mt-0 sm:top-1/2 left-1/2' onClick={closeVd} />}
    </div> 
  )
}
export default Video
