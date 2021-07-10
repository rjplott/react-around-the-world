import '../App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup.js';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup.js';
import React from 'react';
import api from '../utils/api.js';
import avatar from '../images/user-image.jpg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({
    name: 'Jacque Costeau',
    about: 'Explorer',
    avatar: avatar,
  });

  const [cards, setCards] = React.useState([]);

  const handleApiError = (error) => console.log(error);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  function handleCardDelete(card) {
    // Send a request to the API and getting the updated card data
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(handleApiError);
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const handleAddCard = (newCard) => {
    api
      .addCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(handleApiError);
  };

  const handleUpdateUser = (newInfo) => {
    api
      .updateUserInformation(newInfo)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(handleApiError);
  };

  const handleUpdateAvatar = (newAvatar) => {
    api
      .updateUserAvartar(newAvatar)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(handleApiError);
  };

  React.useEffect(() => {
    api
      .getUserInformation()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(handleApiError);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddCard}
        />
        <PopupWithForm
          onClose={closeAllPopups}
          title="Are you sure?"
          name="remove-card"
          buttonText="Yes"
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
