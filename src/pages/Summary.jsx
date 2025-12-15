import React from "react";

// Componente de tarjeta de resumen
const SummaryCard = ({ title, value, icon, color }) => (
  <div className={`bg-white shadow-md rounded-xl p-6 flex items-center justify-between ${color}`}>
    <div>
      <h3 className="text-gray-500 font-semibold">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
    <span className="text-4xl">{icon}</span>
  </div>
);

export default function Summary() {
  // Simulación de métricas basadas en lecturas
  const metrics = [
    { title: "Hoy", value: "1,234", icon: "📅", color: "border-l-4 border-blue-500" },
    { title: "Semana", value: "8,765", icon: "📆", color: "border-l-4 border-green-500" },
    { title: "Mes", value: "34,567", icon: "🗓️", color: "border-l-4 border-indigo-500" },
    { title: "Año", value: "412,345", icon: "📊", color: "border-l-4 border-yellow-500" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Resumen Operacional</h1>
      <p className="text-gray-600 mb-4">
        Aquí se muestran los datos agregados de tus nodos y sensores, segmentados por día, semana, mes y año.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <SummaryCard key={index} {...metric} />
        ))}
      </div>

      {/* Aquí podrías añadir gráficos o tablas de tendencias */}
      <div className="bg-white shadow-xl rounded-xl p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Tendencias de Lecturas</h2>
        <p className="text-gray-600">Gráficos de tendencias diarias, semanales, mensuales y anuales de temperatura, humedad y otras variables.</p>
        {/* Integrar librerías como Chart.js o Recharts para gráficos */}
      </div>
    </div>
  );
}
