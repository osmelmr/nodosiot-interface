import React from "react";

// Ejemplo de datos de sensores (puedes reemplazar con fetch de tu API)
const sensorData = [
  { id: 1, name: "Sensor 1", type: "Temperatura", unit: "°C", node: "Nodo Norte", min: 10, max: 40 },
  { id: 2, name: "Sensor 2", type: "Humedad", unit: "%", node: "Nodo Sur", min: 20, max: 80 },
  { id: 3, name: "Sensor 3", type: "Luminosidad", unit: "lux", node: "Nodo Este", min: 0, max: 1000 },
];

export default function Sensors() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Sensores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensorData.map(sensor => (
          <div key={sensor.id} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{sensor.name}</h2>
            <p><span className="font-semibold">Tipo:</span> {sensor.type}</p>
            <p><span className="font-semibold">Unidad:</span> {sensor.unit}</p>
            <p><span className="font-semibold">Nodo:</span> {sensor.node}</p>
            <p><span className="font-semibold">Umbral Min:</span> {sensor.min}</p>
            <p><span className="font-semibold">Umbral Max:</span> {sensor.max}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
