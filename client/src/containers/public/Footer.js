/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../assets/logo.png';
import logo1 from '../../assets/logotrang.jpg';

const Footer = () => {
    return (
        <footer class="rounded-lg bg-[#034DA1] text-center text-neutral-600 dark:bg-gray-600 dark:text-neutral-200 lg:text-left text-white">
            <div class="py-10 border-b-2 border-neutral-200 text-center md:text-left">
                <div class="mx-6 grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div class="mb-6 md:mb-0 flex justify-center">
                            <img src={logo1} class="w-[20rem] rounded-md shadow-lg" />
                        </div>
                    <div class="">
                        <h6
                            class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Về BoysHouse
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Trang chủ</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Giới thiệu</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Blog</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Quy chế hoạt động</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Chính sách bảo mật</a>
                        </p>
                        {/* <p>
                            <NavLink
                                className={` text-black hover:text-white hover:bg-sky-400 text-sm flex items-center
                            gap-x-4 cursor-pointer p-4 hover:bg-light-white 
                            rounded-md  ${item.spacing ? "mt-9" : "mt-2"} `}
                                key=
                                to={path.LIENHE}
                            >
                                <span className="text-2xl  block float-left">
                                    {item.icon ? item.icon : <RiDashboardFill />}
                                </span>
                                <span
                                    className={`text-base font-medium flex-1
        duration-200 ${!open && "hidden"
                                        }`}
                                >
                                    {item.text}
                                </span>
                            </NavLink>
                        </p> */}
                    </div>
                    <div class="">
                        <h6
                            class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Hỗ trợ khách hàng
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Câu hỏi thường gặp</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Hướng dẫn đăng tin</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Bảng giá dịch vụ</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Quy định đăng tin</a>
                        </p>
                        <p>
                            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Giải quyết khiếu nại</a>
                        </p>
                    </div>

                    <div>
                        <h6
                            class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Phương thức thanh toán
                        </h6>
                        <p class="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            New York, NY 10012, US
                        </p>
                        <p class="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            info@example.com
                        </p>
                        <p class="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path
                                    fill-rule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            + 01 234 567 88
                        </p>
                        <p class="flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="mr-3 h-5 w-5">
                                <path
                                    fill-rule="evenodd"
                                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                    clip-rule="evenodd" />
                            </svg>
                            + 01 234 567 89
                        </p>
                    </div>
                </div>
            </div>



            <div class="px-6 border-b-2 border-neutral-200 bg-neutral-700">
                <ul class="ml-9  flex flex-row justify-items-center" data-te-navbar-nav-ref>
                    <li class="static basis-1/8 flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2" data-te-nav-item-ref data-te-dropdown-ref >

                        <span class="mr-1 w- mt-0.5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
                                <path d="M14 9.75a3.016 3.016 0 00-4.163.173 2.993 2.993 0 000 4.154A3.016 3.016 0 0014 14.25" />
                            </svg>
                        </span>
                        <span>BOYSHOUSE.COM.VN</span>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href=""> Terms
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Sitemap
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Privacy
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/2" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#"> Your Privacy Choices
                            <span class="ml-2 w-2">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#">
                            <span class="mr-1 w- mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </span>
                            <span>Việt Nam (VN)</span>
                        </a>
                    </li>
                    <li class="static basis-1/8" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                            href="#">
                            <span class="mr-1 w- mt-0.5">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1.3em"
                                    width="1.3em"
                                >
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
                                    <path d="M8 13.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0 .5A6 6 0 108 2a6 6 0 000 12z" />
                                </svg>
                            </span>
                            <span>VNĐ</span>
                        </a>
                    </li>
                    <li class="static basis-1/9" data-te-nav-item-ref data-te-dropdown-ref>
                        <a href="#!" class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1.3em"
                                width="1.3em"
                            >
                                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                            </svg>
                        </a>
                    </li>
                    <li class="static basis-1/9" data-te-nav-item-ref data-te-dropdown-ref>
                        <a href="#!" class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1.3em"
                                width="1.3em"
                            >
                                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                            </svg>
                        </a>
                    </li>
                    <li class="static  basis-1/9" data-te-nav-item-ref data-te-dropdown-ref>
                        <a href="#!" class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1.3em"
                                width="1.3em"
                            >
                                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer