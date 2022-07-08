import React from 'react'
import './animation.css';
const Bubble = () => {
   return (
      <div className='relative shadow-none contaiiner flex flex-col justify-center items-center overflow-hidden'>
         <div className='bubble justify-center -top-8'>
            <span className='span1 '></span>
            <span className='span1 top-2'></span>
            <span className='span1 top-3'></span>
            <span className=' span1 top-2'></span>
            <span className='span1 '></span>
         </div>

         <div className='bubble justify-center -top-2'>
            <span className='span1 '></span>
            <span className='span1 top-2'></span>
            <span className='span1 top-3'></span>
            <span className=' span1 top-2'></span>
            <span className='span1 '></span>

         </div>
         <div className='bubble justify-center -top-2'>
            <span className='span3 '></span>
          
            <span className='span3 '></span>

         </div>
         <div className='bubble justify-center'>
            <span className='span2 '></span>
            <span className='span2 -top-2'></span>
            <span className='span2 -top-3'></span>
            <span className=' span2 -top-2'></span>
            <span className='span2 '></span>
         </div>

         <div className='bubble justify-center top-8 '>
            <span className='span2 '></span>
            <span className='span2 -top-2'></span>
            <span className='span2 -top-3'></span>
            <span className=' span2 -top-2'></span>
            <span className='span2 '></span>

         </div>
      </div>
   )
}

export default Bubble