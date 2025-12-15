// src/components/layout/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={toggleSidebar}
          style={{
            background: "none",
            border: "1px solid white",
            color: "white",
            padding: "5px 10px",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          ☰ Menú
        </button>
        <div style={{ fontSize: "1.5em" }}>Mi App</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        <Link
          to="/home"
          style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/sensors"
          style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
        >
          Sensores
        </Link>
        <Link
          to="/alerts"
          style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
        >
          Alertas
        </Link>

        {user ? (
          <div style={{ marginLeft: "20px" }}>
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "none",
                border: "1px solid white",
                color: "white",
                padding: "8px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Mi Cuenta ▾
            </button>
            {open && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  marginTop: "5px",
                  backgroundColor: "#444",
                  borderRadius: "4px",
                  padding: "10px",
                  minWidth: "200px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                <p style={{ margin: "5px 0", color: "white" }}>
                  <strong>Email:</strong> {user.email}
                </p>
                <p style={{ margin: "5px 0", color: "white" }}>
                  <strong>Rol:</strong> {user.role}
                </p>
                <button
                  onClick={handleLogout}
                  style={{
                    marginTop: "10px",
                    background: "#ff4d4d",
                    border: "none",
                    color: "white",
                    padding: "8px 15px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/"
            style={{
              marginLeft: "20px",
              background: "#4CAF50",
              border: "none",
              color: "white",
              padding: "8px 15px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
