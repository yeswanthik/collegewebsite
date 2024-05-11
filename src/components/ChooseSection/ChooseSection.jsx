import React from 'react';
import { Card } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scholarships from '../../utils/images/scholsrships.jpg'
import Ragging from '../../utils/images/ragging.png'
import VoteImage from '../../utils/images/voteimage.jpg'
import { Link } from 'react-router-dom';
function ChooseSection() {
   
  return (
    <div>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose Khalsa Girls College ?</h2>
            <div className='row g-4'>
            <div className="d-flex  px-5 ">
            {/* <Slider {...settings}> */}
            <div className='col-lg-4 p-1'>
                
                <Card className='d-flex align-items-center border-0 h-100'>
                  <Card.Img variant="top" width={100} height={200} src={VoteImage} />
                 
                  <Card.Body>
                    <Card.Title className='text-center text-capitalize mb-3'>
                      Vote
                    </Card.Title>
                    <Card.Text >
Voting is a fundamental democratic right that empowers individuals to have a voice in shaping the future of their communities and nations. Through the act of voting, citizens can actively participate in the decision-making process and contribute to the collective governance of society.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            <div className='col-lg-4 p-1'>

            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Ragging} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                  Anti Ragging
                </Card.Title>
                <Card.Text >The college strictly prohibits ragging, conducts annual anti-ragging campaigns, educates students during admissions, and has an effective committee and squad, resulting in a harmonious environment with no reported incidents.</Card.Text>
                </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Scholarships} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                  Scholarships
                </Card.Title>
                <Card.Text >Scholarships are offered to the students belonging to SC, ST and OBC categories. Merit cum means scholarships and Fee Concessions are given to students from economically weaker sections of the society'
    </Card.Text>   </Card.Body>
            </Card>
          </div>
          
          {/* <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Auditorium} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                  Auditorium
                </Card.Title>
                <Card.Text className='text-center'>
                The college has a fully ventilated auditorium in the campus with a seating capacity of more than 100 students. The auditorium, built with latest state-of-architecture design is equipped with the most modern facilities and is the pride of the college. It is equipped with hi-tech audio-visual equipment and super specialty sound and light system.
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Gurudhwar} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Gurudwara Sahib
                </Card.Title>
                <Card.Text className='text-center'>
                Sarjit Gurdwara is proposed in the college campus where the staff and students of the college participate actively in the “Community Kitchen” .. They collect the funds and prepare ‘langar’ which is partaken by the neighborhood community enthusiastically.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={openairtheater} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
             Open Air Theater
                </Card.Title>
                <Card.Text className='text-center'>
                The college campus has a spacious open- air theatre which provides a platform to conduct departmental activities as well as host various cultural events and exhibitions. It is also a favorite space for student interaction and creative exchange of ideas. It has seating capacity of approx. 600 hundred students.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={SmartClass} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Smart Classes
                </Card.Title>
                <Card.Text className='text-center'>
                KGC takes profound initiatives to provide latest technology to students thus benefiting them in keeping up with the pace of modernizing IT world. Smart class rooms have been added to the infrastructure to make the teaching learning process more intriguing.Videos and documentary movies are also used by some of the departments as teaching tools.
                 </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Cafetaria} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Cafetaria
                </Card.Title>
                <Card.Text className='text-center'>
                Khalsa Girls College canteen is a thriving hub of activity in the College throughout the year. The canteen, with a covered area of 600 sq.ft, has a seating capacity of 45 students and a separate section for faculty.
A variety of Indian food and snack items are provided to the students and staff of the college with highest quality. 
                 </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Healthcare} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Health Care
                </Card.Title>
                <Card.Text className='text-center'>
                The college has a health centre with a provision of a lady doctor for medical care of the students. A medical check-up of the students is carried out regularly. The college has annual contract with the CITY HOSPITAL for all types of medical requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={multipurposehall} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                MultipurposeHall
                </Card.Title>
                <Card.Text className='text-center'>
                There is multipurpose utilization of hall, e.g. for conducting functions, exhibitions, seminars, conferences, workshops, mid-term and end-semester exams, staff meetings, placement drives, alumni association meet etc.
                 </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Scholarships} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Scholarships
                </Card.Title>
                <Card.Text className='text-center'>
                Scholarships are offered to the students belonging to SC, ST and OBC categories. Merit cum means scholarships and Fee Concessions are given to students from economically weaker sections of the society </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Careercoaching} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                KGC Career Coaching
                </Card.Title>
                <Card.Text className='text-center'>
                The KGC Career Coaching Cell (KGC CCC) was established with the objective of nurturing talent and aptitude to prepare the students for the various competitive exams like Civil Services, Banking services, etc. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Youthclub} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Youth Club
                </Card.Title>
                <Card.Text className='text-center'>
                Youth club of the College is enabling the youth to utilize energies. The objective of the club is to provide a platform for the youth to collectively work towards themselves and society. For accomplishing this aim the club is organizing different activities from time to time. </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Parentteacher} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Parent Teacher Association
                </Card.Title>
                <Card.Text className='text-center'>
                The Parent Teacher Association is instrumental in providing a forum for open discussions on administrative and academic aspects of the college and their constructive incorporation in policy formulation.
Class-wise PTA meetings are held to discuss the academic progress of students.
 </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 p-1'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <Card.Img variant="top" width={100} height={200} src={Studentcouncil} />
             
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3'>
                Student Council
                </Card.Title>
                <Card.Text className='text-center'>
                The college has a very dynamic student council of 15 members functioning under the patronage of the principal and two senior members of the faculty. Newly elected student Council is administered oath by the Principal of the college. </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
      {/* </Slider> */}
        </div>
        <Link to="/whykgc" className='text-center'> <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button></Link>
  
            
            {/* <Carousel controls="true">
                
          <Carousel.Item key={1} className='d-flex'>
                <div className='col-lg-4'>
                
                    <Card className='d-flex align-items-center border-0 h-100'>
                    <Card.Img variant="top" width={100} height={200} src={Gallery1} />
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                2 trophies received
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </div>
                
          <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                2 trophies received
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                We keep our students happy
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                3 locations in UK
                            </Card.Title>
                            <Card.Text className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum qui facilis perspiciatis, ab pariatur! Eaque maxime ratione illum distinctio?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </Carousel.Item>
                </Carousel> */}
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;