import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const handleClick = () => {
    onCardClick(card);
  };

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'
  }`;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_liked' : ''
  }`;

  return (
    <div className="card">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Delete Image"
        onClick={() => onCardDelete(card)}
      ></button>
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="card__image"
        onClick={handleClick}
      ></div>
      <div className="card__text-container">
        <h2 className="card__label">{card.name}</h2>
        <div className="card__like-containers">
          <button
            aria-label="Like Image"
            type="button"
            className={cardLikeButtonClassName}
            onClick={() => onCardLike(card)}
          ></button>
          <p className="card__likes">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
