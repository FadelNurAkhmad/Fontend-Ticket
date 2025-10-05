import type { MovieDetail } from "@/services/global/global.type";
import type { Theater } from "@/services/theater/theater.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Ticket = {
  theater?: Theater;
  time?: string;
  seat?: string[];
};

export interface TicketState {
  step?: "DETAIL" | "THEATER" | "TIME" | "SEAT"; // → posisi user dalam flow booking (DETAIL → THEATER → TIME → SEAT).
  detail?: Ticket | null;
  movie?: MovieDetail | null;
}

// Saat aplikasi pertama kali jalan:
const initialState: TicketState = {
  step: "DETAIL",
  detail: null,
  movie: null,
};

export const ticketSlice = createSlice({
  name: "ticket", // name: "ticket" → nama slice, otomatis dipakai jadi prefix action (misalnya ticket/setStep).
  initialState, // initialState → state awal.
  // reducers → daftar fungsi untuk mengubah state.
  reducers: {
    // mengubah step (misalnya dari "DETAIL" ke "THEATER")
    setStep: (state, action: PayloadAction<TicketState>) => {
      state.step = action.payload.step;
    },
    // menambahkan atau mengupdate detail tiket.
    setTicketDetail: (state, action: PayloadAction<Ticket>) => {
      state.detail = {
        ...state.detail,
        ...action.payload,
      };
    },
    // menyimpan detail film ke state.
    setMovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      state.movie = action.payload;
    },
  },
});

// otomatis dibuat oleh Redux Toolkit dari daftar reducer.
export const { setMovieDetail, setStep, setTicketDetail } = ticketSlice.actions;

// ungsi reducer untuk dimasukkan ke configureStore.
export default ticketSlice.reducer;
