import type { LoginResponse } from "@/services/auth/auth.type";
import { clsx, type ClassValue } from "clsx";
import secureLocalStorage from "react-secure-storage";
import { twMerge } from "tailwind-merge";

// Menentukan key tetap untuk penyimpanan session user
export const SESSION_KEY = "SESSION_KEY";

// Fungsi utilitas cn untuk menggabungkan class Tailwind CSS secara dinamis dan rapi
// Digunakan ketika ingin menggabungkan beberapa className dalam komponen React
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Gabungkan dengan clsx lalu bersihkan konflik dengan twMerge
}

// Fungsi untuk mengambil data session user dari secureLocalStorage
export function getSession() {
  // Ambil data dari secureLocalStorage berdasarkan key yang sudah ditentukan
  // Kita asumsikan bahwa hasilnya memiliki struktur sesuai tipe LoginResponse
  const session = secureLocalStorage.getItem(SESSION_KEY) as LoginResponse;

  // Jika data session tidak ditemukan (misal belum login), hentikan fungsi dan kembalikan undefined
  if (!session) {
    return;
  }

  // Jika ada session, kembalikan data yang dibutuhkan dalam bentuk object
  return session;
}
