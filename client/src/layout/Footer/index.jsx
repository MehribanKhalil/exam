import React from 'react'
import './index.scss'


const Footer = () => {
  return (
    <footer className='footer section py-16'>
        <div className=' py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='space-y-5'>
               <div className=' flex ' >
               <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                <span  className=' font-bold text-white uppercase text-3xl'>COURSE</span>
               </div>
                <p className=' text-[#A5A5A5]'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>

            </div>
            
            <div className=' footer-element'>
                <h3 className='footer-title'> Menu</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
            </div>

            <div className=' footer-element'>
                <h3 className='footer-title'> Usefull Links</h3>
                    <ul>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                        <li>Community</li>
                        <li>Campus Pictures</li>
                        <li>Tuitions</li>
                    </ul>
            </div>


            <div className=' footer-element'>
                <h3 className='footer-title'> Contact</h3>
                    <ul className=' space-y-4'>
                        <li className='flex  gap-1 items-center'>
                            <img src="https://preview.colorlib.com/theme/course/images/placeholder.svg" alt="" /> Blvd Libertad, 34 m05200 Arévalo
                        </li>
                        <li className='flex  gap-1 items-center'>
                            <img src="https://preview.colorlib.com/theme/course/images/smartphone.svg" alt="" />  0034 37483 2445 322
                        </li>
                        <li className='flex  gap-1 items-center'>
                            <img src="https://preview.colorlib.com/theme/course/images/envelope.svg" alt="" /> hello@company.com
                        </li>
                        
                    </ul>
            </div>
          
        </div>

        <div className=' border-t border-gray-500 pt-10'>
            <div className=' flex justify-between flex-col md:flex-row'>
            <p  className=' text-gray-500'>
            Copyright ©2024 All rights reserved | This template is made with  by <span className=' cursor-pointer text-purple-400'>Mehi</span>
            </p>

            <div className=' flex gap-6  text-xl '>
                <button className='text-gray-200 hover:text-main-color duration-300'><i class="fa-brands fa-pinterest"></i></button>
                <button className='text-gray-200 hover:text-main-color duration-300'><i class="fa-brands fa-linkedin"></i></button>
                <button className='text-gray-200 hover:text-main-color duration-300'><i class="fa-brands fa-instagram"></i></button>
                <button className='text-gray-200 hover:text-main-color duration-300'><i class="fa-brands fa-facebook"></i></button>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
