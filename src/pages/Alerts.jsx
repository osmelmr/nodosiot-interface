import React from "react";

// Componente de tarjeta de alerta
const AlertCard = ({ node, sensor, type, value, status }) => {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    resolved: "bg-green-100 text-green-700",
    critical: "bg-red-100 text-red-700",
  };

  return (
    <div className={`p-4 rounded-xl shadow-md border ${statusStyles[status]} mb-4`}>
      <h3 className="font-semibold text-gray-800">{node} - {sensor}</h3>
      <p className="text-gray-700">Tipo: {type}</p>
      <p className="text-gray-700">Valor detectado: {value}</p>
      <p className="font-semibold mt-1">Estado: {status.toUpperCase()}</p>
    </div>
  );
};

export default function Alerts() {
  // Simulación de datos
  const alerts = [
    { node: "Nodo Norte", sensor: "Temperatura", type: "Exceso", value: 35, status: "pending" },
    { node: "Nodo Sur", sensor: "Humedad", type: "Deficiencia", value: 20, status: "resolved" },
    { node: "Nodo Este", sensor: "Temperatura", type: "Exceso", value: 40, status: "critical" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Alertas IoT
      </h1>
      <p className="text-gray-600 mb-6">
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
