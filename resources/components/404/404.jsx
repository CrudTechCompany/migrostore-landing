import style from "./404.module.css";
import page_404 from "./../../assets/page_404.svg";
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={style["block"]}>
                <div className={style["content-block"]}>
                    <img
                        className={style["content-image"]}
                        src={page_404}
                        alt=""
                    />
                    <div className={style["description-block"]}>
                        <span className={style["description-title"]}>404</span>
                        <span className={style["description-subtitle"]}>
                            Something’s missing.
                        </span>
                        <span className={style["description-description"]}>
                            This page is missing or you assembled the link
                            incorrectly.
                        </span>
                        <Link to="/" className={style["link-block"]}>
                            <div className={style["description-button"]}>
                                Back to home
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageNotFound;
