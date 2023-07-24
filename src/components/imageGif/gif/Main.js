import Image from "next/image";
function Main({ rain = false, cloud = false, cloudGray = false, clouds = false, sun = false, moon = false, snow = false, thunder = false }) {
    const styleBox = {
        width: "200px",
        height: "200px",
    };
    return (
        <div className="relative overflow-hidden" style={styleBox}>
            {sun && <Image className="w-full h-auto absolute top-0 z-0" src="/gif/sun.gif" width="0" priority height="0" alt="sun" />}
            {moon && <Image className="w-full h-auto absolute top-0 z-0" src="/gif/moon.gif" width="0" priority height="0" alt="sun" />}
            {rain && <Image className="w-full h-auto brightness-50 absolute top-0 z-10" src="/gif/rain.gif" width="0" priority height="0" alt="sun" />}
            {cloud && <Image className="w-full h-auto absolute top-0 z-20" src="/gif/cloud.gif" width="0" priority height="0" alt="sun" />}
            {cloudGray && <Image className="w-full h-auto brightness-75 absolute top-0 z-20" src="/gif/cloud.gif" width="0" priority height="0" alt="sun" />}
            {snow && <Image className="w-full h-auto absolute -scale-x-100 top-0 z-10" src="/gif/snow1.gif" width="0" priority height="0" alt="sun" />}
            {thunder && <Image className="w-full h-auto absolute top-0 z-10" src="/gif/thunder.gif" width="0" priority height="0" alt="sun" />}
        </div>
    );
}

export default Main;
