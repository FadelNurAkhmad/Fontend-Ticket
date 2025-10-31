import type { Seat } from "../global/global.type";
import type { Movie } from "../movie/movie.type";
import type { Theater } from "../theater/theater.type";

// Membuat tipe baru "MovieTransaction" yang hanya mengambil
// beberapa properti tertentu dari tipe Movie.
// "Pick" adalah utility type bawaan TypeScript untuk mengambil subset properti dari tipe lain.
type MovieTransaction = Pick<
  Movie,
  "title" | "genre" | "thumbnail" | "thumbnailUrl" | "price" | "bonus"
>;
// Jadi MovieTransaction hanya berisi properti:
// title, genre, thumbnail, thumbnailUrl, price, dan bonus
// dari tipe Movie aslinya.

export interface Transaction {
  _id: string;
  movie: MovieTransaction;
  theater: Pick<Theater, "name" | "city">; // Properti theater hanya mengambil field "name" dan "city" dari tipe Theater
  date: string;
  seats: Pick<Seat, "seat">[];
  subtotal: number;
  total: number;
  tax: number;
  bookingFee: number;
}
