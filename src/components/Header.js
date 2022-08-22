import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../assets/logo-vittude.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <Link to="/" aria-label="Como">
          Como funciona
        </Link>
        <Link to="/" aria-label="Como">
          Para você
        </Link>
        <Link to="/" aria-label="Como">
          Para Psicólogos
        </Link>
        <Link to="/" aria-label="Como">
          Para empresas
        </Link>
        <Link to="/" aria-label="Como">
          Blog
        </Link>
        <div>
          <p>Olá visitante</p>
          <Arrow />
        </div>
      </nav>
    </header>
  );
};
