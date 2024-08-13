/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./sidebarlinkgroup";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden  duration-300 ease-linear bg-white lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center gap-x-2 pr-4 pt-19.5 pl-28.75">
        <Link href="/">
          <Image width={68} height={84} src={"/logo.png"} alt="Logo" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http:/ /www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-79.5">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-4">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="flex flex-col pt-4">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  href="/"
                  className={`group relative flex items-center gap-x-4  gap-y-5 pl-6 hover:pl-4.5  active:pl-4.5 py-4  pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger hover:border-l-primary hover:border-l-2 active:border-l-2 dark:hover:bg-meta-2 ${
                    pathname.includes("dashboard") && "bg-white dark:bg-meta-2"
                  }`}
                >
                  <Image
                    src={"/icon/layout-dashboard.svg"}
                    alt="dashbord"
                    width={24}
                    height={24}
                  />
                  Dashboard
                </Link>
              </li>

              {/* <!-- Menu Item Dashboard --> */}

              {/* VOD Management */}

              <SidebarLinkGroup
                activeCondition={
                  pathname === "/videos" || pathname.includes("videos")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`overflow-hidden group relative flex items-center gap-x-5 py-4 pl-6  hover:pl-4.5 font-medium text-black duration-300 ease-in-out bg-white hover:text-danger hover:bg-hovor hover:border-l-2 hover:border-l-primary  ${
                          (pathname === "/videos" ||
                            pathname.includes("videos")) &&
                          "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Image
                          src={"/icon/clapperboard.svg"}
                          alt="cliperboard"
                          width={24}
                          height={24}
                        />
                        VOD Management
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="py-4 flex flex-col">
                          <li>
                            <Link
                              href="/videos/videolist"
                              className={`first-letter:group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out  hover:bg-hovor  hover:text-danger dark:hover:bg-meta-2 ${
                                pathname === "/videos/videolist" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Videos
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/videos/caterory"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/videos/caterory" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/videos/sub-caterory"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/videos/sub-caterory" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Sub-Category
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/videos/tag"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/videos/tag" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Tag
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/videos/upload-videos"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/videos/upload-videos" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Upload Videos
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Menu Item Khobordin --> */}
              <li>
                <Link
                  href="/khobordin"
                  className={`group relative flex items-center gap-x-4  py-4 pl-6 hover:pl-4.5  font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger hover:border-l-primary hover:border-l-2 bg-white ${
                    pathname.includes("khobordin") &&
                    "active : text-danger active:bg-hovor active:border-l-primary active:border-2 active:pl-4.5"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Icon/newspaper" opacity="0.5">
                      <path
                        id="Vector"
                        d="M4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4V20C6 20.5304 5.78929 21.0391 5.41421 21.4142C5.03914 21.7893 4.53043 22 4 22ZM4 22C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V11C2 9.9 2.9 9 4 9H6"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M18 14H10"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M15 18H10"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_4"
                        d="M10 6H18V10H10V6Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  Khobor Din
                </Link>
              </li>

              {/* <!-- Menu Item Playlist --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/playlist" || pathname.includes("playlist")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`overflow-hidden group relative flex items-center gap-x-5 py-4 pl-6 hover:pl-4.5 font-medium text-black duration-300 ease-in-out bg-white hover:text-danger hover:bg-hovor hover:border-l-2 hover:border-l-primary  ${
                          (pathname === "/playlist" ||
                            pathname.includes("playlist")) &&
                          "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Icon/list-plus" opacity="0.5">
                            <path
                              id="Vector"
                              d="M11 12H3"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M16 6H3"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M16 18H3"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_4"
                              d="M18 9V15"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_5"
                              d="M21 12H15"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                        Playlist???
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="py-4 flex flex-col">
                          <li>
                            <Link
                              href="/playlist/Create Playlist"
                              className={`first-letter:group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out  hover:bg-hovor  hover:text-danger dark:hover:bg-meta-2 ${
                                pathname === "/playlist/Create Playlist" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Create Playlist
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/playlist/PlayList"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/playlist/PlayList" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              PlayList
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Lives */}

              <SidebarLinkGroup
                activeCondition={
                  pathname === "/lives" || pathname.includes("lives")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`overflow-hidden group relative flex items-center gap-x-5 py-4 pl-6  hover:pl-4.5 font-medium text-black duration-300 ease-in-out bg-white hover:text-danger hover:bg-hovor hover:border-l-2 hover:border-l-primary  ${
                          (pathname === "/lives" ||
                            pathname.includes("lives")) &&
                          "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Image
                          id="live-tv"
                          width={24}
                          height={24}
                          src={"/icon/live_tv.svg"}
                          alt="live-tv"
                        />
                        Live
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="py-4 flex flex-col">
                          <li>
                            <Link
                              href="/lives/AllLivelist"
                              className={`first-letter:group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out  hover:bg-hovor  hover:text-danger dark:hover:bg-meta-2 ${
                                pathname === "/lives/AllLivelist" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              All Live List
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/lives/AiMuhurte"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/lives/AiMuhurte" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Ai Muhurte
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/lives/live"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/lives/live" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Live
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/lives/RecoredLive-24h"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/lives/RecoredLive-24h" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Recored Live(24h)
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Menu Item UserLists --> */}
              <li>
                <Link
                  href="/users"
                  className={`group relative flex items-center gap-x-4 py-4 pl-6  font-medium text-black duration-300 ease-in-out bg-white hover:bg-hovor hover:text-danger hover:border-l-2 hover:border-primary ${
                    pathname.includes("users") &&
                    " active:bg-hovor active:text-danger  active:border-primary active:border-l-2"
                  }`}
                >
                  <Image
                    width={24}
                    height={24}
                    src={"/icon/users-2.svg"}
                    alt={""}
                  />
                  User List
                </Link>
              </li>

              {/* Admin Management */}

              <SidebarLinkGroup
                activeCondition={
                  pathname === "/adminlist" || pathname.includes("adminlist")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`overflow-hidden group relative flex items-center gap-x-5 py-4 pl-6 hover:pl-4.5 font-medium text-black duration-300 ease-in-out bg-white hover:text-danger hover:bg-hovor hover:border-l-2 hover:border-l-primary  ${
                          (pathname === "/adminlist" ||
                            pathname.includes("adminlist")) &&
                          "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Image
                          src={"/icon/admins.svg"}
                          alt="admins"
                          width={24}
                          height={24}
                        />
                        Admin Management
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="py-4 flex flex-col">
                          <li>
                            <Link
                              href="/adminlist/addadmin"
                              className={`first-letter:group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out  hover:bg-hovor  hover:text-danger dark:hover:bg-meta-2 ${
                                pathname === "/adminlist/addadmin" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Add Admin
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/adminlist/AdminList"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/adminlist/AdminList" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Admin List
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/adminlist/RoleManage"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/adminlist/RoleManage" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Role Manage
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

        


              {/* PageManagement */}

              <SidebarLinkGroup
                activeCondition={
                  pathname === "/pagelist" || pathname.includes("pagelist")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`overflow-hidden group relative flex items-center gap-x-5 py-4 pl-6 hover:pl-4.5 font-medium text-black duration-300 ease-in-out bg-white hover:text-danger hover:bg-hovor hover:border-l-2 hover:border-l-primary  ${
                          (pathname === "/pagelist" ||
                            pathname.includes("pagelist")) &&
                          "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <Image
                          src={"/icon/pages.svg"}
                          alt="page-icon"
                          width={24}
                          height={24}
                        />
                        Page Management
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="py-4 flex flex-col">
                          <li>
                            <Link
                              href="/pagelist/createnewpage"
                              className={`first-letter:group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out  hover:bg-hovor  hover:text-danger dark:hover:bg-meta-2 ${
                                pathname === "/pagelist/createnewpage" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5"
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              Create New Page
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pagelist/AllPage"
                              className={`group relative flex items-center gap-y-5 gap-x-4 py-4 pl-6 hover:pl-4.5 pr-4 font-medium text-black duration-300 ease-in-out hover:bg-hovor hover:text-danger  hover:text-bg-meta-2 ${
                                pathname === "/pagelist/AllPage" &&
                                "active:text-danger active:bg-hovor active:border-l-2 active:border-l-primary active:pl-4.5 "
                              }`}
                            >
                              <Image
                                width={5}
                                height={5}
                                src={"/icon/black-dot.svg"}
                                alt={"black-dot"}
                              />
                              All Page
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>

      <div>
        <Link
          href={"/logout"}
          className={`group relative flex items-center gap-x-4  py-4 pl-6 font-medium text-danger duration-300 ease-in-out bg-white hover:bg-hovor hover:text-danger  hover:border-l-2 hover:border-primary ${
            pathname.includes("logout") &&
            "active:bg-hovor active:text-danger active:border-l-2 active:border-primary active:pl-4.5"
          }`}
        >
          <Image
            width={24}
            height={24}
            src={"/icon/Log out.svg"}
            alt={"logout"}
          />
          Log Out
        </Link>
      </div>

      <div className="text-success text-end pb-4 flex items-center justify-center px-8 ">
        <span>TiCON System Ltd.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
