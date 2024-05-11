
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import { Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import  Logo  from '../../utils/images/logo.png'
import { NavDropdown, Row } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
export const Navbarhead=()=>{
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAdmission,setShowAdmission]=useState(false)
  const [showWhyKGCDropdown, setShowWhyKGCDropdown] = useState(false);
  const [showCourse,setShowCourse] =useState(false)
   const [isMobile, setIsMobile] = useState(false);
  const admissionhandleMouseEnter = () => {
    setShowAdmission(true);
  };

  const admissionhandleMouseLeave = () => {
    setShowAdmission(false);
  };
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const coursehandleMouseEnter = () => {
    setShowCourse(true);
  };

  const coursehandleMouseLeave = () => {
    setShowCourse(false);
  };
  const handleWhyKGCDropdownEnter = () => {
    setShowWhyKGCDropdown(true);
  };

  const handleWhyKGCDropdownLeave = () => {
    setShowWhyKGCDropdown(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return <Container className=' w-100  mb-3'>
      <Row>
      <Link to="/" className='navbar-brand d-flex align-items-center justify-content-center w-100 p-3'>
        
          <img src={Logo} alt="logo" width="90" height="90" className='d-none d-sm-block'/>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-backpack-fill" viewBox="0 0 16 16">
            <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
            <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
          </svg> */}
        
         
          
          
          <span className='mx-3 lh-1 fw-semibold d-none d-sm-block text-center' style={{color:"blue", fontSize:"32px"}}>
          KHALSA GIRLS COLLEGE, Sadhul Sahar
            <br ></br>
            <span >(Aff to Maharaj Ganga Singh University)</span>
            <br></br>
            <span >Bikaner -335062</span>
          </span>
          
          
        </Link>
      </Row>
      <Navbar expand="lg" className=' justify-content-center w-100  text-dark bg-danger'>
    <Container className=''>
      <Navbar.Brand className='d-flex flex-row'>
      <img src={Logo} alt="logo" width="48" height="48"  className='d-block d-sm-none' />
      <span className='mx-2 mt-2 lh-1 fw-semibold d-block d-sm-none text-light'>
          KGCSS
           
            <br></br>
            <span >Bikaner</span>
            <br></br>
            <span >Rajasthan</span>
          </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light'style={{ fontSize: '0.8rem'}}                 />
      
      <Navbar.Collapse id='basic-navbar-nav '>
        <Nav className='me-auto justify-content-center w-100 text-light ' >
          <Nav.Link href='/' className=' text-light '>Home</Nav.Link>  
          <NavDropdown title={<span className={`text-${showDropdown ? 'dark' : 'light'}`}>About Us</span>}  id="about-us-dropdown"
          show={showDropdown}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: showDropdown ? 'white' : '' }}
        >
              <NavDropdown.Item href='/about'>About KGC</NavDropdown.Item>
              <NavDropdown.Item href='/visionandmission'>Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item href='/chairman'>Chairman Message</NavDropdown.Item>
              <NavDropdown.Item href='/director'>Director Message</NavDropdown.Item>
              
              <NavDropdown.Item href='/principal'>Principal Message</NavDropdown.Item>
              <NavDropdown.Item href='/about'>Our Winners</NavDropdown.Item>
          <NavDropdown.Item href='/contact' >Contact Us</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href='/management' className='text-uppercase text-light '>Management</Nav.Link>
          <NavDropdown title={<span className={`text-${showWhyKGCDropdown ? 'dark' : 'light'}`}>Why KGC</span>} id="about-us-dropdown" 
          show={showWhyKGCDropdown}
          onMouseEnter={handleWhyKGCDropdownEnter} 
          onMouseLeave={handleWhyKGCDropdownLeave}
          style={{ backgroundColor: showWhyKGCDropdown ? 'white' : '' }}
        >
          <NavDropdown.Item href='/whykgc'>Anti Ragging</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Scholarships</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Career Coaching</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Youth Club</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Library</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Lab</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Auditorium</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Gurudhwar Sahib</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Open Air Theater</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Smart Classes</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Cafetaria</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Health Care</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Parent Teacher Association</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Student Council</NavDropdown.Item>
          <NavDropdown.Item href='/whykgc'>Multi Purpose Hall</NavDropdown.Item>


          </NavDropdown>
         {/* <Nav.Link href='/visionandmission' className='text-uppercase text-light'>Vision & Mission</Nav.Link> */}
         <NavDropdown title={<span className={`text-${showCourse ? 'dark' : 'light'}`}>Courses</span>} id="about-us-dropdown" 
          show={showCourse}
          onMouseEnter={coursehandleMouseEnter} 
          onMouseLeave={coursehandleMouseLeave}
          style={{ backgroundColor: showCourse ? 'white' : '' }}>
          <NavDropdown.Item href='courses'>BA</NavDropdown.Item>
          <NavDropdown.Item href='courses'>B.Sc</NavDropdown.Item>
         </NavDropdown>
         <NavDropdown title={<span className={`text-${showAdmission ? 'dark' : 'light'}`}>Admission</span>} id="about-us-dropdown" 
          show={showAdmission}
          onMouseEnter={admissionhandleMouseEnter} 
          onMouseLeave={admissionhandleMouseLeave}
          style={{ backgroundColor: showAdmission ? 'white' : '' }}>
            <NavDropdown.Item href='/admission'>Eligibilty</NavDropdown.Item>
            <NavDropdown.Item href='/admission'>Rules For Admission</NavDropdown.Item>
            <NavDropdown.Item href='/admission'>Rules for Fee</NavDropdown.Item>
            <NavDropdown.Item href='/admission'>Rules For Attendance</NavDropdown.Item>
            <NavDropdown.Item href='/admission'>Rules For College Withdrawl</NavDropdown.Item>
            <NavDropdown.Item href='/admission'>Discipline</NavDropdown.Item>
            <NavDropdown.Item href='/admission'>Objectives of College</NavDropdown.Item>

          </NavDropdown>
         
          {/* 
          <Nav.Link href='/gallery' className='text-uppercase'>Gallery</Nav.Link> */}
          
          <Nav.Link href='/careers' className=' text-light '>Jobs@KGC</Nav.Link>
          <Nav.Link href='/contact' className=' text-light '>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </Container>
     
}