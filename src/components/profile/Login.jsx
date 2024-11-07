import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./Login.css"; // Import your CSS for styling

const Login = ({ title, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  // Admin user credentials
  const adminUser = {
    email: "admin@example.com",
    password: "admin123", // Use a strong password in production
  };

  const handleLogin = () => {
    // Validate email and password
    if (email === adminUser.email && password === adminUser.password) {
      navigate("/truck-info"); // Redirect to truck info page after login
    } else {
      setErrorMessage("Email ou senha incorretos."); // Set error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{title}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>{buttonText} Entrar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display error message */}
        <p>
          Não tem uma conta? <Link to="/register">Criar cadastro</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
