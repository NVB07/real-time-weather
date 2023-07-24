import Image from "next/image";
function Moon({ width = "200px", height = "200px" }) {
    const styleBox = {
        width: width,
        height: height,
    };
    return (
        <div className="relative overflow-hidden" style={styleBox}>
            <Image className="w-full h-auto absolute top-0" src="/gif/moon.gif" width="0" priority height="0" alt="cloud" />
        </div>
    );
}

export default Moon;
