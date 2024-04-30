import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';
import VP from '../../utils/images/vicepresident.jpg'
import President from  '../../utils/images/president.jpg';
import Principal from '../../utils/images/g9.JPG'
import Director from '../../utils/images/director.jpg'
import { Navbarhead } from '../../components/Navbar/Navbar';

const blogs = [
    {
        id: 1,
        img: [President],
        title: 'President',
        description: 'Khalsa Girls College Sadulshahar, is a renowned institute of higher education. It claims pre-eminence throughout the world because it has its roots in the lofty ideals of the Great Gurus and presently moves towards the future with a visionary outlook. The college strives towards advocating a progressive attitude of mind, according due value to intelligence and logic. The college has made a mark as an institute of learning that has and would continuously strive towards excellence in academics giving due recognition to the development of mind and spirit. The pride of the college is its dedicated faculty and disciplined students. It can also boast of its high-tech laboratories,  well stocked and computerized library with bar code system. The campus is grand and its architecture par excellence. A sense of beauty and serenity surrounds the atmosphere which is contributes extensively towards healthy learning. Students are particularly keen to be a part of the college that promotes morality and sobriety of life. The thrust is on giving the students due recognition to originality, vision and promote creativity, so that they leave not just with a degree but with a sense of pride and achievement of academic and personal accomplishment.'
    },{
        id: 2,
        img: [Principal],
        title: 'Principal',
        description: 'Educated man is an asset to the society. He can be a harbinger of social, economics and ethical change. The time after plus two is the most crucial phase in the life of a student. It can be a turning point in his career. Higher Education can transform his life. The diligent efforts put in by the student at this point of time will help him reap life long benefits. Khalsa Girls college with its year long history, has been one of the premier Higher Educational Institutions SGNR . The Status of Autonomous College is yet another milestone achievement in its illustrious and glorious history. It is a multi-faculty Graduate Girls College, that runs degree courses at Graduate.He mission and objective of its founding fathers has always been to inculcate high moral values along with academic excellence. To promote development of all round personality in a student, the college offers extra mural and co-curricular activities. The college has evolved a beings and benevolent system to look into the needs and problems of the students. It is expected of the students that they go through the ‘Prospectus’ thoroughly and become aware of the high ideals to make Khalsa Girls College, Sadulshahar a destination for Higher Education and Learning.Best wishes and blessings to the students for the upcoming session and their bright future. '
    },
    {
        id: 3,
        img: [Director],
        title: 'Director',
        description: 'Like the golden history of the institution, its present is also very glorious. The students of the institution have made the institution proud at the national and international level by achieving excellent achievements in all fields. The number of students selected in competitive examinations after studying in the institute is increasing every year, which is a matter of pride.Whenever I have presented proposals for the progress of the institution and the welfare of the students, the management committee has accepted and encouraged me. For which I am deeply grateful to him.Future plans:- Proposal to publish the annual magazine of the organization, upcoming In the session, there will be a proposal to start new faculties in the college, special classes will be organized to emphasize on spoken English as per the demand of time and for preparation for competitive examinations. Our special effort will be on obtaining maximum marks as well as special quality education, so that more and more students benefit the society by getting selected in various competitive examinations.These steps of progress of the organization are the result of the faith and blessings expressed in me by the entire staff and management committee. I hope that you will continue to give me your full support like this' 
    },
    {
        id: 4,
        img: [VP],
        title: 'President',
        description: 'Indian culture creates unity in diversity and the confluence of education and service is the ideal of Indian culture. We can see Indian culture only through the mirror of education. We can get rid of the poison of selfishness and ego only through education. Therefore, by drinking the nectar of knowledge and leading a life of devotion, make your life meaningful and provide progress to the society. Vidya feet start moving forward on their own to pick up the fallen, move the fallen and embrace the victim. According to Shri Guru Nanak Dev Ji, service is the greatest service. Hence, adopting his ideals, he has been serving the organization for the last four decades with a spirit of service. Morality, discipline, tolerance, secularism are the pillars of this institution. Due to which it is continuously moving on the path of progress. With best wishes from the entire school family'
    }, {
        id: 5,
        img: [Blog5Img],
        title: 'About KGC Library',
        description: 'The college library serves as a vital hub for students, faculty, and researchers alike. It provides a treasure trove of academic resources, including books, journals, and digital materials, fostering a culture of learning and exploration. From quiet study corners to collaborative spaces, the library offers diverse environments tailored to various learning styles. With knowledgeable librarians to assist patrons in navigating resources and conducting research, the library serves as an indispensable ally in the pursuit of knowledge and academic excellence within the college community.',
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'About Lab',
        description: 'College laboratories are essential hubs for hands-on learning and scientific exploration across various disciplines. In the botany lab, students delve into the fascinating world of plants, conducting experiments to understand their structure, growth, and ecological significance. In the science lab, the boundaries of knowledge are pushed as students engage in experiments spanning biology, chemistry, and physics, honing their analytical skills and scientific reasoning. Chemistry labs provide a platform for students to explore chemical reactions, synthesize compounds, and analyze their properties, fostering a deep understanding of the molecular world. Similarly, physics labs offer opportunities to investigate the fundamental principles of the universe through experiments in mechanics, optics, and electromagnetism. In the computer lab, the realm of technology comes alive as students explore programming, data analysis, and digital modeling, preparing them for the demands of the modern world. Together, these laboratories serve as crucibles of discovery, empowering students to apply theoretical knowledge to real-world phenomena and cultivate a lifelong passion for scientific inquiry.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Infrastructure Facilities',
        description: 'KGC has a well –planned infrastructure and proactively keeps on improvising it in line with its academic growth. It has a large academic block hosting big and spacious classrooms and laboratories. Library, Computer lab, Canteen and other facilities have been enhanced and upgraded in the past whenever new courses or additional units of existing courses were added. There is classroom and multipurpose utilization of halls  for conducting functions, exhibitions, seminars, conferences, workshops, mid-term and end semester exams, staff meetings, placement drives, alumni association meet etc. There is a huge library equipped with several text and references books for each of the departments. NCC and NSS camps are also held in the campus. The campus resources are also used for conducting banking recruitment examinations and the State Public Service Commission examinations. The play grounds, lawn tennis clay courts and basketball ground of the College are made available to sports coaching academies to promote the spirit of sports in young generation. The players use the ground for practice and to conduct matches and sports meets. The tennis courts have been leased to Ace Sports Academy for regular tennis and fitness coaching.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Scholarships',
        description: 'Scholarships offered in college play a pivotal role in facilitating access to education and alleviating financial burdens for students. These merit-based or need-based awards recognize academic excellence, leadership potential, and extracurricular achievements, providing financial assistance to deserving individuals. By covering tuition fees, living expenses, or specific educational costs, scholarships enable students to pursue their academic aspirations without the burden of excessive debt. Additionally, scholarships often come with prestige and recognition, enhancing students resumes and opening doors to future opportunities such as internships, graduate studies, or employment. Beyond financial support, scholarships also serve as incentives for academic excellence and encourage students to strive for success in their studies and extracurricular pursuits. Overall, scholarships offered in college are invaluable resources that empower students to pursue their educational goals, fulfill their potential, and contribute meaningfully to society.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Anti Ragging',
        description: 'Ragging is strictly banned in the college as per UGC instructions. Awareness among students is generated through Anti ragging campaign being held every year at the start of the session. During the time of admission they are constantly instructed upon this issue and are also made to sign an undertaking to this effect. Punishable aspects of Ragging and possible punishments are clearly mentioned in the college prospectus. To curb the menace of ragging in the institution, Anti ragging Committee of 5 faculty members has been set up in the college. Telephone numbers of all the members of the Anti Ragging Committee are displayed prominently in the college and hostel for easy access. Anti – ragging squad of students also remained active secretly throughout the session. Anti Ragging Committee and squad has been so effective in its work that not even a single case has been reported in the college . Thus, the college ensures a cohesive and harmonious environment for its students.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
    <Navbarhead/>
    <header className='h-35 p-3   d-flex align-items-center text-light'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light mt-5'>
                <h1 className='text-center fw-semibold'>Blogs</h1>
                <p className='text-center w-75 mb-5'>College blogs serve as informative platforms where students, faculty, and staff can share insights, experiences, and valuable information about campus life, academic programs, extracurricular activities, and more.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" width={100} height={250} src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
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