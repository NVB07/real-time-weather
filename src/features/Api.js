import axios from "axios";
// async function GetLocation(value) {
//     const options = {
//         method: "GET",
//         url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
//         params: {
//             text: "ha noi",
//             language: "en",
//         },
//         headers: {
//             "X-RapidAPI-Key": "9ba73f5b81mshfb94315673ef3a4p1818f9jsn7268abb5ebbf",
//             "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
//         },
//     };

//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

async function GetDATA(option, place) {
    let params = option === "find_places" ? { text: place, language: "en" } : { lat: "37.81021", lon: "-122.42282", timezone: "auto", language: "en", units: "auto" };
    const options = {
        method: "GET",
        url: process.env.NEXT_PUBLIC_BASE_URL + option,
        params,
        headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default GetDATA;
