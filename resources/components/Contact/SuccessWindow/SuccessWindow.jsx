import { Link } from "react-router-dom";
import style from "./SuccessWindow.module.css";

const SuccessWindow = (props) => {
    const onClickHandler = () => {
        props.setSuccessWindowState((prev)=> !prev);
    }
    return (
        <div className={style["success-block"]}>
            <div className={style["content-block"]}>
                <span className={style["content-title"]}>Thank you!</span>
                <span className={style["content-description"]}>
                    One of our agents will get back to you as soon as possible.
                    Normally it takes us 24 business hours. Keep in touch!
                </span>
                <Link to="/" className={style["button-block"]}>
                    <button className={style["content-button"]} onClick={onClickHandler}>
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SuccessWindow;
