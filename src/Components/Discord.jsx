import React from 'react'

const Discord = () => {
  return (
    <div className='svganimate cursor-pointer w-24 h-24 rounded-full flex justify-center items-center relative' style={{backgroundColor:"#A060F6"}}>
        <svg className='circleSVG flex justify-center items-center absolute rounded-full' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
            <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <circle cx="100" cy="100" r="300" fill="none"/>
                <g>
                    <use xlinkHref="#circlePath" fill="none"/>
                    <text className='text' fill="#ffffff" dy="-40" textLength="370">
                        <textPath xlinkHref="#circlePath">DISCORD DISCORD DISCORD DISCORD</textPath>
                    </text>
                </g>
            </svg>
        <img className='w-8 h-8 drop-shadow-lg rounded-full hover:bg-transparent hover:drop-shadow-none' src="/Images/Discord.png" alt="" srcset="" />
    </div>
  )
}
export default Discord
