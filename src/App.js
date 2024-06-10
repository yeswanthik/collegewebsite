import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Management from './components/Management/Management';
import VisionAndMission from './components/VisonAndMission/VisionAndMission';
import Admission from './components/Admission/Admission';
import Careers from './pages/Careers/Careers';
import President from './components/Management/President';
import Principal from './components/Management/Principal';
import Chairman from './components/Management/Chairman';
import { CollegeDetails } from './components/CollegeDetails/CollegeDetails';

function App() {
  return (
    <div>
     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/whykgc' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/management' element={<Management/>}/>
        <Route path='/president' element={<President/>}/>
        <Route path='/chairman' element={<Chairman/>}/>
        <Route path='/principal' element={<Principal/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/collegedetails' element={<CollegeDetails/>}/>
        <Route path='/visionandmission' element={<VisionAndMission/>}/>
        <Route path='/careers'element={<Careers/>}/>
      </Routes>

      <footer>
        <div className='container my-5 p-3' style={{backgroundColor:"#d86110"}}>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn  btn-lg mb-5 mb-md-4' style={{borderColor:"#d86110" , color:"#d86110",backgroundColor:"white"}}>Get In Touch</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </li>
                </Link>
                
              
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                    </svg>
                  </li>
                </Link>
                {/* <Link to={{ pathname: "https://www.google.com/maps?q=29.91733599590189,74.18012682531497" }} target="_blank">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-google-maps" viewBox="0 0 48 48">
                      <path d="M22 48c-2.2 0-4.1-1.1-5.3-2.7l-.1-.1C12.1 41.4 3 27.6 3 18 3 8 10.2 0 22 0s19 8 19 18c0 9.6-9.1 23.4-13.6 27.2-.1.1-.1.1-.2.2C26.1 46.9 24.2 48 22 48zM22 3C12.6 3 6 9.8 6 18c0 8 8.2 20.6 13.3 24.8.7.8 1.7 1.2 2.7 1.2 1 0 2-.4 2.8-1.1 5.1-4.3 13.2-16.9 13.2-24.9C38 9.8 31.4 3 22 3zm0 10c-3.7 0-7 3.3-7 7s3.3 7 7 7 7-3.3 7-7-3.3-7-7-7zM22 24c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm18-1c-1.1 0-2.1-.9-2.1-2s.9-2 2.1-2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                      </svg>
                      </li>
                </Link> */}
                <a href="https://www.google.com/maps?q=29.91733599590189,74.18012682531497" target="_blank" rel="noopener noreferrer">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-google-maps" viewBox="0 0 48 48">
                      <path d="M22 48c-2.2 0-4.1-1.1-5.3-2.7l-.1-.1C12.1 41.4 3 27.6 3 18 3 8 10.2 0 22 0s19 8 19 18c0 9.6-9.1 23.4-13.6 27.2-.1.1-.1.1-.2.2C26.1 46.9 24.2 48 22 48zM22 3C12.6 3 6 9.8 6 18c0 8 8.2 20.6 13.3 24.8.7.8 1.7 1.2 2.7 1.2 1 0 2-.4 2.8-1.1 5.1-4.3 13.2-16.9 13.2-24.9C38 9.8 31.4 3 22 3zm0 10c-3.7 0-7 3.3-7 7s3.3 7 7 7 7-3.3 7-7-3.3-7-7-7zM22 24c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm18-1c-1.1 0-2.1-.9-2.1-2s.9-2 2.1-2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                      </svg>
                  </li>
                </a>

              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-1'>
                    <Link to="/" className='text-decoration-none  mb-1' style={{color:"#FFFFFF"}}>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/courses" className='text-decoration-none ' style={{color:"#FFFFFF"}}>
                      <li className='text-uppercase fw-semibold' >Our courses</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none ' style={{color:"#FFFFFF"}}>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none ' style={{color:"#FFFFFF"}}>
                      <li className='text-uppercase fw-semibold'>Management</li>
                    </Link>
                    <Link to="/admission" className='text-decoration-none ' style={{color:"#FFFFFF"}}>
                      <li className='text-uppercase fw-semibold'>apply</li>
                    </Link>
                    <Link to="/courses#faqs" className='text-decoration-none ' style={{color:"#FFFFFF"}}>
                      <li className='text-uppercase fw-semibold'>FAQs</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0' style={{color:"#FFFFFF"}}>
                    <li>
                    <p>Address: Ward no-19 Adarsh collony Sadul Sahar Dist:Sri Ganganagar, Rajasthan India-335062</p>
                    </li>
                    {/* <li>
                      <p>Phone Number-1503 222464</p>
                    </li> */}
                    <li>
                    <p>Mobile Numbers: +91-9314355027, +91-9414508064</p>
                    </li>
                    <li>
                      <p>Email: kgcsds2007@gmail.com</p>
                    </li>
                  </ul>
                  {/* <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1631171380445!2d74.17763777533975!3d29.917205874987978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391655cd2229449b%3A0xcd556288b8d3d1b8!2sKHALSA%20GIRLS%20COLLEGE%20SADUL%20SHAHAR!5e0!3m2!1sen!2sca!4v1717969368870!5m2!1sen!2sca" width="250" height="150" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>©Khalsa Girls College Sadul Sahar</p>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
