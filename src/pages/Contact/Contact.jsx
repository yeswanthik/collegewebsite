import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, { useState,useRef  } from 'react';
import emailjs from '@emailjs/browser';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbarhead } from '../../components/Navbar/Navbar';
function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: '',
        phone_number:'',
        email: '',
        address: '',
        location: 'Bikaner', // Set default value for location
        message: ''
      });
      const [error, setError] = useState({});
    
     // Handler function to update form data on input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handler function to submit form data
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Check if phone number is empty
        if (!formData.phone_number) {
          errors.phone_number = 'Phone number is required';
        }
        
        else if (!/^\d{10}$/.test(formData.phone_number)) { // Check if phone number format is valid
          errors.phone_number = 'Please enter a valid 10-digit phone number';
      }
    
        // Check if email is empty
        if (!formData.email) {
          errors.email = 'Email is required';
        }
    
        // Display error messages if any
        if (Object.keys(errors).length > 0) {
          setError(errors);
          toast.error('Please fill in all required fields.');
          return; // Exit function if there are errors
        }
        var templateParams = {
            from_name: formData.from_name,
            to_name: 'yeswanthi',
            phone_number:formData.phone_number,
            email: formData.email,
            address: formData.address,
            location: formData.location, // Set default value for location
            message: formData.message
          };
        // Perform actions to save or submit form data (e.g., send data to server)
        
        // Reset form fields after submission (optional)
        if(formData.phone_number && formData.email){
            emailjs.send("service_aetbtzo","template_q3dtlj8",templateParams,{
                publicKey: "cpJo0GaTOeR2zF_gW",
              }).then(
             
                    () => {
                        
                        toast.success('Details submitted successfully,Our team will contact you soon', {
                            autoClose: 3000, // Set auto close time in milliseconds (e.g., 3000 = 3 seconds)
                            hideProgressBar: false, // Set to true to hide progress bar
                            closeOnClick: true, // Close the toast when clicked
                            pauseOnHover: true, // Pause auto close when hovered
                            draggable: true, // Allow dragging the toast
                            progress: undefined, // Set progress bar value (undefined = auto)
                            // Other options...
                          });
                    },
                    (error) => {
                        toast.error('Something went wrong, Please try later', {
                            position: toast.POSITION.TOP_CENTER,// Set toast position
                            autoClose: 3000, // Set auto close time in milliseconds (e.g., 3000 = 3 seconds)
                            hideProgressBar: false, // Set to true to hide progress bar
                            closeOnClick: true, // Close the toast when clicked
                            pauseOnHover: true, // Pause auto close when hovered
                            draggable: true, // Allow dragging the toast
                            progress: undefined, // Set progress bar value (undefined = auto)
                            // Other options...
                          });
                    });
        }
        else{
            toast.error('Please fill the  required fields', {
                position: toast.POSITION.TOP_CENTER, // Set toast position
                autoClose: 3000, // Set auto close time in milliseconds (e.g., 3000 = 3 seconds)
                hideProgressBar: false, // Set to true to hide progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause auto close when hovered
                draggable: true, // Allow dragging the toast
                progress: undefined, // Set progress bar value (undefined = auto)
                // Other options...
              });
        }
        form.current.reset()
        setFormData({
          from_name: '',
          to_name: '',
          phone_number:'',
          email: '',
          address: '',
          location: 'Bikaner',
          postcode: '',
          message: ''
        });
      };
  return (
    <div className='contact-page'>
        <ToastContainer />
       
        <Navbarhead/>
        <div className='container'>
    <div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2 style={{}}>Reigistration</h2>
				</div>
			</div>
		</div>
    </div>

        <div className='container my-5 d-flex justify-content-center'>
            <Form ref={form} id='contact-form' onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name='from_name'  value={formData.from_name}
                          onChange={handleInputChange} placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name='to_name'  value={formData.to_name}
                          onChange={handleInputChange} placeholder='Last name' />
                    </Col>
                   
                </Row>
                <Form.Group className='mb-3'>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control name='phone_number' value={formData.phone_number}
                          onChange={handleInputChange} placeholder='Enter 10 digit mobile number' />
                          {error.phone_number && <Form.Text className='text-danger'>{error.phone_number}</Form.Text>}
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email'  value={formData.email}
                          onChange={handleInputChange} type='email' placeholder='Enter email' />
                           {error.email && <Form.Text className='text-danger'>{error.email}</Form.Text>}
                    <Form.Text className='text-muted'>
                       {" "} We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='address' value={formData.address}
                          onChange={handleInputChange} placeholder='Your address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location</Form.Label>
                        <Form.Select name='location' value={formData.location}
                          onChange={handleInputChange}  defaultValue="Bikaner">
                        <option>Ajmer</option>
                        <option>Alwar</option>
<option>Banswara</option>
<option>Baran</option>
<option>Barmer</option>
<option>Bharatpur</option>
<option>Bhilwara</option>
<option>Bikaner</option>
<option>Bundi</option>
<option>Chittorgarh</option>
<option>Churu</option>
<option>Dausa</option>
<option>Dholpur</option>
<option>Dungarpur</option>
<option>Hanumangarh</option>
<option>Jaipur</option>
<option>Jaisalmer</option>
<option>Jalore</option>
<option>Jhalawar</option>
<option>Jhunjhunu</option>
<option>Jodhpur</option>
<option>Karauli</option>
<option>Kota</option>
<option>Nagaur</option>
<option>Pali</option>
<option>Pratapgarh</option>
<option>Rajsamand</option>
<option>Sawai Madhopur</option>
<option>Sikar</option>
<option>Sirohi</option>
<option>Sri Ganganagar</option>
<option>Tonk</option>
<option>Udaipur</option>

                        </Form.Select>
                    </Col>
                    {/* <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control name='postcode'  value={formData.postcode}
                          onChange={handleInputChange} placeholder='Postcode' />
                    </Col> */}
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control name='message'  value={formData.message}
                          onChange={handleInputChange} as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit' >Submit</Button>
            </Form>
        </div>

        {/* <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Locations</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LondonLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>London</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Manchester</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Liverpool</h3>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Contact;