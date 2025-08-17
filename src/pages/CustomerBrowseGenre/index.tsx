import { useState } from "react";
import SheetFilter from "./SheetFilter";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function CustomerBrowseGenre() {
  const [show, setShowFilter] = useState<boolean>(false);
  return (
    <div
      id="Content-Container"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-[linear-gradient(90deg,_#000000_40.82%,_#0E0E24_99.88%)] overflow-x-hidden text-white"
    >
      <div
        id="Top-Nav"
        className="relative flex items-center justify-between px-5 mt-[60px]"
      >
        <a
          href="discover.html"
          className="w-12 h-12 flex shrink-0 items-center justify-center bg-[#FFFFFF1A] backdrop-blur-md rounded-full"
        >
          <img
            src="/assets/images/icons/arrow-left.svg"
            className="w-[22px] h-[22px] flex shrink-0"
            alt=""
          />
        </a>
        <p className="text-center mx-auto font-semibold text-sm">Asian Genre</p>
        <div className="dummy-button w-12"></div>
      </div>
      <section className="flex items-center gap-3 flex-wrap px-5 mt-5">
        <p className="font-semibold">Filters</p>
        <a href="browse-genre.html" className="card">
          <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">
            Asian
          </div>
        </a>
        <a href="browse-genre.html" className="card">
          <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">
            Jakarta
          </div>
        </a>
        <a href="browse-genre.html" className="card">
          <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">
            XXI Premiere
          </div>
        </a>
      </section>
      <section id="Popular" className="flex flex-col gap-4 mt-5">
        <h2 className="font-semibold px-5">Popular Movies in Asian</h2>
        <div className="swiper-popular w-full overflow-hidden">
          <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="details.html" className="card">
                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                  <img
                    src="/assets/images/thumbnails/th5.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                  <div className="absolute w-full bottom-0 p-[14px] z-10">
                    <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                      <img
                        src="/assets/images/icons/video-vertical-white.svg"
                        className="w-8 h-8 flex shrink-0"
                        alt="icon"
                      />
                      <div className="flex flex-col gap-[2px]">
                        <p className="text-sm">Business</p>
                        <h3 className="font-semibold">Metaverse World</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="details.html" className="card">
                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                  <img
                    src="/assets/images/thumbnails/th1.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                  <div className="absolute w-full bottom-0 p-[14px] z-10">
                    <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                      <img
                        src="/assets/images/icons/video-vertical-white.svg"
                        className="w-8 h-8 flex shrink-0"
                        alt="icon"
                      />
                      <div className="flex flex-col gap-[2px]">
                        <p className="text-sm">Business</p>
                        <h3 className="font-semibold">Metaverse World</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="details.html" className="card">
                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                  <img
                    src="/assets/images/thumbnails/th2.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                  <div className="absolute w-full bottom-0 p-[14px] z-10">
                    <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                      <img
                        src="/assets/images/icons/video-vertical-white.svg"
                        className="w-8 h-8 flex shrink-0"
                        alt="icon"
                      />
                      <div className="flex flex-col gap-[2px]">
                        <p className="text-sm">Business</p>
                        <h3 className="font-semibold">Metaverse World</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide !w-fit">
              <a href="details.html" className="card">
                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                  <img
                    src="/assets/images/thumbnails/th3.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                  <div className="absolute w-full bottom-0 p-[14px] z-10">
                    <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                      <img
                        src="/assets/images/icons/video-vertical-white.svg"
                        className="w-8 h-8 flex shrink-0"
                        alt="icon"
                      />
                      <div className="flex flex-col gap-[2px]">
                        <p className="text-sm">Business</p>
                        <h3 className="font-semibold">Metaverse World</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="New-Movies" className="flex flex-col gap-4 mt-5 px-5">
        <h2 className="font-semibold">All New Movies</h2>
        <a href="details.html" className="card">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-[14px]">
              <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                <img
                  src="/assets/images/thumbnails/th3.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold line-clamp-2">
                  Despicable Mines 3
                </h3>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/video-vertical-grey.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Kids</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/location.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Jakarta</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
              <p className="font-semibold text-xs leading-[18px]">4/5</p>
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4 flex shrink-0"
                alt="star"
              />
            </div>
          </div>
        </a>
        <a href="details.html" className="card">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-[14px]">
              <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                <img
                  src="/assets/images/thumbnails/th4.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold line-clamp-2">Power of Linear</h3>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/video-vertical-grey.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Horror</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/location.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Bandung</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
              <p className="font-semibold text-xs leading-[18px]">4/5</p>
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4 flex shrink-0"
                alt="star"
              />
            </div>
          </div>
        </a>
        <a href="details.html" className="card">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-[14px]">
              <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                <img
                  src="/assets/images/thumbnails/th2.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold line-clamp-2">Avengers Kids</h3>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/video-vertical-grey.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Family</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/location.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Denpasar</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
              <p className="font-semibold text-xs leading-[18px]">4/5</p>
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4 flex shrink-0"
                alt="star"
              />
            </div>
          </div>
        </a>
        <a href="details.html" className="card">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-[14px]">
              <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                <img
                  src="/assets/images/thumbnails/th3.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold line-clamp-2">
                  Despicable Mines 3
                </h3>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/video-vertical-grey.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Kids</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/location.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Jakarta</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
              <p className="font-semibold text-xs leading-[18px]">4/5</p>
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4 flex shrink-0"
                alt="star"
              />
            </div>
          </div>
        </a>
        <a href="details.html" className="card">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-[14px]">
              <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                <img
                  src="/assets/images/thumbnails/th4.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold line-clamp-2">Power of Linear</h3>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/video-vertical-grey.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Horror</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/location.svg"
                    className="w-[18px] h-[18px] flex shrink-0"
                    alt="icon"
                  />
                  <p className="text-sm text-premiere-grey">Bandung</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
              <p className="font-semibold text-xs leading-[18px]">4/5</p>
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4 flex shrink-0"
                alt="star"
              />
            </div>
          </div>
        </a>
      </section>
      <div id="Bottom-Nav" className="relative w-full h-[123px] flex shrink-0">
        <button
          className="fixed bottom-5 left-5 right-5 flex items-center shrink-0 rounded-3xl p-3 gap-3 h-12 bg-[#FFFFFF33] overflow-hidden transition-all duration-300 bg-black invert w-fit pr-4 mx-auto"
          type="button"
          onClick={() => {
            setShowFilter(true);

            const body = document.getElementsByTagName("body")[0];

            body.classList.toggle("overflow-hidden");
          }}
        >
          <img
            src="/assets/images/icons/video-vertical-white.svg"
            className="w-6 h-6 flex shrink-0"
            alt="icon"
          />
          <p className="font-semibold text-sm text-white">Filter Movies</p>
        </button>
      </div>
      <SheetFilter
        onCancel={() => setShowFilter(false)}
        setShow={() => setShowFilter(true)}
        show={show}
      />
    </div>
  );
}
