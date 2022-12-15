import style from "./PrivacyPolicy.module.css";
import privacy_image from "./../../assets/privacy_image.svg";
import ChapterOne from "./ChapterOne/ChapterOne";
import ChapterTwo from "./ChapterTwo/ChapterTwo";
import ChapterThree from "./ChapterThree/ChapterThree";
import ChapterFour from "./ChapterFour/ChapterFour";
import ChapterFive from "./ChapterFive/ChapterFive";
import ChapterSix from "./ChapterSix/ChapterSix";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style["privacy-block"]} id="privacy-policy">
            <div className={style["title-block"]}>
                <div className={style["content-block"]}>
                    <span className={style["content-title"]}>
                        Polityka Prywatności Firmy Migrostore Sp. z o. o.
                    </span>
                    <span className={style["content-description"]}>
                        Niniejsza Polityka Prywatności określa zasady
                        przechowywania, przetwarzania i dostępu do informacji na
                        stronie www oraz urządzeniach Użytkownika, służących do
                        realizacji usług świadczonych drogą elektroniczną.
                    </span>
                </div>
                <img src={privacy_image} alt="" />
            </div>
            <ChapterOne />
            <ChapterTwo />
            <ChapterThree />
            <ChapterFour />
            <ChapterFive />
            <ChapterSix />
        </div>
    );
};

export default PrivacyPolicy;
