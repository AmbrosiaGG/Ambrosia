
import Image from "next/image";
import "./globals.css"
import blogkittty from "../public/blog_bg_kitty.jpg"
import WordPullUp from "./components/word-pull-up";
import ShimmerButton from "./components/shimmer-button";
import { BorderBeam } from "./components/border-beam";

export default function Home() {
  return (
    <>
     <div className="relative z-10 backdrop-filter backdrop-blur-lg mb-[10rem]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <div className="mt-5 max-w-2xl">
          <WordPullUp
      className="text-4xl font-calsans tracking-[-0.02em] text-ctp-text md:text-7xl md:leading-[5rem]"
      words="Ambrosia, a better deployment."
            />
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <a 
              className="inline-flex justify-center group items-center gap-x-3 text-center transition-all hover:duration-150 text-white text-sm font-medium rounded-md py-3 px-4 border border-ctp-surface0/30 bg-ctp-surface1/30"
              href="#"
            >
              Get started

              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-2 group-focus:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a >
            <button
              type="button"
              className="relative font-IBM group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg backdrop-filter backdrop-blur-md border border-ctp-surface0/30 bg-ctp-surface1/30 text-ctp-text shadow-sm"
            >
              $ ambrosia deploy .
              <span
                className="flex justify-center items-center rounded-md size-7 bg-ctp-surface1 text-gray-400"
              >
                <svg
                  className="flex-shrink-0 size-4 group-hover:rotate-180 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path
                    d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#f5c2e7"></stop>
            <stop offset="95%" stopColor="#f38ba8"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 L 0,125 C 87.10047846889952,138.0909090909091 174.20095693779905,151.1818181818182 263,141 C 351.79904306220095,130.8181818181818 442.2966507177034,97.36363636363635 532,79 C 621.7033492822966,60.63636363636365 710.6124401913876,57.36363636363636 822,74 C 933.3875598086124,90.63636363636364 1067.2535885167463,127.18181818181819 1174,139 C 1280.7464114832537,150.8181818181818 1360.3732057416269,137.9090909090909 1440,125 L 1440,500 L 0,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#f5c2e7"></stop>
            <stop offset="95%" stopColor="#f38ba8"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 L 0,291 C 68.63157894736838,271.066985645933 137.26315789473676,251.13397129186603 247,254 C 356.73684210526324,256.86602870813397 507.57894736842115,282.5311004784689 607,276 C 706.4210526315788,269.4688995215311 754.4210526315788,230.7416267942584 828,231 C 901.5789473684212,231.2583732057416 1000.7368421052631,270.5023923444976 1107,287 C 1213.2631578947369,303.4976076555024 1326.6315789473683,297.2488038277512 1440,291 L 1440,500 L 0,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        <a
          className="group flex gap-y-6 size-full hover:bg-ctp-surface0 rounded-lg p-5 transition-all"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-8 text-ctp-maroon mt-0.5 me-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            />
          </svg>

          <div>
            <div>
              <h3 className="block font-bold text-ctp-text">Build your app</h3>
              <p className="text-ctp-text/65">
                The simplest way to host, deploy, monitor.
              </p>
            </div>

            <p
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-ctp-blue group-hover:underline transition-all"
            >
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-2 group-focus:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a
          className="group flex gap-y-6 size-full hover:bg-ctp-surface0 rounded-lg p-5 transition-all"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-8 text-ctp-maroon mt-0.5 me-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
            />
          </svg>
          <div>
            <div>
              <h3 className="block font-bold text-ctp-text">Monitor</h3>
              <p className="text-ctp-text/65">
                Get notifications about your app when ever theres an issue :D
              </p>
            </div>

            <p
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-ctp-blue group-hover:underline transition-all"
            >
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-2 group-focus:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a
          className="group flex gap-y-6 size-full hover:bg-ctp-surface0 rounded-lg p-5 transition-all"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-8 text-ctp-maroon mt-0.5 me-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
            />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
          </svg>

          <div>
            <div>
              <h3 className="block font-bold text-ctp-text">Deploy</h3>
              <p className="text-ctp-text/65">
                Deploy the best of the best web apps with Ambrosia :&gt;
              </p>
            </div>

            <p
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-ctp-blue group-hover:underline transition-all"
            >
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-2 group-focus:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>
      </div>
    </div>

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
       <a className="group relative block rounded-xl" href="#">
        <div
          className="relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-gray-900/70 before:backdrop-filter before:backdrop-blur-xs"
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={blogkittty}
            width={1000}
            height={1000}
            alt="Image Description"
          />
        </div>

        <div className="absolute top-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="w-[46px] h-[46px] border-2 border-white rounded-full"
                  src="https://cdn.discordapp.com/avatars/845312519001342052/ad209fd629974989e27ce2ac4f51a97f.png?size=2048"
                  alt="Image Description"
                  width={46}
                  height={46}
                />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-white">Ducky</h4>
                <p className="text-xs text-white/80">Jan 1, 1970</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="flex flex-col h-full p-4 sm:p-6">
            <h3
              className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80"
            >
              Ambrosia
            </h3>
            <p className="mt-2 text-white/80">
              Its out now!
            </p>
          </div>
        </div>
      </a>

        <a className="group relative block rounded-xl" href="#">
          <div
            className="relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-gray-900/70 before:backdrop-filter before:backdrop-blur-xs"
          >
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src={blogkittty}
              alt="Image Description"
              width={1000}
              height={1000}
            />
          </div>

          <div className="absolute top-0 inset-x-0 z-10">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="w-[46px] h-[46px] border-2 border-white rounded-full"
                    src="https://cdn.discordapp.com/avatars/845312519001342052/ad209fd629974989e27ce2ac4f51a97f.png?size=2048"
                    alt="Image Description"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="ms-2.5 sm:ms-4">
                  <h4 className="font-semibold text-white">Ducky</h4>
                  <p className="text-xs text-white/80">Jan 1, 1970</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3
                className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80"
              >
                Ambrosia Cloud Playground!
              </h3>
              <p className="mt-2 text-white/80">
                Its out now!
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    </>
  );
}
