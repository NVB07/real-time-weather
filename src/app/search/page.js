"use client";
import SearchHeader from "@/components/searchHeader/SearchHeader";
import MainContent from "@/components/mainContent/MainContent";
import { useEffect, useState } from "react";
import { GetWeather } from "@/features/Api";
import DataContext from "@/components/context/DataContext";

function Search() {
    const [data, setData] = useState("");
    const [option, setOption] = useState("hourly");
    const [detailsWeather, setDetailsWeather] = useState("");
    const [isFirstRender, setIsFirstRender] = useState(true);
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        const fetchData = async () => {
            const response = await GetWeather(option, data.lat, data.lon);
            setDetailsWeather(response.hourly || response.daily);
        };
        if (data) fetchData();
    }, [data, option]);

    return (
        <div className="w-full min-h-screen flex items-center justify-center max-[1199px]:items-start max-[1199px]:bg-[#111015] bg-[#2e2e2e]">
            <DataContext.Provider value={{ data, setData }}>
                <div className="w-[1200px] max-w-[1200px] max-[1199px]:w-full bg-[#111015] rounded-xl min-h-[80vh] p-4 px-8 relative z-20">
                    <SearchHeader data={data} weather={detailsWeather} />
                    <div className="">
                        <MainContent data={detailsWeather} changeOption={setOption} currentOption={option} />
                    </div>
                </div>
            </DataContext.Provider>
        </div>
    );
}

export default Search;
