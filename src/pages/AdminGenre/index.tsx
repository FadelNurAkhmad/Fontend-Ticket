import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import { Plus } from "lucide-react";
import TitleHeading from "@/components/TitleHeading";
import { DataTable } from "@/components/ui/data-table";
import type { Genre } from "@/services/genre/genre.type";

export default function AdminGenre() {
  // ✅ Mengambil data genre hasil dari loader route (via useLoaderData)
  const genres = useLoaderData() as Genre[];
  return (
    <>
      {/* Judul halaman */}
      <TitleHeading title="List Genre" />

      <div>
        {/* Tombol untuk tambah data genre */}
        <Button asChild className="mb-3">
          <Link to="/admin/genres/create">
            <Plus className="w-4 h-4 mr-2" />
            Add Data
          </Link>
        </Button>

        {/* Tabel data genre dengan struktur kolom dan data genre */}
        <DataTable columns={columns} data={genres} />
      </div>
    </>
  );
}
