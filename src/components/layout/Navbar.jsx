// src/components/layout/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';

// Recibimos la función toggleSidebar como prop
const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Limpieza del token (ejemplo)
    // localStorage.removeItem('token');
    
    // 2. Redirección a la ruta de Login, que es "/"
    navigate("/");
  };
  
  return (
    <nav style={{ 
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      
      {/* Contenedor del Botón y el Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Botón para ocultar/desocultar el sidebar */}
        <button 
          onClick={toggleSidebar} 
          style={{
            background: 'none',
            border: '1px solid white',
            color: 'white',
            padding: '5px 10px',
            cursor: 'pointer',
            marginRight: '15px'
          }}
        >
          ☰ Menú
        </button>
        
        {/* Logo/Título */}
        <div style={{ fontSize: '1.5em' }}>
          Mi App
        </div>
      </div>

      {/* Enlaces de Navegación y Botón de Logout */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        {/* 🚨 Enlaces de Navegación solicitados (Home, Acerca, Contacto) */}
        <Link to="/home" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
        <Link to="/sensors" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Sensores</Link>
        <Link to="/alerts" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Alertas</Link>
        {/* Botón de Cerrar Sesión */}
        <button
          onClick={handleLogout}
          style={{
            marginLeft: '20px',
            background: '#ff4d4d',
            border: 'none',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;