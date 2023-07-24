"use client";
import { Tabs } from "flowbite";
import { useEffect } from "react";
import Card from "../card/Card";
import ImgGif from "../imageGif/ImgGif";

function TabsHeader() {
    let animationFrameId = null;
    const handleScrollHorizontally = (event) => {
        event.preventDefault();
        const container = event.currentTarget;
        const delta = event.deltaY;

        const scrollStep = 10;
        let scrollAmount = 0;

        cancelAnimationFrame(animationFrameId);

        const animateScroll = () => {
            scrollAmount += scrollStep;

            if (delta < 0) {
                container.scrollLeft -= scrollStep;
            } else {
                container.scrollLeft += scrollStep;
            }

            if (scrollAmount < Math.abs(delta)) {
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        animationFrameId = requestAnimationFrame(animateScroll);
    };

    useEffect(() => {
        const container = document.querySelector("#tabContentExample");
        container.addEventListener("wheel", handleScrollHorizontally, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleScrollHorizontally);
        };
    }, []);

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

        const options = {
            defaultTabId: "today",
            activeClasses: "text-white",
            inactiveClasses: "text-gray-500 dark:text-gray-400",
            onShow: () => {
                const container = document.querySelector("#tabContentExample");
                container.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
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
            <div id="tabContentExample" className="overflow-x-scroll rounded-lg w-2/3 pb-2 mb-4 h-[146px]">
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
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
            <div className="w-full ">
                <ImgGif />
            </div>
        </div>
    );
}

export default TabsHeader;
