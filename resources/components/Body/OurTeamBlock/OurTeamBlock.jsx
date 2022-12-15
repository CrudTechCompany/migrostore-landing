import style from "./OurTeamBlock.module.css";
import denis_photo from "./../../../assets/denis_photo.svg";
import mariia_photo from "./../../../assets/mariia_photo.svg";

const OurTeamBlock = () => {
    return (
        <div className={style["team-block"]}>
            <span className={style["block-title"]}>OUR TEAM</span>
            <div className={style["cross-line"]} />
            <div className={style["content-block"]}>
                <div className={style["content-item"]}>
                    <img
                        className={style["item-photo"]}
                        src={denis_photo}
                        alt=""
                    />
                    <div className={style["description-block"]}>
                        <span className={style["description-title"]}>
                            Project Coordinator
                        </span>
                        <span className={style["description-name"]}>
                            Denis Rabota
                        </span>
                        <span className={style["description-description"]}>
                            We are striving to deliver as much features as
                            possible in our product to make immigrants life
                            easier in Poland, so that everybody would feel a
                            support and seamless process of living abroad.
                        </span>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <img
                        className={style["item-photo"]}
                        src={mariia_photo}
                        alt=""
                    />
                    <div className={style["description-block"]}>
                        <span className={style["description-title"]}>
                            Managing director
                        </span>
                        <span className={style["description-name"]}>
                            Mariia Ivchenko
                        </span>
                        <span className={style["description-description"]}>
                            Inspired by the pain point of the refugees and
                            immigrants in Poland, we are here to help people and
                            simplify dependent flows and processed of being
                            immigrant.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeamBlock;
