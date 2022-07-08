import React from "react"
import { useTranslation } from "react-i18next"

const Join = () => {
  const [t , i18n]= useTranslation()
  return (
    <div className="bg-blue relative lg:my-16 xl:mx-24">
        <img className="absolute hidden lg:block top-0 left-0 w-full h-full" src="/Images/bg-join.png" alt="" srcset="" />
        <div className="flex flex-col items-center py-16 px-4 lg:px-32">
            <h1 className="text-3xl xl:text-5xl 2xl:text-7xl text-center" style={{fontFamily: 'Loew-extraBold'}}>{t('CommunityTitle')}</h1>
            <p className="text-lg text-center 2xl:text-2xl py-7" style={{fontFamily: 'Loew-regular'}}>{t('CommunityParagraph')}</p>
            <input style={{fontFamily: 'Loew-medium'}} className="text-sm xl:text-lg 2xl:text-xl h-10 w-48 lg:h-14 lg:w-80 rounded-full cursor-pointer btnEffet z-30"  type="button" value={t('CommunityBouton' )}/>
        </div>
    </div>
  )
}
export default Join
