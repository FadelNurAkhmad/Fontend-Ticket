import type { BaseResponse } from "@/types/response";
import { z } from "zod";
import type { LoginResponse } from "./auth.type";
import { globalInstance } from "@/lib/axios";

export const authSchema = z.object({
  name: z.string().min(5), // name harus string minimal 5 karakter
  email: z.string().email(), // email valid format email
  password: z.string().min(5), // password minimal 5 karakter
  role: z.enum(["admin", "customer"]), // role harus salah satu dari: admin atau customer
});

// 👉 hapus field "role" dari authSchema
export const signUpSchema = authSchema.omit({ role: true }).extend({
  photo: z.any().refine(
    (file: File) => file?.name, // mengembalikan true jika file.name ada, artinya file valid sudah dipilih
    { message: "Photo is required" }
  ),
});

// schema login dari authSchema, tapi menghilangkan name.
export const loginSchema = authSchema.omit({ name: true });

// type → lebih fleksibel, cocok untuk union/intersection atau kombinasi kompleks
export type LoginValues = z.infer<typeof loginSchema>; //  Mengubah schema Zod jadi TypeScript type otomatis.
export type RegisterValues = z.infer<typeof signUpSchema>;

// Fungsi login untuk mengirim data ke endpoint /auth/login
export const login = async (
  data: LoginValues // Data yang dikirim bertipe LoginValues
): Promise<BaseResponse<LoginResponse>> => // Mengembalikan promise berisi BaseResponse<LoginResponse>
  globalInstance
    .post("/auth/login", data) // Kirim POST request ke /auth/login dengan body `data`
    .then((res) => res.data); // Ambil hanya response data-nya (tanpa headers, status, dll)

export const signUp = async (data: FormData) =>
  globalInstance.post("/auth/register", data).then((res) => res.data);
