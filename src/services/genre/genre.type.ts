// ✅ Definisi tipe data genre, sesuai struktur dari backend
export interface Genre {
  _id: string; // ID unik genre
  name: string; // Nama genre (misalnya: Action, Drama)
  createdAt: string;
  updatedAt: string;
  movies: string[]; // Array ID movie yang termasuk dalam genre ini
}
