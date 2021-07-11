import success from '../images/register-success.svg';
import failure from '../images/register-fail.svg';

export default function InfoTooltip({ registrationSuccess, onClose, isOpen }) {
  return (
    <div
      className={
        `popup popup_purpose_info_tooltip} ${isOpen ? `popup_opened` : ''}`}>
      <div className="popup__wrapper">
        <button
          aria-label="Close Form"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <div className="popup__tooltip-wrapper">
          <img src={ registrationSuccess ? success : failure } alt={ registrationSuccess ? 'Circle with a checkmark inside' : 'Circle with an X inside' } className="popup__tooltip-image" />
          <p className="popup__tooltip-text">{ registrationSuccess ? 'Success! You have now been registered.' : 'Ooops, something went wrong! Please try again.' }</p>
        </div>
      </div>
    </div>
  )
}
