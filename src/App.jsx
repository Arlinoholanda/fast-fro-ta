import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/profile/Login.jsx"; // Importação corrigida
import TruckInfo from "./components/profile/TruckInfo.jsx"; // Importação corrigida
import Register from "./components/profile/Register.jsx"; // Importação corrigida
import SearchRecords from "./components/profile/SearchRecords.jsx"; // Importação corrigida

const App = () => {
  const [records, setRecords] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/truck-info"
          element={<TruckInfo records={records} setRecords={setRecords} />}
        />
        <Route path="/search" element={<SearchRecords records={records} />} />

        {/* Rota padrão que redireciona para a página de login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
