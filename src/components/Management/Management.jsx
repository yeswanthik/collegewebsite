import React from 'react';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection'; 
import Person1 from '../../utils/images/g2.jpeg';
import Person2 from '../../utils/images/g8.jpeg';
import Person4 from '../../utils/images/g12.JPG';
import Person5 from '../../utils/images/g13.JPG';
import { Navbarhead } from '../../components/Navbar/Navbar';
import Tressurer from '../../utils/images/tressurer.png'
import Principal from '../../utils/images/g9.JPG'
import DirectorImage from '../../utils/images/director.jpg'
import VP from '../../utils/images/vicepresident.jpg'
import President from  '../../utils/images/president.jpg';

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

function Management() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <div className='container '>
    <div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2>Message From Management</h2>
				</div>
			</div>
		</div>
            <div className="row">
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
   
            <div className='ml-3 p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>
​Educated man is an asset to the society. He can be a harbinger of social, economics and ethical change. The time after plus two is the most crucial phase in the life of a student. It can be a turning point in his career. Higher Education can transform his life. The diligent efforts put in by the student at this point of time will help him reap life long benefits.
Khalsa Girls college with its year long history, has been one of the premier Higher Educational Institutions SGNR . The Status of Autonomous College is yet another milestone achievement in its illustrious and glorious history. It is a multi-faculty Graduate Girls College, that runs degree courses at Graduate.
He mission and objective of its founding fathers has always been to inculcate high moral values along with academic excellence. To promote development of all round personality in a student, the college offers extra mural and co-curricular activities. The college has evolved a beings and benevolent system to look into the needs and problems of the students. It is expected of the students that they go through the ‘Prospectus’ thoroughly and become aware of the high ideals to make Khalsa Girls College, Sadulshahar a destination for Higher Education and Learning.
​Best wishes and blessings to the students for the upcoming session and their bright future.</p>
<p style={{fontWeight:"bold"}}>
Mohar Singh Sidhu,
Secretary </p></div>

</div>
<div className='col-lg-4 d-flex  mt-5 '>
                    <img src={President} className='img-fluid w-75 h-75'  alt="" />
                </div>
</div>
<div className="row">
    
<div className='col-lg-4 d-flex mt-5 '>
                    <img src={VP} className='img-fluid w-75 h-75'  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
   
            <div className='ml-3 p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Friends,</h3>
                <p className='mb-3'>Indian culture creates unity in diversity and the confluence of education and service is the ideal of Indian culture. We can see Indian culture only through the mirror of education. We can get rid of the poison of selfishness and ego only through education. Therefore, by drinking the nectar of knowledge and leading a life of service, make your life meaningful and provide progress to the society.
Vidya's feet start moving forward on their own to pick up the fallen, move the fallen and embrace the victim. According to Shri Guru Nanak Dev Ji, serving others is the greatest service. Therefore, adopting his ideals, the organization, with a spirit of service, is functional for the last four decades. Morality, discipline, tolerance, secularism are the pillars of this institution and due to which it is continuously moving on the path of progress.
With best wishes from the entire school family</p>
<p style={{fontWeight:"bold"}}>Sukhvinder Singh Lalgharia,
President </p></div>

</div>
</div>
<div className="row">
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
   
            <div className='ml-3 p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Friends,</h3>
                <p className='mb-3'>Khalsa Girls College Sadul Shahar was established in 2007-08 with an aim to provide quality education to students at under graduate and post graduate level. Situated in the heart of  city of Sadul Shahar in a convivial atmosphere, the college is taking huge strides to provide premium education to its students. The College ensures that its students do not just accumulate degrees but also become worthy of getting placed. Here the aim is not just to provide knowledge but also to encourage them to apply their minds. Every effort is made to chisel them to develop their creative edge.

I have the greatest satisfaction of serving the cause of higher education through  Khalsa Girls College Sadul Shahar . It was the vision and dream of our Sikh Gurus to provide and equip our youth with knowledge and skills that would prepare them for global opportunities.

Today I am elated to see our college serving the needs of not only the community within Sadul Shahar but also the students coming from nearby cities and villages  for varied courses . We will not rest on our laurels but continue to enhance the quality of higher education by collaborating with experts from across the globe We will pursue every path to justify you as leader in higher education.
As Education is an investment in future It not only broadens the horizons of an individual’s thinking, but opens up possibilities for the collective growth of community nation and civilized world of mankind.
To ensure that the students are able to face any challenge, the college has various value added programmes and personality development classes. Giving back to society is an integral part of the vision of institute.​ ​​​​​​​</p>
<p style={{fontWeight:"bold"}}>S.Gurjeet Singh Sidhu​​​,
Treasurer</p></div>
</div>

<div className='col-lg-4 d-flex mt-5'>
                    <img src={Tressurer} className='img-fluid w-75 h-75'  alt="" />
                </div>



</div>
<div className="row">

<div className='col-lg-4 d-flex mt-5 ml-4'>
                    <img src={DirectorImage} className='img-fluid w-75 h-75 '  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>

            <div className=' p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>
                The present of this institution is as glorious as its history. The students have made the institution proud by achieving excellent achievements at national and international levels in all fields. The number of students selected in competitive examinations after studying in the institute is increasing every year, which is a matter of pride.
                  </p>
                <p className='mb-3'>
                Whenever I have made proposals for the progress and investigation of the organization, the management committee has encouraged me by accepting them, for which I am deeply grateful.
                  </p>
                  <p className='mb-3'>
                  Future plans include proposal to publish annual magazine of the institution, to start new departments in the college in the coming session, special classes will be organized to give emphasis on spoken English as per the demand of time and for preparation of competitive examinations. Our special efforts will be on obtaining maximum marks as well as quality education, so that more and more students get selected in various competitive examination and benefit the society. 
                  </p>
                  <p className='mb-3'>
                  These steps of progress of the organization are the result of the faith and blessings expressed in me by the entire staff and management committee. I hope that your will continue to support me in the same way in future as well. 
                  </p><p style={{fontWeight:"bold"}}>Mandeep Singh Sidhu,
Director </p></div>

</div>
</div>
<div className="row">
    
<div className='col-lg-4 d-flex mt-5 '>
                    <img src={Principal} className='img-fluid w-75 h-75'  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
   
            <div className='ml-3 p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>You are heartily welcome to Khalsa Girls College. Inspired by the saying that wealth of education increases by sharing, the college was earlier established as Khalsa Model Primary School to enrich this area with wealth of knowledge.
Considering the spread of education and the need of the area, the school was upgraded to higher secondary and then to high school level. Due to phased development, this institution, not only in Sadulshahar, but among the leading institutions of Rajasthan, holds a special place.
In the institution, efforts are made for the all-round development of the personality of the students and all efforts are made in such a direction that the students can find the path to their progress by adopting social diversities in practical life. I am sure that you will have all the necessary facilities available in the institution and you will get a suitable environment for study and contemplation. With best wishes for your bright future...</p>
<p style={{fontWeight:"bold"}}>Sukhwinder Kaur Sidhu
Manager / Chairman  </p></div>

</div>
</div>
</div>

      
    </div>
  )
}

export default Management;