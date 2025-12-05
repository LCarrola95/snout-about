import React, { useEffect } from "react";
import closeIcon from "../../assets/close-button.svg";
import "./Modal.css";

function Modal({ name, isOpen, onClose, children, closeIconSrc }) {
  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Close on overlay click
  const handleOverlayMouseDown = (e) => {
    if (e.target.classList.contains("popup_opened")) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={handleOverlayMouseDown}
      aria-hidden={!isOpen}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Close popup"
          onClick={onClose}
        >
          <img
            src={closeIconSrc || closeIcon}
            alt="Close"
            className="popup__close-icon"
          />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
