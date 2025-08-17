import { cn } from "@/lib/utils";

interface SheetFilterProps {
  onCancel: () => void;
  show: boolean;
  setShow: () => void;
}

export default function SheetFilter({
  onCancel,
  //   setShow,
  show,
}: SheetFilterProps) {
  return (
    <div className="filter-sidebar-container relative w-full">
      <div
        id="Filter-Sidebar"
        className={cn(
          "fixed top-0 left-full flex h-screen w-full max-w-[640px] bg-black/70 z-50 transition-all duration-1000",
          show ? "!left-auto" : "left-full"
        )}
      >
        <button
          type="button"
          onClick={() => {
            const body = document.getElementsByTagName("body")[0];

            body.classList.toggle("overflow-hidden");
          }}
          className="w-full h-full"
        />
        <div className="flex flex-col w-full h-full max-w-[320px] shrink-0 bg-white overflow-y-scroll">
          <div className="relative flex items-center justify-between px-5 mt-[60px]">
            <button
              type="button"
              onClick={() => {
                onCancel();

                const body = document.getElementsByTagName("body")[0];

                body.classList.toggle("overflow-hidden");
              }}
              className="w-12 h-12 flex shrink-0 items-center justify-center bg-[#0101011A] backdrop-blur-md rounded-full"
            >
              <img
                src="/assets/images/icons/arrow-left.svg"
                className="w-[22px] h-[22px] flex shrink-0 invert"
                alt=""
              />
            </button>
            <p className="text-center mx-auto font-semibold text-sm text-black">
              Filter Movies
            </p>
            <div className="dummy-button w-12"></div>
          </div>
          <form
            action="browse-genre.html"
            className="flex flex-col gap-[30px] px-5 mt-[30px] mb-[110px]"
          >
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-black">Genre</p>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="genre"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Asian</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="genre"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Horror</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="genre"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Business</p>
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-black">City</p>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="city"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Jakarta</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="city"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Bogor</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="city"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Denpasar</p>
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-black">Theater</p>
              <label className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  name="city"
                  id=""
                  className="w-5 h-5 rounded-xl border-2 border-premiere-purple text-premiere-purple focus:ring-premiere-purple ring-premiere-purple transition-all duration-300"
                />
                <p className="font-semibold text-black">XXI Premiere</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  name="city"
                  id=""
                  className="w-5 h-5 rounded-xl border-2 border-premiere-purple text-premiere-purple focus:ring-premiere-purple ring-premiere-purple transition-all duration-300"
                />
                <p className="font-semibold text-black">CGV Cinema</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  name="city"
                  id=""
                  className="w-5 h-5 rounded-xl border-2 border-premiere-purple text-premiere-purple focus:ring-premiere-purple ring-premiere-purple transition-all duration-300"
                />
                <p className="font-semibold text-black">Angga Park</p>
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-black">Availability</p>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="availability"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Available Now</p>
              </label>
              <label className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="availability"
                  id=""
                  className="w-5 h-5 rounded-full 
             border-2 border-premiere-purple 
             checked:bg-premiere-purple checked:border-premiere-purple 
             transition-all duration-300"
                />
                <p className="font-semibold text-black">Coming Soon</p>
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-full p-[12px_18px] bg-[#5236FF] text-white font-bold text-center"
            >
              Show 1893 Movies
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
