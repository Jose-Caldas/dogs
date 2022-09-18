import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(userName, password);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json;
      })
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button onClick={handleSubmit}>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
