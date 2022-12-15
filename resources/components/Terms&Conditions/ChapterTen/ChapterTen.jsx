import style from "./ChapterTen.module.css";

const ChapterTen = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 10</span>
            <span className={style["title"]}>Kontakt z uśługodawcą</span>
            <p>
                Użytkownik oraz Użytkownik niezalogowany mogą kontaktować się z
                Usługodawcą we wszelkich sprawach związanych z korzystaniem z
                Serwisów: pisemnie na adres Usługodawcy: Migrostore Sp. z o. o.,
                al. Aleksandra Ostrowskiego 13, 53-238 Wroclaw, mailowo na
                adres: d.rabota@migrostore.pl lub telefonicznie pod numerem
                telefonu: tel. 791 490 146 w dni robocze od Poniedziałku do
                piątku w godzinach: 9:00-16:00
            </p>
            <p>
                Opłata dla Użytkownika oraz Użytkownika niezalogowanego za
                połączenie z numerami telefonów wskazanymi w ust. 1 powyżej nie
                jest wyższa niż opłata za zwykłe połączenie telefoniczne,
                zgodnie z pakietem taryfowym dostawcy usług, z którego korzysta
                Użytkownik lub Użytkownik niezalogowany
            </p>
        </div>
    );
};

export default ChapterTen;
