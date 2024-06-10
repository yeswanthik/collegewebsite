
import { Card } from 'react-bootstrap';
import Gallery1 from '../../utils/images/img1.jpg'
import Gallery2 from '../../utils/images/img2.jpg'
import Gallery3 from '../../utils/images/img3.jpg'
import Gallery4 from '../../utils/images/img4.jpg'
import Gallery5 from '../../utils/images/img5.jpg'
import Gallery6 from '../../utils/images/img6.jpg'
import Gallery7 from '../../utils/images/img7.jpg'
import Gallery8 from '../../utils/images/img8.jpg'
import Gallery9 from '../../utils/images/img9.jpg'
import Gallery10 from '../../utils/images/img10.jpg'
import Gallery11 from '../../utils/images/img11.jpg'
import Gallery12 from '../../utils/images/img12.jpg'
import Gallery13 from '../../utils/images/img13.jpg'
import Gallery14 from '../../utils/images/img14.jpg'
import Gallery15 from '../../utils/images/img15.jpg'
import Gallery16 from '../../utils/images/img16.jpg'
import Gallery17 from '../../utils/images/img17.jpg'
import Gallery18 from '../../utils/images/img18.jpg'
import Gallery19 from '../../utils/images/img19.jpg'
import Gallery20 from '../../utils/images/img20.jpg'
import './Gallery.css';
import { useState } from 'react';
import { Navbarhead } from '../../components/Navbar/Navbar';

import { Modal, Button} from 'react-bootstrap';

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
           {
            id: 13,
            img: [Gallery13],
           },
           {
            id: 14,
            img: [Gallery14],
           },
           {
            id: 15,
            img: [Gallery15],
           },
           {
            id: 16,
            img: [Gallery16],
           },
           {
            id: 17,
            img: [Gallery17],
           },
           {
            id: 18,
            img: [Gallery18],
           },
           {
            id: 19,
            img: [Gallery19],
           },
           {
            id: 20,
            img: [Gallery20],
           },
    
];

const ImageModal = ({ show, image, onClose, onPrev, onNext  }) => {

  
    return (
        <Modal show={show} size="xl" onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image View</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <Button variant="light" onClick={onPrev}>&larr;</Button>
          <img src={image} alt="Large View" className="img-fluid mx-3" />
          <Button variant="light" onClick={onNext}>&rarr;</Button>
        </Modal.Body>
      </Modal>
    );
  };

function Gallery(){

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const openModal = (index) => {
      
      setCurrentIndex(index);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImge.length - 1 : prevIndex - 1));
      };
    
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === galleryImge.length - 1 ? 0 : prevIndex + 1));
      };
  
return <div className='gallery-page'>
<Navbarhead/>


<div className='container py-5'>
    <div className='row g-4'>
        {galleryImge.map((course,index) => (
            <div onClick={() => openModal(index)} key={course.id} className='col-xs-12 col-sm-4 col-md-3 '  >
                <Card className='text-white shadow scale-hover-effect' style={styles.card}>
                <Card.Img variant="top" src={course.img} alt={`Thumbnail ${index}`} style={styles.thumbnail} />
      

                </Card>
            </div>
        ))}
    </div>
</div>
<ImageModal 
        show={isOpen}
        image={galleryImge[currentIndex].img}
        onClose={closeModal}
        onPrev={handlePrevClick}
        onNext={handleNextClick}
      />

</div>
}

export default Gallery

// Styles
const styles = {
    galleryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    card: {
        width: '100%',
        height: '250px',
        overflow: 'hidden',
      },
    thumbnail: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
    },
    modalImage: {
      maxWidth: '80vw',
      maxHeight: '80vh',
      objectFit: 'contain',
    },
    arrowButton: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      margin: '0 10px',
      zIndex: 1001,
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };
  