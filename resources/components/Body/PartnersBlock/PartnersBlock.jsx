import style from "./PartnersBlock.module.css";
import personnel_support from "./../../../assets/personnel_support.svg";
import accelpoint from "./../../../assets/accelpoint.svg";
import poland_prize from "./../../../assets/poland_prize.svg";

const PartnersBlock = () => {
    return (
        <div className={style["partners-block"]}>
            <span className={style["block-title"]}>OUR PARTNERS</span>
            <div className={style["cross-line"]}/>
            <div className={style["content-block"]}>
                <img src={personnel_support} alt=""/>
                <img src={accelpoint} alt=""/>
                <img src={poland_prize} alt=""/>
            </div>
        </div>
    );
};

export default PartnersBlock;
