import React from "react"

const CardNoImage = ({data}) => {
    return (
        <div>
            <div className="lg:hidden">
                <div className="flex flex-row justify-center items-center px-4" style={{backgroundColor:data.bgColor}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 52 52">
                        <g id="Groupe_1522" data-name="Groupe 1522" transform="translate(-101 -3517)">
                            <circle id="Ellipse_26" data-name="Ellipse 26" cx="26" cy="26" r="26" transform="translate(101 3517)" fill="#ff0cff" />
                            <circle id="Ellipse_25" data-name="Ellipse 25" cx="14" cy="14" r="14" transform="translate(113 3529)" fill="#fff" />
                        </g>
                    </svg>
                    <div className="flex flex-row w-full items-center ml-3 mb-2">
                        <h1 className="text-xl sm:text-2xl md:text-3xl textAnimate mr-2" style={{fontFamily: 'Loew-extraBold'}}>Level 0{data.id}</h1>
                        <div className="flex flex-row ml-1 ">
                            <h1 className="text-xl sm:text-2xl md:text-3xl uppercase mr-2" style={{fontFamily: 'Loew-extraBold'}}>{data.name1}</h1>
                            <h1 className="text-xl sm:text-2xl md:text-3xl uppercase " style={{fontFamily: 'Loew-light'}}>{data.name2}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center" style={{backgroundColor:data.bgColor}}>
                    <img src={data.effet} alt="" className="w-1/3 relative top-16 sm:top-56" />
                    <img src={data.img} alt="" className="w-1/3 relative" />
                </div>
                <div className="px-10 py-10" style={{backgroundColor:'#200953'}}>
                    <p style={{ fontFamily: 'Loew-regular' }} className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum alias error ipsam vitae totam recusandae iure corporis, optio officiis ab culpa molestiae molestias asperiores aliquid accusamus nostrum autem rerum?</p>
                </div>
            </div>
        <div className="flex flex-col relative w-full mb-28 sm:px-2 md:mt-48 lg:mt-0 hidden lg:block">
            <div className="flex flex-row w-full items-center xl:text-5xl text-xl font-semibold  lg:relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="142" height="52" viewBox="0 0 142 52">
                    <g id="Groupe_1519" data-name="Groupe 1519" transform="translate(-101 -3517)">
                        <circle id="Ellipse_26" data-name="Ellipse 26" cx="26" cy="26" r="26" transform="translate(101 3517)" fill="#ff0cff" />
                        <circle id="Ellipse_25" data-name="Ellipse 25" cx="14" cy="14" r="14" transform="translate(113 3529)" fill="#fff" />
                    </g>
                    <rect id="Rectangle_2045" data-name="Rectangle 2045" width="92.5" height="3.068" transform="translate(49.5 22.932)" fill="#ff0cff" />
                </svg>  
                <div className="flex lg:flex-row flex-col w-full items-center mb-2">
                    <h1 className="text-2xl xl:text-4xl 2xl:text-6xl textAnimate " style={{fontFamily: 'Loew-extraBold'}}>Level 0{data.id}</h1>
                    <div className="flex flex-row ml-1 ">
                        <h1 className="text-2xl xl:text-4xl 2xl:text-6xl uppercase mr-2 lg:ml-8" style={{fontFamily: 'Loew-extraBold'}}>{data.name1}</h1>
                        <h1 className="text-2xl xl:text-4xl 2xl:text-6xl uppercase " style={{fontFamily: 'Loew-light'}}>{data.name2}</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-row bg-red-500 bgLevelEffect  lg:relative lg:left-28 py-10 lg:px-10 px-2 sm:ml-0 ml-2 mt-6" style={{width:"96%"}}>
                <p className="text-lg lg:text-start text-center 2xl:text-2xl w-full lg:w-3/4" style={{fontFamily: 'Loew-regular'}}>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit at quibusdam veritatis nam dolore dolorem impedit accusantium ipsam quia sed qui quas esse porro assumenda officia, quaerat enim. Veritatis. amet consectetur adipisicing elit. At eaque, maxime tempora tempore quidem quam debitis illo repudiandae est? Culpa distinctio ducimus minima consequatur voluptatum facere voluptatem maiores quis tenetur.</p>            
                <img src={data.img} className="xl:w-48 w-24 sm:w-32 lg:w-1/6 ml-16 absolute xl:-top-36 lg:-top-16 sm:-top-32 md:-top-40 -top-20 z-40 img0 cursor-pointer xl:right-16 lg:right-6 lg:ml-0 ml-8" alt="" />
                <img src={data.effet} className="xl:w-48 w-24 sm:w-32 lg:w-1/6 ml-16 absolute xl:-top-36 lg:-top-28 sm:-top-24 -top-20 z-30 img1 xl:right-16 lg:right-6 lg:ml-0 ml-8" alt="" />

                </div>
                </div>
        </div>
    )
}

export default CardNoImage
