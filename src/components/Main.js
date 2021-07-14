import pencil from '../images/edit-pencil.svg';
import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-container">
          <div onClick={onEditAvatar} className="profile__image-wrapper">
            <img
              alt="User's profile"
              className="profile__user-image"
              src={currentUser.avatar}
            />
            <div className="profile__image-overlay">
              <img
                src={pencil}
                alt="A small icon of a pencil"
                className="profile__edit-icon"
              />
            </div>
          </div>
          <div className="profile__user-text">
            <div className="profile__wrapper">
              <h1 className="profile__user-name">{currentUser.name}</h1>
              <button
                aria-label="Edit Profile"
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__user-title">{currentUser.about}</p>
          </div>
        </div>
        <button
          aria-label="Add Image"
          type="button"
          className="profile__add-image-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
