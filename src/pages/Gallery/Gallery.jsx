
import { Card } from 'react-bootstrap';
import Gallery1 from '../../utils/images/gallery1.jpeg'
import Gallery2 from '../../utils/images/gallery2.jpeg'
import Gallery3 from '../../utils/images/gallery3.jpeg'
import Gallery4 from '../../utils/images/gallery4.jpeg'
import Gallery5 from '../../utils/images/gallery5.jpeg'
import Gallery6 from '../../utils/images/gallery6.jpeg'
import Gallery7 from '../../utils/images/gallery7.jpeg'
import Gallery8 from '../../utils/images/gallery8.jpeg'
import Gallery9 from '../../utils/images/gallery9.jpeg'
import Gallery10 from '../../utils/images/gallery10.jpeg'
import Gallery11 from '../../utils/images/gallery11.jpeg'
import Gallery12 from '../../utils/images/gallery12.jpeg'
import './Gallery.css';
import { Navbarhead } from '../../components/Navbar/Navbar';

const galleryImge = [
    {
        id: 1,
        img: [Gallery1],
        },
    {
        id: 2,
        img: [Gallery2],
          },
    {
        id: 3,
        img: [Gallery3],
        },
    {
        id: 4,
        img: [Gallery4],
        },
    {
        id: 5,
        img: [Gallery5],
        },
    {
        id: 6,
        img: [Gallery6],
       },
    {
        id: 7,
        img: [Gallery7],
        },
    {
        id: 8,
        img: [Gallery8],
        },
    {
        id: 9,
        img: [Gallery9],
        },
    {
        id: 10,
        img: [Gallery10],
         },
    {
        id: 11,
        img: [Gallery11],
        },
    {
        id: 12,
        img: [Gallery12],
       },
    
];

function Gallery(){
return <div className='gallery-page'>
<Navbarhead/>
<header className='h-100 p-3  min-vh-100 d-flex align-items-center text-light'>
    <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
        <h1 className='text-center fw-semibold'>Gallery</h1>
        <p className='text-center w-75 mb-5'>The college gallery offers a vibrant space for showcasing creativity and talent within the campus community. Adorned with diverse artworks and installations, it fosters inspiration and dialogue among students and visitors. Through student exhibitions and guest artist showcases, the gallery stimulates artistic exploration and collaboration. Its dynamic displays enrich the campus experience, encouraging intellectual curiosity and cultural engagement.</p>
    </div>
</header>

<div className='container py-5'>
    <div className='row g-4'>
        {galleryImge.map((course) => (
            <div key={course.id} className='col-lg-6'>
                <Card className='text-white shadow scale-hover-effect'>
                <Card.Img variant="top" src={course.img} />
      

                </Card>
            </div>
        ))}
    </div>
</div>


</div>
}

export default Gallery

