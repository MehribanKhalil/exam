import React,{useState,useEffect} from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'
import CourseCard from '../CourseCard'
import axios from 'axios'

const CourseSection = () => {

  const [courses, setCourses] = useState([])

  const getData= async()=>{
    const res= await axios.get("http://localhost:5000/course")
    setCourses(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <section className=' section py-16'>


      <SectionHeading
      title='Popular Courses'
      />

      <div className=' grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-16'>
       {
        courses && courses.map(course=>(
          <div key={course._id}>
            <CourseCard
            {...course}
            product={course}
          />
          </div>
        ))
       }
      </div>


    </section>
  )
}

export default CourseSection
