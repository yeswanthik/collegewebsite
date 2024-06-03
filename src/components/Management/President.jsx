import React from 'react';
import { Navbarhead } from '../../components/Navbar/Navbar';

import PresidentImg from  '../../utils/images/SukPresident.jpg';


function President() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <div className='container '>
   

<div className="row">

<div className='col-lg-4 d-flex mt-5  justify-content-center'>
<img src={PresidentImg} style={{width:"350px", height:"350px"}}  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column  mb-4 mb-lg-0 '>
   
            <div className='ml-3   container h-100 d-flex flex-column  mt-5 text-dark'>
            <h3 className=' fw-semibold'>Dear Friends,</h3>
                <p className='mb-3'>Indian culture creates unity in diversity and the confluence of education and service is the ideal of Indian culture. We can see Indian culture only through the mirror of education. We can get rid of the poison of selfishness and ego only through education. Therefore, by drinking the nectar of knowledge and leading a life of service, make your life meaningful and provide progress to the society.
Vidya's feet start moving forward on their own to pick up the fallen, move the fallen and embrace the victim. </p>
<p className='mb-3'> According to Shri Guru Nanak Dev Ji, serving others is the greatest service. Therefore, adopting his ideals, the organization, with a spirit of service, is functional for the last four decades. Morality, discipline, tolerance, secularism are the pillars of this institution and due to which it is continuously moving on the path of progress.
With best wishes from the entire school family</p>
<p style={{fontWeight:"bold"}}>Sukhvinder Singh Lalgharia,
President </p></div>

</div>
</div>
</div>


    </div>
  )
}

export default President;