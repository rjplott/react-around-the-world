import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function AddPlacePopup({ onClose, isOpen, onAddCard }) {
  const [imageTitle, setImageTitle] = React.useState('');
  const [imageLink, setImageLink] = React.useState('');

  const handleUpdateImageTitle = (e) => {
    setImageTitle(e.target.value);
  };

  const handleUpdateImageLink = (e) => {
    setImageLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddCard({
      name: imageTitle,
      link: imageLink,
    });

    setImageLink('');
    setImageTitle('');
  };

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      title="New Place"
      name="add-picture"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        required
        minLength="1"
        maxLength="30"
        placeholder="Title"
        type="text"
        name="add-image-title"
        id="add-image-title"
        className="popup__input popup__input_type_image-title"
        value={imageTitle}
        onChange={handleUpdateImageTitle}
      />
      <span className="popup__error add-image-title-error">testing</span>
      <input
        required
        placeholder="Image URL"
        type="url"
        name="add-image-link"
        id="add-image-link"
        className="popup__input popup__input_type_image-link"
        value={imageLink}
        onChange={handleUpdateImageLink}
      />
      <span className="popup__error add-image-link-error">testing</span>
    </PopupWithForm>
  );
}
