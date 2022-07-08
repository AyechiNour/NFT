import React from 'react'

const CardCreation = ({item}) => {
  return (
    <div className='flex justify-center items-center w-full  mb-6'>
        <div className='h-60 w-61 lg:h-96 lg:w-full rounded-2xl flex justify-center items-center'>
            <img className='w-full h-full' src={item.url} alt="" srcset="" />
        </div>
    </div>
    
  )
}
export default CardCreation