import { Badge } from "@/components/ui/badge";
import { rupiahFormat } from "@/lib/utils";
import type { Movie } from "@/services/movie/movie.type";

// Mengimpor ColumnDef dari React Table (@tanstack/react-table)
// ColumnDef adalah tipe untuk mendefinisikan struktur kolom dalam tabel
import type { ColumnDef } from "@tanstack/react-table";
// import ActionColumn from "./ActionColumn";

export const columns: ColumnDef<Movie>[] = [
  {
    // Kolom pertama: movie detail (title dan lainnya)
    accessorKey: "title", // Nama properti utama yang dipakai untuk identifikasi data kolom
    header: "Movie Detail", // Judul kolom yang akan tampil di header tabel
    // Menentukan tampilan cell (sel) dari kolom ini secara custom
    cell: ({ row }) => {
      const movie = row.original; // row.original berisi data asli dari Movie

      return (
        <div className="inline-flex items-center gap-4">
          {/* Gambar thumbnail movie */}
          <img
            src={movie.thumbnailUrl}
            alt={movie.thumbnailUrl}
            className="w-[50px]"
          />

          {/* Informasi movie */}
          <div className="space-y-3">
            <div>
              <h4>{movie.title}</h4>
              <p>{movie.description}</p>
            </div>
            {/* Menampilkan nilai bonus */}
            <p>Bonus: {movie.bonus}</p>

            {/* Status tersedia / belum tersedia */}
            <Badge variant={movie.available ? "default" : "destructive"}>
              {movie.available ? "Live Now" : "Coming Soon"}
            </Badge>
          </div>
        </div>
      );
    },
  },
  {
    // Kolom untuk harga
    accessorKey: "price",
    header: "Price",
    // Format harga menggunakan fungsi rupiahFormat
    cell: ({ row }) => rupiahFormat(row.original.price),
  },
  {
    // Kolom untuk genre
    accessorKey: "genre",
    header: "Genre",
    // Menampilkan nama genre dalam badge
    cell: ({ row }) => (
      <Badge variant="secondary">{row.original.genre.name}</Badge>
    ),
  },
  {
    // Kolom untuk daftar bioskop (theaters) yang menayangkan film
    accessorKey: "theaters",
    header: "Theaters",
    cell: ({ row }) => {
      const movie = row.original;

      return (
        <div className="flex flex-col items-center gap-4">
          {/* Melakukan map pada array theaters */}
          {movie.theaters.map((item) => (
            // Tampilkan setiap nama bioskop dalam badge
            <Badge variant="outline" key={item._id}>
              {item.name}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    // Kolom custom tanpa accessorKey
    id: "actions", // ID custom untuk kolom (biasanya untuk tombol edit/delete)
    // Kolom ini bisa digunakan untuk komponen ActionColumn (misalnya edit/hapus)
    cell: ({ row }) => {
      const movie = row.original;

      return <div>Action</div>;
    },
  },
];
