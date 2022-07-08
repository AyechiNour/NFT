import React from 'react'
import Bubble from '../Animation/Bubble'
import Caroussel3D from './Caroussel3D'
import { useTranslation } from "react-i18next"

const Creation = () => {
  const [t , i18n]= useTranslation()
  return (
    <div className='py-10 lg:flex-col lg:justify-center lg:items-center relative' style={{backgroundColor:"#2B1660"}}>
                    <div className="absolute top-0 lg:left-72 right-0"><Bubble /> </div>

        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row'>
                <h1 className="text-4xl xl:text-6xl 2xl:text-8xl" style={{fontFamily: 'Loew-extraBold'}}>{t('CreationTitlePart1')}</h1>
                <h1 className="text-4xl xl:text-6xl 2xl:text-8xl textAnimate ml-4 lg:ml-10" style={{fontFamily: 'Loew-extraBold'}}>{t('CreationTitlePart2')}</h1>
            </div>
            <p className="text-sm lg:text-lg text-center 2xl:text-2xl p-6" style={{fontFamily: 'Loew-regular'}}>{t('CreationParagraph')}</p>
        </div>
        <div className='my-10'>
            <Caroussel3D />
        </div>
    </div>
  )
}

export default Creation