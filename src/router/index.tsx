import { createBrowserRouter } from "react-router-dom"; // Mengimpor fungsi untuk membuat router browser
import adminRoutes from "./adminRoutes"; // Mengimpor rute admin yang sudah didefinisikan
import customerRoutes from "./customerRoutes";

// Membuat router utama berbasis browser dengan daftar rute yang digabung
const router = createBrowserRouter([...adminRoutes, ...customerRoutes]); // spread agar bisa digabung dengan rute lain

// Mengekspor router agar bisa digunakan di entry point React
export default router;
