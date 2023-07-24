import Image from "next/image";
function Card({ active, icon, temp }) {
    const bg = active ? "bg-[#72727275] hover:bg-[#72727275]" : "bg-[#1b1b1d] hover:bg-[#242427]";

    return (
        <li className="mr-2 cursor-default select-none">
            <div className={`w-20 p-2 flex flex-col transition-all justify-center items-center rounded-xl ${bg}`}>
                <div className="pb-1 border-b w-full text-center border-[#555]">Now</div>
                <Image src="/png/sun1.png" className="p-2" width={65} height={65} alt="ic" priority />
                <div>32 C</div>
            </div>
        </li>
    );
}

export default Card;
