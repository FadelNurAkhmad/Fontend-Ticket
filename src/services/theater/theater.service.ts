import type { BaseResponse } from "@/types/response";
import { privateInstance } from "@/lib/axios";
import { z } from "zod";
import type { Theater } from "./theater.type";

export const theaterSchema = z.object({
  name: z.string().min(3),
  city: z.string({ message: "Please select a theater city location" }),
});

export type TheaterValues = z.infer<typeof theaterSchema>;

// ✅ Fungsi untuk mengambil semua data Theater dari endpoint "/admin/theaters"
// Response API diasumsikan dalam bentuk BaseResponse<Theater[]>
export const getTheaters = (): Promise<BaseResponse<Theater[]>> =>
  privateInstance
    .get("/admin/theaters") // kirim GET request
    .then((res) => res.data); // ambil isi data dari response

export const createTheater = (data: TheaterValues) =>
  privateInstance.post("/admin/theaters", data).then((res) => res.data);

export const getDetailTheater = (id: string): Promise<BaseResponse<Theater>> =>
  privateInstance.get(`/admin/theaters/${id}`).then((res) => res.data);

export const updateTheater = (data: TheaterValues, id: string) =>
  privateInstance.put(`/admin/theaters/${id}`, data).then((res) => res.data);

export const deleteTheater = (id: string) =>
  privateInstance.delete(`/admin/theaters/${id}`).then((res) => res.data);
