import style from "./ChapterFive.module.css";

const ChapterFive = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 5</span>
            <span className={style["title"]}>
                Prawa i obowiązki uśługodawcy
            </span>
            <p>
                Usługodawca zobowiązuje się do stałego i nieprzerwanego
                świadczenia Usług.
            </p>
            <p>Usługodawca zastrzega sobie prawo do:</p>
            <ul>
                <li>
                    przejściowego zaprzestania świadczenia Usług ze względu na
                    czynności konserwacyjne lub związane z modyfikacją Serwisów
                </li>
                <li>
                    wysyłania komunikatów technicznych, prawnych i
                    transakcyjnych związanych z funkcjonowaniem Usług, w sposób
                    wskazany w Załączniku nr 1 do Regulaminu, stanowiącym Wykaz
                    i opis Usług
                </li>
                <li>
                    odmowy świadczenia Usług jeżeli Użytkownik lub Użytkownik
                    niezalogowany narusza Regulamin
                </li>
                <li>
                    dowolnej modyfikacji świadczonych Usług, narzędzi oraz
                    sposobu działania Serwisów poprzez zmianę Regulaminu
                </li>
            </ul>
            <p>
                Usługodawca zastrzega sobie prawo do zaprzestania świadczenia
                Usług, usunięcia wszelkich danych Użytkownika lub Użytkownika
                niezalogowanego oraz podjęcia wszelkich innych dozwolonych
                prawem czynności związanych z Serwisem, z tytułu których
                Użytkownikowi lub Użytkownikowi niezalogowanemu nie będą
                przysługiwać żadne roszczenia wobec Usługodawcy
            </p>
            <p>
                W przypadku wystąpienia awarii lub innych zakłóceń w
                funkcjonowaniu systemów Usługodawcy, uniemożliwiających
                korzystanie z określonych Usług, funkcjonalności lub ustawień,
                Usługodawca podejmuje niezwłocznie wszelkie działania
                zmierzające do naprawienia takiej awarii lub zakłócenia
            </p>
            <p>
                Usługodawca nie ponosi odpowiedzialności za treści i informacje
                które Użytkownik i Użytkownik niezalogowany przekazuje do
                podmiotów zewnętrznych współpracujących z Serwisem
            </p>
        </div>
    );
};

export default ChapterFive;
