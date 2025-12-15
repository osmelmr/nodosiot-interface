import React, { useState, useEffect } from "react";

// Datos de ejemplo, luego puedes reemplazar con API real
const sampleReadings = [
  { id: 1, node: "Nodo Norte", sensor: "Temperatura", value: 28.4, unit: "°C", timestamp: "2025-12-14 08:15" },
  { id: 2, node: "Nodo Sur", sensor: "Humedad", value: 65, unit: "%", timestamp: "2025-12-14 08:20" },
  { id: 3, node: "Nodo Este", sensor: "Luminosidad", value: 520, unit: "lux", timestamp: "2025-12-14 08:25" },
];

export default function Readings() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    // Aquí se podría hacer fetch a tu API real
    setReadings(sampleReadings);
  }, []);

  return (
    <div className="p-6 min-h-full bg-gradient-to-br from-slate-50 to-sky-50 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">📊 Lecturas de Hoy</h1>
      <p className="text-gray-600">Visualiza todas las lecturas capturadas por tus sensores hoy.</p>

      {/* Tabla de lecturas */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-sky-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Nodo</th>
              <th className="py-3 px-4 text-left">Sensor</th>
              <th className="py-3 px-4 text-left">Valor</th>
              <th className="py-3 px-4 text-left">Unidad</th>
              <th className="py-3 px-4 text-left">Hora</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{r.node}</td>
                <td className="py-3 px-4">{r.sensor}</td>
                <td className="py-3 px-4 font-semibold">{r.value}</td>
                <td className="py-3 px-4">{r.unit}</td>
                <td className="py-3 px-4">{r.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
