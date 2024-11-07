import React, { useState } from "react";
import "./SearchRecords.css";
const SearchRecords = ({ records }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter records based on the search query
  const filteredRecords = records.filter(
    (record) =>
      record.plate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.driverName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-records-container">
      <div className="search-records-form">
        <h2>Registro da Rota</h2>
        <input
          type="text"
          placeholder="Buscar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredRecords.length === 0 ? (
          <p>Nenhum registro encontrado.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Quilometragem</th>
                <th>Horário de Saída</th>
                <th>Horário de Chegada</th>
                <th>Nome do Motorista</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.plate}</td>
                  <td>{record.mileage}</td>
                  <td>{record.departureTime}</td>
                  <td>{record.arrivalTime}</td>
                  <td>{record.driverName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SearchRecords;
