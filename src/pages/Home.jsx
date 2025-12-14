export default function Home() {
  return (
    // Contenedor principal con fondo suave
    <div className="space-y-8 bg-gray-50 p-4 min-h-full"> 
      
      {/* Encabezado */}
      <h1 className="text-3xl font-extrabold text-gray-900 border-b pb-2">
        <span className="text-indigo-600">Dashboard</span> IoT
      </h1>
      <p className="text-lg text-gray-600">
        Bienvenido a la Plataforma. Monitorea tus nodos y sensores en tiempo real.
      </p>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Nodos Activos */}
        <MetricCard 
          title="Nodos Activos" 
          value="12" 
          icon="📡" 
          color="text-indigo-600" 
        />

        {/* Card 2: Sensores Activos */}
        <MetricCard 
          title="Sensores Activos" 
          value="34" 
          icon="🌡️" 
          color="text-green-600" 
        />

        {/* Card 3: Alertas Pendientes (Destacada en rojo) */}
        <MetricCard 
          title="Alertas Pendientes" 
          value="3" 
          icon="🚨" 
          color="text-red-600" 
          highlight={true}
        />

        {/* Card 4: Lecturas Hoy */}
        <MetricCard 
          title="Lecturas Hoy" 
          value="256K" // Leve cambio para hacerlo más IoT
          icon="📈" 
          color="text-blue-600" 
        />
      </div>

      {/* Sección de resumen principal */}
      <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2 text-yellow-600">⭐️</span> Resumen Operacional
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Esta es la sección principal donde se integrarán los elementos visuales más críticos,
          como gráficos de tendencias en tiempo real, mapas de nodos y la lista de alertas más recientes.
          Un diseño limpio y una paleta de colores coherente aquí reducirán la carga cognitiva del usuario.
        </p>
      </div>
    </div>
  );
}

// 📌 Componente de Tarjeta de Métrica Reutilizable (Definición auxiliar)
const MetricCard = ({ title, value, icon, color, highlight }) => (
  <div 
    className={`
      bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]
      ${highlight ? 'border-2 border-red-500' : 'border border-gray-100'}
    `}
  >
    <div className="flex justify-between items-start mb-2">
        <h2 className="text-gray-500 text-sm font-semibold uppercase">{title}</h2>
        <span className={`text-2xl ${color}`}>{icon}</span>
    </div>
    <p className={`text-4xl font-extrabold ${color}`}>{value}</p>
  </div>
);