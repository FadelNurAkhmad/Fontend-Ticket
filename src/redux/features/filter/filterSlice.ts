import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Mendefinisikan bentuk data filter yang bisa disimpan
export interface FilterState {
  availbility?: boolean; // Filter ketersediaan (misalnya film masih tayang atau tidak)
  city?: string; // Filter berdasarkan kota
  genre?: string; // Filter berdasarkan genre film
  theaters?: string[]; // Filter berdasarkan daftar bioskop
}

// Bungkus state utama agar lebih rapi
interface DataState {
  data: FilterState;
}

// State awal sebelum ada perubahan filter
const initialState: DataState = {
  data: {
    availbility: undefined,
    city: undefined,
    genre: undefined,
    theaters: undefined,
  },
};

// Membuat slice bernama "filter"
// createSlice otomatis bikin action
// Saat kita pakai createSlice, Redux Toolkit bekerja di belakang layar
// createSlice otomatis membuat action creator untuk setiap reducer yang kita definisikan.
export const filterSlice = createSlice({
  name: "filter", // Nama slice
  initialState, // State awal
  reducers: {
    // Action untuk mengubah filter
    setFilter: (state, action: PayloadAction<DataState>) => {
      // Spread operator untuk mempertahankan data lama + update data baru
      state.data = {
        ...state.data,
        ...action.payload.data,
      };
    },
  },
});

// Export action agar bisa dipakai di komponen React
// Export action (otomatis dibuat oleh createSlice)
export const { setFilter } = filterSlice.actions;

// Export reducer agar bisa dipakai di store
export default filterSlice.reducer;
