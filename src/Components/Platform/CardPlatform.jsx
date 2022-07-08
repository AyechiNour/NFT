import React,{useState} from 'react'

const CardPlatform = ({info}) => {
    const [apparence, setapparence] = useState(false);
    console.log(info)
  return (
    <div className='p-4 z-40 lg:p-6 bg-cardplatform rounded-3xl my-4'>
        <div className='flex flex-row items-center relative'>
            <h1 className={apparence?'text-base lg:text-xl 2xl:text-3xl color-purple pr-8 lg:pr-0':'text-base lg:text-xl 2xl:text-3xl pr-8 lg:pr-0'} style={{fontFamily: 'Loew-Bold'}}>{info.title}</h1>
            <svg onClick={()=>{setapparence(!apparence)}} className={apparence?'cursor-pointer absolute right-0 h-4 w-4 xl:right-2 rotate-180':'cursor-pointer absolute right-0 h-4 w-4 xl:right-2'} xmlns="http://www.w3.org/2000/svg" width="23.616" height="13.503" viewBox="0 0 23.616 13.503">
                <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z" transform="translate(29.813 -11.247) rotate(90)" fill={apparence?"#FF0CFF":"#e4e4e4"}/>
            </svg>
        </div>
        <p className={apparence?'z-40 text-lg 2xl:text-2xl py-4':'hidden text-lg text-center lg:text-start 2xl:text-2xl py-4 z-40'}>{info.paragraph}</p>
    </div>
  )
}
export default CardPlatform