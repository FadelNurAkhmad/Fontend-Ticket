import { StrictMode } from "react"; // Mengimpor React StrictMode untuk validasi tambahan di dev mode
import { createRoot } from "react-dom/client"; // createRoot untuk membuat root React di DOM (React 18+)
import { RouterProvider } from "react-router-dom"; // RouterProvider adalah komponen pembungkus untuk menerapkan routing
import router from "./router/index.tsx"; // Mengimpor router yang sudah didefinisikan

import "./index.css"; // Import CSS global

// Render aplikasi ke elemen HTML dengan id "root"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Menyediakan router ke seluruh aplikasi */}
    <RouterProvider router={router} />
  </StrictMode>
);
