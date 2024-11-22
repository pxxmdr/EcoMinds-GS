"use client"
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./style.module.css";
import { useState } from "react";

export const LoginForm = () => {

  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne recarregamento da página
    setErrorMessage("");
    setSuccessMessage("");

    // Validação simples
    if (!cnpj || !password) {
      setErrorMessage("CNPJ e senha são obrigatórios.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/solara-java/rest/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cnpjEmpresa: cnpj,
          senhaEmpresa: password,
        }),
      });

      if (!response.ok) {
        throw new Error("CNPJ ou senha inválidos.");
      }

      setSuccessMessage("Login realizado com sucesso!");
      setErrorMessage("");
      
      // Redireciona para a página principal após login bem-sucedido
      setTimeout(() => {
        window.location.href = "/dashboard"; // Altere o caminho conforme necessário
      }, 1000);
    } catch (error) {
      console.error("Erro:", error);
      setErrorMessage("Erro ao realizar login. Verifique suas credenciais.");
    }
  };

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
      <a href="/register">
          <button style={{color: "green"}}><u>Cadastre-se agora, caso não tenha Login!</u></button>
        </a>
    </div>
  );
};
