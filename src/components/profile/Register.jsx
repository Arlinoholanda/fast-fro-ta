import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./Register.css"; // Import your CSS for styling

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }
    // Simulate registration success (you can replace this with actual registration logic)
    console.log("User  registered:", { name, email, password });
    navigate("/login"); // Redirect to login page after registration
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Criar Conta</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={handleRegister}>Registrar</button>
        <p>
          Já tem uma conta? <Link to="/login">Fazer login</Link>{" "}
          {/* Link to login */}
        </p>
      </div>
    </div>
  );
};

export default Register;
