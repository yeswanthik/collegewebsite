import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Navbarhead } from '../../components/Navbar/Navbar';
import Ragging from '../../utils/images/ragging.png'
import Library from "../../utils/images/library.jpg"
import Lab from "../../utils/images/lab.jpg"
import Auditorium from "../../utils/images/auditorium.jpg"
import Cafetaria from "../../utils/images/cafeteria.jpg"
import multipurposehall from "../../utils/images/multipurposehall.jpg"
import openairtheater from "../../utils/images/openairtheater.jpg"
import Gurudhwar from "../../utils/images/gurudwar.jpg"
import SmartClass from "../../utils/images/smartclasses.jpg"
import Healthcare from '../../utils/images/health.jpg'
import Scholarships from '../../utils/images/scholsrships.jpg'
import Parentteacher from  '../../utils/images/parentteacher.jpg'
import Youthclub from '../../utils/images/youthvlub.jpg'
import Studentcouncil from '../../utils/images/studentcouncil.jpg'
import Careercoaching from '../../utils/images/Careercoaching.jpg'
import Vote from '../../utils/images/voteimage.jpg'
const blogs = [
    {
        id: 1,
        img: [Vote],
        title: 'Right to Vote',
        description: 'Voting is a fundamental democratic right that empowers individuals to have a voice in shaping the future of their communities and nations. Through the act of voting, citizens can actively participate in the decision-making process and contribute to the collective governance of society.'
    },
    {
        id: 2,
        img: [Ragging],
        title: 'Anti Ragging',
        description: 'The college strictly prohibits ragging, conducts annual anti-ragging campaigns, educates students during admissions, and has an effective committee and squad, resulting in a harmonious environment with no reported incidents.'
    },
    {
        id: 3,
        img: [Scholarships],
        title: 'Scholarships',
        description: ' Scholarships are offered to the students belonging to SC, ST and OBC categories. Merit cum means scholarships and Fee Concessions are given to students from economically weaker sections of the society'
    },
    {
        id: 4,
        img: [Careercoaching],
        title: 'Career Coaching',
        description: 'The KGC Career Coaching Cell (KGC CCC) was established with the objective of nurturing talent and aptitude to prepare the students for the various competitive exams like Civil Services, Banking services, etc'
    },
    {
        id: 5,
        img: [Youthclub],
        title: 'Youth Club',
        description: ' Youth club of the College is enabling the youth to utilize energies. The objective of the club is to provide a platform for the youth to collectively work towards themselves and society. For accomplishing this aim the club is organizing different activities from time to time.'
    
    },

    {
        id: 6,
        img: [Library],
        title: 'Library',
        description: 'College library: resource hub for academic materials. A library in college is a resource center providing access to a diverse collection of books, academic journals, multimedia materials, and digital resources to support learning, research, and intellectual exploration by students, faculty, and staff.'
      
    },
    {
        id: 7,
        img: [Lab],
        title: 'Lab',
        description: 'The college has well-equipped 6 labs for practical work and comprehensive. teaching.College computer labs have as many as 20 computers which have the facility of internet and licenced softwares and projectors to helps students to envisage things better. College Laboratories are equipped with latest apparatus for students.'
    },
    {
        id: 8,
        img: [Auditorium],
        title: 'Auditorium',
        description: 'The college has a fully ventilated auditorium in the campus with a seating capacity of more than 100 students. The auditorium, built with latest state-of-architecture design is equipped with the most modern facilities and is the pride of the college. It is equipped with hi-tech audio-visual equipment and super specialty sound and light system.'
    
    },
    {
        id: 9,
        img: [Gurudhwar],
        title: 'Gurudhwar Sahib',
        description: ' Sarjit Gurdwara is proposed in the college campus where the staff and students of the college participate actively in the “Community Kitchen” .. They collect the funds and prepare ‘langar’ which is partaken by the neighborhood community enthusiastically.'
     },
    {
        id: 10,
        img: [openairtheater],
        title: 'Open Air Theater',
        description: 'The college campus has a spacious open- air theatre which provides a platform to conduct departmental activities as well as host various cultural events and exhibitions. It is also a favorite space for student interaction and creative exchange of ideas. It has seating capacity of approx. 600 hundred students.'
    },
    {
        id: 11,
        img: [SmartClass],
        title: 'Smart Classes',
        description: 'KGC takes profound initiatives to provide latest technology to students thus benefiting them in keeping up with the pace of modernizing IT world. Smart class rooms have been added to the infrastructure to make the teaching learning process more intriguing.Videos and documentary movies are also used by some of the departments as teaching tools.'
    
    },
    {
        id: 12,
        img: [Cafetaria],
        title: 'Cafetatia',
        description: 'Khalsa Girls College canteen is a thriving hub of activity in the College throughout the year. The canteen, with a covered area of 600 sq.ft, has a seating capacity of 45 students and a separate section for faculty. A variety of Indian food and snack items are provided to the students and staff of the college with highest quality.'
    
    },
    {
        id: 13,
        img: [Healthcare],
        title: 'Health Care',
        description: ' The college has a health centre with a provision of a lady doctor for medical care of the students. A medical check-up of the students is carried out regularly. The college has annual contract with the CITY HOSPITAL for all types of medical requirements.'
    
    },
    {
        id: 14,
        img: [multipurposehall],
        title: 'Multi Purpose Hall',
        description: 'There is multipurpose utilization of hall, e.g. for conducting functions, exhibitions, seminars, conferences, workshops, mid-term and end-semester exams, staff meetings, placement drives, alumni association meet etc.'
    },

    
   
    {
        id: 15,
        img: [Parentteacher],
        title: 'Parent Teacher Association',
        description: 'The Parent Teacher Association is instrumental in providing a forum for open discussions on administrative and academic aspects of the college and their constructive incorporation in policy formulation.Class-wise PTA meetings are held to discuss the academic progress of students.'
    },
    {
        id: 16,
        img: [Studentcouncil],
        title: 'Student Council',
        description: 'The college has a very dynamic student council of 15 members functioning under the patronage of the principal and two senior members of the faculty. Newly elected student Council is administered oath by the Principal of the college.'
    
    },
    ];

function Blog() {
  return (
    <div className='blog-page'>
    <Navbarhead/>
    <div className='container'>
    <div className="row">
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" >
					<h2>Why KGC</h2>
				</div>
			</div>
		</div>
            <div className="row">
                <div className='d-flex flex-column justify-content-center mb-4 mb-lg-0'>
            <div className='w-100 container h-100 d-flex flex-column  text-dark '>
                <p className='mb-2'>Khalsa Girls College  has a reckoning reputation of being one of the most renowned premier postgraduate institutions, engaged at all times in the holistic development of women. The major strengths of the college are:
Commitment towards enhancing Academic Excellence resulting in laudable achievements in academics and para- academics.
Hub of Sports Excellence with an outshining track record.
	Centre for Development of Pedagogical Excellence with admirable achievements.
	Multi-faculty college offering an array of UG and PG courses along with Value added and Vocational Courses
	Excellent Infrastructural and Learning Resources. State of art auditorium and open air theatre provide a stage for various co curricular activities.
	Vast green campus provides ambience for holistic growth.
	Serene environs of the hostels provide a home away from home.
	Excellent Student Support services.
	Empowering and encouraging the meritorious and needy students through financial aid and scholarships.
	Enlightened and Visionary Managing Committee.
	Highly dedicated faculty with dynamic leadership.
	Culturally Diverse Student base.
	All inclusive admission policy.
	Student centric teaching learning process.
	Robust Culture of education that fosters critical thinking and creativity.
	Comprehensive education beyond curriculum.
	Commitment towards intellectual growth and spiritual development through value education.
	Quality assurance through IQAC.
	MoUs with Industry and Academic Institutions.
	Commitment towards Institutional Social responsibility.
	Total commitment towards Women empowerment.
</p>  </div>
        </div>
        </div>
        </div>
        
        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card border='warning' className='h-100 shadow scale-hover-effect bg-light text-dark border-0'>
                                    <Card.Img variant="top" width={100} height={250} src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center ' >
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className=''>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;