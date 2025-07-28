import { redirect, type RouteObject } from "react-router-dom"; // Mengimpor tipe untuk mendefinisikan rute dari react-router-dom
import AdminLoginPage from "../pages/AdminLoginPage"; // Mengimpor komponen halaman login admin
import AdminOverview from "@/pages/AdminOverview";
import AdminLayout from "@/components/AdminLayout";
import { getSession } from "@/lib/utils";
import AdminGenre from "@/pages/AdminGenre";
import { getDetailGenre, getGenres } from "@/services/genre/genre.service";
import AdminGenreForm from "@/pages/AdminGenre/form";
import AdminTheater from "@/pages/AdminTheater";
import {
  getDetailTheater,
  getTheaters,
} from "@/services/theater/theater.service";
import AdminTheaterForm from "@/pages/AdminTheater/form";
import AdminMovie from "@/pages/AdminMovie";
import { getDetailMovie, getMovies } from "@/services/movie/movie.service";
import AdminMovieForm from "@/pages/AdminMovie/form";
// import { getMovies } from "@/services/movie/movie.service";

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
      {
        path: "/admin/genres/create",
        element: <AdminGenreForm />,
      },
      {
        path: "/admin/genres/edit/:id",
        loader: async ({ params }) => {
          if (!params.id) {
            throw redirect("/admin/genres");
          }

          const detail = await getDetailGenre(params.id);

          return detail.data;
        },
        element: <AdminGenreForm />,
      },
      {
        path: "/admin/theaters",
        loader: async () => {
          const theaters = await getTheaters();

          return theaters.data;
        },
        element: <AdminTheater />,
      },
      {
        path: "/admin/theaters/create",
        element: <AdminTheaterForm />,
      },
      {
        path: "/admin/theaters/edit/:id",
        loader: async ({ params }) => {
          if (!params.id) {
            throw redirect("/admin/theaters");
          }

          const detail = await getDetailTheater(params.id);

          return detail.data;
        },
        element: <AdminTheaterForm />,
      },
      {
        path: "/admin/movies",
        loader: async () => {
          const movies = await getMovies();

          return movies.data;
        },
        element: <AdminMovie />,
      },
      {
        path: "/admin/movies/create",
        // loader : Mengambil genres & theaters dari API
        // Ini adalah fungsi khusus yang disediakan oleh React Router v6.4+ (dengan data routers).
        // Fungsi ini akan dijalankan sebelum komponen dirender.
        loader: async () => {
          const genres = await getGenres();
          const theaters = await getTheaters();

          return {
            genres: genres.data, // daftar genre untuk pilihan
            theaters: theaters.data, // daftar theater untuk pilihan
            detail: null, // tidak ada data film karena ini form "create"
          };
        },
        element: <AdminMovieForm />,
      },
      {
        path: "/admin/movies/edit/:id",
        loader: async ({ params }) => {
          if (!params.id) {
            throw redirect("/admin/movies");
          }

          const genres = await getGenres();
          const theaters = await getTheaters();
          const detail = await getDetailMovie(params.id);

          return {
            genres: genres.data,
            theaters: theaters.data,
            detail: detail.data,
          };
        },
        element: <AdminMovieForm />,
      },
    ],
  },
];

// Mengekspor daftar rute agar bisa digunakan di router utama
export default adminRoutes;
