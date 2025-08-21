import { StrictMode } from "react"; // Mengimpor React StrictMode untuk validasi tambahan di dev mode
import { createRoot } from "react-dom/client"; // createRoot untuk membuat root React di DOM (React 18+)
import { RouterProvider } from "react-router-dom"; // RouterProvider adalah komponen pembungkus untuk menerapkan routing
import router from "./router/index.tsx"; // Mengimpor router yang sudah didefinisikan
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // React Query untuk data fetching
import { Provider } from "react-redux"; // Provider Redux untuk global state
import store from "./redux/store.ts"; // Store Redux yang sudah dibuat

import "./index.css"; // Import CSS global

const queryClient = new QueryClient();

// Render aplikasi ke elemen HTML dengan id "root"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provider Redux agar state bisa digunakan di seluruh komponen */}
    <Provider store={store}>
      {/* Provider React Query agar bisa akses query & mutation */}
      <QueryClientProvider client={queryClient}>
        {/* Menyediakan router ke seluruh aplikasi */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
