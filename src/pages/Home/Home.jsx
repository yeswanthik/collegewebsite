import React from 'react';
import './Home.css';
import { Link,  useNavigate } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import { Card } from 'react-bootstrap';
import President from  '../../utils/images/president.jpg';
import Principal from '../../utils/images/g9.JPG'
import Director from '../../utils/images/director.jpg'
import { Navbarhead } from '../../components/Navbar/Navbar';

const blogs = [
    
    {
        id: 1,
        img: [President],
        title: 'President',
        description: 'Khalsa Girls College Sadulshahar, is a renowned institute of higher education.It claims pre-eminence throughout the world because it has its roots in the lofty ideals of the Great Gurus and presently moves towards the future with a visionary outlook. '
    },{
        id: 2,
        img: [Principal],
        title: 'Principal',
        description: 'Educated man is an asset to the society. He can be a harbinger of social, economics and ethical change. The time after plus two is the most crucial phase in the life of a student. '
    },
    {
        id: 3,
        img: [Director],
        title: 'Director',
        description: 'Like the golden history of the institution, its present is also very glorious. The students of the institution have made the institution proud at the national and international level by achieving excellent achievements in all fields.' 
    }
];

function Home() {
    const navigate=useNavigate()
  return (
    <div className='home-page'>
        <Navbarhead/>
        <header className='h-100 p-3  min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center mt-5'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>KHALSA GIRLS COLLEGE SADUL SHAHAR</h1>
                <p>Khalsa Girls College  has a reckoning reputation of being one of the most renowned premier postgraduate institutions, engaged at all times in the holistic development of women. The major strengths of the college are:Commitment towards enhancing Academic Excellence resulting in laudable achievements in academics and para- academics.Hub of Sports Excellence with an outshining track record.Centre for Development of Pedagogical Excellence with admirable achievements.Multi-faculty college offering an array of UG and PG courses along with Value added and Vocational Courses.
Excellent Infrastructural and Learning Resources. State of art auditorium and open air theatre provide a stage for various co curricular activities.
</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Register</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5" style={{backgroundColor:"#FCE1DB"}}>
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>The present of this institution is as glorious as its history. The students have made the institution proud by achieving excellent achievements at national and international levels in all fields. The number of students selected in competitive examinations after studying in the institute is increasing every year, which is a matter of pride. Click Lear nmore to see the courses offered</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="py-5">
            <FaqAccordion />
        </div> */}

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
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
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;