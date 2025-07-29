import TitleHeading from "@/components/TitleHeading";
import { DataTable } from "@/components/ui/data-table";
import { useLoaderData } from "react-router-dom";
import type { User } from "@/services/customer/customer.type";
import { columns } from "./columns";

export default function AdminCustomer() {
  const customers = useLoaderData() as User[];

  return (
    <>
      <TitleHeading title="List Customers" />
      <div>
        <DataTable columns={columns} data={customers} />
      </div>
    </>
  );
}
