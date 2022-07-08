import React from "react"
import CardImg from "./CardImg"
import CardNoImage from "./CardNoImage"

const BlocLevels = () => {
    const Levels = [
        {
            id: 1,
            name1: "CARBON",
            name2: "BASE",
            img: "/Images/img01.png",
            effet:"/Images/Back01.png",
            bgColor:"#00000000"
        },
        {
            id: 2,
            name1: "CARBON",
            name2: "BASE",
            img: "/Images/img02.png",
            effet:"/Images/Back02.png",
            bgColor:"#200953"
        },
        {
            id: 3,
            name1: "CARBON",
            name2: "BASE",
            img: "/Images/img03.png",
            effet:"/Images/Back03.png",
            bgColor:"#200953"
        },
        {
            id: 4,
            name1: "CARBON",
            name2: "BASE",
            img: "/Images/img04.png",
            effet:"/Images/Back04.png",
            bgColor:"#200953"
        },
        {
            id: 5,
            name1: "CARBON",
            name2: "BASE",
            img: "/Images/img05.png",
            effet:"./Images/Back05.png",
            bgColor:"#200953"
        },
    ]
    return (
        <div className="flex flex-col items-center mt-36">
            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl textAnimate uppercase mb-24" style={{ fontFamily: 'Loew-extraBold' }}>road map</h1>
            <div className="flex lg:px-16 w-full relative">
     


<svg className="absolute lg:block  hidden top-1 " style={{left:"93px"}} xmlns="http://www.w3.org/2000/svg" width="6" height="1093.005" viewBox="0 0 6 1093.005">
  <path id="Tracé_906" data-name="Tracé 906" d="M0,0,.266,290.328,1,1093" transform="translate(2.5 0.002)" fill="none" stroke="#ff0cff" stroke-width="5" stroke-dasharray="20"/>
</svg>

                <div className="relative">
                    <CardNoImage data={Levels[0]} />
                    <CardImg data={Levels[1]} />
                    <CardNoImage data={Levels[2]} />
                    <CardImg data={Levels[3]} />
                    <CardNoImage data={Levels[4]} />
                </div>
            </div>
        </div>
    )
}
export default BlocLevels
