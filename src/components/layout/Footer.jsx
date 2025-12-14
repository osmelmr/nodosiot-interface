// src/components/layout/Footer.jsx

const Footer = () => {
  return (
    // Clases de Tailwind: Color de fondo, color de texto, padding, y centrado.
    // **IMPORTANTE:** Eliminamos 'position: fixed' y 'bottom: 0'.
    <footer 
      className="
        bg-gray-800 
        text-white 
        py-4 px-8 // Padding vertical y horizontal
        text-center 
        w-full // Asegura que ocupe todo el ancho disponible
        shadow-inner // Sombra sutil en la parte superior
      "
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mi Proyecto Web. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;