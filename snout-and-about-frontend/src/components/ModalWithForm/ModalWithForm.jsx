import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

function ModalWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  submitText = "Save",
  children,
  closeIconSrc,
  isValid = true,
  errorText = "",
}) {
  return (
    <Modal
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      closeIconSrc={closeIconSrc}
    >
      <form className="form" onSubmit={onSubmit} noValidate>
        {title && <h3 className="form__title">{title}</h3>}

        <div className="form__fields">{children}</div>

        {errorText && <span className="form__error">{errorText}</span>}

        <button className="form__submit" type="submit" disabled={!isValid}>
          {submitText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
