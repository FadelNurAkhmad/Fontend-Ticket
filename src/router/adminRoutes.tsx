import type { RouteObject } from "react-router-dom"; // Mengimpor tipe untuk mendefinisikan rute dari react-router-dom
import AdminLoginPage from "../pages/AdminLoginPage"; // Mengimpor komponen halaman login admin

// Mendefinisikan daftar rute yang berkaitan dengan admin
// adminRoutes adalah sebuah array (daftar) dari rute, dan
// tiap item dalam array harus mengikuti bentuk RouteObject
// Ini membantu TypeScript untuk memvalidasi struktur data kita agar sesuai dengan yang diharapkan oleh React Router.
const adminRoutes: RouteObject[] = [
  {
    // Rute untuk halaman login admin
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    // Rute untuk halaman utama admin (sementara hanya teks)
    path: "/admin",
    element: "Admin Page",
  },
];

// Mengekspor daftar rute agar bisa digunakan di router utama
export default adminRoutes;
