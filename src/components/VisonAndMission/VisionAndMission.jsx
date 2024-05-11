import React from 'react';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection'; 
import { Navbarhead } from '../../components/Navbar/Navbar';
function VisionAndMission() {
    return (
      <div >
      <Navbarhead/>
      <div className="container">
		<div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2>Vision and Mission</h2>
				</div>
			</div>
		</div>
		<div className="row" >
			<div className="col-md-12 wow fadeInLeft animated animated" style={{visibility: "visible"}}>
			<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}}>Our Vision:</strong></p>
<p style={{textAlign: "justify"}}>
	“To be an institution of repute, with a humane face, that is dedicated to academic excellence and social transformation by improving the quality of life of its students.”&nbsp;</p>
<p style={{textAlign: "justify"}}>
	Imparting education to evolving scholars and empowering them through capacity-building, the College fashions their young minds by enabling them to think, imagine, analyse, assess, and express themselves through activity-based learning. The vision remains to turn Sri Guru Nanak Dev Khalsa College into a viable intersection of academic excellence and moral values. It is only in this manner that the college can meaningfully contribute to community development by providing fair access to the poor and socially disadvantaged groups in the light of changing economic, social, and cultural developments. The college remains dedicated to providing all assistance-technical, infrastructural, informational, or motivational-to students and help them excel in life.</p>
<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}}>Our Mission:</strong></p>
<div style={{textAlign: "justify"}}>
	Our mission is to realize the vision by developing life-long learners- equipped with specialised knowledge, enhanced skill sets and humane values-who are not only employable and entrepreneurial but are also able to contribute meaningfully to social development. We endeavour to make our students see themselves as agents of change in the globalised world, confident of taking up professional and societal challenges with passion and maturity.<br></br>
	</div>
<div>
	The College has the following mission:</div>
<ul>
	<li>
		 To develop skilled human resource by instilling scientific outlook.</li>
	<li>
		To facilitate learners with opportunities and hone their leadership potential to meet contemporary challenges.</li>
	<li>
		To disseminate inclusive knowledge by sensitising them towards social concerns, human rights, gender, and environmental issues.</li>
</ul>
<div>
	&nbsp;</div>
			</div>
		</div>
	</div>
      
  
         
  
         
      </div>
    )
  }
  
  export default VisionAndMission;