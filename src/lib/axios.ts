import axios from "axios"; // digunakan untuk melakukan HTTP request (seperti GET, POST, dll).

// Ambil URL dasar dari environment variable VITE_API_URL. Jika tidak tersedia, gunakan string kosong
const baseUrl = import.meta.env.VITE_API_URL ?? "";

export const globalInstance = axios.create({
  baseURL: baseUrl, // prefix semua endpoint (misalnya /auth/login jadi http://localhost:3000/api)
  timeout: 3000, // request akan otomatis gagal jika lebih dari 3 detik
});
