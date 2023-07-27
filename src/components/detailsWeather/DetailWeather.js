import { BsFillCloudHaze2Fill, BsSpeedometer2, BsFillCloudRainFill } from "react-icons/bs";
import { PiSubtitles } from "react-icons/pi";
import { FaTemperatureHigh } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { GiWindSlap, GiSunRadiations } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";

function DetailWeather({ detail, title }) {
    let objectDetail = null;
    let data = null;
    let width = "w-[170px] max-[1199px]:mr-2 max-[415px]:w-[145px]";
    let height = "h-24";
    let icon = null;
    let classes = "w-full mt-1";

    if (detail) {
        objectDetail = detail.data[0];
    }

    if (title === "Summary") {
        width = "w-full";
        height = "h-16 max-[1199px]:h-36";
        icon = <PiSubtitles />;
        classes = "w-full text-sm h-6 overflow-auto max-[1199px]:h-24 mt-1";
        if (objectDetail) data = objectDetail.summary;
    } else if (title === "Temperature" || title === "Rain") {
        width = "w-[49%] max-[1199px]:w-full";
        height = "h-[60px] max-[1199px]:h-[47%] max-[1199px]:mb-0";
        icon = <FaTemperatureHigh />;
        if (objectDetail) data = objectDetail.temperature_min ? ` ${objectDetail.temperature_min}° - ${objectDetail.temperature_max}°` : objectDetail.temperature + "°";
        if (title === "Rain") {
            icon = <BsFillCloudRainFill />;
            if (objectDetail) data = objectDetail.probability.precipitation + "%";
        }
    } else if (title === "Feels like") {
        icon = <AiOutlineUser />;
        if (objectDetail) data = objectDetail.feels_like + "°";
    } else if (title === "Wind speed") {
        icon = <GiWindSlap />;
        if (objectDetail) data = objectDetail.wind.speed;
    } else if (title === "Humidity") {
        icon = <WiHumidity />;
        if (objectDetail) data = objectDetail.humidity + "%";
    } else if (title === "Visibility") {
        icon = <MdVisibility />;
        if (objectDetail) data = objectDetail.visibility;
    } else if (title === "Cloud cover") {
        icon = <BsFillCloudHaze2Fill />;
        if (objectDetail) data = objectDetail.cloud_cover + "%";
    } else if (title === "Pressure") {
        icon = <BsSpeedometer2 />;
        if (objectDetail) data = objectDetail.pressure + " hPa";
    } else if (title === "UV") {
        icon = <GiSunRadiations />;
        if (objectDetail) data = objectDetail.uv_index;
    } else if (title === "Rain amount") {
        icon = <VscGraph />;
        if (objectDetail) data = objectDetail.precipitation.total + " mm";
    }
    return (
        <div className={`${width} ${height}  bg-[#2f2f2f42] p-2  rounded-lg  mb-2`}>
            <div className="text-[#505053] flex items-center w-full ">
                {icon}
                <span className="ml-1 text-sm">{title}</span>
            </div>
            <div className={classes}>{data}</div>
        </div>
    );
}

export default DetailWeather;
