import React from 'react'

const PreviousArrow = ({slider}) => {
  return (
<div className='absolute -bottom-12 prevButton' onClick={()=>{slider.slickPrev()}}><img src="Images/LeftButton.png" alt="" className="sm:w-10 sm:h-10 w-8 h-8 cursor-pointer"/></div>
  )
}

export default PreviousArrow
