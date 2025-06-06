import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import testW from "../../images/logout.png";

const Header = ({ loggedIn, buttonClick }) => {
  const currentUser = useContext(CurrentUserContext);
  
  const [burger, setBurger] = useState(true);

  const toggleDropDown = () => {
    setBurger(!burger);
  };

  const headerButtonClick = () => {
    buttonClick();
    toggleDropDown();
  };

  return (
    <header className={`header ${burger ? "" : "header__mobile"}`}>
      <NavLink className="header__title" to="/">
        NewsExplorer
      </NavLink>

      <button
        onClick={toggleDropDown}
        type="button"
        className={`header__hamburger ${burger ? "header__button-open" : "header__button-close"}`}
      />

      <div
        id="header__links"
        className={`header__links ${burger ? "header__links-hidden" : "header__links-open"}`}
      >
        <NavLink
          className={({ isActive }) =>
            `header__links-item ${isActive ? "header__links-item_selected" : ""}`
          }
          to="/"
        >
          Início
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `header__links-item ${loggedIn ? "" : "header__links-item_hidden"} ${isActive ? "header__links-item_selected" : ""}`
          }
          to="/saved-news"
        >
          Artigos Salvos
        </NavLink>

        <button
          className="header__links-button"
          type="button"
          onClick={headerButtonClick}
        >
          {loggedIn ? `${currentUser.name}` : "Entrar"}
          {loggedIn && (
            <img
              className={
                loggedIn
                  ? "header__links-button_image"
                  : "header__links-button_image header__links-button_image-hidden"
              }
              src={testW}
              alt="Logout"
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
