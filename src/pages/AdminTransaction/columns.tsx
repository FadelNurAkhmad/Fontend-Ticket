import { Badge } from "@/components/ui/badge";
import { dateFormat, rupiahFormat } from "@/lib/utils";
import type { Transaction } from "@/services/customer/customer.type";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Transaction>[] = [
  // ColumnDef<Transaction>: Menyatakan bahwa setiap baris (row) adalah objek Transaction.
  {
    accessorKey: "createdAt",
    header: "Transaction date",
    cell: ({ row }) => dateFormat(row.original.createdAt),
    // Setiap kolom mengambil data dari row.original, yaitu objek Transaction yang utuh.
  },
  {
    accessorKey: "subtotal",
    header: "Subtotal",
    cell: ({ row }) => rupiahFormat(row.original.subtotal),
  },
  {
    accessorKey: "bookingFee",
    header: "Booking Fee",
    cell: ({ row }) => rupiahFormat(row.original.bookingFee),
  },
  {
    accessorKey: "tax",
    header: "Tax",
    cell: ({ row }) => rupiahFormat(row.original.tax),
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => rupiahFormat(row.original.total),
  },
  {
    accessorKey: "movie",
    header: "Movie",
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <div>
          <h3 className="mb-2">{transaction.movie.title}</h3>
          <Badge variant="secondary">{transaction.theater.name}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "user",
    header: "Customer",
    cell: ({ row }) => row.original.user.name,
  },
];

// transactions sekarang berisi array objek Transaction, misalnya:
// [
//   {
//     _id: "abc123",
//     subtotal: 50000,
//     bookingFee: 5000,
//     tax: 5000,
//     total: 60000,
//     user: { name: "Fadel" },
//     movie: { title: "Inception" },
//     theater: { name: "CGV Grand" },
//     createdAt: "2025-07-29T10:00:00.000Z",
//     updatedAt: ...
//   },
//   ...
// ]
