import React from 'react';
import './Blog.css'
import { Modal } from 'react-bootstrap';

export const BlogModal = ({ blog, show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{blog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {blog.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
           
        </Modal.Body>
        
    </Modal>
);
