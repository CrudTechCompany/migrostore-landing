import style from "./HeaderContent.module.css";
import migro_store from "./../../../assets/migro_store.svg";
import menu_icon from "./../../../assets/burger_menu.svg";
import { Link } from "react-router-dom";

const HeaderContent = (props) => {
    const userAgent = navigator.userAgent;
    const linkToStore = () => {
        if (/android/i.test(userAgent)) {
            return (
                <a
                    href="https://apps.apple.com/pl/app/migrostore/id1663022722"
                    target="_blank"
                >
                    <button className={style["download-button"]}>
                        Download the app
                    </button>
                </a>
            );
        } else {
            return (
                <a
                    href="https://apps.apple.com/pl/app/migrostore/id1663022722"
                    target="_blank"
                >
                    <button className={style["download-button"]}>
                        Download the app
                    </button>
                </a>
            );
        }
    };
    return (
        <div className={style["header-content"]}>
            <Link to="/">
                <img className={style["logo"]} src={migro_store} alt="" />
            </Link>
            <div className={style["nav-block"]}>
                <Link to="/">Home</Link>
                <Link to="contact-us">Contact us</Link>
                {linkToStore()}
            </div>
            <button
                className={style["menu-button"]}
                onClick={props.onClickMenuHandler}
            >
                <img src={menu_icon} alt="" />
            </button>
        </div>
    );
};

export default HeaderContent;
