import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';

function FaqAccordion() {
    const navigate=useNavigate()
  return (
    <div className='faq-section' id='faqs'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>FAQs about college encompass a broad spectrum of inquiries that prospective students, parents, and stakeholders often seek answers to. These questions may cover topics such as admissions criteria, application procedures, tuition fees, financial aid options, campus facilities, academic programs, student support services, housing options, extracurricular activities, and career prospects. By addressing these FAQs comprehensively, colleges strive to provide transparency and clarity to individuals navigating the college selection process. Through informative resources, online platforms, and dedicated support channels, colleges aim to empower students and their families to make well-informed decisions about their educational journey. Clear and accessible FAQs serve as valuable tools in demystifying the college experience, fostering confidence, and facilitating a smooth transition into higher education.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header >What is the application process for college admissions?</Accordion.Header>
                    <Accordion.Body>
                    For admission in the first year of Arts Faculty, it is mandatory to pass Senior Secondary (10+2) examination.
                    </Accordion.Body>
                    <Accordion.Body>For admission in the Science programmes, it is mandatory to pass the senior secondary examination with science.</Accordion.Body>
                    <Accordion.Body>Provisional admission will be given to the girl students appearing in the supplementary examination which will be considered regular only after they pass the supplementary examination. For girl students outside Rajasthan state, it is necessary to have completely passed 10+2.</Accordion.Body>
                    <Accordion.Body onClick={()=>{
                        navigate("/admission")
                    }} style={{color:"#d86110", cursor:"pointer"}}>Read More</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I afford college tuition and expenses?</Accordion.Header>
                    <Accordion.Body>
                    Scholarships are offered to the students belonging to SC, ST and OBC categories. Merit cum means scholarships and Fee Concessions are given to students from economically weaker sections of the society. These are widely notified through the notice boards and announcements
                   </Accordion.Body>
                   <Accordion.Body style={{color:"#d86110", cursor:"pointer"}}  onClick={()=>{
                    navigate("/whykgc#blog-3")
                   }}>Read More</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What academic programs and majors are available at the college?</Accordion.Header>
                    <Accordion.Body>Colleges typically offer a wide range of academic programs and majors across various disciplines, including arts and humanities, sciences. Students can explore specific departments and academic offerings on the college website or through informational materials provided by the admissions office. Additionally, colleges may offer interdisciplinary programs or specialized tracks within certain majors to cater to diverse interests and career goals.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What resources and support services are available to students on campus?</Accordion.Header>
                    <Accordion.Body>
                    Colleges provide a variety of resources and support services to help students succeed academically, personally, and professionally. These may include academic advising, tutoring centers, career counseling, health and wellness services, disability support, cultural and diversity programs, student organizations, and recreational facilities. Additionally, colleges may offer internship and job placement assistance, and mentorship programs to enhance the overall student experience.
                      </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;