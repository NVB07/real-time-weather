"use client";
import { Tabs } from "flowbite";
import BigRain from "../bigRain/BigRain";
import { useEffect } from "react";
import Card from "../card/Card";

function TabsHeader() {
    useEffect(() => {
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
    }, []);
    return (
        <div className="">
            <div className="mb-2  ">
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
            <div id="tabContentExample" className="overflow-x-scroll rounded-lg w-2/3 p-1 mb-4 h-[146px]">
                <ul className="flex hidden items-center " id="today-example" role="tabpanel" aria-labelledby="today-tab-example">
                    <Card active />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
                <ul className="flex hidden items-center " id="next-example" role="tabpanel" aria-labelledby="next-tab-example">
                    <Card active />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
            <div className="flex w-fit rounded-xl overflow-hidden border border-[#424242]">
                <BigRain />
                <BigRain />
            </div>
        </div>
    );
}

export default TabsHeader;
