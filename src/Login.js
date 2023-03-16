import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleSignIn = (event) => {
    event.preventDefault();

    // history.push("/dashboard"); 
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
