import Image from "next/image";
function BigRain({ width = "200px", height = "200px" }) {
    const styleBox = {
        width: width,
        height: height,
    };
    return (
        <div className="relative overflow-hidden" style={styleBox}>
            <Image className="w-full scale-x-[-1] h-auto absolute top-10" src="/gif/thunder.gif" width="0" priority height="0" alt="cloud" />
            <Image className="w-full object-cover h-auto absolute top-[-80px] brightness-50" src="/gif/cloud.gif" priority width="0" height="0" alt="sun" />
            <Image className="w-full object-cover h-auto absolute top-0" src="/gif/rain.gif" width="0" priority height="0" alt="cloud" />
        </div>
    );
}

export default BigRain;
