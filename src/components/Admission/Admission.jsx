import { Button } from "react-bootstrap"
import { Navbarhead } from "../Navbar/Navbar"

function Admission(){

    const handleDownload=()=>{
        const pdfPath = "pdf/admission-form.pdf";
        
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
    return  <div className='courses-page'>
    <Navbarhead/>
    <div className="container">
		<div className="row" style={{paddingBottom:"2px"}}>
			<div className="col-md-12 text-center" style={{paddingBottom:"2px"}}>
				<div className="about_title" style={{paddingBottom:"2px"}}>
					<h2>Eligibility, Rules and Objectives</h2>
				</div>
			</div>
		</div>
		<div className="row" >
			<div className="col-md-12 wow fadeInLeft animated animated " style={{visibility: "visible", }}>
                <div className="d-flex justify-content-between text-danger" style={{ width: "85vw" }}>		<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}}>Minimum Eligibility for Admission:</strong></p>
    <Button  onClick={handleDownload}  style={{textAlign: "justify", backgroundColor:"#d86110",color:"white"}}>
	Download Application</Button></div>
	
<p style={{textAlign: "justify"}}>
For admission in the first year of Arts Faculty, it is mandatory to pass Senior Secondary (10+2) examination.
	</p>
    <p style={{textAlign: "justify"}}>
	For admission in the Science programmes, it is mandatory to pass the senior secondary examination with science.</p>
    <p style={{textAlign: "justify"}}>
	Provisional admission will be given to the girl students appearing in the supplementary examination which will be considered regular only after they pass the supplementary examination. For girl students outside Rajasthan state, it is necessary to have completely passed 10+2.</p>
    <p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}} className="text-danger">Rules Regarding Admission:</strong></p>
<div style={{textAlign: "justify"}}>Application for admission to the above classes will be considered done only after filling the prescribed form completely and submitting it, along with the prospectus, to the admission officer within the decided time period..</div>
<div>
The following certificates will have to be attached with the admission application form-:</div>
    <ul>
	<li>
    Photo attested copies of the original mark sheets of the examination qualifying the minimum for admission.</li>
	<li>Original transfer certificate of the last educational institution
Original character certificate given by the principal of the last educational institution.
Attested copy of the certificate of secondary examination having date of birth.
</li>
	<li>
    Original copy of Migration Certificate if the student is from any area outside Rajasthan. If such certificate is not available at the time of it will have to be submitted within a month. Otherwise, the student will not be enrolled in Bikaner University.</li>
    <li>Two stamped envelopes with home address written on them.
Two passport size photographs to be pasted on the form and to be affixed on the identity card.
</li>
    <li>Photocopy of SC/ST/OBC/Handicapped certificate.</li>
    <li>The students who have to appear in the supplementary examination of 12th or first year have to take admission at the beginning of the session. Their attendance will be counted from the date of commencement of college. In case of not taking admission, they will not be able to take regular admission after the declaration of results.</li>
    <li>Rules of admission are subject to change as per information and instructions from Bikaner University or Rajasthan Government.</li>
    <li>Admission will be considered done only after full payment of the fee.
Admission will be considered provisional until approval from the University.
</li>
    <li>The principal of the college has the right not to admit any particular student without giving any reason.</li>
    <li>The admission of a candidate, who has deliberately hidden or presented any false fact in the application form submitted for admission, may be cancelled.</li>


</ul>
<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}} className="text-danger">Rules Related to Fees:</strong></p>
<div style={{textAlign: "justify"}}>
Fee for the entire session will have to be deposited irrespective of the day on which the student is admitted.</div>
<div>
	The College has the following Rules:</div>
<ul>
	<li>
    All the annual fee will have to be paid together at the time of admission whereas tuition fee will be paid twice in a year in two installments in the months of July and December.
Receipt of college fees should be kept safe and presented when asked by the office
</li>
	<li>
    Once charged, the entrant's fee will not be refunded. Nor will the computer amount be refunded.</li>
	<li>
    All students will be issued an identity card at the time of admission. In case of loss of identity card, new identity card can be issued by paying a fee of Rs. 30/-
</li>
</ul>
<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}} className="text-danger">Rules Regarding Attendance:</strong></p>
<div>
	The College has the following Rules:</div>
<ul>
<li>Attendance will be counted from the beginning of college classes</li>
<li>than 75 percent attendance. According to provision 0-145, such regular girl students who have been stopped due to lack of attendance, can appear in the examination in the same year as             but, for that, they will have to pay additional fees prescribed by the University. According to provision 0-144, the principal has the right to give relaxation in attendance up to 3 percent and the Vice-Chancellor up to 3 percent, but special reason will have to be certified for the same.</li>

<li>It will be the student's own responsibility to maintain his/her attendance.</li>
<li>Every student will have to keep in mind the compliance of the orders of the Directorate and the University regarding changes in the rules related to minimum attendance.</li>
<li>Students who participate in NCC parade or camp, sports competition or cultural events they have to get permission in written form from office in order to avail the benefit of the attendance.</li>


</ul>
<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}} className="text-danger">College Withdrawl Rules:</strong></p>
<ul>
<li>If any student wants to leave the college in the middle of the session, she will have to apply in written. If she leaves the college without permission, she will be charged tuition fees for the entire session or the month in which she has applied for the college.</li>
<li>The student will have to apply in written for Transfer Certificate (T.C.)
and have to pay the prescribed fee and other dues.
</li>


</ul>
<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}}className="text-danger">Objectives of the College:</strong></p>

<ul>
	<li>
    To provide regular and good education to the girls of the area so that they may get successful in future life.
</li>
	<li>
    To make efforts for the social, intellectual, physical and moral development of the students.</li>
	<li>
    To pay special attention to the development of qualities and tendencies to become a capable and efficient citizen.</li>
</ul>

<p style={{textAlign: "justify"}}>
	<strong style={{fontSize: "22px"}}className="text-danger">Rules Related to Discipline:</strong></p>

<ul>
	<li>
    To achieve the above objectives, it is necessary to take care of the girl students to spread discipline.
Every student must obey the college rules, traditions, orders of the Principal and One will have to conduct herself in accordance with the dignity of the college.

</li>
	<li>
    All the college students on all days, except Wednesday, will come in the prescribed uniform of the college and indecent clothes should not be worn on Wednesday.
Use canteen, library room or common room in free lecture. Do not cause disturbance by roaming in the verandah
</li>

<li>
Once entered the college premises, one will not be allowed to leave the college before 11:30 am. Only with parental permission or with the permission of the principal under special circumstances, one would be allowed to go out.
in case of any lecturer being on leave or students having no lecture afterwards, they can go home with principle’s permission.

   </li>
   
	<li>If girl students want to make a call, they will be allowed to call only with the permission of the principal after explaining the reason. When a student gets a call, she will not be called out of the classroom to talk.
   </li>
   <li>Various Extra-curricular Activities, Celebrations and Competitions are held in the institute for the overall grooming of the personality and learning of the students</li>
</ul>
<div>
	&nbsp;</div>
			</div>
            
		</div>
        
	</div>

    
</div>
}
export default Admission