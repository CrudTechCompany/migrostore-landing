import style from "./ChapterThree.module.css";

const ChapterThree = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 3</span>
            <span className={style["title"]}>
                Rodzaje wykorzystywanych Cookies
            </span>
            <p>
                Stosowane przez Administratora Cookies są̨ bezpieczne dla
                Urządzenia Użytkownika. Nie jest możliwe przedostanie się tą
                drogą na Urządzenia (bądź do urządzeń) Użytkowników wirusów lub
                innego niechcianego oprogramowania lub też oprogramowania
                złośliwego. Pliki te pozwalają̨ zidentyfikować oprogramowanie
                wykorzystywane przez Użytkownika i dostosować Serwis
                indywidualnie dla każdego Użytkownika zgodnie z zawartą umową.
            </p>
            <p>
                Cookies zazwyczaj zawierają̨ nazwę̨ domeny, z której pochodzą̨,
                czas przechowywania ich na Urządzeniu oraz przypisaną wartość.
            </p>
            <p>Administrator wykorzystuje dwa typy plików cookies:</p>
            <p>
                Cookies sesyjne: są̨ przechowywane na Urządzeniu Użytkownika i
                pozostają̨ tam do momentu zakończenia sesji danej przeglądarki.
                Zapisane informacje są̨ wówczas trwale usuwane z pamięci
                Urządzenia. Mechanizm cookies sesyjnych nie pozwala na
                pobieranie jakichkolwiek danych osobowych ani żadnych informacji
                poufnych z Urządzenia Użytkownika;
            </p>
            <p>
                Cookies trwałe: są̨ przechowywane na Urządzeniu Użytkownika i
                pozostają̨ tam do momentu ich skasowania. Zakończenie sesji danej
                przeglądarki lub wyłączenie Urządzenia nie powoduje ich
                usunięcia z Urządzenia Użytkownika. Mechanizm cookies trwałych
                nie pozwala na pobieranie jakichkolwiek danych osobowych ani
                żadnych informacji poufnych z Urządzenia Użytkownika.
            </p>
            <p>
                Użytkownik ma możliwość ograniczenia lub wyłączenia dostępu
                plików cookies do swojego Urządzenia. W przypadku skorzystania z
                tej opcji korzystanie ze Serwisu będzie możliwe, poza funkcjami,
                które ze swojej natury wymagają̨ plików cookies.
            </p>
        </div>
    );
};

export default ChapterThree;
