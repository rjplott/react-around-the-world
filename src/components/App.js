import '../App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Login from './Login';
import Registration from './Registration';
import ProtectedRoute from './ProtectedRoute';
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
  const [cards, setCards] = React.useState([]);
  const [email, setEmail] = React.useState("");

  const history = useHistory();

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

  const onRegister = () => {
    setIsLoggingIn(true);
  }

  const onLogin = (email) => {
    setIsLoggedIn(true);
    setIsLoggingIn(false);
    setEmail(email);
  }

  const onLogout = () => {
    setIsLoggedIn(false);
    setIsLoggingIn(true);
    setEmail(null);
    localStorage.removeItem('jwt');
    history.push('/login');
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(handleApiError);
  }, []);

  React.useEffect(() => {
    function checkToken() {
    const token = localStorage.getItem('jwt');

    if (token) {
      auth.validateToken(token)
        .then(data => {
          if (data) {
            setIsLoggedIn(true);
            history.push("/");
            setEmail(data.email);
          }
        });
      }
  }

    checkToken();
  });

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
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            closeAllPopups={closeAllPopups}
            handleUpdateUser={handleUpdateUser}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            handleUpdateAvatar={handleUpdateAvatar}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            handleAddCard={handleAddCard}
            selectedCard={selectedCard}
            component={Main}
            header={Header}
              />
          
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
