import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Navbarhead } from '../../components/Navbar/Navbar';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: 'Three Year Degree Course in Arts (B.A.) ',
        subjects:'Optional Sub. Mark any three of the following. 1. English Literature 2. Punjabi Literature 3. Hindi literature 4. Political Science 5. Geography 6. Economics 7. Public Administration 8. Home Science 9. Computer 10. Mathematics 11. Sociology 12. History'
     },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Science Course',
        description: 'Three Year Degree Course in Science (B.Sc.) ',
        subjects:'Optional Sub. Compulsory Subject 1. Chemistry 2. Physics 3. Biology Zoology 4. Botany 5. Mathematics 6. Computer',
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'Compulsory Subject (Only for first year girl students)',
        subjects:'1. Elementary Computer (Elem. Computer) 2. Environmental Std. 3. General Hindi/English'
        },
    
];

function Courses() {
  return (
    <div className='courses-page'>
        <Navbarhead/>
        <div className='container'>
    <div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2 style={{}}>Courses</h2>
				</div>
			</div>
		</div>
        <div className="row">
                <div className='d-flex flex-column justify-content-center mb-4 mb-lg-0'>
            <div className='w-100 container h-100 d-flex flex-column  text-dark mt-2'>
                <p className='mb-2'>KGC offers Bachelor of Arts (BA) and Bachelor of Science (BSc) degrees, providing diverse academic pathways and opportunities for students to pursue their interests and career goals.
</p>  </div>
        </div>
        </div>
        </div>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-md-6 col-lg-4'>
                        <Card className='text-dark shadow scale-hover-effect'>
                            <Card.Img src={course.img} height={250}  width={100}  />
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-3 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                                <ul></ul>
                                <Card.Text className='text-center'>{course.subjects}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;