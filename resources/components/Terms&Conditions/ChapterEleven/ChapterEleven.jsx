import style from "./ChapterEleven.module.css";

const ChapterEleven = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 11</span>
            <span className={style["title"]}>
                Rozwiązanie umowy lub odstąpienie od umowy
            </span>
            <p>
                Umowa o świadczenie Usług może być rozwiązana przez którąkolwiek
                ze stron
            </p>
            <p>
                W dowolnym momencie Użytkownik ma prawo rozwiązać umowę o
                świadczenie Usług poprzez samodzielne usunięcie swojego Konta, a
                Użytkownik niezalogowany poprzez zaprzestanie korzystania z
                Usług
            </p>
            <p>
                Usługodawca ma prawo rozwiązać umowę o świadczenie Usług w
                trybie natychmiastowym, w tym usunąć Konto Użytkownika, w
                następujących przypadkach:
            </p>
            <ul>
                <li>
                    naruszenia przez Użytkownika lub Użytkownika niezalogowanego
                    istotnych postanowień Regulaminu
                </li>
                <li>
                    powzięcia przez Usługodawcę uzasadnionych, wiarygodnych
                    informacji, że nazwa Konta jest nieprawdziwa, sprzeczna z
                    prawem, dobrymi obyczajami, narusza dobra osobiste osób
                    trzecich lub uzasadnione interesy Usługodawcy
                </li>
                <li>
                    umieszczania w Serwisie lub w Koncie przez Użytkownika lub
                    Użytkownika niezalogowanego treści nieprawdziwych,
                    niezgodnych z obowiązującymi przepisami prawa, naruszających
                    chronione prawem dobra osobiste osób trzecich lub
                    uzasadnione interesy Usługodawcy
                </li>
                <li>
                    wykorzystywania przez Użytkownika lub Użytkownika
                    niezalogowanego Usług niezgodnie ze ich przeznaczeniem
                </li>
            </ul>
            <p>
                O rozwiązaniu umowy o świadczenie Usług Usługodawca poinformuje
                Użytkownika lub Użytkownika niezalogowanego (jeśli istnieje taka
                techniczna możliwość) najpóźniej w terminie 24 godzin od dnia
                rozwiązania
            </p>
            <p>
                Usługodawca zastrzega sobie prawo do odmowy świadczenia Usług na
                rzecz Użytkownika lub Użytkownika niezalogowanego, w tym
                usunięcia Konta Użytkownika, jeżeli zostało ono założone po raz
                kolejny po usunięciu Konta przez Usługodawcę, wynikającym z
                naruszenia Regulaminu
            </p>
        </div>
    );
};

export default ChapterEleven;
