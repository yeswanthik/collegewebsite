import { Link } from "react-router-dom"
import { Navbarhead } from "../../components/Navbar/Navbar"

function Careers(){

    const handleDownload=()=>{
        const pdfPath = "pdf/Staffapplication.pdf";
        
        // Create an anchor element
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'document.pdf'; // Name of the downloaded file
        
        // Append the anchor element to the body
        document.body.appendChild(link);
        
        // Trigger the download
        link.click();
        
        // Clean up: remove the anchor element from the body
        document.body.removeChild(link);
        window.open(pdfPath);
    }
    return   <div >
    <Navbarhead/>
    <div className='container'>
    <div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2 style={{}}>Careers</h2>
				</div>
			</div>
		</div>
            <div className="row">
                <div className='d-flex flex-column justify-content-center mb-4 mb-lg-0'>
   
            <div className='ml-3 p-3 vw-100 container h-100 d-flex flex-column  justify-content-center text-dark'>
                <p className='mb-3'>Welcome to the Careers page at Khalsa Girls College! Are you passionate about education and eager to make a difference in the lives of students? Join our dynamic team of educators and staff members who are dedicated to providing quality education and fostering a supportive learning environment.</p>

                <p className='mb-3'>At Khalsa Girls College, we are committed to recruiting talented individuals who share our vision and values. Whether you are an experienced educator, administrative professional, or support staff member, we invite you to explore the exciting career opportunities available at our institution.</p>
                <p className='mb-3'>As a faculty member, you will have the opportunity to inspire and mentor students, contribute to innovative teaching methods, and engage in scholarly research. Our supportive work culture encourages collaboration, professional development, and growth opportunities.</p>

                <p className='mb-3'>If you are passionate about empowering students to achieve their full potential and are committed to excellence in education, we encourage you to explore our current job openings and consider joining our team. Together, we can make a meaningful impact on the future of education. Join us at Khalsa Girls College and become part of a vibrant community dedicated to academic excellence and student success.</p>

                <Link to="/" className='text-center'>
                    <button onClick={handleDownload} type='button' className='btn btn-danger btn-lg mt-2 mb-2'>Download Application</button>
                </Link>
                </div>
</div>
</div>
</div>

        
    </div>
}
export default Careers