"use client";
import dynamic from 'next/dynamic';
import { Modal } from 'react-bootstrap';

interface modals {
  show:boolean,
  handleClose:any,
  videoUrl:string
}
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoModal = ({ show, handleClose, videoUrl }:modals) => {

  return (
    <Modal className='video-modal' show={show} centered size='xl' onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {videoUrl ? (
          <ReactPlayer
          src={videoUrl}
            playing={true}
            controls={true}
            width="100%"
            height="80vh"
            onError={(e) => console.error('ReactPlayer error:', e)}
          />
        ) : (
          <p>No video URL provided.</p>
        )}
    </Modal.Body>
    
  </Modal>
  )
}

export default VideoModal