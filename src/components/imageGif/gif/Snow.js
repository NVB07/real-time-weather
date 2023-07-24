import Image from "next/image";
function Snow({ width = "200px", height = "200px" }) {
    const styleBox = {
        width: width,
        height: height,
    };
    return (
        <div className="relative overflow-hidden" style={styleBox}>
            <Image className="w-4/5 -scale-x-100 absolute brightness-75 z-0 top-0  h-auto " src="/gif/cloud.gif" width="0" height="0" alt="sun" />
            <Image className="w-full absolute  z-0  h-[200px] " src="/gif/snow.gif" width="0" height="0" alt="sun" />
        </div>
    );
}

export default Snow;
