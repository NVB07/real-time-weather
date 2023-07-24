import BigRain from "./gif/BigRain";
import FewCloud from "./gif/FewCloud";
import FewCloudNight from "./gif/FewCloudNight";
import ManyCloud from "./gif/ManyCloud";
import Rain from "./gif/Rain";
import Sunny from "./gif/Sunny";
import Snow from "./gif/Snow";

function ImgGif({ icon = 1 }) {
    const classes = "flex items-center w-fit rounded-xl overflow-hidden border border-[#424242]";
    function getIcon() {
        if (icon < 5) {
            return (
                <div className={classes}>
                    <Snow />
                    <ManyCloud />
                </div>
            );
        } else if (icon < 7) {
            return (
                <div className={classes}>
                    <ManyCloud />
                    <FewCloud />
                </div>
            );
        } else if (icon < 10) {
            return (
                <div className={classes}>
                    <ManyCloud />
                    <ManyCloud />
                </div>
            );
        } else if (icon < 13) {
            return (
                <div className={classes}>
                    <Rain />
                    <Rain />
                </div>
            );
        } else if (icon < 16) {
            return (
                <div className={classes}>
                    <Rain />
                    <BigRain />
                </div>
            );
        }
    }

    return getIcon();
}

export default ImgGif;
