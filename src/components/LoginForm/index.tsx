"use client"
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./style.module.css";

export const LoginForm = () => {
  return (
    <div className={styles.LoginFormContainer}>
      <h1>Acessar Conta</h1>
      <p>Preencha seus dados de acesso para criar e continuar</p>
      <div className={styles.FormContainer}>
        <div className={styles.field}>
          <label htmlFor="cnpj">
            {" "}
            <FaArrowLeftLong /> CNPJ
          </label>
          <input type="text" id="cnpj" placeholder="Insira aqui" />
        </div>
        <div className={styles.field} style={{ marginTop: "1rem" }}>
          <label htmlFor="senha">
            {" "}
            <FaArrowLeftLong /> Senha
          </label>
          <input type="password" id="senha" placeholder="Insira aqui" />
        </div>
        <a href="/s">
          <button>Entrar</button>
        </a>
      </div>
    </div>
  );
};
