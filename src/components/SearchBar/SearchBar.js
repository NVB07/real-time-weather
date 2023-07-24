"use client";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import Link from "next/link";

function SearchBar() {
    const [inputFocus, setInputFocus] = useState(false);
    useEffect(() => {
        const searchInput = document.getElementById("search-bar");
        const searchIcon = document.getElementById("search-icon");
        searchInput.onfocus = () => {
            setInputFocus(true);
        };
        searchInput.onblur = () => {
            setInputFocus(false);
        };
        searchIcon.onclick = () => {
            searchInput.focus();
        };
    }, []);
    return (
        <Tippy
            visible={inputFocus}
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className="w-[350.66px] rounded-lg text-sm py-2 bg-[#1e1e1e]" tabIndex="-1" {...attrs}>
                    <Link className="block p-2 mb-1  hover:bg-[#2e2c2cce] border-b border-[#555]" href="#">
                        My location
                    </Link>
                    <ul className=" max-h-80 overflow-auto">
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                        <li className="block hover:bg-[#2e2c2cce]">
                            <Link className="block p-2" href="#">
                                <div>cam khe - Ho Chi Minh</div>
                                <i className="text-xs">Socialist Republic of Vietnam</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        >
            <section className=" flex w-full  flex-col">
                <div className="relative h-fit flex  content-center items-center">
                    <span id="search-icon" className="absolute left-4 cursor-default">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </span>
                    <input
                        id="search-bar"
                        autoComplete="off"
                        type="text"
                        className="w-full rounded-full bg-[#1e1e1e] py-2 pl-10 pr-5 text-base focus:ring-transparent  border-none outline-none"
                        placeholder="Search city"
                    />
                </div>
            </section>
        </Tippy>
    );
}

export default SearchBar;
