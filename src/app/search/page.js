"use client";
import { Tabs } from "flowbite";
import Link from "next/link";
import { useEffect } from "react";

function Search() {
    let locate = "cam khe, phu tho";
    useEffect(() => {
        document.getElementById("search-icon").onclick = () => {
            document.getElementById("search-bar").focus();
        };
        const tabElements = [
            {
                id: "today",
                triggerEl: document.querySelector("#today-tab-example"),
                targetEl: document.querySelector("#today-example"),
            },
            {
                id: "next",
                triggerEl: document.querySelector("#next-tab-example"),
                targetEl: document.querySelector("#next-example"),
            },
        ];

        // options with default values
        const options = {
            defaultTabId: "today",
            activeClasses: "text-white",
            inactiveClasses: "text-gray-500 dark:text-gray-400",
            onShow: () => {
                console.log("tab is shown");
            },
        };

        const tabs = new Tabs(tabElements, options);
    });
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#2e2e2e]">
            <div className="w-[1200px] max-w-[1200px] bg-[#111015] rounded-xl min-h-[80vh] p-4 px-8 relative z-20">
                <div className="w-full h-fit flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center bg-[#23232563] p-1 rounded-lg hover:bg-[#232325]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff4" id="back-arrow">
                            <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                            <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></path>
                        </svg>
                        <span className="text-xs px-1">Back</span>
                    </Link>
                    <div className="flex items-center mx-1">
                        <svg fill="#fff4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                        </svg>
                        <span className="text-sm mx-1">{locate}</span>
                    </div>
                    <section className=" flex max-w-[480px] flex-col">
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
                                className="w-full rounded-full bg-[#1e1e1e] py-2 pl-10 pr-5 text-base border-none outline-none"
                                placeholder="Search city"
                            />
                        </div>
                    </section>
                </div>
                <div className="">
                    <div className="mb-4  ">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabExample" role="tablist">
                            <li className="mr-2" role="presentation">
                                <button className="inline-block p-2 rounded-t-lg " id="today-tab-example" type="button" role="tab" aria-controls="today-example" aria-selected="false">
                                    Today
                                </button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button className="inline-block p-2 rounded-t-lg " id="next-tab-example" type="button" role="tab" aria-controls="next-example" aria-selected="false">
                                    Next 21 days
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="tabContentExample">
                        <ul className="hidden p-4 rounded-lg " id="today-example" role="tabpanel" aria-labelledby="today-tab-example">
                            <li className="">1</li>
                        </ul>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="next-example" role="tabpanel" aria-labelledby="next-tab-example">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">next tab's associated content</strong>. Clicking another tab will
                                toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
