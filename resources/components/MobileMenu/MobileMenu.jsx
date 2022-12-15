import style from "./MobileMenu.module.css";
import migro_store from "./../../assets/migro_store.svg";
import close_icon from "./../../assets/close_icon.svg";
import app_store from "./../../assets/mobile_app_store.svg";
import google_play from "./../../assets/mobile_google_play.svg";
import { Link } from "react-router-dom";

const MobileMenu = (props) => {
    return (
        <div className={style["menu-block"]}>
            <div className={style["title-block"]}>
                <img className={style["logo-block"]} src={migro_store} alt="" />
                <button className={style["close-block"]} onClick={props.onClickMenuHandler}>
                    <img
                        src={close_icon}
                        alt=""
                    />
                </button>
            </div>
            <div className={style["link-block"]}>
                <Link to="/" className={style["link-item"]} onClick={props.onClickMenuHandler}>Home</Link>
                <Link to="contact-us" className={style["link-item"]} onClick={props.onClickMenuHandler}>Contact us</Link>
                <Link to="privacy-policy" className={style["link-item"]} onClick={props.onClickMenuHandler}>Privacy policy</Link>
                <Link to="terms-and-conditions" className={style["link-item"]} onClick={props.onClickMenuHandler}>Terms & Conditions</Link>
            </div>
            <a className={style["store-link"]}>
                <img src={app_store} alt=""/>
            </a>
            <a className={style["store-link"]}>
                <img src={google_play} alt=""/>
            </a>
        </div>
    );
};

export default MobileMenu;
