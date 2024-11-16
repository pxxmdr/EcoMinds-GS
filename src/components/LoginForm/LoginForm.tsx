"use client"
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import styles from "./style.module.css"

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
        <div className={styles.field} style={{marginTop: "1rem"}}>
          <label htmlFor="senha">
            {" "}
            <FaArrowLeftLong /> Senha
          </label>
          <input type="text" id="senha" placeholder="Insira aqui" />
        </div>
        <a href="/">
          <button>Entrar</button>
        </a>
      </div>
      <Image src={"/EcoMindsLogo.png"} height={220} width={220} alt="Logo da ecominds com plantas de cores verdes e sustentavel" style={{marginInline: "auto"}}/>
    </div>
  );
};
