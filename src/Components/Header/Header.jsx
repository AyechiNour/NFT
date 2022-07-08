import React from "react"
import { useTranslation } from "react-i18next"

const Header = () => {
  const [t , i18n]= useTranslation()
  return (
    <div className="relative">

    <div className="grid lg:grid-cols-2 flex items-center relative xl:pb-16 mt-16 xl:mt-0">
        <div className="order-2 lg:order-1 lg:col-span-1 px-4 lg:p-16 flex flex-col z-30 justify-center items-center lg:items-start">
          <div className="flex flex-row py-3 md:py-5">
            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl uppercase" style={{fontFamily: 'Loew-extraBold'}}>{t('HeaderTitle1Part1')}</h1>
            <h1 className="px-4 text-4xl xl:text-6xl 2xl:text-8xl uppercase" style={{fontFamily: 'Loew-light'}}>{t('HeaderTitle1Part2')}</h1>
          </div>
          <h1 className="text-3xl xl:text-5xl 2xl:text-7xl py-2 stroke" style={{fontFamily: 'Loew-extraBold'}}>{t('HeaderTitle2')}</h1>
          <h1 className="text-3xl xl:text-5xl 2xl:text-7xl" style={{fontFamily: 'Loew-extraBold'}}>{t('HeaderTitle3')}</h1>
          <p className="text-lg text-center lg:text-start 2xl:text-2xl py-7" style={{fontFamily: 'Loew-regular'}}>{t('HeaderParagraph')}</p>
          <div className="mt-2 xl:mt-6">
            <input style={{fontFamily: 'Loew-medium'}} className="mr-4 text-sm h-10 w-28 xl:text-lg 2xl:text-xl 2xl:h-16 2xl:w-52 xl:w-40 xl:h-12 rounded-full btnEffet cursor-pointer" type="button" value={t('bouton1')}/>
            <input style={{fontFamily: 'Loew-medium'}} className="h-10 w-28 text-sm xl:text-lg 2xl:text-xl 2xl:h-16 2xl:w-52 xl:w-40 xl:h-12 rounded-full btnEffet cursor-pointer"  type="button" value="Discord"/>
          </div>
        </div>
        <div className="order-1 lg:order-2 p-4 lg:p-10 z-30 lg:col-span-1 relative">
          <div className="z-60 flex justify-center w-full h-full items-center">
            <img className="z-60" src="/Images/thumb.png" alt="" srcset="" />
          </div>
        </div>  
    </div>
    </div>
  )
}
export default Header