import type { BaseResponse } from "@/types/response";
import type { Genre } from "./genre.type";
import { privateInstance } from "@/lib/axios";

// ✅ Fungsi untuk mengambil semua data genre dari endpoint "/admin/genres"
// Response API diasumsikan dalam bentuk BaseResponse<Genre[]>
export const getGenres = (): Promise<BaseResponse<Genre[]>> =>
  privateInstance
    .get("/admin/genres") // kirim GET request
    .then((res) => res.data); // ambil isi data dari response
