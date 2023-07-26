"use client";
import { useContext } from "react";
import { nearestNamedPlace } from "@/features/Api";
import DataContext from "../context/DataContext";

function ResultItem({ array, state = false, onResultItemClick }) {
    const { setData } = useContext(DataContext);
    let show = state ? "block" : "hidden";

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const myLocation = { lat: latitude, lon: longitude };
                    const getName = async () => {
                        const response = await nearestNamedPlace(myLocation);
                        setData(response);
                    };
                    getName();
                },
                (error) => {
                    console.error("Error getting location:", error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    const getItem = (item) => {
        onResultItemClick();
        setData(item);
    };
    return (
        <div className={`absolute top-12 w-[350.66px] rounded-lg text-sm py-2 bg-[#1e1e1e] ${show}`}>
            <ul id="box-result" className=" max-h-80 overflow-auto">
                {(Array.isArray(array) && array.length === 0 && (
                    <div onClick={() => getCurrentLocation()} className="block p-2 cursor-pointer  hover:bg-[#2e2c2cce] ">
                        My location
                    </div>
                )) ||
                    (Array.isArray(array) &&
                        array.map((item) => (
                            <li onClick={() => getItem(item)} key={item.place_id} className="block hover:bg-[#2e2c2cce] cursor-pointer">
                                <div className="block p-2">
                                    <div>
                                        {item.name} {item.adm_area1 && <i className="text-xs text-slate-400"> - {item.adm_area1} </i>}
                                    </div>
                                    <i className="text-xs text-green-500">{item.country}</i>
                                </div>
                            </li>
                        ))) || (
                        <div className="p-2 flex cursor-default">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={20} height={20} fill="#fff">
                                <path d="M120,144V96a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm116.76758,67.981a23.75438,23.75438,0,0,1-20.791,12.01123H40.02344A23.99994,23.99994,0,0,1,19.252,187.96973L107.22852,35.97705a24.00024,24.00024,0,0,1,41.543,0l87.97657,151.99219A23.75354,23.75354,0,0,1,236.76758,211.981Zm-13.86719-15.99658L134.92383,43.99219a8.00025,8.00025,0,0,0-13.84766,0h0L33.09961,195.98438a8.00079,8.00079,0,0,0,6.92383,12.00781H215.97656a8.00079,8.00079,0,0,0,6.92383-12.00781ZM128,168a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,128,168Z" />
                            </svg>
                            <i className="mx-2">api usage limit reached</i>
                        </div>
                    )}
            </ul>
        </div>
    );
}

export default ResultItem;
