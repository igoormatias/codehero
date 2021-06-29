import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} alt="logo" />
      <span>
        <strong>Igor Matias</strong>
        <p>Teste de Front-end</p>
        <strong>CB</strong>
      </span>
    </div>
  );
};

export default Header;
