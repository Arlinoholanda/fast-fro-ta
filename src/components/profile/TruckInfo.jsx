import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./TruckInfo.css"; // Import your CSS for styling

const TruckInfo = ({ records, setRecords }) => {
  const [plate, setPlate] = useState("");
  const [mileage, setMileage] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [driverName, setDriverName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      plate,
      mileage,
      departureTime,
      arrivalTime,
      driverName,
    };
    setRecords([...records, newRecord]); // Update records
    console.log("Truck Info Submitted:", newRecord);
    // Reset form fields
    setPlate("");
    setMileage("");
    setDepartureTime("");
    setArrivalTime("");
    setDriverName("");
  };

  return (
    <div className="truck-info-container">
      <div className="truck-info-form">
        <h2 className="title">Formulário da Rota</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              placeholder="Placa do Caminhão"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Quilometragem"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Data"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
            />
            <input
              type="time"
              placeholder="Horário de Saída"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              required
            />
            <input
              type="time"
              placeholder="Horário de Chegada"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Nome do Motorista"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              required
            />
          </div>
          <div className="button">
            {/* Button to navigate to SearchRecords */}
            <Link to="/search">
              <button>Buscar Registros</button>
            </Link>
            <button type="submit">Enviar Informações</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TruckInfo;
