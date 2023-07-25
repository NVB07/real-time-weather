"use client";
import { useEffect, useState, useRef } from "react";

import { GetLocation } from "@/features/Api";
import useDebounce from "@/hooks/useDebounce";
import ResultItem from "../searchResult/ResultItem";

function SearchBar() {
    const [showResult, setShowResult] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const debounced = useDebounce(searchValue, 500);

    const searchInputRef = useRef();
    const blurTimeoutRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        async function fetchData() {
            const response = await GetLocation(debounced);
            setSearchResult(response);
        }
        fetchData();
    }, [debounced]);

    const handleInputBlur = () => {
        blurTimeoutRef.current = setTimeout(() => {
            setShowResult(false);
        }, 150);
    };

    const handleInputFocus = () => {
        clearTimeout(blurTimeoutRef.current);
        setShowResult(true);
    };

    return (
        <section className="relative flex w-full  flex-col">
            <div className="relative h-fit flex  content-center items-center">
                <span onClick={() => searchInputRef.current.focus()} id="search-icon" className="absolute left-4 cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </span>
                <input
                    ref={searchInputRef}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    autoComplete="off"
                    type="text"
                    className="w-full rounded-full bg-[#1e1e1e] py-2 pl-10 pr-5 text-base focus:ring-transparent  border-none outline-none"
                    placeholder="Search city"
                />
            </div>
            <ResultItem array={searchResult} state={showResult} />
        </section>
    );
}

export default SearchBar;
