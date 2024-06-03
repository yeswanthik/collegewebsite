import React from 'react';
import { Navbarhead } from '../../components/Navbar/Navbar';

import ChairmanImage from '../../utils/images/tressurer.png'




function Chairman() {
  return (
    <div className='about-page'>
    <Navbarhead/>
    <div className='container '>
   

<div className="row">

<div className='col-lg-4 d-flex mt-5 justify-content-center'>
                    <img src={ChairmanImage} className='img-fluid w-75 h-75 '  alt="" />
                </div>
                <div className='col-lg-8 d-flex flex-column justify-content-center mb-4 mb-lg-0'>

            <div className=' p-3  container h-100 d-flex flex-column  justify-content-center text-dark'>
                <h3 className=' fw-semibold'>Dear Students,</h3>
                <p className='mb-3'>You are heartily welcome to Khalsa Girls College. Inspired by the saying that wealth of education increases by sharing, the college was earlier established as Khalsa Model Primary School to enrich this area with wealth of knowledge.     </p>
                <p className='mb-3'>
                Whenever I have made proposals for the progress and investigation of the organization, the management committee has encouraged me by accepting them, for which I am deeply grateful.
                  </p>
                  <p className='mb-3'>
                  Considering the spread of education and the need of the area, the school was upgraded to higher secondary and then to high school level. Due to phased development, this institution, not only in Sadulshahar, but among the leading institutions of Rajasthan, holds a special place.
                   </p>
                  <p className='mb-3'>
                  In the institution, efforts are made for the all-round development of the personality of the students and all efforts are made in such a direction that the students can find the path to their progress by adopting social diversities in practical life. I am sure that you will have all the necessary facilities available in the institution and you will get a suitable environment for study and contemplation. With best wishes for your bright future...
                   </p><p style={{fontWeight:"bold"}}>
                   Sukhvinder Kaur Sidhu, Chairman </p></div>

</div>
</div>
</div>


    </div>
  )
}

export default Chairman;