import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Alert } from "../assets/alerta.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          {" "}
          <b>Responsável Técnico</b>
        </p>
        <p>Fabio Camilo da Silva</p>
        <p>CRP (06/84133)</p>
      </div>
      <Alert />
      <div>
        <p>
          Atenção: Este site não oferece tratamento ou aconselhamento imediato
          para pessoas em crise suicida. Em caso de crise, ligue para{" "}
          <b>188 (CVV)</b>
          ou acesse o site <b>www.cvv.org.br</b> www.cvv.org.br. Em caso de
          emergência, procure atendimento em um hospital mais próximo.
        </p>
      </div>
    </footer>
  );
};
