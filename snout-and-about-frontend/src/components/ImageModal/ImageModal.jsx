import React from "react";
import Modal from "../Modal/Modal";
import closeWhite from "../../assets/close-icon-white.svg";
import "./ImageModal.css";

function ImageModal({ isOpen, onClose, src, alt = "Image" }) {
  return (
    <Modal
      name="image"
      isOpen={isOpen}
      onClose={onClose}
      closeIconSrc={closeWhite}
    >
      <img src={src} alt={alt} className="image-modal__img" />
    </Modal>
  );
}

export default ImageModal;
