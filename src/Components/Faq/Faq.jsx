import React from "react"
import { useTranslation } from "react-i18next"

const Faq = () => {
    const [t , i18n]= useTranslation()
    return (
        <div className="w-full shadow relative bg-blue lg:bg-transparent">
        <div class="custom-shape-divider-bottom-1656285286">
            <img className="w-full" src="/Images/question.png" alt="" srcset="" />
        </div>
            <img className="absolute hidden lg:block top-0 left-0 w-full h-full" src="/Images/bgFaq.png" alt="" srcset="" />
            <div className="bgImgFaq relative h-full pb-16 lg:pb-0">
                <div className="grid lg:grid-cols-2 grid-cols-1 flex items-center justify-items-center">
                    <img src="/Images/2.gif" className="lg:w-3/4 py-8 lg:py-16 px-4" alt="" />
                    <div className="flex flex-col items-center text-center lg:pr-10 py-8 lg:py-16">
                        <h1 className="text-4xl xl:text-6xl 2xl:text-8xl uppercase" style={{fontFamily: 'Loew-extraBold'}}>{t('FAQTitle')}</h1>
                        <p className="text-sm lg:text-lg text-center 2xl:text-2xl py-7 px-2" style={{fontFamily: 'Loew-regular'}}>{t('FAQParagraph1')}</p>
                        <p className="text-sm lg:text-lg text-center 2xl:text-2xl px-2" style={{fontFamily: 'Loew-regular'}}>{t('FAQParagraph2')}</p>
                        <button style={{fontFamily: 'Loew-medium'}} className="text-sm xl:text-lg 2xl:text-xl mr-5 mt-4 sm:mt-10 mt-2 rounded-3xl px-10 py-2 btnEffet z-40 lg:mb-28">{t('FAQBouton')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq