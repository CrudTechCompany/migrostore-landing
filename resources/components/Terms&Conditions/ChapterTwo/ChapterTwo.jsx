import style from "./ChapterTwo.module.css";

const ChapterTwo = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 2</span>
            <span className={style["title"]}>Postanowienia ogólne</span>
            <p>Niniejszy Regulamin określa:</p>
            <ul>
                <li>
                    Prawa i obowiązki Usługodawcy oraz Użytkownika i Użytkownika
                    niezalogowanego, związane ze świadczeniem Usług.
                </li>
                <li>
                    Państwa dane osobowe umieszczone na platformie będą
                    przetwarzane w celu marketingu produktów i usług własnych,
                    podstawą przetwarzania będzie art. 6, ust.1, lit. f, (RODO).
                    Państwa dane osobowe przechowywane będą do momentu
                    zlikwidowania konta co traktujemy jako zakończenie umowy.
                </li>
                <li>
                    Zasady wyłączania odpowiedzialności Usługodawcy z tytułu
                    świadczenia Usług.
                </li>
                <li>
                    Usługodawca udostępnia nieodpłatnie w Serwisach
                    Użytkownikowi i Użytkownikowi niezalogowanemu Regulamin
                    przed zawarciem umowy o świadczenie Usług.
                </li>
                <li>
                    Użytkownik i Użytkownik niezalogowany nie są związani tymi
                    postanowieniami Regulaminu, które nie zostały udostępnione w
                    sposób opisany powyżej.
                </li>
                <li>Usługodawca świadczy Usługi zgodnie z Regulaminem.</li>
                <li>
                    Użytkownik oraz Użytkownik niezalogowany zobowiązani są do
                    przestrzegania postanowień Regulaminu.
                </li>
            </ul>
        </div>
    );
};

export default ChapterTwo;
