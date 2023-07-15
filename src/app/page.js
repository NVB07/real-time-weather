import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <div className="w-full min-h-screen flex items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 justify-center">
            <div className="w-[1200px] max-w-[1200px] bg-[#ffffff79] rounded-xl min-h-[80vh] h-[80vh] p-4 px-8">
                <div className="w-full h-14 flex items-center justify-between">
                    <Link className="w-fit h-full  flex items-center" href="/">
                        <Image className="w-auto h-auto" src="/logo.png" priority width={40} height={80} alt="logo" />
                        <h3 className="ml-2 text-xl text-zinc-700 font-semibold">Weather</h3>
                    </Link>
                    <Link href="/" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                        Facebook
                    </Link>
                </div>
                <div className="flex w-full h-full">
                    <div className="w-1/2 flex flex-col justify-center h-full">
                        <h3 className="text-4xl leading-relaxed text-[#243752] font-semibold">
                            <span className="text-amber-800 text-5xl">Smart</span>{" "}
                            <sup className="inline-flex items-center mx-1 justify-center w-14 h-14 text-xl mb-1 rounded-full border border-cyan-500">and</sup>
                            <span className="text-amber-800 text-5xl">Convenient</span> Weather Assistant <br /> In Your Device
                        </h3>
                        <Link href="/" className="w-fit inline-block mt-3">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Search Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
