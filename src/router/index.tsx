import { createBrowserRouter } from "react-router-dom"; // Mengimpor fungsi untuk membuat router browser
import adminRoutes from "./adminRoutes"; // Mengimpor rute admin yang sudah didefinisikan

// Membuat router utama berbasis browser dengan daftar rute yang digabung
const router = createBrowserRouter([...adminRoutes]); // spread agar bisa digabung dengan rute lain

// Mengekspor router agar bisa digunakan di entry point React
export default router;
