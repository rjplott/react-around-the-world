/* eslint-disable react-hooks/exhaustive-deps */
import '../App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Login from './Login';
import Registration from './Registration';
import ProtectedRoute from './ProtectedRoute';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import api from '../utils/api.js';
import avatar from '../images/user-image.jpg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import * as auth from '../utils/auth';

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

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [token, setToken] = React.useState("");

  const history = useHistory();

  const handleApiError = (error) => console.log(error);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, isLiked, token)
      .then((res) => {
        const newCard = res.data;
        setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch(handleApiError);
  }
  function handleCardDelete(card) {
    // Send a request to the API and getting the updated card data
    api.deleteCard(card._id, token)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch(handleApiError);
  }

  const onRegister = (email, password) => {
    auth.register({ email, password })
      .then((res) => {
        if (res) {
          setIsRegistered(true);
          setIsLoggingIn(true);
        }
        setIsInfoTooltipOpen(true);
      })
      .catch(handleApiError);
  }

  const onLogin = (email, password) => {
    auth.authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          setIsLoggingIn(false);
          setEmail(email);
          history.push('/');
          return data.token;
        }
      })
      .then((token) => {
        api
            .getUserInformation(token)
            .then((user) => {
              setCurrentUser(user.data);
            })
            .catch(handleApiError);
      })
      .catch(handleApiError);
  }

  const onLogout = () => {
    setIsLoggedIn(false);
    setIsLoggingIn(true);
    setIsRegistered(false);
    setEmail(null);
    localStorage.removeItem('jwt');
    setToken("");
    history.push('/login');
  }

  function handleValidToken (data) {
            setIsLoggedIn(true);
            history.push("/");
            setEmail(data.email);
  }

    React.useEffect(() => {
    function checkToken() {
    const token = localStorage.getItem('jwt');

    if (token) {
      auth.validateToken(token)
        .then(data => {
          if (data) {
            handleValidToken(data)
            setToken(token);
          }
        })
        .then(() => {
          api
            .getInitialCards(token)
            .then((cards) => {
              setCards(cards.data);
            })
            .catch(handleApiError);
          
          api
            .getUserInformation(token)
            .then((user) => {
              setCurrentUser(user.data);
            })
            .catch(handleApiError);
        })
        .catch(handleApiError);
      }
  }

    checkToken();
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

  const handleCloseTooltip = () => {
    setIsInfoTooltipOpen(false);

    if (isRegistered) {
      history.push('/login');
    }
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const handleAddCard = (newCard) => {
    api
      .addCard(newCard, token)
      .then((newCard) => {
        setCards([newCard.data, ...cards]);
        closeAllPopups();
      })
      .catch(handleApiError);
  };

  const handleUpdateUser = (newInfo) => {
    api
      .updateUserInformation(newInfo, token)
      .then((user) => {
        setCurrentUser(user.data);
        closeAllPopups();
      })
      .catch(handleApiError);
  };

  const handleUpdateAvatar = (newAvatar) => {
    api
      .updateUserAvartar(newAvatar, token)
      .then((user) => {
        setCurrentUser(user.data);
        closeAllPopups();
      })
      .catch(handleApiError);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
        <Header isLoggedIn={isLoggedIn} isLoggingIn={isLoggingIn} onLogout={onLogout} setIsLoggingIn={setIsLoggingIn} email={email} />
        <Switch>
          <Route path="/login">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/signup">
            <Registration onRegister={onRegister} />
          </Route>
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/"
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            component={Main}
          />
          
        </Switch>
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
        <InfoTooltip isOpen={isInfoTooltipOpen} registrationSuccess={isRegistered} onClose={handleCloseTooltip} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
