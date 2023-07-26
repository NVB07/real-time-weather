import axios from "axios";
let method = "GET";
let base_url = process.env.NEXT_PUBLIC_BASE_URL;
let headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
};

async function GetLocation(value) {
    const options = {
        method,
        url: base_url + "find_places",
        params: {
            text: value,
            language: "en",
        },
        headers,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function nearestNamedPlace(myLocation) {
    const options = {
        method,
        url: base_url + "nearest_place",
        params: {
            lat: myLocation.lat,
            lon: myLocation.lon,
            language: "en",
        },
        headers,
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function GetWeather(option, lat, lon) {
    const options = {
        method,
        url: process.env.NEXT_PUBLIC_BASE_URL + option,
        params: {
            lat,
            lon,
            timezone: "auto",
            language: "en",
            units: "auto",
        },
        headers,
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export { GetWeather, GetLocation, nearestNamedPlace };

// url: "http://localhost:4000/hourly",
