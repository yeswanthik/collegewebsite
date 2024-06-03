import React from 'react';
import { Navbarhead } from '../../components/Navbar/Navbar';
import PrincipalImage from '../../utils/images/g9.JPG'


function Principal() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <div className='container '>
   

<div className="row">

<div className='col-lg-4 d-flex mt-5 justify-content-center '>
                    <img src={PrincipalImage}  style={{width:"350px", height:"350px"}}  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>

            <div className=' p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>Education is a life-long learning process. Learning happens all the time; not only in a pre-designated place called the school. It happens in the home, between home and school too. The home’s and school’s mission therefore is to provide a learning environment and opportunities to the children as the learners.   Shaping young, impressionable minds is one of life’s biggest challenges. At KHALSA GIRLS COLLEGE,SADUL SHAHAR , we aim to empower our students to grow as individuals with strong open discerning minds with an international perspective, preparing them to make a mark in the global village - the world has come to be today.</p>
                <p className='mb-3'>Our distinctive academic programmmes and innovative teaching methodologies encourage students to develop critical-thinking and learn through enquiry and reason, to exchange thoughts and ideas, to develop key personal and social values, to take ownership for her choices and to set goals to realize their own unique potential.   Authentic education implies an on-going, continuous interplay between the five moments of context, experience, reflection, action and evaluation between parents, students and lecturers.This is not to lead to mere information but to appropriation, integration into the very activity of Almighty within the created reality of our world but especially within each person. This then leads from information to transformation. </p>
                <p className='mb-3'>The School by deepening a sense of wonder, reverence, creativity, fidelity, communication, openness and charity to each other and to the whole world seeks to work for the transformation of the complete person.   The lecturers approach the classroom as one does a temple. Teacher-student relationships take time to develop and deepen and need a climate of love and trust. There must also be continuity between teachers and students both within the classroom and in the wider college environment.   We strive to provide an environment that is basically sacred, and has a framework of discipline that is flexible yet supportive, a freedom that allows students to learn even from their mistakes, to develop into person moulded by the correlatives of freedom and responsibility.   The developmentally appropriate curriculum for young children provides all the areas of a student’s development; physical, social, emotional and cognitive.</p>
                <p className='mb-3'> KGC follows a process-oriented way of teaching wherein the lecturers provide students opportunities to explore wide variety of materials. The students enjoyment and learning through these explorations are given more importance than the final product or outcome.   Parental involvement in a child's education process is both a gift to your child and a gift to the school. This partnership is strongly encouraged and highly valued at KGC.   The practical experience of learning enables our students to leave our college daily with either something in their hand, something in their mind and especially something in their heart.   The distinctive and firm underlying philosophy of KGC is to provide Global Education while being steeped in the rich Indian educational tradition and core values. Our emphasis is to create a society of progressive, thinking individuals who will contribute to the intellectual development of the global Community.   We value igniting the spark of creativity and curiosity in our students.</p>


<p style={{fontWeight:"bold"}}>Dr. Jyothi Chhadra, Principal </p></div>

</div>
</div>
</div>


    </div>
  )
}

export default Principal;