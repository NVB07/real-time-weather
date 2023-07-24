import Image from "next/image";
function ManyCloud({ width = "200px", height = "200px" }) {
    const styleBox = {
        width: width,
        height: height,
    };
    return (
        <div className="relative" style={styleBox}>
            <Image className="w-3/5 -scale-x-100 absolute brightness-75 z-0  h-auto " src="/gif/cloud.gif" width="0" height="0" alt="sun" />
            <Image className="w-full h-auto absolute z-10 brightness-90 top-0" src="/gif/cloud.gif" width="0" height="0" alt="cloud" />
        </div>
    );
}

export default ManyCloud;
