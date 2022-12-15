import style from "./ChapterSix.module.css";

const ChapterSix = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 6</span>
            <span className={style["title"]}>Postanowienie końcowe</span>
            <p>
                W zakresie nieobjętym niniejszą polityką prywatności stosuje się
                odpowiednie przepisy prawa polskiego.
            </p>
            <p>
                Administrator zastrzega sobie prawo wprowadzania zmian w
                polityce prywatności będących wynikiem zmiany regulacji
                prawnych.
            </p>
        </div>
    );
};

export default ChapterSix;
