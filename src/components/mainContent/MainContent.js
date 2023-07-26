"use client";
import { Tabs } from "flowbite";
import { useEffect } from "react";
import Card from "../card/Card";
import ImgGif from "../imageGif/ImgGif";

function MainContent({ data, changeOption, currentOption }) {
    let animationFrameId = null;
    const handleScrollHorizontally = (event) => {
        event.preventDefault();
        const container = event.currentTarget;
        const delta = event.deltaY;

        const scrollStep = 20;
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
                scrollToStart(container);
            },
        };
        const tabs = new Tabs(tabElements, options);
    }, []);
    const scrollToStart = (dom) => {
        dom.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    };
    const activeTab = (option) => {
        changeOption(option);
    };

    return (
        <div className="">
            <div className="mb-2  ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabExample" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button
                            onClick={() => activeTab("hourly")}
                            className="inline-block p-2 rounded-t-lg "
                            id="today-tab-example"
                            type="button"
                            role="tab"
                            aria-controls="today-example"
                            aria-selected="false"
                        >
                            Today
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            onClick={() => activeTab("daily")}
                            className="inline-block p-2 rounded-t-lg "
                            id="next-tab-example"
                            type="button"
                            role="tab"
                            aria-controls="next-example"
                            aria-selected="false"
                        >
                            Next 21 days
                        </button>
                    </li>
                </ul>
            </div>

            <div id="tabContentExample" className="overflow-x-scroll rounded-lg w-2/3 pb-2 mb-4 h-[146px]">
                <ul className="flex hidden items-center " id="today-example" role="tabpanel" aria-labelledby="today-tab-example">
                    {data &&
                        data.data.map((item, index) => {
                            if (index < 25) {
                                return (
                                    <div key={index}>
                                        <Card data={item} active={index === 0} />
                                    </div>
                                );
                            }
                        })}
                </ul>

                <ul className="flex hidden items-center " id="next-example" role="tabpanel" aria-labelledby="next-tab-example">
                    {data &&
                        data.data.map((item, index) => {
                            if (index < 25) {
                                return (
                                    <div key={index}>
                                        <Card data={item} active={index === 0} />
                                    </div>
                                );
                            }
                        })}
                </ul>
            </div>
            <div className="w-full ">{data && <ImgGif icon={data.data[0].icon} />}</div>
        </div>
    );
}

export default MainContent;
