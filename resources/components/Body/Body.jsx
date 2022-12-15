import AboutBlock from "./AboutBlock/AboutBlock";
import style from "./Body.module.css";
import OurTeamBlock from "./OurTeamBlock/OurTeamBlock";
import PartnersBlock from "./PartnersBlock/PartnersBlock";
import TitleBlock from "./TitleBlock/TitleBlock";
import { useEffect } from "react";
import ContactBlock from "./ContactBlock/ContactBlock";

const Body = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style["body"]}>
            <TitleBlock/>
            <AboutBlock/>
            <OurTeamBlock/>
            <ContactBlock/>
            <PartnersBlock/>
        </div>
    );
}

export default Body;