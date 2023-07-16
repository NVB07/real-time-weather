import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <div className="w-full min-h-screen flex items-center bg-gradient-to-b from-[#444] to-sky-500 justify-center p-9 relative">
            <div className="absolute w-full h-full top-0 left-0 bg-rain-bg z-10"></div>
            <div className="w-[1200px] max-w-[1200px] bg-[#dadadabe] rounded-xl min-h-[80vh] p-4 px-8 relative z-20">
                <div className="w-full h-14 flex items-center justify-between">
                    <Link className="w-fit h-full  flex items-center" href="/">
                        <Image className="w-auto h-auto" src="/logo.png" priority width={40} height={80} alt="logo" />
                        <h3 className="ml-2 text-xl text-zinc-700 font-semibold">Weather</h3>
                    </Link>
                    <a
                        href="https://www.facebook.com/profile.php?id=100030906050783"
                        className="bg-transparent flex items-center justify-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-lg"
                    >
                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                        </svg>
                        About
                    </a>
                </div>
                <div className="flex w-full h-full ">
                    <div className="w-1/2 flex flex-col justify-center h-full mt-12">
                        <h3 className="text-4xl leading-relaxed text-[#583116] font-semibold">
                            <span className="text-[#2e8b25] text-5xl">Smart</span>{" "}
                            <sup className="inline-flex items-center mx-1 justify-center w-14 h-14 text-xl mb-1 rounded-full border border-[#a916bd]">and</sup>
                            <span className="text-amber-800 text-5xl">Convenient</span> Weather Assistant <br /> In Your Device
                        </h3>
                        <p className="text-[#686868] my-5">
                            Find out what can be waiting for you <br /> on the street with a few taps
                        </p>
                        <Link href="/search" className="w-fit inline-block mt-3">
                            <button
                                type="button"
                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Try Now
                                <svg className="w-3.5 h-3.5 ml-2 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </Link>
                        <a href="https://github.com/NVB07" className="w-fit flex items-end mt-5  h-14">
                            <div className="flex w-24 h-9 items-center relative">
                                <div className="w-8 h-8 rounded-full  border-2 border-[#e9e9e962] absolute z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div className="w-fit flex items-center absolute z-0 rounded-full bg-[#e9e9e962] py-1 pr-2 pl-9 text-sm text-[#583116]">NVB07</div>
                            </div>
                        </a>
                    </div>
                    <div className="w-1/2 flex items-center justify-center h-full p-7 relative">
                        <Image src="/svg/weather-animate.svg" className="w-3/4 -z-0" width={200} height={200} priority alt="img-banner" />
                    </div>
                </div>
            </div>
        </div>
    );
}
