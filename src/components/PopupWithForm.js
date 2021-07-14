export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_purpose_${name} ${isOpen ? `popup_opened` : ''}`}
    >
      <div className="popup__wrapper">
        <button
          aria-label="Close Form"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <form
          className="popup__form"
          name={`${name}-form`}
          onSubmit={onSubmit}
        >
          <h2 className="popup__form-title">{title}</h2>
          {children}
          <button
            aria-label="Submit Form"
            type="submit"
            className="popup__button"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
