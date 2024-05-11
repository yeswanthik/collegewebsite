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
  
        <div className="container">
            <h2 className='text-center mb-5'>Why choose Khalsa Girls College ?</h2>
            <div className="row gx-3">
            <div  className='row col-xs-12 col-md-6 col-lg-4 p-1'>
                
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
            <div className='row col-xs-12 col-md-6 col-lg-4 p-1'>

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
          <div className='row col-xs-12 col-md-6 col-lg-4 p-1'>
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
          
         
         </div> 
         
            <div className="text-center">
    <Link to="/whykgc">
      <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">Learn More</button>
    </Link>
  </div>
        </div>
  
  )
}

export default ChooseSection;