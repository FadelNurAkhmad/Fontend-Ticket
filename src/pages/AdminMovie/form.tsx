import type { Genre } from "@/services/genre/genre.type";
import {
  createMovie,
  movieSchema,
  type MovieValues,
  updateMovie,
} from "@/services/movie/movie.service";
import type { Movie } from "@/services/movie/movie.type";
import type { Theater } from "@/services/theater/theater.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TitleHeading from "@/components/TitleHeading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Save } from "lucide-react";

type LoaderData = {
  genres: Genre[]; // List semua genre
  theaters: Theater[]; // List semua bioskop/theater
  detail: Movie | null; // Data film yang akan diedit (null jika create)
};

// const updateMovieSchema = movieSchema.partial({ thumbnail: true });

export default function AdminMovieForm() {
  const { detail, genres, theaters } = useLoaderData() as LoaderData; // Ambil data dari loader

  //   console.log(detail);

  // Inisialisasi React Hook Form
  const form = useForm<MovieValues>({
    resolver: zodResolver(movieSchema), // validasi menggunakan Zod
    defaultValues: {
      // name: detail?.name,
      theaters: detail === null ? [] : detail?.theaters?.map((val) => val._id),
      title: detail?.title,
      available: detail?.available,
      bonus: detail?.bonus,
      genre: detail?.genre?._id,
      description: detail?.description,
      price: detail?.price ? detail.price.toString() : undefined,
    },
  });

  // Inisialisasi Mutasi Create/Update
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data: FormData) =>
      detail === null
        ? createMovie(data) // jika belum ada detail (create baru)
        : updateMovie(data, detail?._id), // jika ada (update data lama)
  });

  // ✅ Mengamati (subscribe) nilai terkini dari field "theaters" di form.
  //    Field ini diasumsikan bertipe array of string: string[]
  //    Contoh nilainya: ["theater1", "theater2"]
  const selectedTheaters = form.watch("theaters");

  // ✅ Fungsi ini akan dipanggil ketika user memilih / menambahkan theater baru
  // val: ID dari teater yang dipilih (contoh: "abc123")
  const handleChangeTheater = (val: string) => {
    // Cek apakah ID theater belum ada di daftar (hindari duplikat)
    if (!selectedTheaters.includes(val)) {
      const newTheaters = [...selectedTheaters, val];

      // Tambahkan ID theater baru ke array
      form.setValue("theaters", newTheaters);
      // -> `form.setValue()` adalah API dari React Hook Form untuk memodifikasi nilai field secara manual
    }
  };

  // ✅ Fungsi ini dipanggil saat user ingin menghapus theater dari daftar pilihan
  // val: ID dari teater yang ingin dihapus (contoh: "abc123")
  const handleRemoveTheater = (val: string) => {
    // Filter / hapus theater tersebut dari array yang sedang terpilih
    const updatedTheaters = selectedTheaters.filter((item) => item !== val);

    // Simpan perubahan ke form
    form.setValue("theaters", updatedTheaters);
  };

  const navigate = useNavigate();

  const onSubmit = async (val: MovieValues) => {
    try {
      // await mutateAsync(val);

      const formData = new FormData(); // Karena mengirim file (thumbnail)

      // Tambahkan data ke FormData (semua field form)
      formData.append("available", val.available ? "1" : "0");

      formData.append("genre", val.genre);
      formData.append("theaters", val.theaters.join(","));
      formData.append("title", val.title);
      formData.append("price", val.price.toString());

      if (val?.thumbnail) {
        formData.append("thumbnail", val.thumbnail);
      }

      if (val.description) {
        formData.append("description", val.description);
      }

      if (val.bonus) {
        formData.append("bonus", val.bonus);
      }

      await mutateAsync(formData); // Kirim ke server

      navigate("/admin/movies"); // Redirect ke halaman lis

      toast.success(
        `Movie data successfully ${detail === null ? "created" : "updated"}`
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <TitleHeading
        title={`${detail === null ? "Create" : "Update"} data movie`}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-1/2"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files) {
                        form.setValue("thumbnail", e.target.files[0]);
                      }
                    }}
                    placeholder="Enter name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="Number"
                    placeholder="Enter price..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select movie genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {genres.map((val) => (
                      <SelectItem key={`${val._id}`} value={val._id}>
                        {val.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="theaters"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theaters</FormLabel>
                <Select onValueChange={handleChangeTheater}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select movie theaters" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {theaters.map((val) => (
                      <SelectItem key={`${val._id}`} value={val._id}>
                        {val.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedTheaters?.length > 0 && (
                  <div className="inline-flex items-center space-x-2">
                    {selectedTheaters.map((item, i) => (
                      <Badge
                        onClick={() => handleRemoveTheater(item)}
                        key={`${item + i}`}
                      >
                        {theaters.find((val) => val._id === item)?.name}
                      </Badge>
                    ))}
                  </div>
                )}

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bonus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bonus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter bonus from buy ticket..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Showing Now</FormLabel>
                    </div>
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button isLoading={isPending}>
            <Save className="w-4 h-4 mr-2" />
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
