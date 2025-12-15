import { useNavigate } from "react-router-dom";

// Componente MetricCard con estilo moderno y neumorfismo
const MetricCard = ({ title, value, icon, color, highlight }) => (
  <div
    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ${
      highlight ? "border-2 border-red-500" : "border border-gray-200"
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase">{title}</h2>
      <span className={`text-3xl ${color}`}>{icon}</span>
    </div>
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
  </div>
);

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-50 p-8 space-y-10">

      {/* ===================== Encabezado ===================== */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900">
            <span className="text-sky-600">Dashboard</span> IoT
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Monitoreo en tiempo real de nodos, sensores y lecturas
          </p>
        </div>
      </div>

      {/* ===================== Métricas ===================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Nodos Activos" value="12" icon="📡" color="text-sky-600" />
        <MetricCard title="Sensores Activos" value="34" icon="🌡️" color="text-emerald-500" />
        <MetricCard title="Alertas Pendientes" value="3" icon="🚨" color="text-red-600" highlight />
        <MetricCard title="Lecturas Hoy" value="256K" icon="📊" color="text-indigo-600" />
      </div>

      {/* ===================== Cuadros clickeables ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClickableCard
          title="Estado de los Nodos"
          description="Haz clic para ver todos los nodos, su estado online/offline y detalles completos."
          icon="📡"
          color="text-yellow-500"
          onClick={() => navigate("/nodes")}
        />
        <ClickableCard
          title="Sensores"
          description="Haz clic para ver todos los sensores, su tipo, nodo asignado y umbrales configurables."
          icon="🌡️"
          color="text-green-500"
          onClick={() => navigate("/sensors")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClickableCard
          title="Lecturas Hoy"
          description="Haz clic para ver todas las lecturas capturadas hoy por tus sensores."
          icon="📈"
          color="text-indigo-500"
          onClick={() => navigate("/readings")}
        />
        <ClickableCard
          title="Alertas"
          description="Haz clic para ver todas las alertas generadas por los sensores."
          icon="🚨"
          color="text-red-500"
          onClick={() => navigate("/alerts")}
        />
      </div>

      {/* ===================== Resumen Operacional ===================== */}
      <div
        onClick={() => navigate("/summary")}
        className="bg-gradient-to-r from-indigo-100 via-sky-100 to-white rounded-2xl p-8 shadow-xl border border-gray-200 cursor-pointer hover:shadow-2xl transition transform hover:scale-105 duration-300"
      >
        <h2 className="text-2xl font-bold mb-3 text-gray-900">Resumen Operacional</h2>
        <p className="text-gray-600 leading-relaxed">
          Visualiza tendencias climáticas, detecta alertas tempranas y supervisa el estado de tus nodos IoT.
          Esta plataforma está diseñada para apoyar la toma de decisiones en entornos agrícolas y académicos.
        </p>
      </div>
    </div>
  );
}

// Componente reutilizable para los cuadros clickeables
const ClickableCard = ({ title, description, icon, color, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 cursor-pointer hover:shadow-2xl transition transform hover:scale-105 duration-300"
  >
    <h2 className={`text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-2`}>
      <span className={`text-3xl ${color}`}>{icon}</span> {title}
    </h2>
    <p className="text-gray-500">{description}</p>
  </div>
);
