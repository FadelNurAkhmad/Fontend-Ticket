import type { LoginResponse } from "@/services/auth/auth.type";
import { clsx, type ClassValue } from "clsx";
import secureLocalStorage from "react-secure-storage";
import { twMerge } from "tailwind-merge";

// Menentukan key tetap untuk penyimpanan session user
export const SESSION_KEY = "SESSION_KEY";
// Array berisi daftar lokasi kota untuk dropdown pilihan
export const LOCATION_OPTIONS = [
  "Jakarta",
  "Bandung",
  "Semarang",
  "Yogyakarta",
];

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

export function rupiahFormat(val: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", // Menentukan gaya format sebagai 'currency' (mata uang)
    currency: "IDR", // Menentukan mata uang yang digunakan adalah Rupiah (IDR)
    // Jumlah digit desimal minimum = 0
    // Artinya, tidak akan ada angka di belakang koma jika tidak diperlukan
    minimumFractionDigits: 0,
    // Jumlah digit desimal maksimum = 0
    // Artinya, hasil akhir akan dibulatkan tanpa desimal
    maximumFractionDigits: 0,
  }).format(val); // Memformat nilai numerik menjadi string berformat Rupiah
}

// Intl.NumberFormat: adalah API bawaan JavaScript untuk memformat angka berdasarkan locale atau wilayah tertentu.
// "id-ID": kode locale untuk Indonesia.
// "currency" + "IDR": memberitahu bahwa angka harus diformat sebagai mata uang Indonesia (Rupiah).
// format(val): fungsi akhir yang akan mengubah angka menjadi string sesuai pengaturan di atas
