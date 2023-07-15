import Image from "next/image";
function FewCloud({ width = "200px", height = "200px" }) {
    const styleBox = {
        width: width,
        height: height,
    };
    return (
        <div className="relative" style={styleBox}>
            <Image className="w-4/5 absolute  z-0  h-auto " src="/gif/sun.gif" width="0" height="0" alt="sun" />
            <Image className="w-full h-auto absolute z-10 top-0" src="/gif/cloud.gif" width="0" height="0" alt="cloud" />
        </div>
    );
}

export default FewCloud;
