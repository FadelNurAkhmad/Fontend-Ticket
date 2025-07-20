import { redirect, type RouteObject } from "react-router-dom"; // Mengimpor tipe untuk mendefinisikan rute dari react-router-dom
import AdminLoginPage from "../pages/AdminLoginPage"; // Mengimpor komponen halaman login admin
import AdminOverview from "@/pages/AdminOverview";
import AdminLayout from "@/components/AdminLayout";
import { getSession } from "@/lib/utils";
import AdminGenre from "@/pages/AdminGenre";
import { getGenres } from "@/services/genre/genre.service";

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
    element: <AdminLayout />,
    loader: () => {
      const user = getSession();

      if (!user || user?.role !== "admin") {
        throw redirect("/admin/login");
      }

      return user;
    },
    children: [
      {
        index: true,
        element: <AdminOverview />,
      },
      {
        path: "/admin/genres",
        loader: async () => {
          // ✅ Saat route ini diakses, jalankan loader
          const genres = await getGenres(); // ambil data genre dari API

          return genres.data; // hanya kembalikan array genre-nya (bukan metadata response)
        },
        element: <AdminGenre />,
      },
    ],
  },
];

// Mengekspor daftar rute agar bisa digunakan di router utama
export default adminRoutes;
