import SearchBar from "@/components/SearchBar/SearchBar";
import BigRain from "@/components/bigRain/BigRain";
import TabsHeader from "@/components/tabs/TabsHeader";

import Link from "next/link";

function Search() {
    let locate = "cam khe, phu tho";

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#2e2e2e]">
            <div className="w-[1200px] max-w-[1200px] bg-[#111015] rounded-xl min-h-[80vh] p-4 px-8 relative z-20">
                <div className="w-full h-fit flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center w-[70px]  hover:bg-[#2726264f] p-1 rounded-lg group">
                        <svg className="group-hover:fill-white transition-all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff4" id="back-arrow">
                            <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                            <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></path>
                        </svg>
                        <span className="text-xs text-[#fffc] group-hover:text-inherit  group-hover:px-1 transition-all">Home</span>
                    </Link>
                    <div className="flex items-center mx-1">
                        <svg fill="#fff4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                        </svg>
                        <span className="text-sm mx-1">{locate}</span>
                    </div>
                    <div className="w-1/3 relative flex justify-center">
                        <SearchBar />
                    </div>
                </div>
                <div className="">
                    <TabsHeader />
                </div>
            </div>
        </div>
    );
}

export default Search;
