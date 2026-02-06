import { useEffect } from "react";
import closeIcon from "../../assets/close-icon-white.svg";
import "./Modal.css";

function Modal({ name, isOpen, onClose, children, closeIconSrc }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target.classList.contains("popup_opened")) onClose();
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={handleOverlay}
    >
      <div className="popup__container">
        <button className="popup__close floating-close" onClick={onClose}>
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
