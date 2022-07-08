import React from "react"
import CardAbout from "./CardAbout"

const About = ({ref}) => {
    return (
        <div ref={ref} className="lg:px-16 px-4 my-28 z-30 mt-16 lg:mt-56 relative">
            <img className="absolute hidden lg:block top-0 left-0 w-full h-full" src="/Images/bitcoin.png" alt="" srcset="" />
            <div className="grid lg:grid-cols-2 grid-cols-1 flex lg:flex-row flex-col-reverse justify-center items-center relative -top-16 z-30">
                <img src="/Images/01.png" className="z-30" alt="" />
                <CardAbout />
            </div>
        </div>
    )
}
export default About