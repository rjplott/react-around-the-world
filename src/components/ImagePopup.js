export default function ImagePopup({ card, onClose }) {
  return (
    <div
      className={
        card
          ? 'popup popup_purpose_view-full-picture popup_opened'
          : 'popup popup_purpose_view-full-picture'
      }
    >
      <div className="popup__wrapper">
        <button
          aria-label="Close Form"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <figure className="popup__full-image-container">
          <img
            src={card?.link}
            alt="Full size popup."
            className="popup__full-image"
          />
          <figcaption className="popup__image-caption">
            {card ? card.name : 'None'}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
