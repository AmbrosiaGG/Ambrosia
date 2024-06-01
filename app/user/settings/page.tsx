import Image from "next/image";
import blogkittty from "../../../public/blog_bg_kitty.jpg";
import WordPullUp from "../../components/word-pull-up";
import ShimmerButton from "../../components/shimmer-button";
import { BorderBeam } from "../../components/border-beam";

export default function Home() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-ctp-crust border-b border-ctp-surface1 text-sm py-2.5 sm:py-4">
        <nav
          className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="me-5 md:me-8">
            <a
              className="flex-none text-xl font-semibold baloo mt-1 text-ctp-text"
              href="#"
              aria-label="Brand"
            >
              Ambrosia
            </a>
          </div>

          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 size-[38px] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>

            <div className="sm:block">
              <label className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <svg
                    className="flex-shrink-0 size-4 text-ctp-text"
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
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 pe-4 ps-10 block w-full border-ctp-surface2 rounded-lg text-sm bg-ctp-overlay0/25 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-ctp-text/55 hover:bg-ctp-overlay0/25 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              <button
                type="button"
                className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-ctp-text/55 hover:bg-ctp-overlay0/25 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </button>

              <div
                className="hs-dropdown relative inline-flex"
                data-hs-dropdown-placement="bottom-right"
              >
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-ctp-surface1"
                    src="https://cdn.discordapp.com/avatars/845312519001342052/ad209fd629974989e27ce2ac4f51a97f.png?size=2048"
                    alt="Image Description"
                  />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 z-10 bg-ctp-surface0/55 shadow-md rounded-lg p-2 filter backdrop-blur-md"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-ctp-surface1 rounded-t-lg">
                    <p className="text-sm text-gray-300">Signed in as</p>
                    <p className="text-sm font-medium text-ctp-text">
                      duckydev@ambrosia.gg
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-ctp-text/65 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                      href="#"
                    >
                      <svg
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
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m16 16-4-4-4 4" />
                      </svg>
                      Admin
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-ctp-text/65 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                      href="#"
                    >
                      <svg
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
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                      Inbox
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-ctp-text/65 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                      href="#"
                    >
                      <svg
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
                        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                        <path d="M14 8H8" />
                        <path d="M16 12H8" />
                        <path d="M13 16H8" />
                      </svg>
                      Billing
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-ctp-text/65 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-settings"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main id="content" className="">
        <nav
          className="sticky -top-px bg-ctp-mantle text-sm font-medium text-ctp-text ring-opacity-5 border-t shadow-sm border-ctp-surface1 pt-6 md:pb-6 -mt-px"
          aria-label="Jump links"
        >
          <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
              <a
                className="inline-flex items-center gap-x-2 font-bold"
                href="#"
              >
                Home
              </a>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a
                className="inline-flex items-center gap-x-2 hover:text-ctp-text/75 transition-all"
                href="#"
              >
                Dashboard
              </a>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a
                className="inline-flex items-center gap-x-2 hover:text-ctp-text/75 transition-all"
                href="#"
              >
                Pricing (Donate)
              </a>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a
                className="inline-flex items-center gap-x-2 hover:text-ctp-text/75 transition-all"
                href="#"
              >
                Documentation
                <span className="inline bg-ctp-maroon text-xs text-gray-700 font-semibold rounded-full py-1 px-2">
                  v2
                </span>
              </a>
            </div>
          </div>
        </nav>

        <h1 className="font-calsans text-4xl text-ctp-text pt-3 pl-3">
          User Settings
        </h1>
        <div className="pl-3 mt-2 max-w-[50%]">
          
        <h1 className="font-calsans text-2xl text-ctp-text">
          Theme
        </h1>
          <select
            data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer rounded-lg text-start text-sm focus:border-ctp-surface1 focus:ring-ctp-surface1 before:absolute before:inset-0 before:z-[1] bg-ctp-surface0 border-ctp-surface1 text-ctp-text",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-ctp-surface0 border border-ctp-surface1 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500",
  "optionClasses": "py-2 px-4 w-full text-sm text-ctp-subtext0 cursor-pointer hover:bg-ctp-surface1 rounded-lg focus:outline-none focus:bg-ctp-surface2 bg-ctp-surface0 hover:bg-ctp-surface1 text-ctp-text dark:focus:bg-ctp-surface1",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-ctp-pink \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}'
            className="hidden w-[50%]"
          >
            <option value="">Choose</option>
            <option>Dark</option>
            <option>Light</option>
            <option>Carl</option>
          </select>
        </div>
      </main>
    </>
  );
}
