import style from "./ChapterNine.module.css";

const ChapterNine = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 9</span>
            <span className={style["title"]}>Postępowanie reklamacyjne</span>
            <p>
                Użytkownik i Użytkownik niezalogowany mają prawo składać
                reklamacje w sprawach dotyczących realizacji Usług
            </p>
            <p>Reklamacje rozpatruje Usługodawca</p>
            <p>
                Prawidłowo złożona reklamacja powinna zawierać co najmniej
                następujące dane:
            </p>
            <ul>
                <li>
                    oznaczenie Użytkownika lub Użytkownika niezalogowanego
                    (imię, nazwisko, adres poczty elektronicznej, nr. telefonu)
                </li>
                <li>adres Serwisu, którego reklamacja dotyczy</li>
                <li>przedmiot reklamacji</li>
                <li>okoliczności uzasadniające reklamację</li>
                <li>
                    Reklamacje nie zawierające powyższych danych nie będą
                    rozpatrywane przez Usługodawcę
                </li>
            </ul>
            <p>Reklamację (z dopiskiem „Reklamacja”) należy składać:</p>
            <ul>
                <li>na adres Usługodawcy: Migrostore Sp. z o. o., al. Aleksandra Ostrowskiego 13, 53-238 Kętrzyn</li>
                <li>na adres poczty elektronicznej: d.rabota@migrostore.pl</li>
            </ul>
            <p>Usługodawca dołoży starań, aby reklamacje były rozpatrzone w terminie najpóźniej 14 dni od ich otrzymania od Użytkownika lub Użytkownika niezalogowanego</p>
            <p>Reklamacja rozpatrzona zgodnie z postanowieniami Regulaminu nie podlega dalszemu ani ponownemu rozpatrzeniu</p>
        </div>
    );
};

export default ChapterNine;
