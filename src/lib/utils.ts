import type { LoginResponse } from "@/services/auth/auth.type";
import { clsx, type ClassValue } from "clsx";
import secureLocalStorage from "react-secure-storage";
import { twMerge } from "tailwind-merge";

export const SESSION_KEY = "SESSION_KEY";

type Session = Pick<LoginResponse, "email" | "name" | "photoUrl" | "role">;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSession() {
  const session = secureLocalStorage.getItem(SESSION_KEY) as Session;

  if (!session) {
    return;
  }

  return {
    email: session?.email,
    name: session?.name,
    role: session?.role,
    photoUrl: session?.photoUrl,
  };
}
