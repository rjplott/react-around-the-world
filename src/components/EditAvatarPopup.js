import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ onClose, isOpen, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      title="Change profile picture"
      name="edit-profile-picture"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        required
        ref={avatarRef}
        placeholder="Image URL"
        type="url"
        name="edit-picture-link"
        id="edit-picture-link"
        className="popup__input popup__input_type_image-link popup__input_purpose_edit-picture"
      />
      <span className="popup__error edit-picture-link-error">testing</span>
    </PopupWithForm>
  );
}
