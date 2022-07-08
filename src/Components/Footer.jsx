import React from "react"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const [t , i18n]= useTranslation()
    return (
        <div>
            <div className="flex flex-col items-center py-10" style={{backgroundColor:'#200953'}}>
                <h1 className="text-2xl xl:text-4xl 2xl:text-6xl relative left-16 lg:left-48 py-4" style={{fontFamily: 'Loew-extraBold'}}>{t('FooterPart1')}</h1>
                <h1 className="text-4xl xl:text-6xl 2xl:text-8xl textAnimate" style={{fontFamily: 'Loew-extraBold'}}>{t('FooterPart2')}</h1>
                <h1 className="text-2xl xl:text-4xl 2xl:text-6xl relative right-16 lg:right-32 py-4" style={{fontFamily: 'Loew-extraBold'}} >{t('FooterPart3')}</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center px-10 py-5 place-content-between border-white border-t" style={{backgroundColor:'#200953'}}>
                <img className="h-8" src="/Images/logo.png" alt="" srcset="" />
                <div className="flex flex-row mt-2 lg:mt-0">
                    <h1 className="mr-1 text-xs" style={{fontFamily: 'Loew-medium'}}>©</h1>
                    <h1 className="mr-1 text-xs" style={{fontFamily: 'Loew-medium', color:'#FF0CFF'}}>CARBON BASE</h1>
                    <h1 className="text-xs" style={{fontFamily: 'Loew-medium'}}>{t('FooterRights')}</h1>
                </div>
            </div>
        </div>
    )
}
export default Footer