import style from "./TitleBlock.module.css";
import image from "./../../../assets/title_image.svg";
import google_play from "./../../../assets/google_play.svg";
import app_store from "./../../../assets/app_store.svg";
import mobile_google_play from "./../../../assets/mobile_google_play.svg";
import mobile_app_store from "./../../../assets/mobile_app_store.svg";
import { Link } from "react-router-dom";

const TitleBlock = () => {
    return (
        <div className={style["title-block"]} id="home-page">
            <div className={style["block-content"]}>
                <span className={style["content-title"]}>
                    Migrostore - one store shop platform for Ukrainians in
                    Poland.
                </span>
                <div className={style["content-link"]}>
                    <a
                        className={style["link-item"]}
                        href="https://apps.apple.com/pl/app/migrostore/id1663022722"
                        target="_blank"
                    >
                        <img src={app_store} alt="" />
                    </a>
                    <a
                        className={style["link-item"]}
                        href="https://play.google.com/store/apps/details?id=com.migrostore.migrostore_cv"
                        target="_blank"
                    >
                        <img src={google_play} alt="" />
                    </a>
                </div>
            </div>
            <div className={style["block-image"]}>
                <img className={style["image"]} src={image} alt="" />
                <div className={style["side-block"]}>
                    <a
                        className={style["link-item"]}
                        href="https://apps.apple.com/pl/app/migrostore/id1663022722"
                        target="_blank"
                    >
                        <img src={app_store} alt="" />
                    </a>
                    <a
                        className={style["link-item"]}
                        href="https://play.google.com/store/apps/details?id=com.migrostore.migrostore_cv"
                        target="_blank"
                    >
                        <img src={google_play} alt="" />
                    </a>
                </div>
            </div>

            <div className={style["bottom-block"]}>
                <a
                    className={style["bottom-item"]}
                    href="https://apps.apple.com/pl/app/migrostore/id1663022722"
                    target="_blank"
                >
                    <img src={mobile_app_store} alt="" />
                </a>
                <a
                    className={style["bottom-item"]}
                    href="https://play.google.com/store/apps/details?id=com.migrostore.migrostore_cv"
                    target="_blank"
                >
                    <img src={mobile_google_play} alt="" />
                </a>
            </div>
        </div>
    );
};

export default TitleBlock;
