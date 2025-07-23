import TitleHeading from "@/components/TitleHeading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { columns } from "./column";
import type { Theater } from "@/services/theater/theater.type";

export default function AdminTheater() {
  // ✅ Mengambil data Theater hasil dari loader route (via useLoaderData)
  const theaters = useLoaderData() as Theater[];

  return (
    <>
      {/* Judul halaman */}
      <TitleHeading title="List Theater" />

      <div>
        {/* Tombol untuk tambah data theater */}
        <Button asChild className="mb-3">
          <Link to="/admin/theaters/create">
            <Plus className="w-4 h-4 mr-2" />
            Add Data
          </Link>
        </Button>

        {/* Tabel theaters Theater dengan struktur kolom dan data theater */}
        <DataTable columns={columns} data={theaters} />
      </div>
    </>
  );
}
