import Image from "next/image";
function Card({ active, data }) {
    let item = data ? data : "";
    let time = "";

    if (item.date) {
        const dateTimeString = item.date;
        const dateTime = new Date(dateTimeString);
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        time = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    } else if (item.day) {
        const dayString = item.day;
        const dateObject = new Date(dayString);
        const day = dateObject.getDate();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
        time = `${day}/${month}`;
    }
    let icon = null;
    if (item.icon < 4) {
        icon = "/png/sun1.png";
    } else if (item.icon === 4) {
        icon = "/png/cloudy1.png";
    } else if (item.icon === 5) {
        icon = "/png/cloudy_sun1.png";
    } else if (item.icon === 6) {
        icon = "/png/clouds1.png";
    } else if (item.icon <= 8) {
        icon = "/png/cloudGray.png";
    } else if (item.icon === 9) {
        icon = "/png/foggy1.png";
    } else if (item.icon < 12) {
        icon = "/png/rain.png";
    } else if (item.icon === 12) {
        icon = "/png/mayberain.png";
    } else if (item.icon === 13) {
        icon = "/png/rain1.png";
    } else if (item.icon <= 15) {
        icon = "/png/storm.png";
    } else if (item.icon <= 18) {
        icon = "/png/snow1.png";
    } else if (item.icon <= 22) {
        icon = "/png/rainsnow.png";
    } else if (item.icon <= 25) {
        icon = "/png/rainIce.png";
    } else if (item.icon <= 25) {
        icon = "/png/rainIce.png";
    } else if (item.icon <= 27) {
        icon = "/png/nightclear.png";
    } else if (item.icon <= 29) {
        icon = "/png/nightcloud.png";
    } else if (item.icon <= 31) {
        icon = "/png/cloudNight.png";
    } else if (item.icon === 32) {
        icon = "/png/nightrain.png";
    } else if (item.icon === 33) {
        icon = "/png/storm.png";
    } else if (item.icon <= 35) {
        icon = "/png/snow1.png";
    } else if (item.icon === 36) {
        icon = "/png/rainsnow.png";
    }

    const bg = active ? "bg-[#72727275] hover:bg-[#72727275]" : "bg-[#1b1b1d] hover:bg-[#242427]";

    return (
        <li className="mr-2 cursor-default select-none">
            <div className={`w-20 p-2 flex flex-col transition-all justify-center items-center rounded-xl ${bg}`}>
                <div className="pb-1 border-b w-full text-center border-[#555]">{time}</div>
                <Image src={icon} className="p-2" width={65} height={65} alt="ic" priority />
                <div>{item.temperature} °</div>
            </div>
        </li>
    );
}

export default Card;
