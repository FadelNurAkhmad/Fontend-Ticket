// Interface untuk response login dari server
export interface LoginResponse {
  // interface → untuk struktur data berbentuk objek
  name: string; // Nama user
  email: string; // Email user
  role: string; // Role user, misal: admin / customer
  photoUrl: string; // URL foto profil
  token: string; // JWT token yang diberikan oleh server
}
