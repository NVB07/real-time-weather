import Image from "next/image";
function FewCloudNight({ width = "200px", height = "200px" }) {
    const styleBox = {
        width: width,
        height: height,
    };
    return (
        <div className="relative overflow-hidden" style={styleBox}>
            <Image className="w-full h-auto " src="/gif/moon.gif" width="0" height="0" alt="sun" />
            <Image className="w-4/5 h-auto absolute top-0" src="/gif/cloud.gif" width="0" height="0" alt="cloud" />{" "}
        </div>
    );
}

export default FewCloudNight;
