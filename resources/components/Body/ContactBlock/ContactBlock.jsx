import { Link } from "react-router-dom";
import style from "./ContactBlock.module.css";

const ContactBlock = () => {
    return (
        <div className={style["contact-block"]}>
            <div className={style["cross-line"]} />
            <div className={style["block-title"]}>
                In case of any questions, you can always use the contact form
            </div>
            <Link to="contact-us">
                <button className={style["block-button"]}>Contact us</button>
            </Link>

            <div className={style["cross-line"]} />
        </div>
    );
};

export default ContactBlock;
