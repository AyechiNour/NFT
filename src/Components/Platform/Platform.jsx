import React from 'react'
import Join from './Join'
import PlatformTop from './PlatformTop'

const Platform = () => {
  return (
    <div className='relative lg:px-4 lg:py-10 lg:p-10'>
        <img className='absolute hidden lg:block bottom-0 left-0 w-full h-full' src="/Images/bg-platform.png" alt="" srcset="" />
        <PlatformTop/>
        <Join/>
    </div>
  )
}

export default Platform
