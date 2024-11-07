import React, { useState } from "react";

const SearchRecords = ({ records }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("date");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecords = records.filter((record) => {
    if (searchType === "date") {
      return record.date.includes(searchTerm);
    } else if (searchType === "driver") {
      return record.driver.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "truck") {
      return record.truck.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <div className="search-records-container">
      <h2>Buscar Registros</h2>
      <div className="search-container">
        <select
          onChange={(e) => setSearchType(e.target.value)}
          value={searchType}
        >
          <option value="date">Data</option>
          <option value="driver">Motorista</option>
          <option value="truck">Caminhão</option>
        </select>
        <input
          type="text"
          placeholder={`Pesquisar por ${searchType}`}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <h3>Resultados da Busca</h3>
      <ul className="record-list">
        {filteredRecords.length > 0 ? (
          filteredRecords.map((record, index) => (
            <li key={index}>
              <strong>Data:</strong> {record.date} | <strong>Motorista:</strong>{" "}
              {record.driver} | <strong>Caminhão:</strong> {record.truck}
            </li>
          ))
        ) : (
          <li>Nenhum registro encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchRecords;
