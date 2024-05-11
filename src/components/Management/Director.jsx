import React from 'react';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/g2.jpeg';
import Person2 from '../../utils/images/g8.jpeg';
import Person4 from '../../utils/images/g12.JPG';
import Person5 from '../../utils/images/g13.JPG';
import { Navbarhead } from '../../components/Navbar/Navbar';
import Tressurer from '../../utils/images/tressurer.png'
import Principal from '../../utils/images/g9.JPG'
import DirectorImage from '../../utils/images/director.jpg'
import VP from '../../utils/images/vicepresident.jpg'
import President from  '../../utils/images/president.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },

    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },

];

function Director() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <div className='container '>
   

<div className="row">

<div className='col-lg-4 d-flex mt-5 ml-4'>
                    <img src={DirectorImage} className='img-fluid w-75 h-75 '  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>

            <div className=' p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>
                The present of this institution is as glorious as its history. The students have made the institution proud by achieving excellent achievements at national and international levels in all fields. The number of students selected in competitive examinations after studying in the institute is increasing every year, which is a matter of pride.
                  </p>
                <p className='mb-3'>
                Whenever I have made proposals for the progress and investigation of the organization, the management committee has encouraged me by accepting them, for which I am deeply grateful.
                  </p>
                  <p className='mb-3'>
                  Future plans include proposal to publish annual magazine of the institution, to start new departments in the college in the coming session, special classes will be organized to give emphasis on spoken English as per the demand of time and for preparation of competitive examinations. Our special efforts will be on obtaining maximum marks as well as quality education, so that more and more students get selected in various competitive examination and benefit the society. 
                  </p>
                  <p className='mb-3'>
                  These steps of progress of the organization are the result of the faith and blessings expressed in me by the entire staff and management committee. I hope that your will continue to support me in the same way in future as well. 
                  </p><p style={{fontWeight:"bold"}}>Mandeep Singh Sidhu,
Director </p></div>

</div>
</div>
</div>


    </div>
  )
}

export default Director;