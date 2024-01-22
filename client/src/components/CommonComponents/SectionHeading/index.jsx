import React from 'react'

const SectionHeading = ({title}) => {
  return (
    <div className='  text-center flex justify-center flex-col items-center'>
    <span className=' block h-1 w-[90px] bg-main-color'></span>
      <h2 className=' text-4xl font-bold py-4'>{title}</h2>
   </div>
  )
}

export default SectionHeading
