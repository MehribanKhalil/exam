import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'

const Detail = () => {

  const {id}=useParams()

  const [courses, setCourses] = useState([])

  const getData= async()=>{
    const res= await axios.get(`http://localhost:5000/course/${id}`)
    setCourses(res.data)
  }

  useEffect(() => {
    getData()
  }, [])


  const {wishlist,handleWishlist}=useContext(WishlistContext)

  return (
    <div className=' section page  flex justify-center items-center py-32'>
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div className=' bg-slate-200 p-10 items-center flex gap-10 rounded-xl overflow-hidden'>
          <div>
            <img className=' overflow-hidden' src={courses.image} alt="" />
          </div>

          <div className=' space-y-5'>
            <h2 className=' text-2xl font-semibold'>{courses.title}</h2>
            <p>{courses.info}</p>

            <div>
          <button onClick={()=>handleWishlist(courses)} className=" text-2xl pb-3">
            {
          wishlist.some(x=>x._id === courses._id) ?  <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
            }
            
            
          </button>
        </div>
          </div>
          

         
      </div>

    </div>
  )
}

export default Detail
