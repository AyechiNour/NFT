import React from 'react'
import CardPlatform from './CardPlatform'
import { useTranslation } from "react-i18next"

const PlatformTop = () => {
    const [t , i18n]= useTranslation()
    const PlatformInfo = [
        {
            title:"How can I acces to NFT Carbon base ?",
            paragraph:"We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them."
        },
        {
            title:"How can I acces to NFT Carbon base ?",
            paragraph:"We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them."
        }, 
        {
            title:"How can I acces to NFT Carbon base ?",
            paragraph:"We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them."
        }
    ]
    const cards = PlatformInfo.map((item)=>{
               return( <CardPlatform info = {item} />
            )})
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 flex items-center xl:px-24 z-40 px-4 py-10'>
        <div className='flex flex-col grid-span-1'>
            <div className='flex flex-col z-40'>
                <h1 className='text-lg 2xl:text-2xl' style={{color:"#A564FA",fontFamily:'Loew-medium'}}>{t('PlatformBeforeTitle')}</h1>
                <div className="flex flex-row">
                    <h1 className="text-2xl xl:text-4xl 2xl:text-6xl" style={{fontFamily: 'Loew-extraBold'}}>{t('PlatformTitlePart1')}</h1>
                    <h1 className="lg:pl-4 pl-2 text-2xl xl:text-4xl 2xl:text-6xl" style={{fontFamily: 'Loew-light'}}>{t('PlatformTitlePart2')}</h1>
                </div>
                <p className="text-sm lg:text-lg 2xl:text-2xl py-6" style={{fontFamily: 'Loew-regular'}}>{t('PlatformParagraph')}</p>
            </div>
            <img className='z-40 grid-span-1 p-4 lg:pl-16 lg:hidden' src="/Images/1.gif" alt="" srcset="" />
            <div className='z-40'>
                {cards}
            </div>
        </div>
        <img className='hidden lg:block z-40 grid-span-1 p-4 lg:pl-16' src="/Images/1.gif" alt="" srcset="" />
    </div>
  )
}
export default PlatformTop