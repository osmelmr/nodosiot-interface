import { Link } from 'react-router-dom';

const linkBaseClasses = 
  "flex items-center p-3 rounded-lg text-gray-700 font-medium transition-colors duration-200";


const SidebarLink = ({ to, children }) => {
  return (
    <li className="mb-1">
      <Link 
        to={to} 
        className={`${linkBaseClasses} hover:bg-gray-100`} 
      >
        {children}
      </Link>
    </li>
  );
};

const Sidebar = ({ isOpen }) => { 
  return (
    <div 
      className={`
        
        flex-shrink-0
        z-50 overflow-y-auto 
        h-full
        bg-white border-r border-gray-200 shadow-xl 
        
        w-[250px]
        
        
        ${isOpen ? '' : 'hidden '}
      `}
    >
      <h3 className="mt-0 mb-5 pl-4 text-lg font-semibold text-gray-600">
        Navegación
      </h3>
      
      <ul className="list-none p-0 px-2"> 
        <SidebarLink to="/home">🏠 <span className="ml-3">Inicio</span></SidebarLink>
        <SidebarLink to="/dashboard">📊 <span className="ml-3">Dashboard</span></SidebarLink>
        <SidebarLink to="/about">ℹ️ <span className="ml-3">Acerca de</span></SidebarLink>
        <SidebarLink to="/contact">📞 <span className="ml-3">Contacto</span></SidebarLink>
      </ul>
    </div>
  );
};

export default Sidebar;