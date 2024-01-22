import React from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'

const OurEvents = () => {
  return (
    <section className='section py-16'>

            
        <SectionHeading
        title='Upcoming Events'
        />


        <div className=' space-y-6 py-16'>
            <div className=' flex flex-col text-center lg:text-start lg:flex-row items-center lg:items-start gap-12'>
                <div className=' border-2 border-main-color  w-[150px] h-[150px] flex justify-center px-12 flex-col font-bold  text-main-color items-center '>
                    <p className='text-3xl'> 07</p>
                    <p>January</p>
                </div>
                <div>
                    <h5 className='  cursor-pointer inline-block hover:text-main-color duration-500 font-semibold text-2xl'>Student Festival</h5>
                    <h6 className=' font-semibold'>Grand Central Park</h6>
                    <p className=' font-semibold text-gray-400'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>

                <div >
                    <img  className=' max-w-[250px]' src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
                </div>
            </div>

            <div className=' flex-col lg:flex-row text-center lg:text-start  flex items-center lg:items-start gap-12'>
                <div className=' border-2 border-main-color px-12 w-[150px] h-[150px] flex justify-center flex-col font-bold  text-main-color items-center '>
                    <p className='text-3xl'> 07</p>
                    <p>January</p>
                </div>
                <div>
                    <h5 className='  cursor-pointer inline-block hover:text-main-color duration-500 font-semibold text-2xl'>Student Festival</h5>
                    <h6 className=' font-semibold'>Grand Central Park</h6>
                    <p className=' font-semibold text-gray-400'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>

                <div >
                    <img  className=' max-w-[250px]' src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
                </div>
            </div>

            <div className=' flex-col lg:flex-row text-center lg:text-start   items-center lg:items-start flex gap-12'>
                <div className='px-12 border-2 border-main-color  w-[150px] h-[150px] flex justify-center flex-col font-bold  text-main-color items-center '>
                    <p className='text-3xl'> 07</p>
                    <p>January</p>
                </div>
                <div>
                    <h5 className='  cursor-pointer inline-block hover:text-main-color duration-500 font-semibold text-2xl'>Student Festival</h5>
                    <h6 className=' font-semibold'>Grand Central Park</h6>
                    <p className=' font-semibold text-gray-400'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>

                <div >
                    <img  className=' max-w-[250px]' src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
                </div>
            </div>
        </div>


    </section>
  )
}

export default OurEvents
