import type { BaseResponse } from "@/types/response";
import type { User } from "./customer.type";
import { privateInstance } from "@/lib/axios";

export const getCustomers = (): Promise<BaseResponse<User[]>> =>
  privateInstance.get("/admin/customers").then((res) => res.data);
