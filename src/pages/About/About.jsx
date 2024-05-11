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
import { Row } from 'react-bootstrap';

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
    <div className='container'>
    <div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2 style={{}}>About KGC</h2>
				</div>
			</div>
		</div>
            <div className="row">
                <div className='d-flex flex-column justify-content-center mb-4 mb-lg-0'>
   
            <div className='ml-3 p-3 vw-100 container h-100 d-flex flex-column  justify-content-center text-dark'>
                <p className='mb-3'>Khalsa Girls College Sadulshahar is located in the heart of the city, Ward No.19,near BSNL Telephone Exchange Office. In the picturesque and peaceful environment of nature, this institution is associated with the ideals of ancient Gurukul. its beauty attracts everyone.
In the session 1972-73, Mr. Mohar Singh Sidhu, a visionary, established this institution as a primary school. Further improving this form, it has been dedicated to the service of the society in the form of Higher Primary School since 1978-79, Secondary School since 1989-90 and Higher Secondary School since 2001. This institution holds a proud place in the field of education and sports.
Adopting the ideas and ideals given by Shri Guru Nanak Dev Ji, in the past years, the talented students of the institution have set glorious records in the board examinations.
Cultural programs are organized from time to time to develop qualities like secularism, discipline and tolerance in the institution. In fact, the credit for all-round development goes to the administrative committee, qualified, experienced, and hardworking teachers. It is due to their loyalty, dedication and hard work, the students are able to achieve all-round development.
There is a system of co-education in the school and only girls' education in the college and special emphasis is given on secularism and discipline.
The inauguration of the college is another big step on the path of progress by the institution. In which full cooperation of the people of the area is expected in the same way as the school is getting this cooperation.
Khalsa Shikshan Samiti and the college family are grateful for the cooperation received from the residents of the area in the past and assure them that with their support the college will fulfil their aspirations and in the coming time, will set new records in the field of education by starting new departments.
</p></div>

</div>
</div>
</div>

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