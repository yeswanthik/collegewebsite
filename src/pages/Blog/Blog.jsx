import React,{useEffect,useState} from 'react';
import './Blog.css';
import {  useNavigate } from 'react-router-dom';
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
import Scholarships from '../../utils/images/scholarships.png'
import Parentteacher from  '../../utils/images/parentteacher.jpg'
import Youthclub from '../../utils/images/youthvlub.jpg'
import Studentcouncil from '../../utils/images/studentcouncil.jpg'
import Careercoaching from '../../utils/images/Careercoaching.jpg'
import Vote from '../../utils/images/voteimage.jpg'
import CCTV from '../../utils/images/cctv.png'
import SaveWater from '../../utils/images/savewater.jpg'
import { useLocation } from 'react-router-dom';
import { Card} from 'react-bootstrap';
import { BlogModal } from './BlogModal';
const blogs = [
    {
        id: 1,
        img: [Vote],
        title: 'Right to Vote',
        description: 'Voting is a fundamental democratic right that empowers individuals to have a voice in shaping the future of their communities and nations. Through the act of voting, citizens can actively participate in the decision-making process and contribute to the collective governance of society.',
    longDescription:["Voting is a fundamental democratic right that empowers individuals to have a voice in shaping the future of their communities and nations. Through the act of voting, citizens can actively participate in the decision-making process and contribute to the collective governance of society."," The right to vote is a cornerstone of democratic governance, serving as a fundamental mechanism through which citizens can express their will and influence the direction of their government and society. This essential democratic right empowers individuals to participate in the electoral process, allowing them to choose their representatives, voice their opinions on key issues, and hold their leaders accountable."," The right to vote is therefore more than a procedural formality; it is a vital expression of civic duty and a powerful tool for social change, enabling individuals to advocate for policies and leaders that reflect their values and aspirations."]
},
    {
        id: 2,
        img: [Ragging],
        title: 'Anti Ragging',
        description: 'The college strictly prohibits ragging, conducts annual anti-ragging campaigns, educates students during admissions, and has an effective committee and squad, resulting in a harmonious environment with no reported incidents.',
        longDescription:["Ragging is strictly banned in the college as per UGC instructions. Awareness among students is generated through Anti ragging campaign being held every year at the start of the session. During the time of admission they are constantly instructed upon this issue and are also made to sign an undertaking to this effect. ","Punishable aspects of Ragging and possible punishments are clearly mentioned in the college prospectus. To curb the menace of ragging in the institution, Anti ragging Committee of 5 faculty members has been set up in the college. Telephone numbers of all the members of the Anti Ragging Committee are displayed prominently in the college and hostel for easy access.","Anti – ragging squad of students also remained active secretly throughout the session. Anti Ragging Committee and squad has been so effective in its work that not even a single case has been reported in the college . Thus, the college ensures a cohesive and harmonious environment for its students."]
    
    },
    {
        id: 3,
        img: [Scholarships],
        title: 'Scholarships',
        description: ' Scholarships are offered to the students belonging to SC, ST and OBC categories. Merit cum means scholarships and Fee Concessions are given to students from economically weaker sections of the society',
        longDescription:["These are widely notified through the notice boards and announcements.Various scholarships offered are:","1. KHALSA SHIKSHAN SAMITI SCHOLARSHIP","2. Scheduled Caste Scholarship","3. Backward Class Scholarship","4. State Merit Scholarship","5. Minority Communities Scholarship","6. University Alumni Association"]
    },
    {
        id: 4,
        img: [Careercoaching],
        title: 'Career Coaching',
        description: 'The KGC Career Coaching Cell (KGC CCC) was established with the objective of nurturing talent and aptitude to prepare the students for the various competitive exams like Civil Services, Banking services, etc',
        longDescription:["The KGC Career Coaching Cell (KGC CCC) was established with the objective of nurturing talent and aptitude to prepare the students for the various competitive exams like Civil Services, Banking services, etc."]
    
    },
    {
        id: 5,
        img: [Youthclub],
        title: 'Youth Club',
        description: ' Youth club of the College is enabling the youth to utilize energies. The objective of the club is to provide a platform for the youth to collectively work towards themselves and society. For accomplishing this aim the club is organizing different activities from time to time.',
        longDescription:["Youth club of the College is enabling the youth to utilize energies. The objective of the club is to provide a platform for the youth to collectively work towards themselves and society. For accomplishing this aim the club is organizing different activities from time to time."]

    },

    {
        id: 6,
        img: [Library],
        title: 'Library',
        description: 'College library: resource hub for academic materials. A library in college is a resource center providing access to a diverse collection of books, academic journals, multimedia materials, and digital resources to support learning, research, and intellectual exploration by students, faculty, and staff.',
        longDescription:["The library has more than 60,000 books and subscribes to 20 journals. Besides it receives 13 newspapers and 30 magazines. Library and reading room are kept open to all students from 9 am to 4 pm on all working days.It has an open access facility. The entire collection is automated using the SOUL Library Management Software and all metadata entries are stored there only.","All books have been automated with barcode labels and charging & discharging of books is carried out through the use of laser scanner. For meritorious and economically backward students book bank facility is available. The library also provides books to students during the examination time with collection of deposit money.","LIBRARY SERVICES:","• Open access system","• Book Bank facility","•	Air cooled Reading Hall with a capacity of 60 students","•	Reprographic service","• Reference service","•	Small separate collection of books for competitive exams (not to be issued)","•	OPAC","• Internet facility","•	Periodicals & Magazines"]

    },
    {
        id: 7,
        img: [Lab],
        title: 'Lab',
        description: 'The college has well-equipped 6 labs for practical work and comprehensive. teaching.College computer labs have as many as 20 computers which have the facility of internet and licenced softwares and projectors to helps students to envisage things better. College Laboratories are equipped with latest apparatus for students.',
        longDescription:["College Laboratories are equipped with latest apparatus for students.","-> 2 Botony Labs with Capacity of 30 Students","-> 2 Zoology Labs with Capacity of 30 Students","-> 2 Chemistry Labs with Capacity of 30 Students","-> 2 Physics Labs with Capacity of 30 Students","-> 2 Geography Labs with Capacity of 30 Students","-> 1 Computer Labs with Capacity of 15 Students"]
    },
    {
        id: 8,
        img: [Auditorium],
        title: 'Auditorium',
        description: 'The college has a fully ventilated auditorium in the campus with a seating capacity of more than 100 students. The auditorium, built with latest state-of-architecture design is equipped with the most modern facilities and is the pride of the college. It is equipped with hi-tech audio-visual equipment and super specialty sound and light system.',
        longDescription:["The college has a fully ventilated auditorium in the campus with a seating capacity of more than 100 students. The auditorium, built with latest state-of-architecture design is equipped with the most modern facilities and is the pride of the college.","It is equipped with hi-tech audio-visual equipment and super specialty sound and light system. It acts as a platform to the students for fruitful academic and cultural activities."]

    },
    {
        id: 9,
        img: [Gurudhwar],
        title: 'Gurudhwar Sahib',
        description: ' Sarjit Gurdwara is proposed in the college campus where the staff and students of the college participate actively in the “Community Kitchen” .. They collect the funds and prepare ‘langar’ which is partaken by the neighborhood community enthusiastically.',
        longDescription:["Sarjit Gurdwara is proposed in the college campus where the staff and students of the college participate actively in the “Community Kitchen” .. ","They collect the funds and prepare ‘langar’ which is partaken by the neighborhood community enthusiastically."]

     
    },
    {
        id: 10,
        img: [openairtheater],
        title: 'Open Air Theater',
        description: 'The college campus has a spacious open- air theatre which provides a platform to conduct departmental activities as well as host various cultural events and exhibitions. It is also a favorite space for student interaction and creative exchange of ideas. It has seating capacity of approx. 600 hundred students.',
        longDescription:["The college campus has a spacious open- air theatre which provides a platform to conduct departmental activities as well as host various cultural events and exhibitions. ",". It is also a favorite space for student interaction and creative exchange of ideas. It has seating capacity of approx. 600 hundred students."]   
    },
    {
        id: 11,
        img: [SmartClass],
        title: 'Smart Classes',
        description: 'KGC takes profound initiatives to provide latest technology to students thus benefiting them in keeping up with the pace of modernizing IT world. Smart class rooms have been added to the infrastructure to make the teaching learning process more intriguing.Videos and documentary movies are also used by some of the departments as teaching tools.',
        longDescription:["KGC takes profound initiatives to provide latest technology to students thus benefiting them in keeping up with the pace of modernizing IT world. Smart class rooms have been added to the infrastructure to make the teaching learning process more intriguing. ","Emphasizing on interactive mode of teaching, the faculty makes use of power point and multimedia presentations for better understanding and greater retention of the subject matter. Videos and documentary movies are also used by some of the departments as teaching tools."]

    },
    {
        id: 12,
        img: [Cafetaria],
        title: 'Cafetatia',
        description: 'Khalsa Girls College canteen is a thriving hub of activity in the College throughout the year. The canteen, with a covered area of 600 sq.ft, has a seating capacity of 45 students and a separate section for faculty. A variety of Indian food and snack items are provided to the students and staff of the college with highest quality.',
        longDescription:["Khalsa Girls College canteen is a thriving hub of activity in the College throughout the year. The canteen, with a covered area of 600 sq.ft, has a seating capacity of 45 students and a separate section for faculty.A variety of Indian food and snack items are provided to the students and staff of the college with highest quality. ","Canteen has a kitchen and kitchen staff takes extra care to provide the students and staff with nutritious and hygienic food. Fresh Juice and Snack Corner is a popular spot where students can enjoy fresh juice and snack .","The Canteen Monitoring Committee keeps an eye on the working of the canteen and conducts periodical inspection to check the production and sale of quality food and rendering of decent service at reasonable and approved rates."]

    },
    {
        id: 13,
        img: [Healthcare],
        title: 'Health Care',
        description: ' The college has a health centre with a provision of a lady doctor for medical care of the students. A medical check-up of the students is carried out regularly. The college has annual contract with the CITY HOSPITAL for all types of medical requirements.',
        longDescription:["To ensure the best of physical and mental health of students as well as teaching and non-teaching staff, the College has a dedicated examination cum consultation room for the doctor. First aid kit is also available with the hostel warden in case of minor requirements.","To ensure the best of physical and mental health of students as well as teaching and non-teaching staff, the College has a dedicated examination cum consultation room for the doctor. First aid kit is also available with the hostel warden in case of minor requirements.","The college has signed an MOU with city Hospital from which the specialized doctors visit the campus for regular medical check-ups of  students."]

    },
    {
        id: 14,
        img: [multipurposehall],
        title: 'Multi Purpose Hall',
        description: 'There is multipurpose utilization of hall, e.g. for conducting functions, exhibitions, seminars, conferences, workshops, mid-term and end-semester exams, staff meetings, placement drives, alumni association meet etc.',
        longDescription:["There is multipurpose utilization of hall, e.g. for conducting functions, exhibitions, seminars, conferences, workshops, mid-term and end-semester exams, staff meetings, placement drives, alumni association meet etc.","The college has provided infrastructural facilities in the form of seminar hall,  for  conducting  workshops,  conferences, symposia, guest lecturers etc. Two seminar halls have all necessary ICT equipments."]
    
    },



    {
        id: 15,
        img: [Parentteacher],
        title: 'Parent Teacher Association',
        description: 'The Parent Teacher Association is instrumental in providing a forum for open discussions on administrative and academic aspects of the college and their constructive incorporation in policy formulation.Class-wise PTA meetings are held to discuss the academic progress of students.',
        longDescription:["The Parent Teacher Association is instrumental in providing a forum for open discussions on administrative and academic aspects of the college and their constructive incorporation in policy formulation. Class-wise PTA meetings are held to discuss the academic progress of students."]
    
    },
    {
        id: 16,
        img: [Studentcouncil],
        title: 'Student Council',
        description: 'The college has a very dynamic student council of 15 members functioning under the patronage of the principal and two senior members of the faculty. Newly elected student Council is administered oath by the Principal of the college.',
        longDescription:["The college has a very dynamic student council of 15 members functioning under the patronage of the principal and two senior members of the faculty. Newly elected student Council is administered oath by the Principal of the college.","Major activities of student council are:","• The student council helps to promote healthy rapport between the students and the college authorities"," • To help in organizing functions like Talent hunt, Prize distribution, Convocation, Sports meet, Freshers and Farewell party."," •To maintain discipline in the institution for proper academic atmosphere. ","• To bring forward the grievances of the students to the notice of the authorities."]

    },
    {
        id:17,
        img:[CCTV],
        title:"Campus Security Camera Systems",
        description:"Campus Security Camera Systems College campus pose many unique challenges when it comes to security. A video surveillance system has been carefully planned out in order to keep watch over the diverse assortment of facilities that comprise a typical campus community. ",
        longDescription:["Campus Security Camera Systems College campus pose many unique challenges when it comes to security. A video surveillance system has been carefully planned out in order to keep watch over the diverse assortment of facilities that comprise a typical campus community.","From dormitories and libraries to sports complexes and sprawling student grounds, there's a lot to look after. A system of properly installed campus security cameras will go a long way in ensuring the safety of students, faculty, and facilities on campus. Benefits of College Surveillance Equipment Maintain secure facilities – College campuses feature a variety of buildings, each with their own security needs.","Campus security cameras help to secure these facilities, watching for suspicious behavior and unauthorized access. Protect students – Students have to cover a lot of ground when navigating their way through campus. This often involves traveling by foot, and sometimes the journey takes place late at night. Video surveillance is an invaluable tool, allowing students to wander under the safe watch of campus security cameras."," Deter crime – Campus security cameras can serve as a visual deterrent to crime such as theft and break-ins.","Prevent vandalism – With proper campus security cameras, the threat of vandalism to college property is lessened.","Monitor parking lots – Security cameras can prevent and deter criminal activity and theft in parking lots throughout a campus community.","Help in investigations – Archived surveillance footage can be used to identify individuals who have committed crimes or breached school policies.","Assist in application of university policies – Campus security cameras can monitor campus activity, working to ensure that college /university policies are properly followed."]
    },
    {
        id:18,
        img:[SaveWater],
        title : "Save Water",
        description:  "Saving water is crucial for conserving this vital resource and ensuring sustainable access for future generations.collecting rainwater for gardening and limiting water use in landscaping are effective ways to reduce water consumption. ",
        longDescription:["Saving water is crucial for conserving this vital resource and ensuring sustainable access for future generations. ", " Simple actions like fixing leaks, using water-efficient appliances, and turning off taps while brushing teeth can make a significant difference.", "Additionally, collecting rainwater for gardening and limiting water use in landscaping are effective ways to reduce water consumption."]
    }
    ];

function Blog() {

    const { hash } = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const navigate=useNavigate()

    const handleBlogClick = (blog) => {
      setSelectedBlog(blog);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedBlog(null);
    };

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);
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
                        <div key={blog.id} id={`blog-${blog.id}`} className='col-md-6 col-lg-4'>
                            {/* <Link to="/blog" className='text-decoration-none'> */}
                                <Card onClick={() => handleBlogClick(blog)}  border='warning' className='h-100 shadow scale-hover-effect bg-light text-dark border-0'>
                                    <Card.Img variant="top" width={100} height={250} src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center ' >
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className=''>{blog.description}{blog.title==="Anti Ragging"&&<span onClick={()=>{
                                        navigate("/contact")
                                        }} style={{color:"blue",cursor:"pointer", fontWeight:"bolder"}}>{"  "}Report</span>}</Card.Text>
                                        <Card.Text style={{color:"red", cursor:"pointer", fontWeight:"900"}}>Read More</Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            {/* </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {selectedBlog && (
       <BlogModal
       blog={selectedBlog}
       show={showModal}
       handleClose={handleCloseModal}
   />
      )}
    </div>
  )
}

export default Blog;