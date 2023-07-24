"use client";
import { useEffect, useState, useRef } from "react";
import Tippy from "@tippyjs/react/headless";
import Link from "next/link";

import GetDATA from "@/features/Api";

function SearchBar() {
    const [inputFocus, setInputFocus] = useState(false);
    const [resultPlaces, setResultPlaces] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const searchInputRef = useRef();

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
        searchInput.oninput = async () => {
            let inputValue = searchInput.value;
            const resultPlaces = await GetDATA("find_places", inputValue);
            setResultPlaces(resultPlaces);
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
                    <ul id="box-result" className=" max-h-80 overflow-auto">
                        {(Array.isArray(resultPlaces) &&
                            resultPlaces.map((item) => (
                                <li key={item.place_id} className="block hover:bg-[#2e2c2cce]">
                                    <Link className="block p-2" href="#">
                                        <div>{item.name}</div>
                                        <i className="text-xs">{item.country}</i>
                                    </Link>
                                </li>
                            ))) || (
                            <div className="p-2 flex cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={20} height={20} fill="#fff">
                                    <path d="M120,144V96a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm116.76758,67.981a23.75438,23.75438,0,0,1-20.791,12.01123H40.02344A23.99994,23.99994,0,0,1,19.252,187.96973L107.22852,35.97705a24.00024,24.00024,0,0,1,41.543,0l87.97657,151.99219A23.75354,23.75354,0,0,1,236.76758,211.981Zm-13.86719-15.99658L134.92383,43.99219a8.00025,8.00025,0,0,0-13.84766,0h0L33.09961,195.98438a8.00079,8.00079,0,0,0,6.92383,12.00781H215.97656a8.00079,8.00079,0,0,0,6.92383-12.00781ZM128,168a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,128,168Z" />
                                </svg>
                                <i className="mx-2">api usage limit reached</i>
                            </div>
                        )}
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
                        ref={searchInputRef}
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
