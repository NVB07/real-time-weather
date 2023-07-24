import Main from "./gif/Main";

function ImgGif({ icon = 0 }) {
    const classes = "flex items-center w-fit rounded-xl overflow-hidden border border-[#424242]";
    function getIcon() {
        if (icon < 5) {
            return (
                <div className={classes}>
                    <Main sun />
                    <Main cloud />
                </div>
            );
        } else if (icon > 4 && icon < 7) {
            return (
                <div className={classes}>
                    <Main cloud sun />
                    <Main cloud />
                </div>
            );
        } else if ((icon > 6 && icon < 10) || (icon > 28 && icon < 32)) {
            return (
                <div className={classes}>
                    <Main cloudGray />
                    <Main cloudGray />
                </div>
            );
        } else if (icon > 9 && icon < 13) {
            return (
                <div className={classes}>
                    <Main cloud sun rain />
                    <Main cloudGray rain />
                </div>
            );
        } else if ((icon > 12 && icon < 16) || (icon > 31 && icon < 34)) {
            return (
                <div className={classes}>
                    <Main cloudGray rain thunder />
                    <Main rain thunder />
                </div>
            );
        } else if (icon > 15 && icon < 19) {
            return (
                <div className={classes}>
                    <Main cloudGray snow />
                    <Main cloudGray snow />
                </div>
            );
        } else if ((icon > 18 && icon < 26) || icon > 33) {
            return (
                <div className={classes}>
                    <Main cloudGray snow rain />
                    <Main cloudGray snow rain />
                </div>
            );
        } else if (icon > 25 && icon < 29) {
            return (
                <div className={classes}>
                    <Main moon />
                    <Main cloud />
                </div>
            );
        }
    }

    return getIcon();
}

export default ImgGif;
