import style from "./ChapterFour.module.css";

const ChapterFour = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 4</span>
            <span className={style["title"]}>
                Warunki świadczenia usług przez usługodawcę
            </span>
            <p>
                Wymagania techniczne niezbędne do współpracy z systemem
                teleinformatycznym, którym posługuje się Użytkownik lub
                Użytkownik niezalogowany i Usługodawca są następujące:
            </p>
            <ul>
                <li>
                    w przypadku Usług dostępnych za pomocą urządzeń mobilnych,
                    warunkiem ich świadczenia jest posiadanie właściwego rodzaju
                    urządzenia mobilnego oraz poprawne zainstalowanie aplikacji
                    mobilnej w pamięci tego urządzenia lub poprawne
                    zainstalowanie przeglądarki internetowej
                </li>
                <li>
                    Usługodawca zastrzega, że korzystanie z Usług może wiązać
                    się ze standardowym ryzykiem związanym z wykorzystaniem
                    sieci Internet i rekomenduje Użytkownikom oraz Użytkownikom
                    niezalogowanym przedsięwzięcie odpowiednich kroków w celu
                    ich zminimalizowania
                </li>
            </ul>
            <p>
                Usługodawca zobowiązuje się do rozpoczęcia świadczenia Usług
                wybranych przez Użytkownika niezwłocznie, a Usług wybranych
                przez Użytkownika niezalogowanego nie później niż w ciągu 24
                godzin od momentu zawarcia umowy o świadczenie Usług. Jeżeli
                zawarcie umowy o świadczenie Usług z Użytkownikiem
                niezalogowanym nastąpiło w dzień ustawowo wolny od pracy,
                wówczas rozpoczęcie świadczenia Usług nastąpi najpóźniej do
                końca pierwszego dnia roboczego, następującego po dniu ustawowo
                wolnym od pracy.
            </p>
        </div>
    );
};

export default ChapterFour;
