import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useAuth } from "../auth/AuthContext";

// ✅ Esquema con email y password
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Contraseña requerida"),
});

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // React Hook Form con Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // React Query mutation
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch("http://127.0.0.1:8000/api/v1/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Credenciales inválidas");
      return res.json();
    },
    onSuccess: (data) => {
      login(data);
      navigate("/home");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white">
          Plataforma Meteorológica
        </h1>
        <p className="text-center text-gray-400 text-sm mb-6">
          Visualización de variables climáticas
        </p>

        {mutation.isError && (
          <div className="bg-red-900 text-red-300 p-3 rounded-lg mb-4 text-center text-sm border border-red-700">
            {mutation.error.message}
          </div>
        )}

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            disabled={mutation.isLoading}
            className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition shadow-lg"
          >
            {mutation.isLoading ? "Entrando..." : "Entrar al sistema"}
          </button>
        </form>
      </div>
    </div>
  );
}
