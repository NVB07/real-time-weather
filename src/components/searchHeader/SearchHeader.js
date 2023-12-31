"use client";
import Link from "next/link";
import DateTime from "../date/DateTime";
import SearchBar from "../SearchBar/SearchBar";

function SearchHeader({ data, weather }) {
    return (
        <div className="w-full h-fit relative flex items-center max-[768px]:justify-start  justify-between mb-4">
            <Link href="/" className="flex items-center w-[70px]  hover:bg-[#2726264f] p-1 rounded-lg group">
                <svg className="group-hover:fill-white transition-all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff4" id="back-arrow">
                    <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                    <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></path>
                </svg>
                <span className="text-xs text-[#fffc] group-hover:text-inherit  group-hover:px-1 transition-all">Home</span>
            </Link>
            <DateTime data={weather} />
            <div className="flex items-center mx-1 w-60 max-[1199px]:w-1/4 max-[768px]:w-fit overflow-x-hidden">
                <svg fill="#fff4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                <span className="text-sm text-[#fffc] mx-1">
                    {(data && data.name && <p>{data.name}</p>) || (data && <p>api usage limit reached</p>) || <p>...</p>}
                    {data && data.adm_area1 && <i className="text-slate-400 text-xs">{data.adm_area1}</i>}
                </span>
            </div>
            <div className="w-1/3 max-[1199px]:w-1/4 max-[768px]:absolute max-[768px]:right-0 max-[768px]:pl-0  relative flex justify-center pl-7">
                <SearchBar />
            </div>
        </div>
    );
}

export default SearchHeader;
