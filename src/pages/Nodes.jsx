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
    <div className="min-h-screen bg-gray-950 p-6 space-y-8 text-gray-100">
      <div>
        <h1 className="text-4xl font-extrabold text-white">📡 Nodos IoT</h1>
        <p className="text-gray-400 mt-2">
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
    online: "bg-emerald-900 text-emerald-300 border-emerald-700",
    warning: "bg-yellow-900 text-yellow-300 border-yellow-700",
    offline: "bg-red-900 text-red-300 border-red-700",
  };

  const statusDescription = {
    online: "Nodo funcionando correctamente.",
    warning: "Nodo activo con valores fuera del umbral.",
    offline: "Nodo sin comunicación.",
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-700 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-white">{node.name}</h2>
          <div className="text-right">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${statusStyles[node.status]}`}
            >
              {node.status}
            </span>
            <p className="text-xs text-gray-400 mt-1">
              {statusDescription[node.status]}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-2">📍 {node.location}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-500">Última lectura</p>
          <p className="text-lg font-semibold text-gray-200">
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
