
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import  Logo  from '../../utils/images/logo.png'
import { NavDropdown } from 'react-bootstrap';
import { useState,useEffect } from 'react';
export const Navbarhead=()=>{
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAdmission,setShowAdmission]=useState(false)
  const [showWhyKGCDropdown, setShowWhyKGCDropdown] = useState(false);
  const [showCourse,setShowCourse] =useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [, setShowBaSubmenu] = useState(false);
  const [, setShowBscSubmenu] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
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
  const baHandleMouseEnter = () => {
    setShowBaSubmenu(true);
};

const baHandleMouseLeave = () => {
    setShowBaSubmenu(false);
};
const bscHandleMouseEnter = () => {
  setShowBscSubmenu(true);
};

const bscHandleMouseLeave = () => {
  setShowBscSubmenu(false);
};

const handleDownload=(path,name)=>{
    const filePath = path;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.open(filePath);

}
 
    return <Container className=' w-100  mb-3 '>
        <Navbar expand="lg" className=' d-block d-sm-none justify-content-center w-100  text-dark  ' style={{backgroundColor:"#d86110"}}>
   
 
   <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light  'style={{ fontSize: '0.8rem'}}                 />
   
   <Navbar.Collapse id='basic-navbar-nav '>
     <Nav className='me-auto justify-content-center w-100 text-light p-3 ' >
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
           <NavDropdown.Item href='/gallery'>Gallery</NavDropdown.Item>
           <NavDropdown.Item href='/collegedetails'>College Details</NavDropdown.Item>
       <NavDropdown.Item href='/contact' >Contact Us</NavDropdown.Item>
         </NavDropdown>
       <Nav.Link href='/management' className=' text-light '>Management</Nav.Link>
       <NavDropdown title={<span className={`text-${showWhyKGCDropdown ? 'dark' : 'light'}`}>Why KGC</span>} id="about-us-dropdown" 
       show={showWhyKGCDropdown}
       onMouseEnter={handleWhyKGCDropdownEnter} 
       onMouseLeave={handleWhyKGCDropdownLeave}
       style={{ backgroundColor: showWhyKGCDropdown ? 'white' : '' }}
     >
       
        <NavDropdown.Item href='/whykgc#blog-1'>Right to Vote</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-2'>Anti Ragging</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-3'>Scholarships</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-4'>Career Coaching</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-5'>Youth Club</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-6'>Library</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-7'>Lab</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-8'>Auditorium</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-9'>Gurudwara Sahib</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-10'>Open Air Theater</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-11'>Smart Classes</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-12'>Cafeteria</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-13'>Health Care</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-14'>Multi Purpose Hall</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-15'>Parent Teacher Association</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-16'>Student Council</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-17'>Campus Security Camera Systems</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-18'>Save Water</NavDropdown.Item>


       </NavDropdown>
      {/* <Nav.Link href='/visionandmission' className='text-uppercase text-light'>Vision & Mission</Nav.Link> */}
      <NavDropdown title={<span className={`text-${showCourse ? 'dark' : 'light'}`}>Courses</span>} id="about-us-dropdown" 
       show={showCourse}
       onMouseEnter={coursehandleMouseEnter} 
       onMouseLeave={coursehandleMouseLeave}
       style={{ backgroundColor: showCourse ? 'white' : '' }}>
        <NavDropdown
                title={<span className="text-dark">BSC</span>}
                onMouseEnter={bscHandleMouseEnter}
                onMouseLeave={bscHandleMouseLeave}
                href="courses"
            >
               
                
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/botanybsc.pdf","Botony")}}> Botony Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/zoobsc.pdf","Zoology Syllabus")}}>Zoology Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/babscmaths.pdf","Maths Syllabus")}}>Maths Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/bscchem.pdf","Chemistry Syllabus")}}>Chemistry Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/bsccomplete.pdf","Complete Bsc Syllabus")}}>Complete Syllabus</NavDropdown.Item> 
            </NavDropdown>
           
            <NavDropdown
                title={<span className="text-dark">BA</span>}
                onMouseEnter={baHandleMouseEnter}
                onMouseLeave={baHandleMouseLeave}
                href="courses"
            >
              
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/baps.pdf","political science")}}> Political Science Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/baeng.pdf","English Syllabus")}}>English Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/babscmaths.pdf","Maths Syllabus")}}>Maths Syllabus</NavDropdown.Item>
                   
            </NavDropdown>
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
 
</Navbar>
      
      <header className={`header navbar-brand d-flex align-items-center justify-content-center  ${isSmallScreen ? 'pb-3' : 'pt-3'}`} style={{backgroundColor:"#d86110"}}>
        <div style={{backgroundColor:"white"}} className='d-flex align-items-center justify-content-center w-100 flex-column flex-md-row'>
        
        <div className='d-block d-sm-none college-info text-center text-md-left'>
        <img src={Logo} alt="logo" width="48" height="48"   />
          </div>
          <div id="english" class="college-info text-center text-md-left">
        <img src={Logo} alt="logo" width="90" height="90" className='d-none d-sm-block'/>
       
          <div>
                <h1>Khalsa Girls College</h1>
                <h2>Sadul Shahar</h2>
                <h3>Affiliated to Maharaj Ganga Singh University</h3>
                
            </div>
            </div>
            <div id="punjabi" class="college-info text-center text-md-left">
            <div>
                <h1>ਖਾਲਸਾ ਗਰਲਜ਼ ਕਾਲਜ</h1>
                <h2>ਸਾਦੁਲਸ਼ਹਿਰ</h2>
                <h3>ਮਹਾਰਾਜਾ ਗੰਗਾ ਸਿੰਘ ਯੂਨੀਵਰਸਿਟੀ ਨਾਲ ਸੰਬੰਧਤ</h3>
                
            </div>
        </div>
        <div id="hindi" class="college-info text-center text-md-left">
            <div>
                <h1>खालसा गर्ल्स कॉलेज</h1>
                <h2>सादुलशहर</h2>
                <h3>महाराजा गंगा सिंह विश्वविद्यालय से सम्बद्ध</h3>
               
            </div>
        </div>
         
       
          
        </div>
         
        
        
        </header>
        <Navbar expand="lg" className=' justify-content-center w-100 d-none d-sm-block  text-dark  ' style={{backgroundColor:"#d86110"}}>
   
 
   <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light  'style={{ fontSize: '0.8rem'}}                 />
   
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
           <NavDropdown.Item href='/president'>President Message</NavDropdown.Item>
           
           <NavDropdown.Item href='/principal'>Principal Message</NavDropdown.Item>
           <NavDropdown.Item href='/about'>Our Winners</NavDropdown.Item>
           <NavDropdown.Item href='/gallery'>Gallery</NavDropdown.Item>
           <NavDropdown.Item href='/collegedetails'>College Details</NavDropdown.Item>
       <NavDropdown.Item href='/contact' >Contact Us</NavDropdown.Item>
         </NavDropdown>
       <Nav.Link href='/management' className=' text-light '>Management</Nav.Link>
       <NavDropdown title={<span className={`text-${showWhyKGCDropdown ? 'dark' : 'light'}`}>Why KGC</span>} id="about-us-dropdown" 
       show={showWhyKGCDropdown}
       onMouseEnter={handleWhyKGCDropdownEnter} 
       onMouseLeave={handleWhyKGCDropdownLeave}
       style={{ backgroundColor: showWhyKGCDropdown ? 'white' : '' }}
     >
      
        <NavDropdown.Item href='/whykgc#blog-1'>Right to Vote</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-2'>Anti Ragging</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-3'>Scholarships</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-4'>Career Coaching</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-5'>Youth Club</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-6'>Library</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-7'>Lab</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-8'>Auditorium</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-9'>Gurudwara Sahib</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-10'>Open Air Theater</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-11'>Smart Classes</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-12'>Cafeteria</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-13'>Health Care</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-14'>Multi Purpose Hall</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-15'>Parent Teacher Association</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-16'>Student Council</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-17'>Campus Security Camera Systems</NavDropdown.Item>
   <NavDropdown.Item href='/whykgc#blog-18'>Save Water</NavDropdown.Item>


       </NavDropdown>
      {/* <Nav.Link href='/visionandmission' className='text-uppercase text-light'>Vision & Mission</Nav.Link> */}
      <NavDropdown title={<span className={`text-${showCourse ? 'dark' : 'light'}`}>Courses</span>} id="about-us-dropdown" 
       show={showCourse}
       onMouseEnter={coursehandleMouseEnter} 
       onMouseLeave={coursehandleMouseLeave}
       style={{ backgroundColor: showCourse ? 'white' : '' }}>
        <NavDropdown.Item href='/courses'>Our Courses</NavDropdown.Item>
        <NavDropdown.Divider />

<NavDropdown
                title={<span className="text-dark">BSC</span>}
                onMouseEnter={bscHandleMouseEnter}
                onMouseLeave={bscHandleMouseLeave}
                href="courses"
            >
               
                
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/botanybsc.pdf","Botony")}}> Botony Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/zoobsc.pdf","Zoology Syllabus")}}>Zoology Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/babscmaths.pdf","Maths Syllabus")}}>Maths Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/bscchem.pdf","Chemistry Syllabus")}}>Chemistry Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/bsccomplete.pdf","Complete Bsc Syllabus")}}>Complete Syllabus</NavDropdown.Item>
                  
               
            </NavDropdown>
           
            <NavDropdown
                title={<span className="text-dark">BA</span>}
                onMouseEnter={baHandleMouseEnter}
                onMouseLeave={baHandleMouseLeave}
                href="courses"
            >
              
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/baps.pdf","political science")}}> Political Science Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/baeng.pdf","English Syllabus")}}>English Syllabus</NavDropdown.Item>
                        <NavDropdown.Item style={{ fontSize: "smaller" }} onClick={()=>{handleDownload("/pdf/babscmaths.pdf","Maths Syllabus")}}>Maths Syllabus</NavDropdown.Item>
                   
            </NavDropdown>
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
 
</Navbar>
    
      
    </Container>
     
}

