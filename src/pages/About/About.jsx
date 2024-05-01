import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection'; 
import Person1 from '../../utils/images/g2.jpeg';
import Person2 from '../../utils/images/g8.jpeg';
import Person4 from '../../utils/images/g12.JPG';
import Person5 from '../../utils/images/g13.JPG';
import { Navbarhead } from '../../components/Navbar/Navbar';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
   
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
   
];

function About() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <header className='h-75 p-3  d-flex align-items-center text-light'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light mt-5'>
                <h3 className='text-center fw-semibold'>About Us</h3>
                <p className='text-center w-75 mb-5'>Khalsa Girls College Sadulshahar, nestled in Ward No.4 near the Municipality Office, embodies the serene beauty of nature and the revered ideals of ancient Gurukuls. Established in 1972-73 by the visionary Mr. Mohar Singh Sidhu as a primary school, it has since evolved into a Higher Primary School (1978-79), Secondary School (1989-90), and Higher Secondary School (2001), dedicated to serving society. </p> </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>You are heartily welcome to Khalsa Girls College. Inspired by the saying that wealth of education increases by sharing, the college was earlier established as Khalsa Model Primary School to enrich this area with wealth of knowledge.
Considering the spread of education and the need of the area, the school was upgraded to higher secondary and then to high school level. Due to phased development, this institution, not only in Sadulshahar, but among the leading institutions of Rajasthan, holds a special place.
In the institution, efforts are made for the all-round development of the personality of the students and all efforts are made in such a direction that the students can find the path to their progress by adopting social diversities in practical life. I am sure that you will have all the necessary facilities available in the institution and you will get a suitable environment for study and contemplation.
</p>
<p className='mb-4 mb-lg-5'>Future plans include proposal to publish annual magazine of the institution, to start new departments in the college in the coming session, special classes will be organized to give emphasis on spoken English as per the demand of time and for preparation of competitive examinations. Our special efforts will be on obtaining maximum marks as well as quality education, so that more and more students get selected in various competitive examination and benefit the society.With best wishes for your bright future... </p><Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;