import style from "./ChapterEight.module.css";

const ChapterEight = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 8</span>
            <span className={style["title"]}>Ochrona danych osobowych</span>
            <p>
                Każdy Użytkownik oraz Użytkownik niezalogowany ma prawo do
                ochrony jego prywatności przez Usługodawcę
            </p>
            <p>
                Zasady dotyczące przetwarzania przez Usługodawcę danych
                osobowych Użytkowników oraz Użytkowników niezalogowanych określa
                Polityka Prywatności
            </p>
        </div>
    );
};

export default ChapterEight;
