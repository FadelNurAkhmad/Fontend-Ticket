import axios from "axios"; // digunakan untuk melakukan HTTP request (seperti GET, POST, dll).
import { getSession } from "./utils";

// Ambil URL dasar dari environment variable VITE_API_URL. Jika tidak tersedia, gunakan string kosong
const baseUrl = import.meta.env.VITE_API_URL ?? "";

export const globalInstance = axios.create({
  baseURL: baseUrl, // prefix semua endpoint (misalnya /auth/login jadi http://localhost:3000/api)
  timeout: 3000, // request akan otomatis gagal jika lebih dari 3 detik
});

// ✅ Membuat instance axios untuk permintaan API ke backend
export const privateInstance = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
});

// Axios digunakan untuk mengambil data dari server, ditambahkan interceptor untuk menyertakan token JWT secara otomatis.
// ✅ Interceptor axios yang menambahkan Authorization header otomatis
privateInstance.interceptors.request.use((config) => {
  const session = getSession(); // ambil data session (user login)

  // tambahkan token JWT ke header jika tersedia
  config.headers.Authorization = `JWT ${session?.token}`;

  return config;
});

// config adalah Request Configuration Object milik Axios
// Saat kamu menambahkan interceptor di axios.interceptors.request.use(...),
// parameter config berisi seluruh pengaturan dari request yang akan dikirim. Ini mencakup:
// {
//   url?: string;
//   method?: Method;
//   baseURL?: string;
//   headers?: AxiosRequestHeaders;
//   params?: any;
//   data?: any;
//   timeout?: number;
//   ... (dll)
// }
