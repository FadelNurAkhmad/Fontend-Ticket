import type { BaseResponse } from "@/types/response";
import type { Transaction } from "./transaction.type";
import { privateInstance } from "@/lib/axios";

export const getOrders = (): Promise<BaseResponse<Transaction[]>> =>
  privateInstance.get("/customer/orders").then((res) => res.data);
