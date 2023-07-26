function DateTime({ data }) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    const day = currentDate.getDate();
    const allTime = data.data ? (data.data[0].date ? data.data[0].date.substr(0, 10) : data.data[0].day ? data.data[0].day : `${day}/${month}/${year}`) : `${day}/${month}/${year}`;

    return (
        <div className="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                    stroke="#fff4"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#fff4" />
                <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#fff4" />
                <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#fff4" />
            </svg>
            <span className="ml-1 text-[#fffc]">{allTime}</span>
        </div>
    );
}

export default DateTime;
