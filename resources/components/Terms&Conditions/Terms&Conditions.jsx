import { useEffect } from "react";
import style from "./Terms&Conditions.module.css";
import privacy_image from "./../../assets/privacy_image.svg";
import ChapterOne from "./ChapterOne/ChapterOne";
import ChapterTwo from "./ChapterTwo/ChapterTwo";
import ChapterThree from "./ChapterThree/ChapterThree";
import ChapterFour from "./ChapterFour/ChapterFour";
import ChapterFive from "./ChapterFive/ChapterFive";
import ChapterSix from "./ChapterSix/ChapterSix";
import ChapterSeven from "./ChapterSeven/ChapterSeven";
import ChapterEight from "./ChapterEight/ChapterEight";
import ChapterNine from "./ChapterNine/ChapterNine";
import ChapterTen from "./ChapterTen/ChapterTen";
import ChapterEleven from "./ChapterEleven/ChapterEleven";
import ChapterTwelve from "./ChapterTwelve/ChapterTwelve";


const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style["terms-block"]} id="terms-and-conditions">
            <div className={style["title-block"]} id="title-block">
                <div className={style["content-block"]}>
                    Ogólne warunki Umowy świadczenia usług drogą elektroniczną w
                    ramach serwisów należących do Migrostore Sp. z o. o.
                </div>
                <img
                    className={style["block-image"]}
                    src={privacy_image}
                    alt=""
                />
            </div>
            <ChapterOne />
            <ChapterTwo />
            <ChapterThree />
            <ChapterFour />
            <ChapterFive />
            <ChapterSix />
            <ChapterSeven />
            <ChapterEight />
            <ChapterNine />
            <ChapterTen />
            <ChapterEleven />
            <ChapterTwelve />
        </div>
    );
};

export default TermsAndConditions;
