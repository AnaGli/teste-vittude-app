import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Forms/Button";
import Input from "../components/Forms/Input";
import styles from "./Login.module.css";
import { ReactComponent as PsicoLogo } from "../assets/psicologo.svg";
import { ReactComponent as Paciente } from "../assets/paciente.svg";
import useForm from "../hooks/useForm";
import { REGISTER } from "../api";
import Error from "../components/Helper/Error";
import useFetch from "../hooks/useFetch";

import { useNavigate } from "react-router-dom";

export const LoginCreate = () => {
  const email = useForm("email");
  const password = useForm("password");
  const navigate = useNavigate();

  const { loading, error, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      const { url, options } = REGISTER({
        email: email.value,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) {
        navigate("/");
      }
    }
  }
  return (
    <section className={styles.login}>
      <h1>Crie sua conta</h1>

      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <Paciente />
            <Link to="/">Paciente</Link>
          </div>
          <div className={styles.logo}>
            <PsicoLogo />
            <Link to="/" aria-label="Como">
              Psicólogo
            </Link>
          </div>
        </div>
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Digite seu email"
          {...email}
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          {...password}
        />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div className={styles.criar}>
        {" "}
        <p>Já é cadastrado? </p> <Link to="/">Faça Login</Link>
      </div>
    </section>
  );
};
