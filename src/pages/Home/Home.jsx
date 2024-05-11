import React from 'react';
import './Home.css';
import { Link,  useNavigate } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import { Card } from 'react-bootstrap';
import President from  '../../utils/images/SukPresident.jpg';
import Secretary from '../../utils/images/president.jpg'
import { Navbarhead } from '../../components/Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Chairman from '../../utils/images/tressurer.png'
import Gallery1 from '../../utils/images/gallery1.jpeg'
import Gallery2 from '../../utils/images/gallery2.jpeg'
import Gallery3 from '../../utils/images/gallery3.jpeg'
import Gallery4 from '../../utils/images/gallery4.jpeg'
import Gallery5 from '../../utils/images/gallery5.jpeg'
import Gallery6 from '../../utils/images/gallery6.jpeg'
import Gallery7 from '../../utils/images/gallery7.jpeg'
import Gallery8 from '../../utils/images/gallery8.jpeg'
import Gallery9 from '../../utils/images/gallery9.jpeg'
import Gallery10 from '../../utils/images/gallery10.jpeg'
import Gallery11 from '../../utils/images/gallery11.jpeg'
import Gallery12 from '../../utils/images/gallery12.jpeg'

const blogs = [
    
    {
        id: 1,
        img: [President],
        title: 'President',
        name:'Sukhvinder Singh Lalgharia',
        description: 'Indian culture creates unity in diversity and the confluence of education and service is the ideal of Indian culture. We can see Indian culture only through the mirror of education. We can get rid of the poison of selfishness and ego only through education. Therefore, by drinking the nectar of knowledge and leading a life of service, make your life meaningful and provide progress to the society.'
      },{
        id: 2,
        img: [Chairman],
        title: 'Chairman',
        name:'Sukhwinder Kaur Sidhu',
        description: 'You are heartily welcome to Khalsa Girls College. Inspired by the saying that wealth of education increases by sharing, the college was earlier established as Khalsa Model Primary School to enrich this area with wealth of knowledge.'
         },
    {
        id: 3,
        img: [Secretary],
        title: 'Secretary',
        name:'Mohar Singh Sidhu',
        description: '​Educated man is an asset to the society. He can be a harbinger of social, economics and ethical change. The time after plus two is the most crucial phase in the life of a student. It can be a turning point in his career. Higher Education can transform his life. The diligent efforts put in by the student at this point of time will help him reap life long benefits.'
        }
];

function Home() {
    const navigate=useNavigate()
  return (
    <>
     <Navbarhead/>
     <div className="row" style={{paddingBottom:"2px"}}>
			<div class="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div class="about_title" style={{paddingBottom:"2px"}}>
                <h4 className='text-center'>Welcome To</h4>
					<h2>KHALSA GIRLS COLLEGE SADUL SHAHAR</h2>
				</div>
			</div>
		</div>
     <Carousel
      showArrows={true} // Display arrow navigation
      infiniteLoop={true} // Infinite loop through slides
      autoPlay={true} // Auto play the carousel
      interval={2000} // Time between slides in milliseconds
      showStatus={false} // Hide slide status indicator
      showThumbs={false} // Hide thumbnail navigation
      swipeable={true} // Enable swipe navigation
      className="my-carousel"
    >
         <div>
        <img src={Gallery12} alt="Slide 1" />
      </div>
      <div>
        <img src={Gallery11} alt="Slide 2" />
      </div>
      <div>
        <img src={Gallery10} alt="Slide 3" />
      </div>
      <div>
        <img src={Gallery9} alt="Slide 1" />
      </div>
      <div>
        <img src={Gallery8} alt="Slide 2" />
      </div>
      <div>
        <img src={Gallery7} alt="Slide 3" />
      </div>
      <div>
        <img src={Gallery6} alt="Slide 1" />
      </div>
      <div>
        <img src={Gallery5} alt="Slide 2" />
      </div>
      <div>
        <img src={Gallery4} alt="Slide 3" />
      </div>
      <div>
        <img src={Gallery3} alt="Slide 1" />
      </div>
      <div>
        <img src={Gallery2} alt="Slide 2" />
      </div>
      <div>
        <img src={Gallery1} alt="Slide 3" />
      </div>
    </Carousel>
     {/* <Container className='me-auto w-100'>
     <Carousel autoPlay={true} showArrows={true} width="100%" >
                <div className='h-35'>
                    <img src={Gallery1}  />
                </div>
                <div>
                    <img src={Gallery2}  />
                </div>
                <div>
                    <img src={Gallery3} />
                </div>
            </Carousel>
     </Container> */}
    
     <div>
       
     <div className='container'>
     
            <div className="row pb-3 mt-3">
            
                <div className=' d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                
                <p>Khalsa Girls College Sadulshahar is located in the heart of the city, Ward No.19,near BSNL Telephone Exchange Office. In the picturesque and peaceful environment of nature, this institution is associated with the ideals of ancient Gurukul. its beauty attracts everyone.
In the session 1972-73, Mr. Mohar Singh Sidhu, a visionary, established this institution as a primary school. Further improving this form, it has been dedicated to the service of the society in the form of Higher Primary School since 1978-79, Secondary School since 1989-90 and Higher Secondary School since 2001. This institution holds a proud place in the field of education and sports.<Link to="/about">Continue Reading</Link></p>
                <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-dark btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row" style={{backgroundColor:"#FCE1DB" }}>
                <div className='d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                <h2 className='text-center mb-3  mt-3'> Management</h2>
            <div className='ml-3 p-3 vw-100 container h-100 d-flex flex-column  justify-content-center text-dark'>
                <p className='mb-3'>
Khalsa Girls College prides itself on having an exceptional management team and dedicated staff members who are committed to providing the highest quality education and support to students. With strong leadership and a focus on continuous improvement, the college management ensures that every aspect of the institution operates smoothly and efficiently. The staff, comprising experienced educators and professionals, are passionate about their work and go above and beyond to create a nurturing learning environment. Their dedication, combined with innovative teaching methods and personalized attention, ensures that students receive the best possible education and preparation for their future endeavors. Together, the management and staff form a cohesive team dedicated to the success and well-being of every student at Khalsa Girls College<Link to="/management">Read More</Link></p></div>

</div>
{blogs.map((blog) => (
                        
                        <div key={blog.id} className='col-xs-12 col-md-6 col-lg-4'>
                            <Link to="/management" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" width={100} height={250} src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}<span style={{color:"red"}}   onClick={()=>{navigate("/blog")}}>Learn more</span></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                    <Link to="/management" className='text-center'>
                    <button type='button' className='btn btn-danger btn-lg mt-2 mb-2'>Read More </button>
                </Link>
</div>
<div className=" row py-5" >
            <ChooseSection />
        </div>
        <div className="row" style={{backgroundColor:"#FCE1DB" }}>
                <div className='d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                <h2 className='text-center mb-3  mt-3'> Vision And Mission</h2>
            <div className='ml-3 p-3 vw-100 container h-100 d-flex flex-column  justify-content-center text-dark'>
                <p className='mb-3'> “To be an institution of repute, with a humane face, that is dedicated to academic excellence and social transformation by improving the quality of life of its students.”
<Link to="/visionandmission">Read More</Link></p>
<p className='mb-3'> Our mission is to realize the vision by developing life-long learners- equipped with specialised knowledge, enhanced skill sets and humane values-who are not only employable and entrepreneurial but are also able to contribute meaningfully to social development. We endeavour to make our students see themselves as agents of change in the globalised world, confident of taking up professional and societal challenges with passion and maturity.
<Link to="/visionandmission">Read More</Link></p></div>


</div>
</div>
        <div className='row d-flex align-items-center justify-content-around mt-3' >
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize' >2024 start courses</h2>
                        <p>The present of this institution is as glorious as its history. The students have made the institution proud by achieving excellent achievements at national and international levels in all fields. The number of students selected in competitive examinations after studying in the institute is increasing every year, which is a matter of pride. Click Lear nmore to see the courses offered</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className='row g-4 mt-3'style={{backgroundColor:"#FCE1DB" }}>
                <h2 className='text-center text-capitalize mb-3'>Admission</h2>
                <div className='ml-3 p-3 vw-100 container h-100 d-flex flex-column  justify-content-center text-dark'>
                <p className='mb-3'>
                For admission in the first year of Arts Faculty, it is mandatory to pass Senior Secondary (10+2) examination.

For admission in the Science programmes, it is mandatory to pass the senior secondary examination with science.

Provisional admission will be given to the girl students appearing in the supplementary examination which will be considered regular only after they pass the supplementary examination. For girl students outside Rajasthan state, it is necessary to have completely passed 10+2.
</p>
<Link to="/admission" className='text-center'> <button type='button' className='btn btn-danger btn-lg mt-2 mb-2'>Read More </button></Link>

</div>
                    
                </div>
                <div className='row g-4 mt-3'>
                <h2 className='text-center text-capitalize mb-3'>Join@KGC</h2>
                <div className='ml-3 p-3 vw-100 container h-100 d-flex flex-column  justify-content-center text-dark'>
                <p className='mb-3'>
                Are you passionate about education and eager to make a difference in the lives of students? Join our dynamic team of educators and staff members who are dedicated to providing quality education and fostering a supportive learning environment.
               </p>
<p className='mb-3'>
At Khalsa Girls College, we are committed to recruiting talented individuals who share our vision and values. Whether you are an experienced educator, administrative professional, or support staff member, we invite you to explore the exciting career opportunities available at our institution.
</p>
<Link to="/careers" className='text-center'> <button type='button' className='btn btn-danger btn-lg mt-2 mb-2'>Click to apply </button></Link></div>
                    
                </div>
        </div>

       


        {/* <div className="py-5">
            <FaqAccordion />
        </div> */}

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
             
                
                
            </div>
        </div>
    </div>
   
    </>
    
  )
}

export default Home;