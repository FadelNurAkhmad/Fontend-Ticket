import React, { useCallback, useState } from "react";

import "../../customer.css";
import { useLoaderData } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import type { LoaderData } from ".";
import { cn } from "@/lib/utils";

export default function SelectSeat() {
  const { detail } = useLoaderData() as LoaderData;
  const dispatch = useAppDispatch();

  const [selectedSeats, setSeats] = useState<string[]>([]);

  const handleSelectSeat = (seat: string) => {
    // if (isBooked(seat)) {
    // }

    if (selectedSeats.find((va) => va === seat)) {
      const updatedSeats = selectedSeats.filter((va) => va !== seat);

      setSeats(updatedSeats);

      return;
    }

    setSeats((prev) => [...prev, seat]);
  };

  return (
    <div
      id="Content-Container"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-[linear-gradient(179.86deg,_#000000_40.82%,_#0E0E24_99.88%)] overflow-x-hidden text-white"
    >
      <div id="Header" className="relative flex flex-col h-[257px] gap-5">
        <div id="screen-container" className="absolute bottom-0 w-full z-0">
          <img
            src="/assets/images/backgrounds/screen-light.svg"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[70%] left-1/2"
            alt="image"
          />
          <div id="Screen" className="relative flex h-[197px] overflow-hidden">
            <img
              src="/assets/images/thumbnails/th3.png"
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
          <p className="font-semibold text-sm w-fit transform -translate-x-1/2 -translate-y-1/2 absolute bottom-8 left-1/2">
            SCREEN
          </p>
        </div>
        <div
          id="Top-Nav"
          className="relative flex items-center justify-between px-5 mt-[60px]"
        >
          <a
            href="choose-time.html"
            className="w-12 h-12 flex shrink-0 items-center justify-center bg-[#FFFFFF1A] backdrop-blur-md rounded-full"
          >
            <img
              src="/assets/images/icons/arrow-left.svg"
              className="w-[22px] h-[22px] flex shrink-0"
              alt=""
            />
          </a>
          <p className="text-center mx-auto font-semibold text-sm">
            Choose Your Seats
          </p>
          <div className="dummy-button w-12" />
        </div>
      </div>
      <form action="tickets-payment.html" className="relative px-5 mt-5">
        <div
          id="Seats-Options"
          className="grid grid-cols-5 w-full max-w-[280px] mx-auto gap-x-[20px] gap-y-[30px]"
        >
          <label className="group relative flex w-10 h-[38px] shrink-0 has-[:disabled]:brightness-50">
            <input
              type="checkbox"
              name="seat"
              className="seat-checkbox absolute top-1/2 left-1/2 opacity-0"
              disabled
            />
            <img
              src="/assets/images/icons/seat.svg"
              className="absolute w-full h-full object-contain opacity-100 group-has-[:checked]:opacity-0 transition-all duration-300"
              alt="seat"
            />
            <img
              src="/assets/images/icons/seat-choosed.svg"
              className="absolute w-full h-full object-contain opacity-0 group-has-[:checked]:opacity-100 transition-all duration-300"
              alt="seat"
            />
            <p className="relative flex items-center justify-center h-full w-full pb-[6px] font-semibold text-xs leading-[18px] text-black group-has-[:checked]:text-white">
              A1
            </p>
          </label>
          {detail.seats.map((item, i) => (
            <button
              type="button"
              onClick={() => handleSelectSeat(item.seat)}
              key={`${item.seat + i}`}
              className="group relative flex w-10 h-[38px] shrink-0 has-[:disabled]:brightness-50"
            >
              <input
                type="checkbox"
                name="seat"
                className="seat-checkbox absolute top-1/2 left-1/2 opacity-0"
              />
              <img
                src="/assets/images/icons/seat.svg"
                className={cn(
                  "absolute w-full h-full object-contain opacity-100 group-has-[:checked]:opacity-0 transition-all duration-300",
                  selectedSeats.find((va) => va === item.seat)
                    ? "opacity-0"
                    : ""
                )}
                alt="seat"
              />
              <img
                src="/assets/images/icons/seat-choosed.svg"
                className={cn(
                  "absolute w-full h-full object-contain opacity-0 group-has-[:checked]:opacity-100 transition-all duration-300",
                  selectedSeats.find((va) => va === item.seat)
                    ? "opacity-100"
                    : ""
                )}
                alt="seat"
              />
              <p
                className={cn(
                  "relative flex items-center justify-center h-full w-full pb-[6px] font-semibold text-xs leading-[18px] text-black group-has-[:checked]:text-white",
                  selectedSeats.find((va) => va === item.seat)
                    ? "text-white"
                    : ""
                )}
              >
                {item.seat}
              </p>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center mt-[30px] gap-5">
          <div className="flex items-center gap-[6px]">
            <span className="w-4 h-4 flex shrink-0 rounded-[6px] bg-white" />
            <span className="font-semibold text-xs leading-[18px]">
              Available
            </span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="w-4 h-4 flex shrink-0 rounded-[6px] bg-white brightness-50" />
            <span className="font-semibold text-xs leading-[18px]">Booked</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="w-4 h-4 flex shrink-0 rounded-[6px] bg-purple-700" />
            <span className="font-semibold text-xs leading-[18px]">
              Selected
            </span>
          </div>
        </div>
        <div
          id="Bottom-Nav"
          className="relative w-full h-[123px] flex shrink-0"
        >
          <div className="fixed bottom-5 left-5 right-5 w-full max-w-[330px] mx-auto flex items-center justify-between rounded-full p-[10px_14px] pl-6 gap-[14px] bg-[#FFFFFF33] z-20 backdrop-blur-md">
            <div>
              <p id="price" className="font-semibold text-xl leading-[30px]">
                Rp 0{" "}
              </p>
              <span id="person" className="font-normal text-sm mt-[2px]">
                - orang
              </span>
            </div>
            <button
              type="submit"
              className="rounded-full p-[12px_18px] bg-white font-bold text-black"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
