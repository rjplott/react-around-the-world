import PopupWithForm from './PopupWithForm';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [userNameValue, setUserNameValue] = React.useState('Jacque Costeau');
  const [userAboutValue, setUserAboutValue] = React.useState('Explorer');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setUserNameValue(currentUser.name);
    setUserAboutValue(currentUser.about);
  }, [currentUser, isOpen]);

  function handleUserNameChange(e) {
    setUserNameValue(e.target.value);
  }

  function handleUserAboutChange(e) {
    setUserAboutValue(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    onUpdateUser({
      name: userNameValue,
      about: userAboutValue,
    });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      title="Edit profile"
      name="edit-user"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        required
        placeholder="User's Name"
        type="text"
        name="edit-user-name"
        id="edit-user-name"
        minLength="2"
        maxLength="40"
        className="popup__input popup__input_type_name"
        value={userNameValue}
        onChange={handleUserNameChange}
      />
      <span className="popup__error edit-user-name-error"></span>
      <input
        required
        placeholder="User's Title"
        type="text"
        name="edit-user-title"
        id="edit-user-title"
        className="popup__input popup__input_type_user-title"
        value={userAboutValue}
        onChange={handleUserAboutChange}
      />
      <span className="popup__error edit-user-title-error"></span>
    </PopupWithForm>
  );
}
