// Generic type untuk membungkus response API
export type BaseResponse<T> = {
  message: string; // Pesan status dari server
  data: T; // Data payload, generic bisa tipe apapun
  status: string; // Status request: success / fail / error
};

// type BaseResponse<T>: adalah generic type untuk response API. Bisa digunakan untuk berbagai tipe data seperti:
// BaseResponse<LoginResponse>;
// BaseResponse<User[]>;
