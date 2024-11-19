"use client"
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./style.module.css";

export const RegisterForm = () => {
  return (
    <div className={styles.RegisterFormContainer}>
      <h1>Criar conta</h1>
      <p>Preencha seus dados de acesso para criar e continuar</p>
      <div className={styles.FormContainer}>
        <div className={styles.field}>
          <label htmlFor="company_name">
            {" "}
            <FaArrowLeftLong /> Nome da empresa
          </label>
          <input type="text" id="company_name" placeholder="Insira aqui" />
        </div>
        <div className={styles.field} style={{ marginTop: "1rem" }}>
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
        <a href="/">
          <button>Cadastrar-se</button>
        </a>
      </div>
    </div>
  );
};
