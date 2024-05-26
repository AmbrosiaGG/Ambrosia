import Image from "next/image";
import "../globals.css";
import blogkittty from "../public/blog_bg_kitty.jpg";
import WordPullUp from "../components/word-pull-up";
import ShimmerButton from "../components/shimmer-button";
import { BorderBeam } from "../components/border-beam";

export default function DashboardHome() {
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

      <main id="content">
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
                Dashboard
              </a>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a
                className="inline-flex items-center gap-x-2 hover:text-ctp-text/75 transition-all"
                href="#"
              >
                Ambrosia Domains
              </a>
            </div>
            <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a
                className="inline-flex items-center gap-x-2 hover:text-ctp-text/75 transition-all"
                href="#"
              >
                Deploys
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

        <div className="max-w-7xl min-h-[75rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Total Deployments
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hide hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:show opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Number of Deployments
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      1
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Servers
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
                          The number of Servers
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      1
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Networking In
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Network In
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      500GB
                    </h3>
                    <span className="flex items-center gap-x-1 text-ctp-red">
                      <svg
                        className="inline-block size-4 self-center"
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
                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                        <polyline points="16 17 22 17 22 11" />
                      </svg>
                      <span className="inline-block text-sm">15.2GB Less</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Networking Out
                    </p>
                    <div className="hs-tooltip inline-block [--placement:right]'">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700">
                          The number of daily users
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      549GB
                    </h3>
                    <span className="flex items-center gap-x-1 text-ctp-red">
                      <svg
                        className="inline-block size-4 self-center"
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
                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                        <polyline points="16 17 22 17 22 11" />
                      </svg>
                      <span className="inline-block text-sm"> 142GB Less </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Shared Disk
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hide hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:show opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
                          How much shared GB of disk you use
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      130 / ∞ 
                    </h3>
                  </div>
                </div>
              </div>
                          
             <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Total Shared VCPUS
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hide hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:show opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Number of Virtual CPU's
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      8 / ∞ 
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border shadow-sm rounded-xl bg-ctp-surface0 border-ctp-surface1">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-ctp-subtext0">
                      Total Disk By Images
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg
                          className="flex-shrink-0 size-4 text-ctp-subtext1"
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                        <span
                          className="hide hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:show opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Number of GiB's by docker images/vms
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-ctp-text">
                      1
                    </h3>
                  </div>
                </div>
              </div>

            </div>

            <div className="max-w-[85rem]">
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle">
                    <div className="bg-ctp-surface0 border border-ctp-surface1 rounded-xl shadow-sm overflow-hidden">
                      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-ctp-surface0">
                        <div>
                          <h2 className="text-xl font-semibold text-ctp-text">
                            Deployments
                          </h2>
                          <p className="text-sm text-ctp-subtext0">
                            All ambrosa-cloud deployments
                          </p>
                        </div>

                        <div>
                          <div className="inline-flex gap-x-2">
                            <a
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-ctp-surface1 text-ctp-text hover:bg-ctp-surface1/55 border-ctp-surface2 transition-all disabled:opacity-50 disabled:pointer-events-none"
                              href="#"
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
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                              </svg>
                              Create
                            </a>
                          </div>
                        </div>
                      </div>

                      <table className="min-w-full divide-y divide-ctp-surface1">
                        <thead className="bg-ctp-surface0">
                          <tr>
                            <th scope="col" className="ps-6 py-3 text-start">
                              <label className="flex">
                                <input
                                  type="checkbox"
                                  className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                  id="hs-at-with-checkboxes-main"
                                />
                                <span className="sr-only">Checkbox</span>
                              </label>
                            </th>

                            <th scope="col" className="px-6 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-ctp-subtext0">
                                  Name
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-ctp-subtext0">
                                  Creator
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-ctp-subtext0">
                                  Image
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-ctp-subtext0">
                                  Type
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-ctp-subtext0">
                                  Created
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-ctp-subtext0">
                                  status
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-end"></th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-ctp-surface1">
                          <tr>
                            <td className="size-px whitespace-nowrap">
                              <div className="ps-6 py-3">
                                <label className="flex">
                                  <input
                                    type="checkbox"
                                    className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    id="hs-at-with-checkboxes-1"
                                  />
                                  <span className="sr-only">Checkbox</span>
                                </label>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Ambrosia
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="inline-block size-6 rounded-full"
                                    src="https://cdn.discordapp.com/avatars/845312519001342052/ad209fd629974989e27ce2ac4f51a97f.png?size=2048"
                                    alt="Image Description"
                                  />
                                  <div className="grow">
                                    <span className="text-sm text-ctp-subtext0">
                                      Duckey
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-blue underline hover:font-semibold transition-all">
                                  Debian Bookworm
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Dedicated
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Jan 1, 1970
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-ctp-teal text-ctp-base rounded-full">
                                  <svg
                                    className="size-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  Online
                                </span>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-1.5">
                                <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                  <button
                                    id="hs-table-dropdown-1"
                                    type="button"
                                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-ctp-subtext1 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
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
                                      <circle cx="12" cy="12" r="1" />
                                      <circle cx="19" cy="12" r="1" />
                                      <circle cx="5" cy="12" r="1" />
                                    </svg>
                                  </button>
                                  <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-ctp-surface1 min-w-40 z-10 bg-ctp-surface0 shadow-2xl rounded-lg p-2 mt-2"
                                    aria-labelledby="hs-table-dropdown-1"
                                  >
                                    <div className="py-2 first:pt-0 last:pb-0">
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Rename
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Regenrate Key
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Disable
                                      </a>
                                    </div>
                                    <div className="py-2 first:pt-0 last:pb-0">
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="size-px whitespace-nowrap">
                              <div className="ps-6 py-3">
                                <label className="flex">
                                  <input
                                    type="checkbox"
                                    className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    id="hs-at-with-checkboxes-1"
                                  />
                                  <span className="sr-only">Checkbox</span>
                                </label>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Ambrosia Contained
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="inline-block size-6 rounded-full"
                                    src="https://cdn.discordapp.com/avatars/845312519001342052/ad209fd629974989e27ce2ac4f51a97f.png?size=2048"
                                    alt="Image Description"
                                  />
                                  <div className="grow">
                                    <span className="text-sm text-ctp-subtext0">
                                      Duckey
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-blue underline hover:font-semibold transition-all">
                                  ambrosia-cloud:novle
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Container
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Jan 1, 1970
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-ctp-red text-ctp-base rounded-full">
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                  Errored
                                </span>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-1.5">
                                <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                  <button
                                    id="hs-table-dropdown-1"
                                    type="button"
                                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-ctp-subtext1 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
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
                                      <circle cx="12" cy="12" r="1" />
                                      <circle cx="19" cy="12" r="1" />
                                      <circle cx="5" cy="12" r="1" />
                                    </svg>
                                  </button>
                                  <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-ctp-surface1 min-w-40 z-10 bg-ctp-surface0 shadow-2xl rounded-lg p-2 mt-2"
                                    aria-labelledby="hs-table-dropdown-1"
                                  >
                                    <div className="py-2 first:pt-0 last:pb-0">
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Rename
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Regenrate Key
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Disable
                                      </a>
                                    </div>
                                    <div className="py-2 first:pt-0 last:pb-0">
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="size-px whitespace-nowrap">
                              <div className="ps-6 py-3">
                                <label className="flex">
                                  <input
                                    type="checkbox"
                                    className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    id="hs-at-with-checkboxes-1"
                                  />
                                  <span className="sr-only">Checkbox</span>
                                </label>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Ambrosia VM
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="inline-block size-6 rounded-full"
                                    src="https://cdn.discordapp.com/avatars/845312519001342052/ad209fd629974989e27ce2ac4f51a97f.png?size=2048"
                                    alt="Image Description"
                                  />
                                  <div className="grow">
                                    <span className="text-sm text-ctp-subtext0">
                                      Duckey
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-blue underline hover:font-semibold transition-all">
                                  Ubuntu Server 24.04
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  VM
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-ctp-subtext0">
                                  Jan 1, 1970
                                </span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-ctp-teal text-ctp-base rounded-full">
                                  <svg
                                    className="size-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  Online
                                </span>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-1.5">
                                <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                  <button
                                    id="hs-table-dropdown-1"
                                    type="button"
                                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-ctp-subtext1 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
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
                                      <circle cx="12" cy="12" r="1" />
                                      <circle cx="19" cy="12" r="1" />
                                      <circle cx="5" cy="12" r="1" />
                                    </svg>
                                  </button>
                                  <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-ctp-surface1 min-w-40 z-10 bg-ctp-surface0 shadow-2xl rounded-lg p-2 mt-2"
                                    aria-labelledby="hs-table-dropdown-1"
                                  >
                                    <div className="py-2 first:pt-0 last:pb-0">
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Rename
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Regenrate Key
                                      </a>
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-ctp-subtext0 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Disable
                                      </a>
                                    </div>
                                    <div className="py-2 first:pt-0 last:pb-0">
                                      <a
                                        className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-ctp-surface1 focus:ring-2 focus:ring-blue-500"
                                        href="#"
                                      >
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
