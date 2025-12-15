// ===== NAVBAR.jsx =====
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-extrabold text-sky-600">📡 IoT Meteo</h1>

        <div className="flex gap-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `font-semibold ${isActive ? "text-sky-600" : "text-gray-600 hover:text-sky-600"}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/nodes"
            className={({ isActive }) =>
              `font-semibold ${isActive ? "text-sky-600" : "text-gray-600 hover:text-sky-600"}`
            }
          >
            Nodos
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

// ===== NODES.jsx =====
export default function Nodes() {
  const nodes = [
    {
      id: 1,
      name: "Nodo Norte",
      location: "Campo Experimental",
      status: "online",
      lastReading: "25.4 °C · 65%",
    },
    {
      id: 2,
      name: "Nodo Sur",
      location: "Invernadero",
      status: "warning",
      lastReading: "32.1 °C · 80%",
    },
    {
      id: 3,
      name: "Nodo Este",
      location: "Área de Cultivo",
      status: "offline",
      lastReading: "—",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900">📡 Nodos IoT</h1>
        <p className="text-gray-600 mt-2">
          Visualiza el estado operativo y las últimas lecturas de cada nodo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nodes.map((node) => (
          <NodeCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}

const NodeCard = ({ node }) => {
  const statusStyles = {
    online: "bg-emerald-100 text-emerald-700",
    warning: "bg-yellow-100 text-yellow-700",
    offline: "bg-red-100 text-red-700",
  };

  const statusDescription = {
    online: "Nodo funcionando correctamente.",
    warning: "Nodo activo con valores fuera del umbral.",
    offline: "Nodo sin comunicación.",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-800">{node.name}</h2>
          <div className="text-right">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${statusStyles[node.status]}`}
            >
              {node.status}
            </span>
            <p className="text-xs text-gray-400 mt-1">
              {statusDescription[node.status]}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2">📍 {node.location}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-400">Última lectura</p>
          <p className="text-lg font-semibold text-gray-700">
            {node.lastReading}
          </p>
        </div>
      </div>

      <button className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-xl transition">
        Ver detalles
      </button>
    </div>
  );
};