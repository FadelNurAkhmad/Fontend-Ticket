import { Badge } from "@/components/ui/badge";
import type { Genre } from "@/services/genre/genre.type";
import type { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "./ActionColumn";

export const columns: ColumnDef<Genre>[] = [
  {
    // ✅ accessorKey → berasal dari ColumnDef (tanstack/react-table)
    // Menentukan key pada object data yang akan digunakan sebagai isi kolom ini
    accessorKey: "name",

    // ✅ header → berasal dari ColumnDef
    // Menentukan judul kolom di bagian atas tabel
    header: "Genre",

    // ✅ cell → berasal dari ColumnDef
    // Parameter `row` mewakili satu baris data, dan kita akses row.original untuk mendapatkan object Genre
    // Kemudian ditampilkan dengan komponen <Badge>
    cell: ({ row }) => <Badge>{row.original.name}</Badge>,
  },
  {
    // Kolom untuk aksi (seperti edit/hapus)
    id: "actions",
    cell: ({ row }) => {
      const genre = row.original;

      return <ActionColumn id={genre._id} />;
    },
  },
];
