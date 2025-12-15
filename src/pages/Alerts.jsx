import React from "react";

// Componente de tarjeta de alerta en modo oscuro con tonos más sobrios
const AlertCard = ({ node, sensor, type, value, status }) => {
  const statusStyles = {
    pending: "border-l-4 border-yellow-500",
    resolved: "border-l-4 border-green-500",
    critical: "border-l-4 border-red-500",
  };

  const statusColors = {
    pending: "text-yellow-400",
    resolved: "text-green-400",
    critical: "text-red-400",
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-md mb-4 bg-gray-800 border border-gray-700 ${statusStyles[status]} transition transform hover:scale-105 duration-300`}
    >
      <h3 className="font-semibold text-white">
        {node} - {sensor}
      </h3>
      <p className="text-gray-300">Tipo: {type}</p>
      <p className="text-gray-300">Valor detectado: {value}</p>
      <p className={`font-semibold mt-1 ${statusColors[status]}`}>
        Estado: {status.toUpperCase()}
      </p>
    </div>
  );
};

export default function Alerts() {
  // Simulación de datos
  const alerts = [
    {
      node: "Nodo Norte",
      sensor: "Temperatura",
      type: "Exceso",
      value: 35,
      status: "pending",
    },
    {
      node: "Nodo Sur",
      sensor: "Humedad",
      type: "Deficiencia",
      value: 20,
      status: "resolved",
    },
    {
      node: "Nodo Este",
      sensor: "Temperatura",
      type: "Exceso",
      value: 40,
      status: "critical",
    },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-full text-gray-100">
      <h1 className="text-3xl font-bold text-white mb-6">Alertas IoT</h1>
      <p className="text-gray-400 mb-6">
        Visualiza todas las alertas generadas por los sensores de tus nodos.
      </p>

      <div>
        {alerts.map((alert, index) => (
          <AlertCard key={index} {...alert} />
        ))}
      </div>
    </div>
  );
}
