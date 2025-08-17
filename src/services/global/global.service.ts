import type { BaseResponse } from "@/types/response";
import type { Movie, MovieExplore } from "./global.type";
import { privateInstance } from "@/lib/axios";
import type { Genre } from "../genre/genre.type";

export const getMovies = async (): Promise<BaseResponse<Movie[]>> =>
  privateInstance.get("/customer/movies").then((res) => res.data);

export const getGenres = async (): Promise<
  BaseResponse<Pick<Genre, "_id" | "name">>
> => privateInstance.get("/customer/genres").then((res) => res.data);

export const getMovieByGenre = async (
  genreId: string
): Promise<BaseResponse<MovieExplore>> =>
  privateInstance
    .get(`/customer/browse-movies/${genreId}`)
    .then((res) => res.data);
