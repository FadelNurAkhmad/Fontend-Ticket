// Mengimpor komponen UI seperti Button, Card, dan Input dari library internal
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import secureLocalStorage from "react-secure-storage";
import { SESSION_KEY } from "@/lib/utils";

// Mengimpor schema validasi login dan tipe data LoginValues
import {
  login,
  loginSchema,
  type LoginValues,
} from "@/services/auth/auth.service";

// Mengimpor resolver untuk menghubungkan Zod ke React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

// Mengimpor useForm dari React Hook Form untuk mengatur kontrol form
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  // Inisialisasi form dengan useForm
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema), // 🔍 `resolver` digunakan untuk menghubungkan schema validasi Zod
    // 🧾 `defaultValues` menentukan nilai awal dari field input
    defaultValues: {
      email: "", // Email default kosong
      password: "", // Password default kosong
      role: "admin", // Role default diset ke "admin"
    },
  });

  // useMutation Hook dari TanStack React Query untuk operasi POST/PUT/DELETE.
  // data: LoginValues	Objek yang dikirim dari form: { email, password, role }.
  // mutationFn	Property konfigurasi React Query
  // mutationFn: login(data) Fungsi yang dikirim ke API server
  // (data) => login(data) : Callback function yang menerima data dari mutateAsync(data)
  // data	Adalah nilai (val) yang kamu kirim saat submit form
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data: LoginValues) => login(data), // << data === val
  });

  // Fungsi yang dijalankan saat form disubmit
  // val bertipe LoginValues (email, password, role)
  const navigate = useNavigate();

  const onSubmit = async (val: LoginValues) => {
    // val = isi form yang sudah divalidasi oleh zod
    try {
      const response = await mutateAsync(val); // << KAMU yang passing "val" ke mutateAsync

      secureLocalStorage.setItem(SESSION_KEY, response.data);

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  // Mengembalikan UI halaman login
  return (
    // Komponen Form sebagai wrapper dari react-hook-form
    // Bungkus form dalam komponen <Form> dan sebarkan semua properti `form` (seperti control, handleSubmit, dsb)
    <Form {...form}>
      {/* Form utama, ketika disubmit maka akan memicu handleSubmit dan menjalankan onSubmit */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto max-w-sm w-full">
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  {/* FormField menghubungkan input ke react-hook-form */}
                  <FormField
                    control={form.control} // Dipakai oleh useForm React Hook Form untuk tracking dan validasi
                    name="email" // nama field yang dipantau, Nama field (harus cocok dengan schema/type)
                    // Fungsi render UI + logika binding
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email..."
                            {...field} // Menyambungkan input ke handler react-hook-form
                          />
                        </FormControl>
                        {/* tampilkan error jika validasi gagal */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter password..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    isLoading={isPending}
                    type="submit"
                    className="w-full"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </Form>
  );
}

// render={({ field }) => ( ... )}
// Bagian ini memberikan field, yang berisi:
// {
//   name: "email",                  // Nama field
//   value: string,                  // Nilai saat ini
//   onChange: fn,                   // Fungsi untuk menangani perubahan input
//   onBlur: fn,                     // Fungsi untuk handle blur
//   ref: fn                         // Ref untuk input (digunakan React Hook Form)
// }

// useForm() mengembalikan sebuah object berisi banyak properti penting, seperti:
// {
//   control,
//   handleSubmit,
//   register,
//   setValue,
//   getValues,
//   formState,
//   resolver,
//   defaultValues
//   ...dll
// }
