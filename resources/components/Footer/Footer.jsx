import style from "./Footer.module.css";
import migro_store from "./../../assets/migro_store.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
    const onClickLogoHandler = () => {
        if (document.getElementById("home-page")) {
            document
                .getElementById("home-page")
                .scrollIntoView({ behavior: "smooth" });
            return;
        }
        if (document.getElementById("privacy-policy")) {
            document
                .getElementById("privacy-policy")
                .scrollIntoView({ behavior: "smooth" });
            return;
        }
        if (document.getElementById("terms-and-conditions")) {
            document
                .getElementById("terms-and-conditions")
                .scrollIntoView({ behavior: "smooth" });
            return;
        }
        if (document.getElementById("contact-us")) {
            document
                .getElementById("contact-us")
                .scrollIntoView({ behavior: "smooth" });
            return;
        }
    };

    return (
        <footer className={style["footer"]}>
            <div className={style["cross-line"]} />
            <div className={style["footer-content"]}>
                <button
                    className={style["logo-block"]}
                    onClick={onClickLogoHandler}
                >
                    <img className={style["logo"]} src={migro_store} alt="" />
                </button>
                <div className={style["link-block"]}>
                    <span className={style["title"]}>OUR COMPANY</span>
                    <Link to="/" className={style["item"]}>
                        Home
                    </Link>
                    <Link to="contact-us" className={style["item"]}>
                        Contact us
                    </Link>
                    <Link to="privacy-policy" className={style["item"]}>
                        Privacy policy
                    </Link>
                    <Link to="terms-and-conditions" className={style["item"]}>
                        Terms & Conditions
                    </Link>
                </div>
                <div className={style["contact-block"]}>
                    <span className={style["title"]}>OUR CONTACT</span>
                    <a
                        href="mailto:d.rabota@migrostore.pl"
                        className={style["item"]}
                    >
                        d.rabota@migrostore.pl
                    </a>
                    <a href="tel:+ 48 791 490 146" className={style["item"]}>
                        + 48 791 490 146
                    </a>
                    <span className={style["item"]}>
                        ul. Księcia Witolda 49, lok. 15 50-202 Wrocław
                    </span>
                </div>
            </div>
            <div className={style["cross-line"]} />
            <div className={style["bottom-block"]}>
                <span>© Copyright 2022 Migrostore sp. z.o.o.</span>
            </div>
        </footer>
    );
};

export default Footer;
