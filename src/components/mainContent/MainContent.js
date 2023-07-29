"use client";
import { Tabs } from "flowbite";
import { useEffect } from "react";
import Image from "next/image";
import Card from "../card/Card";
import ImgGif from "../imageGif/ImgGif";
import DetailWeather from "../detailsWeather/DetailWeather";

function MainContent({ data, changeOption }) {
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

            <div className="w-full flex max-[1199px]:flex-col max-[1199px]:mb-4 justify-between">
                <div id="tabContentExample" className="overflow-x-auto overflow-y-hidden max-[1199px]:w-full rounded-lg w-2/3 pb-2 mb-4 h-[146px]">
                    <ul className="flex hidden items-center " id="today-example" role="tabpanel" aria-labelledby="today-tab-example">
                        {(data &&
                            data.data.map((item, index) => {
                                if (index < 25) {
                                    return (
                                        <div key={index}>
                                            <Card data={item} active={index === 0} />
                                        </div>
                                    );
                                }
                            })) || (
                            <>
                                <Image src="/gif/waiting1.gif" priority className="w-auto h-auto contrast-50" width={200} height={146} alt="" />
                                <Image src="/gif/waiting1.gif" priority className="w-auto h-auto contrast-50" width={200} height={146} alt="" />
                            </>
                        )}
                    </ul>

                    <ul className="flex hidden items-center " id="next-example" role="tabpanel" aria-labelledby="next-tab-example">
                        {(data &&
                            data.data.map((item, index) => {
                                if (index < 25) {
                                    return (
                                        <div key={index}>
                                            <Card data={item} active={index === 0} />
                                        </div>
                                    );
                                }
                            })) || (
                            <>
                                <Image src="/gif/waiting1.gif" priority className="w-auto h-auto contrast-50" width={200} height={146} alt="" />
                                <Image src="/gif/waiting1.gif" priority className="w-auto h-auto contrast-50" width={200} height={146} alt="" />
                            </>
                        )}
                    </ul>
                </div>
                <div className="w-[350.66px] max-[1199px]:w-full max-[1199px]:justify-between max-[1199px]:flex h-[146px] ">
                    <div className="w-full max-[1199px]:w-[69%] ">
                        <DetailWeather detail={data} title={"Summary"} />
                    </div>
                    <div className="flex w-full max-[1199px]:w-[30%] max-[1199px]:items-stretch max-[1199px]:flex-col justify-between">
                        <DetailWeather detail={data} title={"Temperature"} />
                        <DetailWeather detail={data} title={"Rain"} />
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center max-[1199px]:flex-col justify-between">
                <div className=" w-[400px] h-[200px] rounded-xl max-[1199px]:mb-4 max-[1199px]:border-none overflow-hidden border border-[#424242]">
                    {(data && <ImgGif icon={data.data[0].icon} />) || <Image src="/gif/waiting1.gif" priority className="w-auto h-auto contrast-50" width={400} height={200} alt=""></Image>}
                </div>
                <div className="bg-[#2f2f2f00] max-[1199px]:w-full max-[1199px]:justify-center rounded-xl justify-between w-[700px] max-[1199px]:h-full h-[200px] flex flex-wrap">
                    {(data && (
                        <>
                            <DetailWeather detail={data} title={"Feels like"} />
                            <DetailWeather detail={data} title={"Wind speed"} />
                            <DetailWeather detail={data} title={"Cloud cover"} />
                            <DetailWeather detail={data} title={"Pressure"} />
                            <DetailWeather detail={data} title={"Rain amount"} />
                            <DetailWeather detail={data} title={"UV"} />
                            <DetailWeather detail={data} title={"Humidity"} />
                            <DetailWeather detail={data} title={"Visibility"} />
                        </>
                    )) || (
                        <>
                            <DetailWeather detail={null} title={"Feels like"} />
                            <DetailWeather detail={null} title={"Wind speed"} />
                            <DetailWeather detail={null} title={"Cloud cover"} />
                            <DetailWeather detail={null} title={"Pressure"} />
                            <DetailWeather detail={null} title={"Rain amount"} />
                            <DetailWeather detail={null} title={"UV"} />
                            <DetailWeather detail={null} title={"Humidity"} />
                            <DetailWeather detail={null} title={"Visibility"} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainContent;
