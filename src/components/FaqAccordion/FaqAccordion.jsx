import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>FAQs about college encompass a broad spectrum of inquiries that prospective students, parents, and stakeholders often seek answers to. These questions may cover topics such as admissions criteria, application procedures, tuition fees, financial aid options, campus facilities, academic programs, student support services, housing options, extracurricular activities, and career prospects. By addressing these FAQs comprehensively, colleges strive to provide transparency and clarity to individuals navigating the college selection process. Through informative resources, online platforms, and dedicated support channels, colleges aim to empower students and their families to make well-informed decisions about their educational journey. Clear and accessible FAQs serve as valuable tools in demystifying the college experience, fostering confidence, and facilitating a smooth transition into higher education.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is the application process for college admissions?</Accordion.Header>
                    <Accordion.Body>
                    The application process typically involves several steps, including completing an application form, submitting transcripts and standardized test scores, writing essays or personal statements, obtaining letters of recommendation, and paying application fees. Each college may have its specific requirements and deadlines, so it's essential to research and plan accordingly.
                     </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I afford college tuition and expenses?</Accordion.Header>
                    <Accordion.Body>
                    Colleges offer various financial aid options, including scholarships, grants, loans, and work-study programs, to help students cover tuition fees and living expenses. Students and their families can also explore federal and state financial aid programs, as well as private scholarships and external funding opportunities. Additionally, colleges may offer payment plans or tuition installment options to ease the financial burden.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What academic programs and majors are available at the college?</Accordion.Header>
                    <Accordion.Body>Colleges typically offer a wide range of academic programs and majors across various disciplines, including arts and humanities, sciences, engineering, business, healthcare, and social sciences. Students can explore specific departments and academic offerings on the college website or through informational materials provided by the admissions office. Additionally, colleges may offer interdisciplinary programs or specialized tracks within certain majors to cater to diverse interests and career goals.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What resources and support services are available to students on campus?</Accordion.Header>
                    <Accordion.Body>
                    Colleges provide a variety of resources and support services to help students succeed academically, personally, and professionally. These may include academic advising, tutoring centers, career counseling, health and wellness services, disability support, cultural and diversity programs, student organizations, and recreational facilities. Additionally, colleges may offer internship and job placement assistance, study abroad opportunities, and mentorship programs to enhance the overall student experience.
                      </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;