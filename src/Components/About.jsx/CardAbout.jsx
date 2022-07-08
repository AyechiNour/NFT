import React from "react"
import { useTranslation } from "react-i18next"

const CardAbout = () => {
  const [t , i18n]= useTranslation()
  return (
    <div className="CardEffet p-4 lg:p-12 2xl:p-16 rounded-3xl shadow cursor-pointer z-30">
        <div className="flex flex-col">
            <h2 className="text-lg 2xl:text-2xl" style={{fontFamily:'Loew-medium'}}>{t('AboutTitle')}</h2>
            <div className="flex flex-row mb-6 lg:mb-10">
              <h1 className="text-3xl xl:text-5xl 2xl:text-7xl uppercase" style={{fontFamily: 'Loew-extraBold'}}>{t('AboutTitle1Part1')}</h1>
              <h1 className="px-4 text-3xl xl:text-5xl 2xl:text-7xl uppercase" style={{fontFamily: 'Loew-light'}}>{t('AboutTitle1Part2')}</h1>
            </div>
            <p className="text-sm sm:text-base lg:text-lg 2xl:text-2xl lg:py-4" style={{fontFamily: 'Loew-regular'}}>{t('AboutParagraph')}</p>
            <div className="py-5 2xl:py-10 flex flex-row">
              <button className="mr-5 sm:mt-0 mt-2 rounded-3xl px-10 py-2 btnEffet">Twitter</button>
              <button className="sm:mt-0 mt-2 rounded-3xl px-10 py-2 btnEffet">Discord</button>
            </div>
        </div>
    </div>
  )
}

export default CardAbout