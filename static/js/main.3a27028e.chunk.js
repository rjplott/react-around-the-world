(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(19),s=a.n(i),o=(a(29),a(23)),r=a(2),u=(a(30),a.p+"static/media/logo.51aa5f9c.svg"),l=a(6),d=a(0);function p(e){var t=e.isLoggedIn,a=e.isLoggingIn,n=e.onLogout,i=e.setIsLoggingIn,s=e.email,o=c.a.useState(window.innerWidth),p=Object(r.a)(o,2),h=p[0],j=p[1],m=c.a.useState(h<=550),b=Object(r.a)(m,2),_=b[0],f=b[1],g=c.a.useState(!1),O=Object(r.a)(g,2),x=O[0],v=O[1],N=function(){i(!a)};return c.a.useEffect((function(){window.addEventListener("resize",(function(){j(window.innerWidth),f(window.innerWidth<=550)}))}),[]),_?t?Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsxs)("div",{className:"header__menu header__menu_mobile ".concat(x?"":"header__menu_closed"),children:[Object(d.jsx)("p",{className:"header__email",children:s}),Object(d.jsx)(l.b,{className:"header__link header__link_logout",children:"Log out"})]}),Object(d.jsx)("img",{src:u,alt:"Around the US's logo",className:"header__logo"}),Object(d.jsx)("div",{className:"header__menu-wrapper",children:Object(d.jsx)("button",{"aria-label":"Toggle Menu",type:"button",className:"header__menu-toggle header__menu-toggle_visible ".concat(x?"header__menu-toggle_icon_close":"header__menu-toggle_icon_open"),onClick:function(){v(!x)}})})]}):Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{src:u,alt:"Around the US's logo",className:"header__logo"}),a?Object(d.jsx)(l.b,{onClick:N,to:"/signup",className:"header__link",children:"Sign up"}):Object(d.jsx)(l.b,{onClick:N,to:"/login",className:"header__link",children:"Log in"})]}):Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{src:u,alt:"Around the US's logo",className:"header__logo"}),t?Object(d.jsxs)("div",{className:"header__menu-wrapper",children:[Object(d.jsxs)("div",{className:"header__menu",children:[Object(d.jsx)("p",{className:"header__email",children:s}),Object(d.jsx)(l.b,{to:"/login",className:"header__link",onClick:function(){v(!1),n()},children:"Log out"})]}),Object(d.jsx)("button",{"aria-label":"Toggle Menu",type:"button",className:"header__menu-toggle"})]}):a?Object(d.jsx)(l.b,{onClick:N,to:"/signup",className:"header__link",children:"Sign up"}):Object(d.jsx)(l.b,{onClick:N,to:"/login",className:"header__link",children:"Log in"})]})}var h=a.p+"static/media/edit-pencil.a086f758.svg",j=c.a.createContext();function m(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,i=e.onCardDelete,s=c.a.useContext(j),o=t.owner===s._id,r="card__delete-button ".concat(o?"card__delete-button_visible":"card__delete-button_hidden"),u=t.likes.some((function(e){return e===s._id})),l="card__like-button ".concat(u?"card__like-button_liked":"");return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("button",{className:r,type:"button","aria-label":"Delete Image",onClick:function(){return i(t)}}),Object(d.jsx)("div",{style:{backgroundImage:"url(".concat(t.link,")")},className:"card__image",onClick:function(){a(t)}}),Object(d.jsxs)("div",{className:"card__text-container",children:[Object(d.jsx)("h2",{className:"card__label",children:t.name}),Object(d.jsxs)("div",{className:"card__like-containers",children:[Object(d.jsx)("button",{"aria-label":"Like Image",type:"button",className:l,onClick:function(){return n(t)}}),Object(d.jsx)("p",{className:"card__likes",children:t.likes.length})]})]})]})}function b(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,i=e.onCardClick,s=e.cards,o=e.onCardLike,r=e.onCardDelete,u=c.a.useContext(j);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__user-container",children:[Object(d.jsxs)("div",{onClick:t,className:"profile__image-wrapper",children:[Object(d.jsx)("img",{alt:"User's profile",className:"profile__user-image",src:u.avatar}),Object(d.jsx)("div",{className:"profile__image-overlay",children:Object(d.jsx)("img",{src:h,alt:"A small icon of a pencil",className:"profile__edit-icon"})})]}),Object(d.jsxs)("div",{className:"profile__user-text",children:[Object(d.jsxs)("div",{className:"profile__wrapper",children:[Object(d.jsx)("h1",{className:"profile__user-name",children:u.name}),Object(d.jsx)("button",{"aria-label":"Edit Profile",type:"button",className:"profile__edit-button",onClick:a})]}),Object(d.jsx)("p",{className:"profile__user-title",children:u.about})]})]}),Object(d.jsx)("button",{"aria-label":"Add Image",type:"button",className:"profile__add-image-button",onClick:n})]}),Object(d.jsx)("section",{className:"gallery",children:s.map((function(e){return Object(d.jsx)(m,{card:e,onCardClick:i,onCardLike:o,onCardDelete:r},e._id)}))})]})}function _(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})}function f(e){var t=e.onLogin,a=c.a.useState(""),n=Object(r.a)(a,2),i=n[0],s=n[1],o=c.a.useState(""),u=Object(r.a)(o,2),p=u[0],h=u[1];return Object(d.jsx)("section",{className:"authentication",children:Object(d.jsxs)("form",{name:"login-form",className:"authentication__form",onSubmit:function(e){e.preventDefault(),t(p,i)},children:[Object(d.jsx)("h2",{className:"authentication__title",children:"Log in"}),Object(d.jsx)("input",{required:!0,type:"email",placeholder:"Email",name:"email",id:"login-email",className:"authentication__input",value:p,onChange:function(e){return h(e.target.value)}}),Object(d.jsx)("input",{required:!0,type:"password",placeholder:"Password",name:"password",id:"login-password",className:"authentication__input",value:i,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{"aria-label":"Submit Form",type:"submit",className:"authentication__submit",children:"Log in"}),Object(d.jsx)(l.b,{to:"/signup",className:"authentication__link",children:"Not a member yet? Sign up here!"})]})})}function g(e){var t=e.onRegister,a=c.a.useState(""),n=Object(r.a)(a,2),i=n[0],s=n[1],o=c.a.useState(""),u=Object(r.a)(o,2),p=u[0],h=u[1];return Object(d.jsx)("section",{className:"authentication",children:Object(d.jsxs)("form",{name:"registration-form",className:"authentication__form",onSubmit:function(e){e.preventDefault(),t(i,p)},children:[Object(d.jsx)("h2",{className:"authentication__title",children:"Sign up"}),Object(d.jsx)("input",{required:!0,type:"email",placeholder:"Email",name:"email",id:"registration-email",className:"authentication__input",value:i,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("input",{required:!0,type:"password",placeholder:"Password",name:"password",id:"registration-password",className:"authentication__input",value:p,onChange:function(e){return h(e.target.value)}}),Object(d.jsx)("button",{"aria-label":"Submit Form",type:"submit",className:"authentication__submit",children:"Sign up"}),Object(d.jsx)(l.b,{to:"/login",className:"authentication__link",children:"Already a member yet? Login in here!"})]})})}var O=a(5),x=a(24),v=a(3);function N(e){var t=e.component,a=Object(x.a)(e,["component"]);return Object(d.jsx)(v.b,{children:function(){return a.isLoggedIn?Object(d.jsx)(t,Object(O.a)({},a)):Object(d.jsx)(v.a,{to:"./login"})}})}function k(e){var t=e.name,a=e.title,n=e.children,c=e.isOpen,i=e.onClose,s=e.buttonText,o=e.onSubmit;return Object(d.jsx)("div",{className:"popup popup_purpose_".concat(t," ").concat(c?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__wrapper",children:[Object(d.jsx)("button",{"aria-label":"Close Form",type:"button",className:"popup__close",onClick:i}),Object(d.jsxs)("form",{className:"popup__form",name:"".concat(t,"-form"),onSubmit:o,children:[Object(d.jsx)("h2",{className:"popup__form-title",children:a}),n,Object(d.jsx)("button",{"aria-label":"Submit Form",type:"submit",className:"popup__button",children:s})]})]})})}function C(e){var t=e.onClose,a=e.isOpen,n=e.onUpdateAvatar,i=c.a.useRef();return Object(d.jsxs)(k,{onClose:t,isOpen:a,title:"Change profile picture",name:"edit-profile-picture",buttonText:"Save",onSubmit:function(e){e.preventDefault(),n({avatar:i.current.value})},children:[Object(d.jsx)("input",{required:!0,ref:i,placeholder:"Image URL",type:"url",name:"edit-picture-link",id:"edit-picture-link",className:"popup__input popup__input_type_image-link popup__input_purpose_edit-picture"}),Object(d.jsx)("span",{className:"popup__error edit-picture-link-error",children:"testing"})]})}function S(e){var t=e.onClose,a=e.isOpen,n=e.onAddCard,i=c.a.useState(""),s=Object(r.a)(i,2),o=s[0],u=s[1],l=c.a.useState(""),p=Object(r.a)(l,2),h=p[0],j=p[1];return Object(d.jsxs)(k,{onClose:t,isOpen:a,title:"New Place",name:"add-picture",buttonText:"Save",onSubmit:function(e){e.preventDefault(),n({name:o,link:h}),j(""),u("")},children:[Object(d.jsx)("input",{required:!0,minLength:"1",maxLength:"30",placeholder:"Title",type:"text",name:"add-image-title",id:"add-image-title",className:"popup__input popup__input_type_image-title",value:o,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error add-image-title-error",children:"testing"}),Object(d.jsx)("input",{required:!0,placeholder:"Image URL",type:"url",name:"add-image-link",id:"add-image-link",className:"popup__input popup__input_type_image-link",value:h,onChange:function(e){j(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error add-image-link-error",children:"testing"})]})}function y(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,i=c.a.useState("Jacque Costeau"),s=Object(r.a)(i,2),o=s[0],u=s[1],l=c.a.useState("Explorer"),p=Object(r.a)(l,2),h=p[0],m=p[1],b=c.a.useContext(j);return c.a.useEffect((function(){u(b.name),m(b.about)}),[b,t]),Object(d.jsxs)(k,{onClose:a,isOpen:t,title:"Edit profile",name:"edit-user",buttonText:"Save",onSubmit:function(e){e.preventDefault(),n({name:o,about:h})},children:[Object(d.jsx)("input",{required:!0,placeholder:"User's Name",type:"text",name:"edit-user-name",id:"edit-user-name",minLength:"2",maxLength:"40",className:"popup__input popup__input_type_name",value:o,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error edit-user-name-error"}),Object(d.jsx)("input",{required:!0,placeholder:"User's Title",type:"text",name:"edit-user-title",id:"edit-user-title",className:"popup__input popup__input_type_user-title",value:h,onChange:function(e){m(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error edit-user-title-error"})]})}function L(e){var t=e.card,a=e.onClose;return Object(d.jsx)("div",{className:t?"popup popup_purpose_view-full-picture popup_opened":"popup popup_purpose_view-full-picture",children:Object(d.jsxs)("div",{className:"popup__wrapper",children:[Object(d.jsx)("button",{"aria-label":"Close Form",type:"button",className:"popup__close",onClick:a}),Object(d.jsxs)("figure",{className:"popup__full-image-container",children:[Object(d.jsx)("img",{src:null===t||void 0===t?void 0:t.link,alt:"Full size popup.",className:"popup__full-image"}),Object(d.jsx)("figcaption",{className:"popup__image-caption",children:t?t.name:"None"})]})]})})}var w=a.p+"static/media/register-success.1b6082f8.svg",U=a.p+"static/media/register-fail.df8eddf6.svg";function I(e){var t=e.registrationSuccess,a=e.onClose,n=e.isOpen;return Object(d.jsx)("div",{className:"popup popup_purpose_info_tooltip ".concat(n?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__wrapper",children:[Object(d.jsx)("button",{"aria-label":"Close Form",type:"button",className:"popup__close",onClick:a}),Object(d.jsxs)("div",{className:"popup__tooltip-wrapper",children:[Object(d.jsx)("img",{src:t?w:U,alt:t?"Circle with a checkmark inside":"Circle with an X inside",className:"popup__tooltip-image"}),Object(d.jsx)("p",{className:"popup__tooltip-text",children:t?"Success! You have now been registered.":"Ooops, something went wrong! Please try again."})]})]})})}var T=a(21),R=a(22),A=new(function(){function e(t){Object(T.a)(this,e),this._baseURL=t.baseURL,this._headers=t.headers}return Object(R.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status," - ").concat(e.statusText))}},{key:"getUserInformation",value:function(e){return fetch("".concat(this._baseURL,"/users/me"),{headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(e)})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(e){return fetch("".concat(this._baseURL,"/cards"),{headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(e)})}).then(this._checkResponse)}},{key:"updateUserInformation",value:function(e,t){return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e,t){return fetch("".concat(this._baseURL,"/cards/").concat(e),{method:"DELETE",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})}).then(this._checkResponse)}},{key:"_addLike",value:function(e,t){return fetch("".concat(this._baseURL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})}).then(this._checkResponse)}},{key:"_removeLike",value:function(e,t){return fetch("".concat(this._baseURL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t,a){return t?this._removeLike(e,a):this._addLike(e,a)}},{key:"updateUserAvartar",value:function(e,t){return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({baseURL:"https://around-the-world-jl.herokuapp.com",headers:{"Content-Type":"application/json"}}),E=a.p+"static/media/user-image.29ae9507.jpg",P="https://around-the-world-jl.herokuapp.com",D=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status," - ").concat(e.statusText))};var q=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],i=c.a.useState(!1),s=Object(r.a)(i,2),u=s[0],l=s[1],h=c.a.useState(!1),m=Object(r.a)(h,2),O=m[0],x=m[1],w=c.a.useState(null),U=Object(r.a)(w,2),T=U[0],R=U[1],q=c.a.useState({name:"Jacque Costeau",about:"Explorer",avatar:E}),z=Object(r.a)(q,2),B=z[0],F=z[1],J=c.a.useState(!1),M=Object(r.a)(J,2),W=M[0],H=M[1],Y=c.a.useState(!0),G=Object(r.a)(Y,2),X=G[0],K=G[1],Q=c.a.useState(!1),V=Object(r.a)(Q,2),Z=V[0],$=V[1],ee=c.a.useState(!1),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],ce=c.a.useState([]),ie=Object(r.a)(ce,2),se=ie[0],oe=ie[1],re=c.a.useState(""),ue=Object(r.a)(re,2),le=ue[0],de=ue[1],pe=c.a.useState(""),he=Object(r.a)(pe,2),je=he[0],me=he[1],be=Object(v.g)(),_e=function(e){return console.log(e)};c.a.useEffect((function(){!function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(P,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return D(e)})).then((function(e){return e.data}))}(e).then((function(t){t&&(!function(e){H(!0),be.push("/"),de(e.email)}(t),me(e))})).then((function(){A.getInitialCards(e).then((function(e){oe(e.data)})).catch(_e),A.getUserInformation(e).then((function(e){F(e.data)})).catch(_e)})).catch(_e)}()}),[]);var fe=function(){x(!1),n(!1),l(!1),R(null)};return Object(d.jsx)(j.Provider,{value:B,children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(p,{isLoggedIn:W,isLoggingIn:X,onLogout:function(){H(!1),K(!0),$(!1),de(null),localStorage.removeItem("jwt"),me(""),be.push("/login")},setIsLoggingIn:K,email:le}),Object(d.jsxs)(v.d,{children:[Object(d.jsx)(v.b,{path:"/login",children:Object(d.jsx)(f,{onLogin:function(e,t){(function(e){var t=e.email,a=e.password;return fetch("".concat(P,"/signin"),{method:"POST",headers:{Accept:"applicaton/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return D(e)})).then((function(e){return e.token?(localStorage.setItem("jwt",e.token),e):void 0}))})({email:e,password:t}).then((function(t){if(t.token)return H(!0),K(!1),de(e),me(t.token),be.push("/"),t.token})).then((function(e){A.getUserInformation(e).then((function(e){F(e.data)})).catch(_e)})).catch(_e)}})}),Object(d.jsx)(v.b,{path:"/signup",children:Object(d.jsx)(g,{onRegister:function(e,t){(function(e){var t=e.email,a=e.password;return fetch("".concat(P,"/signup"),{method:"POST",headers:{Accept:"applicaton/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return D(e)})).then((function(e){return e}))})({email:e,password:t}).then((function(e){e&&($(!0),K(!0)),ne(!0)})).catch(_e)}})}),Object(d.jsx)(N,{isLoggedIn:W,path:"/",onEditProfile:function(){n(!0)},onEditAvatar:function(){l(!0)},onAddPlace:function(){x(!0)},onCardClick:function(e){R(e)},cards:se,onCardLike:function(e){var t=e.likes.some((function(e){return e===B._id}));A.changeLikeCardStatus(e._id,t,je).then((function(t){var a=t.data;oe((function(t){return t.map((function(t){return t._id===e._id?a:t}))}))})).catch(_e)},onCardDelete:function(e){A.deleteCard(e._id,je).then((function(){oe((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch(_e)},component:b})]}),Object(d.jsx)(y,{isOpen:a,onClose:fe,onUpdateUser:function(e){A.updateUserInformation(e,je).then((function(e){F(e.data),fe()})).catch(_e)}}),Object(d.jsx)(C,{isOpen:u,onClose:fe,onUpdateAvatar:function(e){A.updateUserAvartar(e,je).then((function(e){F(e.data),fe()})).catch(_e)}}),Object(d.jsx)(S,{isOpen:O,onClose:fe,onAddCard:function(e){A.addCard(e,je).then((function(e){oe([e.data].concat(Object(o.a)(se))),fe()})).catch(_e)}}),Object(d.jsx)(k,{onClose:fe,title:"Are you sure?",name:"remove-card",buttonText:"Yes"}),Object(d.jsx)(L,{card:T,onClose:fe}),Object(d.jsx)(I,{isOpen:ae,registrationSuccess:Z,onClose:function(){ne(!1),Z&&be.push("/login")}}),Object(d.jsx)(_,{})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root")),z()}},[[37,1,2]]]);
//# sourceMappingURL=main.3a27028e.chunk.js.map