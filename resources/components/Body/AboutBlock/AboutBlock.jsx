import style from "./AboutBlock.module.css";
import legalization from "./../../../assets/legalization.svg";
import find_job from "./../../../assets/find_job.svg";
import cv from "./../../../assets/cv.svg";

const AboutBlock = () => {
    return (
        <div className={style["about-block"]}>
            <span className={style["block-title"]}>ABOUT US</span>
            <div className={style["cross-line"]} />
            <div className={style["content-block"]}>
                <div className={style["item-block"]}>
                    <img
                        className={style["item-image"]}
                        src={legalization}
                        alt=""
                    />
                    <span className={style["item-title"]}>Legalization</span>
                    <span className={style["item-description"]}>
                        We sincerely know the pain of legalization for the
                        immigrants in Poland. Since that we providing seamless
                        contact with leading legal advisors in field.
                    </span>
                </div>
                <div className={style["item-block"]}>
                    <img
                        className={style["item-image"]}
                        src={find_job}
                        alt=""
                    />
                    <span className={style["item-title"]}>Find job</span>
                    <span className={style["item-description"]}>
                        You can easily find the field in which you feels
                        comfortable to work, fill up the form and push it to the
                        biggets employers in Poland. You don't need to search a
                        job, we will find it for you based on your request.
                    </span>
                </div>
                <div className={style["item-block"]}>
                    <img
                        className={style["item-image"]}
                        src={cv}
                        alt=""
                    />
                    <span className={style["item-title"]}>Create CV</span>
                    <span className={style["item-description"]}>
                        Using our mobile app you would be able to create
                        multiple resumes in a couplee of easy steps. We will
                        guide you and preapre the CV template which can be
                        extracted from the app.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;
