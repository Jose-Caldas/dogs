import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  console.log(username);
  console.log(password);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          console.log(response);
          return response.json;
        })
        .then((json) => {
          console.log(json);
        });
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="email" name="userName" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button onClick={handleSubmit}>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
