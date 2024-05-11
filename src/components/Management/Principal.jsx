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
import PrincipalImage from '../../utils/images/g9.JPG'
import Director from '../../utils/images/director.jpg'
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

function Principal() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <div className='container '>
   

<div className="row">

<div className='col-lg-4 d-flex mt-5 '>
                    <img src={PrincipalImage} className='img-fluid w-75 h-75'  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>

            <div className=' p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>Khalsa Girls College Sadulshahar, is a renowned institute of higher education. It claims pre-eminence throughout the world because it has its roots in the lofty ideals of the Great Gurus and presently moves towards the future with a visionary outlook. The college strives towards advocating a progressive attitude of mind, according due value to intelligence and logic. The college has made a mark as an institute of learning that has and would continuously strive towards excellence in academics giving due recognition to the development of mind and spirit. The pride of the college is its dedicated faculty and disciplined students. It can also boast of its high-tech laboratories,  well stocked and computerized library with bar code system. The campus is grand and its architecture par excellence. A sense of beauty and serenity surrounds the atmosphere which is contributes extensively towards healthy learning. Students are particularly keen to be a part of the college that promotes morality and sobriety of life. The thrust is on giving the students due recognition to originality, vision and promote creativity, so that they leave not just with a degree but with a sense of pride and achievement of academic and personal accomplishment.</p><p style={{fontWeight:"bold"}}>Sukhwinder Kaur Sidhu
, Principal </p></div>

</div>
</div>
</div>


    </div>
  )
}

export default Principal;